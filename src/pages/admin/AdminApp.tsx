import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import type { Session } from '@supabase/supabase-js';
import { supabase } from '../../lib/supabase';
import AdminLogin from './AdminLogin';
import TextEditor from './TextEditor';

const Centered: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen flex items-center justify-center px-6 bg-background-light dark:bg-background-dark dark:text-white">
    <div className="max-w-md w-full bg-white dark:bg-[#1a2133] p-8 rounded-2xl shadow-xl border border-[#f0f2f4] dark:border-[#2a303c] flex flex-col gap-4 text-center">
      {children}
    </div>
  </div>
);

const Spinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark">
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
  </div>
);

const AdminGate: React.FC = () => {
  const [session, setSession] = useState<Session | null | undefined>(undefined);
  const [isAdmin, setIsAdmin] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data } = supabase.auth.onAuthStateChange((_event, s) => setSession(s));
    return () => data.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!supabase || !session) {
      setIsAdmin(undefined);
      return;
    }
    supabase
      .from('admins')
      .select('user_id')
      .eq('user_id', session.user.id)
      .maybeSingle()
      .then(({ data, error }) => setIsAdmin(!error && !!data));
  }, [session]);

  if (!supabase) {
    return (
      <Centered>
        <span className="material-symbols-outlined text-5xl text-primary mx-auto">settings</span>
        <h1 className="text-xl font-bold">Admin panel is not set up</h1>
        <p className="text-sm text-[#616f89] dark:text-[#9ea7b8]">
          Add <code>VITE_SUPABASE_URL</code> and <code>VITE_SUPABASE_ANON_KEY</code> to <code>.env.local</code> (and to the Vercel
          project settings), then restart the site.
        </p>
      </Centered>
    );
  }

  if (session === undefined || (session && isAdmin === undefined)) return <Spinner />;
  if (!session) return <AdminLogin />;

  if (!isAdmin) {
    return (
      <Centered>
        <span className="material-symbols-outlined text-5xl text-red-500 mx-auto">block</span>
        <h1 className="text-xl font-bold">No editing access</h1>
        <p className="text-sm text-[#616f89] dark:text-[#9ea7b8]">
          {session.user.email} is signed in but is not an admin. Ask the site owner to add this account to the admins list.
        </p>
        <button onClick={() => supabase!.auth.signOut()} className="mt-2 bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary/90">
          Sign out
        </button>
      </Centered>
    );
  }

  return <TextEditor session={session} />;
};

const AdminApp: React.FC = () => (
  <>
    <Helmet>
      <title>Content Manager | College Ilia</title>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
    <AdminGate />
  </>
);

export default AdminApp;
