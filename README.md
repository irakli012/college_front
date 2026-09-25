# College Ilia — Academic Excellence

A modern, bilingual (Georgian 🇬🇪 / English 🇺🇸) college website built with **React**, **TypeScript**, and **Vite**. The UI is styled with **Tailwind CSS v4** and supports dark mode out of the box.

---

## ✨ Features

| Feature | Details |
|---|---|
| 🌐 Bilingual UI | Full Georgian & English localization via `i18next` |
| 🎓 Academic Programs | Dedicated pages for each study program with details |
| 📋 Strategic Documents | Embedded Google Docs/Sheets for Action Plans, Reports & Financial Indicators |
| 📰 News | Dynamic news feed with individual article pages |
| 📩 Registration | Student registration form powered by **EmailJS** |
| 🔐 Admin Panel | `/admin` — edit every website text in Georgian & English, stored in **Supabase** |
| 🖼️ Gallery & Library | Media gallery and document library pages |
| 📱 Responsive Design | Mobile-first layout across all screen sizes |
| ⚡ Code Splitting | All pages are lazy-loaded for fast initial loads |

---

## 🗂️ Project Structure

```
src/
├── components/       # Navbar, Footer, ScrollToTop
├── lib/              # Supabase client, loading of edited texts
├── pages/
│   ├── admin/        # Admin panel (login + text editor)
│   ├── programs/     # Individual program pages (IT, Pharmacy, etc.)
│   └── strategic/    # Strategic development sub-pages
├── locales/          # ka.json & en.json translation files
├── App.tsx           # Router & lazy-loaded page imports
├── constants.ts      # Shared data (programs, news, etc.)
├── i18n.ts           # i18next configuration
└── types.ts          # Shared TypeScript types
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+
- An [EmailJS](https://www.emailjs.com/) account (for the registration form)

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env.local` file in the project root (or edit the existing one):

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Admin panel (Supabase -> Project Settings -> API)
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_public_key
```

Without the Supabase variables the site still works with its built-in texts; only `/admin` is disabled.

### 3. Run the development server

```bash
npm run dev
```

---

## 📜 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |

---

## 🌍 Internationalization

Translations live in `src/locales/`:
- `ka.json` — Georgian
- `en.json` — English

Language is auto-detected from the browser and can be toggled from the **Navbar**. To add a new key, add it to **both** files.

---

## 🔐 Admin Panel

Texts edited at `/admin` are saved in the Supabase table `translation_overrides` and override the built-in texts from `src/locales/` when the site loads. Only edited texts are stored; "Restore original" removes the override. Every change is logged by a database trigger in `translation_history` (who, when, before and after) and shown under **History** in the admin panel.

One-time setup:

1. Create a project at [supabase.com](https://supabase.com).
2. In **SQL Editor**, run [`supabase/schema.sql`](supabase/schema.sql).
3. In **Authentication → Sign In / Providers**, turn off **Allow new users to sign up**.
4. In **Authentication → Users**, add an admin user (email + password), then make them an admin in the SQL Editor:
   ```sql
   insert into public.admins (user_id) select id from auth.users where email = 'admin@example.com';
   ```
5. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` to `.env.local` and to Vercel.

---

## 🚢 Deployment (Vercel)

1. Push to your GitHub repository.
2. Import the project in [Vercel](https://vercel.com).
3. Add the `VITE_EMAILJS_*` and `VITE_SUPABASE_*` environment variables in **Project Settings → Environment Variables**.
4. Deploy — Vercel will run `npm run build` automatically.

> The `vercel.json` includes a rewrite rule to support client-side routing.

---

## 🛠️ Tech Stack

- **React 19** + **TypeScript**
- **Vite 6**
- **Tailwind CSS v4**
- **React Router v7**
- **i18next** / **react-i18next**
- **EmailJS** (`@emailjs/browser`)
- **Supabase** (admin login + edited texts)
