'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems, NavItem } from './navData';

interface HeaderProps {
  isMenuOpen?: boolean;
  onMenuToggle?: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen = false, onMenuToggle }) => {
  const pathname = usePathname();

  const isItemActive = (item: NavItem) => {
    if (item.href === '/') return pathname === '/';
    if (item.href !== '#') return pathname.startsWith(item.href);
    return item.children?.some((child) => child.href === pathname);
  };

  return (
    <header
      id="header"
      className="fixed top-0 inset-x-0 z-40 bg-[#0b0b0b]/95 backdrop-blur-md border-b border-neutral-800/80 transition-all duration-300 font-mono"
    >
      <div className="header-inner w-full px-4 sm:px-8 md:px-[45px] flex items-center justify-between h-16">
        {/* Logo */}
        <div id="logo" className="flex items-center">
          <Link href="/" className="block py-2">
            <img
              src="logo-light.png"
              alt="Agatha Photography"
              className="max-h-[38px] w-auto block"
            />
          </Link>
        </div>

        {/* Right Section: Desktop Navigation & Agatha Menu Trigger Button */}
        <div className="flex items-center gap-6">
          {/* Desktop Navigation Links */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6 text-[13px] font-mono uppercase tracking-normal font-light">
              {navItems.map((item) => {
                const active = isItemActive(item);

                return (
                  <li key={item.label} className="py-5">
                    <Link
                      href={item.href}
                      className={`transition-colors duration-200 ${
                        active
                          ? 'text-white font-normal'
                          : 'text-[#a0a0a0] hover:text-white'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Agatha Header Tool: Off-Canvas Menu Trigger (#cd-menu-trigger) - Hidden on Desktop */}
          <div className="header-tools lg:hidden">
            <button
              id="cd-menu-trigger"
              type="button"
              onClick={onMenuToggle}
              className="group flex items-center gap-2 px-2.5 py-1.5 text-[#cccccc] hover:text-white transition-colors focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation drawer"
            >
              <span className="text-[12px] font-mono uppercase font-light tracking-normal select-none text-[#cccccc] group-hover:text-white">
                MENU
              </span>
              {isMenuOpen ? (
                <svg
                  className="w-4 h-4 text-current"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <div className="w-5 h-4 relative flex flex-col justify-between py-0.5">
                  <span className="w-5 h-[2px] bg-current rounded-sm transition-colors" />
                  <span className="w-5 h-[2px] bg-current rounded-sm transition-colors" />
                  <span className="w-5 h-[2px] bg-current rounded-sm transition-colors" />
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


