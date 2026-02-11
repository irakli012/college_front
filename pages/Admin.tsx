import React, { useState, useEffect } from 'react';

const Admin: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [lang, setLang] = useState<'ka' | 'en'>('ka');
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      fetchLocale();
    }
  }, [lang, isLoggedIn]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      const result = await res.json();
      if (res.ok) {
        localStorage.setItem('admin_token', result.token);
        setIsLoggedIn(true);
        setMessage('');
      } else {
        setMessage(result.error || 'Login failed');
      }
    } catch (err) {
      setMessage('Server connection failed');
    }
  };

  const fetchLocale = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('admin_token');
      const res = await fetch(`/api/locales/${lang}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.status === 401) {
        setIsLoggedIn(false);
        localStorage.removeItem('admin_token');
        return;
      }
      const json = await res.json();
      setData(json);
    } catch (err) {
      setMessage('Failed to load data');
    }
    setLoading(false);
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('admin_token');
      const res = await fetch(`/api/locales/${lang}`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setMessage('Changes saved successfully!');
        setTimeout(() => setMessage(''), 3000);
      } else if (res.status === 401) {
        setIsLoggedIn(false);
      }
    } catch (err) {
      setMessage('Failed to save changes');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    setIsLoggedIn(false);
    setData(null);
  };

  if (!isLoggedIn) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center px-6">
        <form onSubmit={handleLogin} className="w-full max-w-md bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800">
          <h2 className="text-2xl font-black mb-6 text-center dark:text-white uppercase tracking-tight">Admin Login</h2>
          {message && <div className="p-3 mb-4 bg-red-100 text-red-700 rounded-lg text-sm font-bold text-center">{message}</div>}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Username</label>
              <input 
                type="text" 
                required
                className="w-full p-3 bg-gray-50 dark:bg-gray-800 border-none rounded-xl focus:ring-2 focus:ring-primary dark:text-white"
                onChange={e => setCredentials({...credentials, username: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Password</label>
              <input 
                type="password" 
                required
                className="w-full p-3 bg-gray-50 dark:bg-gray-800 border-none rounded-xl focus:ring-2 focus:ring-primary dark:text-white"
                onChange={e => setCredentials({...credentials, password: e.target.value})}
              />
            </div>
            <button type="submit" className="w-full bg-primary text-white p-4 rounded-xl font-black uppercase tracking-widest hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all">
              Sign In
            </button>
          </div>
        </form>
      </div>
    );
  }

  const updateValue = (path: string[], value: string) => {
    const newData = { ...data };
    let current = newData;
    for (let i = 0; i < path.length - 1; i++) {
      current = current[path[i]];
    }
    current[path[path.length - 1]] = value;
    setData(newData);
  };

  const renderFields = (obj: any, path: string[] = []) => {
    return Object.entries(obj).map(([key, value]) => {
      const currentPath = [...path, key];
      if (typeof value === 'object' && value !== null) {
        return (
          <div key={currentPath.join('.')} className="ml-4 mb-6 border-l-2 border-gray-200 pl-4">
            <h3 className="text-lg font-bold text-primary mb-2 uppercase tracking-wider">{key}</h3>
            {renderFields(value, currentPath)}
          </div>
        );
      }
      return (
        <div key={currentPath.join('.')} className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {currentPath.join(' → ')}
          </label>
          {value.length > 100 ? (
            <textarea
              className="w-full p-2 border rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-700"
              rows={4}
              value={value as string}
              onChange={(e) => updateValue(currentPath, e.target.value)}
            />
          ) : (
            <input
              type="text"
              className="w-full p-2 border rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-700"
              value={value as string}
              onChange={(e) => updateValue(currentPath, e.target.value)}
            />
          )}
        </div>
      );
    });
  };

  if (loading) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 shadow-xl rounded-2xl my-10 border border-gray-100 dark:border-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-black text-gray-900 dark:text-white">Content Manager</h1>
          <button 
            onClick={handleLogout}
            className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-500 px-2 py-1 rounded hover:text-red-500 transition-colors"
          >
            Logout
          </button>
        </div>
        <div className="flex gap-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
          <button
            onClick={() => setLang('ka')}
            className={`px-4 py-2 rounded-md font-bold transition-all ${lang === 'ka' ? 'bg-primary text-white shadow-md' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
          >
            Georgian (KA)
          </button>
          <button
            onClick={() => setLang('en')}
            className={`px-4 py-2 rounded-md font-bold transition-all ${lang === 'en' ? 'bg-primary text-white shadow-md' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
          >
            English (EN)
          </button>
        </div>
      </div>

      {message && (
        <div className={`p-4 rounded-md mb-6 font-bold text-center ${message.includes('success') ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-red-100 text-red-700 border border-red-200'}`}>
          {message}
        </div>
      )}

      <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-primary">
        {data && renderFields(data)}
      </div>

      <div className="mt-10 pt-6 border-t border-gray-100 dark:border-gray-800 flex justify-end gap-4">
         <button 
           onClick={fetchLocale}
           className="px-6 py-2 rounded-lg font-bold border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
         >
           Discard Changes
         </button>
         <button
           onClick={handleSave}
           className="px-8 py-2 bg-primary text-white rounded-lg font-bold hover:shadow-lg hover:scale-105 active:scale-95 transition-all"
         >
           Save All Changes
         </button>
      </div>
    </div>
  );
};

export default Admin;
