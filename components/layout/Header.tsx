'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { navItems } from './navData';

const Header = ({ onMenuTrigger }: { onMenuTrigger: () => void }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isItemActive = (item: (typeof navItems)[number]) =>
    item.href === pathname ||
    (item.href !== '/' && item.href !== '#' && pathname.startsWith(item.href)) ||
    item.children?.some((child) => child.href === pathname);

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-black/90 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 md:px-10 h-20">
        <a href="/portfolio" className="text-lg tracking-wide2 font-light">
          Agatha
        </a>

        <div className="flex items-center gap-6">
          <button
            onClick={onMenuTrigger}
            className="hidden md:flex items-center gap-2 text-xs uppercase tracking-wide2 text-gray-300 hover:text-white transition-colors"
          >
            <span className="block w-5 h-px bg-current relative before:content-[''] before:absolute before:w-5 before:h-px before:bg-current before:-translate-y-1.5 after:content-[''] after:absolute after:w-5 after:h-px after:bg-current after:translate-y-1.5" />
            Menu
          </button>

          <button
            className="md:hidden flex flex-col gap-1.5 w-7"
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span
              className={`h-px bg-white transition-transform ${
                mobileOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span className={`h-px bg-white transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
            <span
              className={`h-px bg-white transition-transform ${
                mobileOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </button>
        </div>

        <nav className="hidden md:flex items-center gap-8 absolute right-24 xl:right-32">
          <ul className="flex items-center gap-8 text-sm">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={item.href}
                  className={`flex items-center gap-1 py-8 uppercase tracking-wide2 text-xs transition-colors ${
                    isItemActive(item) ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.label}

                  {item.children && (
                    <svg className="w-2.5 h-2.5" viewBox="0 0 10 6" fill="none">
                      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  )}
                </a>

                {item.children && (
                  <ul
                    className={`absolute left-0 top-full min-w-[240px] bg-black border border-white/10 py-2 transition-all duration-150 ${
                      openDropdown === item.label
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2'
                    }`}
                  >
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className={`block px-5 py-2.5 text-xs transition-colors ${
                            child.href === pathname
                              ? 'text-white bg-white/5'
                              : 'text-gray-300 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 bg-black border-t border-white/10 ${
          mobileOpen ? 'max-h-[70vh] overflow-y-auto' : 'max-h-0'
        }`}
      >
        <ul className="px-6 py-4 space-y-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`block py-2 text-sm uppercase tracking-wide2 ${
                  isItemActive(item) ? 'text-white' : 'text-gray-400'
                }`}
              >
                {item.label}
              </a>

              {item.children && (
                <ul className="pl-4 border-l border-white/10 mb-2 space-y-1">
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <a
                        href={child.href}
                        className={`block py-1.5 text-xs ${
                          child.href === pathname
                            ? 'text-gray-200'
                            : 'text-gray-500 hover:text-gray-300'
                        }`}
                      >
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          <li>
            <button
              onClick={() => {
                setMobileOpen(false);
                onMenuTrigger();
              }}
              className="block py-2 text-xs uppercase tracking-wide2 text-gray-400"
            >
              More — Menu
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
