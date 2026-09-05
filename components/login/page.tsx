'use client';

import { useState } from 'react';

const LoginRegisterTabs = () => {
  const [tab, setTab] = useState<'login' | 'register'>('login');

  return (
    <>
      (
      <div>
        <div className="flex border border-white/15 mb-8">
          {(['login', 'register'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 py-3 text-xs uppercase tracking-wide2 transition-colors ${
                tab === t ? 'bg-white text-black' : 'text-gray-400 hover:text-white'
              }`}
            >
              {t === 'login' ? 'Login' : 'Register'}
            </button>
          ))}
        </div>

        {tab === 'login' ? (
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4 max-w-sm">
            <input
              placeholder="Username"
              required
              className="w-full bg-transparent border border-white/20 px-3 py-2 text-sm placeholder-gray-500 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full bg-transparent border border-white/20 px-3 py-2 text-sm placeholder-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full text-xs uppercase tracking-wide2 border border-white/30 px-5 py-3 hover:bg-white hover:text-black transition-colors"
            >
              Login
            </button>
            <div className="grid grid-cols-3 gap-3 pt-2">
              {['Facebook', 'Twitter', 'Google'].map((s) => (
                <button
                  key={s}
                  type="button"
                  className="text-xs uppercase tracking-wide2 border border-white/15 py-2 text-gray-400 hover:text-white hover:border-white/40 transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </form>
        ) : (
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4 max-w-sm">
            <p className="text-xs text-gray-500">All fields are required.</p>
            {['First name', 'Last name', 'Email address', 'Re-enter email'].map((ph) => (
              <input
                key={ph}
                placeholder={ph}
                required
                className="w-full bg-transparent border border-white/20 px-3 py-2 text-sm placeholder-gray-500 focus:outline-none"
              />
            ))}
            <input
              placeholder="Choose your username"
              required
              className="w-full bg-transparent border border-white/20 px-3 py-2 text-sm placeholder-gray-500 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Choose password"
              required
              className="w-full bg-transparent border border-white/20 px-3 py-2 text-sm placeholder-gray-500 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Re-enter password"
              required
              className="w-full bg-transparent border border-white/20 px-3 py-2 text-sm placeholder-gray-500 focus:outline-none"
            />
            <label className="flex items-start gap-2 text-xs text-gray-400">
              <input type="checkbox" required className="mt-0.5" />
              Accept our Privacy Policy and Customer Agreement
            </label>
            <button
              type="submit"
              className="w-full text-xs uppercase tracking-wide2 border border-white/30 px-5 py-3 hover:bg-white hover:text-black transition-colors"
            >
              Register Now
            </button>
          </form>
        )}
      </div>
      )
    </>
  );
};

export default LoginRegisterTabs;
