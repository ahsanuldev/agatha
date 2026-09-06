'use client';

import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import OffCanvasMenu from './OffCanvasMenu';
import { usePathname } from 'next/navigation';

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#070707]">
      {/* Main Body Layout Container - shifts to the left with drop shadow over revealing menu */}
      <div
        id="body-content"
        className={`min-h-screen w-full flex flex-col justify-between relative z-30 transition-all duration-700 [transition-timing-function:cubic-bezier(0.25,1,0.5,1)] ${
          isMenuOpen
            ? '-translate-x-[280px] sm:-translate-x-[320px] shadow-[-35px_0_60px_rgba(0,0,0,0.9)] cursor-pointer'
            : 'translate-x-0 shadow-none'
        }`}
        onClick={isMenuOpen ? closeMenu : undefined}
      >
        <Header isMenuOpen={isMenuOpen} onMenuToggle={toggleMenu} />

        <main className="flex-1 flex flex-col pt-16 relative">
          {children}
        </main>

        <Footer />

        {/* Overlay backdrop over shifted layout */}
        {isMenuOpen && (
          <div
            className="absolute inset-0 z-50 bg-black/40 backdrop-blur-[1px] transition-opacity duration-300"
            onClick={closeMenu}
          />
        )}
      </div>

      {/* Agatha Off-Canvas Lateral Side Drawer with Parallax Reveal */}
      <OffCanvasMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </div>
  );
}
