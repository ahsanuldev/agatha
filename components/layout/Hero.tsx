'use client';

import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="intro-section"
      className="relative w-full flex-1 flex items-center justify-center bg-neutral-900 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop")',
      }}
    >
      {/* Dark Cover Overlay */}
      <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px] z-0" />

      {/* Intro Caption */}
      <div className="intro-caption relative z-10 bg-black/60 border border-white/10 p-8 sm:p-12 md:p-14 max-w-2xl text-center mx-4 rounded-none backdrop-blur-md shadow-2xl">
        <h1 className="intro-title text-2xl sm:text-4xl md:text-5xl font-extralight uppercase tracking-[8px] sm:tracking-[10px] text-white mb-3">
          Agatha&rsquo;s Photography
        </h1>

        <p className="intro-text text-xs sm:text-sm text-gray-300 font-light leading-relaxed max-w-lg mx-auto mb-8">
          Minima nemo, doloribus sed illo, repudiandae fugit itaque non cum atque aperiam similique
          velit enim soluta necessi atentis taker.
        </p>

        <div className="intro-button-wrap flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/portfolio"
            className="w-full sm:w-auto px-7 py-3 border border-white text-[12px] uppercase tracking-[2px] text-white hover:bg-white hover:text-black transition-colors rounded-full font-medium"
          >
            View Our Work
          </Link>
          <a
            href="https://themeforest.net"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-7 py-3 bg-[#987F28] border border-[#987F28] text-[12px] uppercase tracking-[2px] text-white hover:bg-[#B79932] transition-colors rounded-full font-medium"
          >
            Buy This Template
          </a>
        </div>
      </div>

      {/* Made With Love */}
      <div className="made-with-love hidden sm:flex items-center gap-1.5 absolute bottom-4 right-10 z-10 text-[12px] font-light text-white/40 tracking-wider uppercase">
        <span>Made With</span>
        <span className="text-red-500 text-sm">&hearts;</span>
      </div>
    </section>
  );
}
