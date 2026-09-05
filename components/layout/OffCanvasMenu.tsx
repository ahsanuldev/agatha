'use client';

import React, { useState } from 'react';
import { offCanvasLinks, instagramThumbs } from './navData';

const OffCanvasMenu = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [query, setQuery] = useState('');

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/70 transition-opacity ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      />

      <aside
        className={`fixed top-0 right-0 z-50 h-full w-[300px] bg-neutral-950 border-l border-white/10 overflow-y-auto transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xs uppercase tracking-wide2 text-gray-400">Extra Stuff</h2>

            <button
              onClick={onClose}
              aria-label="Close menu"
              className="text-gray-400 hover:text-white text-xl leading-none"
            >
              &times;
            </button>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center border border-white/20 mb-8"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              className="w-full bg-transparent px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none"
            />

            <button
              type="submit"
              className="px-3 py-2 text-gray-400 hover:text-white"
              aria-label="Search"
            >
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none">
                <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.4" />
                <path
                  d="M14 14l4.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </form>

          <ul className="space-y-3 mb-8 text-sm">
            {offCanvasLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <hr className="border-white/10 mb-8" />

          <h2 className="text-xs uppercase tracking-wide2 text-gray-400 mb-4">Instagram</h2>

          <div className="grid grid-cols-3 gap-2 mb-8">
            {instagramThumbs.map((n) => (
              <a
                key={n}
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="aspect-square bg-neutral-800 hover:opacity-80 transition-opacity"
              />
            ))}
          </div>

          <a
            href="#"
            className="block text-center border border-white/30 py-3 text-xs uppercase tracking-wide2 hover:bg-white hover:text-black transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </aside>
    </>
  );
};

export default OffCanvasMenu;
