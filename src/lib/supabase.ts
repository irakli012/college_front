import { createClient, SupabaseClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Null when the env vars are missing: the site then runs on its built-in texts.
export const supabase: SupabaseClient | null = url && anonKey ? createClient(url, anonKey) : null;
