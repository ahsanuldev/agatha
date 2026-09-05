'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems, NavItem } from './navData';

interface HeaderProps {
  onMenuTrigger?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuTrigger }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isItemActive = (item: NavItem) => {
    if (item.href === '/') return pathname === '/';
    if (item.href !== '#') return pathname.startsWith(item.href);
    return item.children?.some((child) => child.href === pathname);
  };

  return (
    <header
      id="header"
      className="fixed top-0 inset-x-0 z-50 bg-black/95 backdrop-blur-md border-b border-neutral-800/80 transition-all duration-300"
    >
      <div className="header-inner w-full px-[15px] md:px-[45px] flex items-center justify-between h-16">
        {/* Logo */}
        <div id="logo" className="flex items-center">
          <Link href="/" className="block py-2">
            <img
              src="/logo-light.png"
              alt="Agatha"
              className="max-h-[38px] w-auto block"
            />
          </Link>
        </div>

        {/* Right Section: Navigation Links & Mobile Trigger */}
        <div className="flex items-center gap-6">
          {/* Desktop Navigation Links */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 text-[13px] font-medium uppercase tracking-normal">
              {navItems.map((item) => {
                const active = isItemActive(item);
                const hasChildren = item.children && item.children.length > 0;

                return (
                  <li
                    key={item.label}
                    className="relative group py-5"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 transition-colors duration-200 ${
                        active
                          ? 'text-white font-medium'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <span>{item.label}</span>
                      {hasChildren && (
                        <svg
                          className={`w-2.5 h-2.5 transition-transform duration-200 ${
                            openDropdown === item.label
                              ? 'rotate-180 text-white'
                              : active
                              ? 'text-white'
                              : 'text-gray-400 group-hover:text-white'
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    {hasChildren && (
                      <ul
                        className={`absolute left-0 top-full min-w-[210px] bg-[#0c0c0c] border border-neutral-800 py-2 shadow-2xl transition-all duration-200 origin-top ${
                          openDropdown === item.label
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                        }`}
                      >
                        {item.children!.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              className={`flex items-center justify-between px-5 py-2.5 text-[12px] font-normal tracking-normal uppercase transition-colors text-gray-400 hover:text-white hover:bg-[#1c1c1c] ${
                                child.href === pathname && child.href !== '#' ? 'text-white' : ''
                              }`}
                            >
                              <span>{child.label}</span>
                              {child.children && (
                                <svg
                                  className="w-2.5 h-2.5 text-neutral-400"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2.5}
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>


        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0c0c] border-t border-neutral-800 px-6 py-4 space-y-4">
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-[13px] font-medium uppercase tracking-normal text-gray-400 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="pl-4 mt-2 space-y-2 border-l border-neutral-800">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-[12px] font-normal tracking-normal uppercase text-gray-400 hover:text-white transition-colors"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
