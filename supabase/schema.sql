-- Run in the Supabase dashboard: SQL Editor -> New query -> paste -> Run.
-- Safe to run again after changes: it only creates what is missing.
--
-- The website ships with its texts in src/locales/{ka,en}.json. This table only
-- stores texts edited in the admin panel; they override the built-in ones.

-- Who may edit texts. Add people with:
--   insert into public.admins (user_id)
--   select id from auth.users where email = 'someone@example.com';
create table if not exists public.admins (
  user_id uuid primary key references auth.users (id) on delete cascade,
  created_at timestamptz not null default now()
);

create table if not exists public.translation_overrides (
  key text primary key,            -- i18n key, e.g. 'home.heroTitle'
  ka text,                         -- null = use the built-in Georgian text
  en text,                         -- null = use the built-in English text
  updated_at timestamptz not null default now(),
  updated_by uuid default auth.uid() references auth.users (id) on delete set null
);

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (select 1 from public.admins where user_id = auth.uid());
$$;

create or replace function public.touch_translation_override()
returns trigger
language plpgsql
as $$
begin
  new.updated_at := now();
  new.updated_by := auth.uid();
  return new;
end;
$$;

drop trigger if exists translation_overrides_touch on public.translation_overrides;
create trigger translation_overrides_touch
  before insert or update on public.translation_overrides
  for each row execute function public.touch_translation_override();

-- Row level security: everyone can read texts, only admins can change them.
alter table public.admins enable row level security;
alter table public.translation_overrides enable row level security;

drop policy if exists "Admins can see their own row" on public.admins;
create policy "Admins can see their own row" on public.admins
  for select to authenticated using (user_id = auth.uid());

drop policy if exists "Anyone can read texts" on public.translation_overrides;
create policy "Anyone can read texts" on public.translation_overrides
  for select to anon, authenticated using (true);

drop policy if exists "Admins can add texts" on public.translation_overrides;
create policy "Admins can add texts" on public.translation_overrides
  for insert to authenticated with check (public.is_admin());

drop policy if exists "Admins can edit texts" on public.translation_overrides;
create policy "Admins can edit texts" on public.translation_overrides
  for update to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "Admins can remove texts" on public.translation_overrides;
create policy "Admins can remove texts" on public.translation_overrides
  for delete to authenticated using (public.is_admin());

-- Change log: every edit is recorded by a trigger, so it can't be skipped.
-- null in old_*/new_* means "the built-in text". Nobody can edit or delete the log.
create table if not exists public.translation_history (
  id bigint generated always as identity primary key,
  key text not null,
  old_ka text,
  new_ka text,
  old_en text,
  new_en text,
  changed_by uuid references auth.users (id) on delete set null,
  changed_by_email text,           -- kept even if the user is deleted later
  changed_at timestamptz not null default now()
);

create index if not exists translation_history_changed_at_idx on public.translation_history (changed_at desc);
create index if not exists translation_history_key_idx on public.translation_history (key);

create or replace function public.log_translation_change()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  old_row public.translation_overrides := case when tg_op in ('UPDATE', 'DELETE') then old end;
  new_row public.translation_overrides := case when tg_op in ('INSERT', 'UPDATE') then new end;
begin
  -- Skip updates that didn't change any text
  if tg_op = 'UPDATE' and old.ka is not distinct from new.ka and old.en is not distinct from new.en then
    return null;
  end if;

  insert into public.translation_history (key, old_ka, new_ka, old_en, new_en, changed_by, changed_by_email)
  values (
    coalesce(new_row.key, old_row.key),
    old_row.ka, new_row.ka,
    old_row.en, new_row.en,
    auth.uid(),
    (select email from auth.users where id = auth.uid())
  );
  return null;
end;
$$;

drop trigger if exists translation_overrides_log on public.translation_overrides;
create trigger translation_overrides_log
  after insert or update or delete on public.translation_overrides
  for each row execute function public.log_translation_change();

alter table public.translation_history enable row level security;

drop policy if exists "Admins can read the change log" on public.translation_history;
create policy "Admins can read the change log" on public.translation_history
  for select to authenticated using (public.is_admin());
