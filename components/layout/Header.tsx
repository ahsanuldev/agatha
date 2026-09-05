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

        {/* Right Section: Flat Navigation Links */}
        <div className="flex items-center gap-6">
          {/* Desktop Navigation Links */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6 text-[13px] font-medium uppercase">
              {navItems.map((item) => {
                const active = isItemActive(item);

                return (
                  <li key={item.label} className="py-5">
                    <Link
                      href={item.href}
                      className={`transition-colors duration-200 ${
                        active
                          ? 'text-white font-medium'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0c0c] border-t border-neutral-800 px-6 py-4 space-y-4">
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-[13px] font-medium uppercase tracking-[1px] text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
