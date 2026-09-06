'use client';

import { useState } from 'react';

const LoginRegisterTabs = () => {
  const [tab, setTab] = useState<'login' | 'register'>('login');

  return (
    <div className="w-full font-mono">
      {/* Tabs Header Switcher matching user cropped screenshot */}
      <div className="flex w-full mb-8 font-mono">
        <button
          type="button"
          onClick={() => setTab('login')}
          className={`flex-1 py-3.5 text-xs uppercase font-mono tracking-[2px] cursor-pointer text-center transition-colors ${
            tab === 'login'
              ? 'bg-[#0b0b0b] text-white border border-[#333333] border-b-[#0b0b0b] relative z-10 font-medium'
              : 'bg-[#181818] text-[#a0a0a0] hover:text-white border border-[#262626] border-b-[#333333]'
          }`}
        >
          LOGIN
        </button>
        <button
          type="button"
          onClick={() => setTab('register')}
          className={`flex-1 py-3.5 text-xs uppercase font-mono tracking-[2px] cursor-pointer text-center -ml-[1px] transition-colors ${
            tab === 'register'
              ? 'bg-[#0b0b0b] text-white border border-[#333333] border-b-[#0b0b0b] relative z-10 font-medium'
              : 'bg-[#181818] text-[#a0a0a0] hover:text-white border border-[#262626] border-b-[#333333]'
          }`}
        >
          REGISTER
        </button>
      </div>

      {/* Tab Form Content - Instant switch with Smooth Fade-In */}
      <div key={tab} className="animate-fade-in">
        {/* Login Tab Form */}
        {tab === 'login' ? (
          <div className="space-y-6">
            {/* Form Header with Users Icon */}
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-[#cccccc] fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
              <h4 className="text-lg md:text-xl font-mono text-[#e0e0e0] uppercase tracking-normal font-light m-0">
                LOGIN
              </h4>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              {/* Pill Rounded Username Input */}
              <div>
                <input
                  type="text"
                  placeholder="Enter Your Username"
                  required
                  className="w-full bg-[#1c1c1c] border border-[#333333] focus:border-[#987f28] px-6 py-3.5 text-sm text-white placeholder-[#888888] font-mono tracking-normal font-normal rounded-full focus:outline-none transition-colors duration-200"
                />
              </div>

              {/* Pill Rounded Password Input */}
              <div>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  required
                  className="w-full bg-[#1c1c1c] border border-[#333333] focus:border-[#987f28] px-6 py-3.5 text-sm text-white placeholder-[#888888] font-mono tracking-normal font-normal rounded-full focus:outline-none transition-colors duration-200"
                />
              </div>

              {/* Gold Pill Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#987f28] hover:bg-[#7f6a1e] text-white py-3.5 rounded-full font-mono text-sm uppercase tracking-normal font-normal transition-colors cursor-pointer shadow-md"
                >
                  LOGIN
                </button>
              </div>

              {/* Social Login Pill Buttons matching user screenshot */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                {/* Facebook Button */}
                <button
                  type="button"
                  className="rounded-full overflow-hidden flex items-center bg-[#4c66a4] hover:bg-[#3b5998] text-white transition-colors duration-200 cursor-pointer w-full text-left"
                >
                  <div className="bg-[#3b5998] px-3.5 py-3 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.6 13.73 5.6c1.07 0 2.19.19 2.19.19v2.41h-1.24c-1.23 0-1.61.77-1.61 1.56V12h2.72l-.43 3H13v6.8c4.56-.93 8-4.96 8-9.8z" />
                    </svg>
                  </div>
                  <span className="px-3 py-3 text-sm font-mono uppercase tracking-normal font-normal truncate">
                    FACEBOOK LOGIN
                  </span>
                </button>

                {/* Twitter Button */}
                <button
                  type="button"
                  className="rounded-full overflow-hidden flex items-center bg-[#4db0f5] hover:bg-[#38A1F3] text-white transition-colors duration-200 cursor-pointer w-full text-left"
                >
                  <div className="bg-[#38A1F3] px-3.5 py-3 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </div>
                  <span className="px-3 py-3 text-sm font-mono uppercase tracking-normal font-normal truncate">
                    TWITTER LOGIN
                  </span>
                </button>

                {/* Google+ Button */}
                <button
                  type="button"
                  className="rounded-full overflow-hidden flex items-center bg-[#e25442] hover:bg-[#d34836] text-white transition-colors duration-200 cursor-pointer w-full text-left"
                >
                  <div className="bg-[#d34836] px-3.5 py-3 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 24C5.37 24 0 18.63 0 12S5.37 0 12 0c3.24 0 6.32 1.3 8.58 3.58l-3.39 3.39C15.7 5.48 13.91 4.7 12 4.7 7.97 4.7 4.7 7.97 4.7 12s3.27 7.3 7.3 7.3c4.2 0 6.55-2.6 6.84-5.3H12V9.5h11.7c.13.7.2 1.45.2 2.22 0 6.83-4.6 12.28-11.9 12.28z" />
                    </svg>
                  </div>
                  <span className="px-3 py-3 text-sm font-mono uppercase tracking-normal font-normal truncate">
                    GOOGLE+ LOGIN
                  </span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Register Tab Form */
          <div className="space-y-6">
            {/* Header with Plug Icon */}
            <div className="flex items-center gap-3 mb-3">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-[#cccccc] fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M16 9v4.66l-3.5 3.51V19h-1v-1.83L8 13.66V9h8m0-6h-2v4h2V3m-6 0H8v4h2V3m9 4H5v8l4 4v5h6v-5l4-4V7z" />
              </svg>
              <h4 className="text-lg md:text-xl font-mono text-[#e0e0e0] uppercase tracking-normal font-light m-0">
                REGISTER AN ACCOUNT
              </h4>
            </div>
            <p className="text-xs text-[#aaaaaa] font-mono mt-2.5 mb-6">All fields are required!</p>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-3.5">
              <input
                type="text"
                placeholder="Enter your first name"
                required
                className="w-full bg-[#1c1c1c] border border-[#333333] focus:border-[#987f28] px-6 py-3.5 text-sm text-white placeholder-[#888888] font-mono tracking-normal font-normal rounded-full focus:outline-none transition-colors duration-200"
              />

              <input
                type="text"
                placeholder="Enter your last name"
                required
                className="w-full bg-[#1c1c1c] border border-[#333333] focus:border-[#987f28] px-6 py-3.5 text-sm text-white placeholder-[#888888] font-mono tracking-normal font-normal rounded-full focus:outline-none transition-colors duration-200"
              />

              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="w-full bg-[#1c1c1c] border border-[#333333] focus:border-[#987f28] px-6 py-3.5 text-sm text-white placeholder-[#888888] font-mono tracking-normal font-normal rounded-full focus:outline-none transition-colors duration-200"
              />

              <input
                type="email"
                placeholder="Re-Enter your email address"
                required
                className="w-full bg-[#1c1c1c] border border-[#333333] focus:border-[#987f28] px-6 py-3.5 text-sm text-white placeholder-[#888888] font-mono tracking-normal font-normal rounded-full focus:outline-none transition-colors duration-200"
              />

              <input
                type="text"
                placeholder="Choose your username"
                required
                className="w-full bg-[#1c1c1c] border border-[#333333] focus:border-[#987f28] px-6 py-3.5 text-sm text-white placeholder-[#888888] font-mono tracking-normal font-normal rounded-full focus:outline-none transition-colors duration-200"
              />

              <input
                type="password"
                placeholder="Choose password"
                required
                className="w-full bg-[#1c1c1c] border border-[#333333] focus:border-[#987f28] px-6 py-3.5 text-sm text-white placeholder-[#888888] font-mono tracking-normal font-normal rounded-full focus:outline-none transition-colors duration-200"
              />

              <input
                type="password"
                placeholder="Re-enter your password"
                required
                className="w-full bg-[#1c1c1c] border border-[#333333] focus:border-[#987f28] px-6 py-3.5 text-sm text-white placeholder-[#888888] font-mono tracking-normal font-normal rounded-full focus:outline-none transition-colors duration-200"
              />

              <div className="pt-3 pb-1">
                <label className="flex items-center gap-2.5 text-xs text-[#dddddd] font-mono tracking-normal uppercase cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    className="w-4 h-4 rounded-[2px] border-[#444444] text-[#987f28] focus:ring-0 bg-[#1c1c1c] cursor-pointer"
                  />
                  <span>
                    ACCEPT OUR{' '}
                    <a href="#0" className="text-[#c8a446] hover:underline transition-colors font-medium">
                      PRIVACY POLICY
                    </a>{' '}
                    AND{' '}
                    <a href="#0" className="text-[#c8a446] hover:underline transition-colors font-medium">
                      CUSTOMER AGREEMENT
                    </a>
                  </span>
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#987f28] hover:bg-[#7f6a1e] text-white py-3.5 rounded-full font-mono text-sm uppercase tracking-normal font-normal transition-colors cursor-pointer shadow-md"
                >
                  REGISTER NOW
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginRegisterTabs;
