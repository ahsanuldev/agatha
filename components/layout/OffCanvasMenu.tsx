'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from './navData';

interface OffCanvasMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const instagramThumbs = [
  'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=300&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=300&auto=format&fit=crop',
];

export default function OffCanvasMenu({ isOpen, onClose }: OffCanvasMenuProps) {
  const pathname = usePathname();

  return (
    <aside
      id="cd-lateral-nav"
      className={`fixed top-0 right-0 z-20 h-full w-[280px] sm:w-[320px] bg-[#0b0b0b] border-l border-neutral-800/80 shadow-2xl overflow-y-auto font-mono transition-all duration-700 [transition-timing-function:cubic-bezier(0.25,1,0.5,1)] ${
        isOpen
          ? 'translate-x-0 opacity-100 pointer-events-auto'
          : 'translate-x-[60px] opacity-0 pointer-events-none'
      }`}
    >
      <div className="p-6 sm:p-8 flex flex-col justify-between min-h-full">
        <div>
          {/* Menu Header */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-neutral-800/80">
            <span className="text-[12px] font-mono uppercase tracking-normal text-[#a0a0a0] font-light">
              NAVIGATION & EXTRA
            </span>
          </div>



          {/* Navigation Links matching exact Agatha theme styling */}
          <ul className="-mx-6 sm:-mx-8 space-y-0 mb-8 font-mono">
            {navItems.map((item) => {
              const active =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href);

              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`block w-full px-6 sm:px-8 py-3 text-[13px] font-mono uppercase font-normal tracking-normal transition-colors duration-150 ${
                      active
                        ? 'text-white font-normal bg-[#181818]'
                        : 'text-[#b0b0b0] hover:text-white hover:bg-[#141414]'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <hr className="border-neutral-800/80 mb-6" />

          {/* Instagram Section */}
          <div className="mb-6">
            <h3 className="text-[11px] font-mono uppercase tracking-normal text-[#a0a0a0] font-light mb-3">
              INSTAGRAM:
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {instagramThumbs.map((imgUrl, i) => (
                <a
                  key={i}
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="aspect-square rounded overflow-hidden bg-neutral-900 hover:opacity-80 transition-opacity"
                >
                  <img
                    src={imgUrl}
                    alt={`Instagram thumbnail ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="pt-4 border-t border-neutral-800/80">
          <Link
            href="/contact"
            onClick={onClose}
            className="block w-full text-center bg-[#d4af37] text-black font-mono text-[12px] uppercase tracking-normal font-medium py-2.5 px-4 rounded-full hover:bg-white transition-colors duration-200"
          >
            GET IN TOUCH
          </Link>
        </div>
      </div>
    </aside>
  );
}
