import React, { useState } from 'react';
import { supabase } from '../../lib/supabase';

const LOGO = 'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/CollegeNewWebsiteMandatory/collegeLogo_1_30.png';

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase) return;
    setLoading(true);
    setError('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message === 'Invalid login credentials' ? 'Wrong email or password.' : error.message);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-background-light dark:bg-background-dark">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white dark:bg-[#1a2133] p-8 rounded-2xl shadow-xl border border-[#f0f2f4] dark:border-[#2a303c] flex flex-col gap-5"
      >
        <div className="flex flex-col items-center gap-3 mb-2">
          <img src={LOGO} alt="" className="h-16 w-auto rounded-md" />
          <h1 className="text-xl font-bold dark:text-white">Content Manager</h1>
          <p className="text-sm text-[#616f89] dark:text-[#9ea7b8] text-center">Sign in to edit the website texts.</p>
        </div>

        {error && (
          <div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-lg text-sm font-medium">{error}</div>
        )}

        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-semibold dark:text-white">Email</span>
          <input
            type="email"
            required
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 rounded-xl bg-[#f6f6f8] dark:bg-[#2a303c] border-none focus:ring-2 focus:ring-primary dark:text-white"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-semibold dark:text-white">Password</span>
          <input
            type="password"
            required
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-3 rounded-xl bg-[#f6f6f8] dark:bg-[#2a303c] border-none focus:ring-2 focus:ring-primary dark:text-white"
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className="mt-2 bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors disabled:opacity-60 flex items-center justify-center"
        >
          {loading ? <span className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : 'Sign in'}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
