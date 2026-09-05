'use client';

import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="intro-section"
      className="relative w-full flex-1 flex items-end justify-start pb-8 sm:pb-12 md:pb-16 bg-[#131313] bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop")',
      }}
    >
      {/* Dark Cover Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Intro Caption Box - Bottom Left Aligned */}
      <div className="intro-caption relative z-10 bg-[#292929] p-5 md:px-[60px] md:py-[50px] w-full max-w-[820px] ml-[5%] mr-[5%] md:mr-0 text-center sm:text-left shadow-2xl">
        <h1 className="intro-title text-[18px] md:text-[36px] font-light md:font-thin uppercase tracking-[7px] md:tracking-[10px] -mr-[7px] md:-mr-[10px] text-white mb-2.5 leading-[1.3] font-mono whitespace-normal sm:whitespace-nowrap">
          AGATHA&rsquo;S PHOTOGRAPHY
        </h1>

        <p className="intro-text text-[14px] text-[#BBB] font-mono font-light leading-relaxed tracking-[1px] mb-6">
          Minima nemo, doloribus sed illo, repudiandae fugit itaque non cum atque aperiam similique
          velit enim soluta necessi atentis taker.
        </p>

        <div className="intro-button-wrap flex flex-wrap items-center justify-center sm:justify-start gap-4">
          <Link
            href="/portfolio"
            className="px-7 py-3 bg-[#484848] text-[12px] font-mono font-medium uppercase tracking-[1px] text-[#DDD] hover:bg-white hover:text-black transition-colors rounded-full inline-block"
          >
            VIEW OUR WORK
          </Link>
          <a
            href="https://themeforest.net"
            target="_blank"
            rel="noreferrer"
            className="px-7 py-3 bg-[#987F28] text-[12px] font-mono font-medium uppercase tracking-[1px] text-white hover:bg-[#7F6A1E] transition-colors rounded-full inline-block"
          >
            BUY THIS TEMPLATE
          </a>
        </div>
      </div>

      {/* Made With Love - Bottom Right */}
      <div className="made-with-love hidden sm:flex items-center gap-1.5 absolute bottom-4 right-11 z-10 text-[12px] font-light text-white/40 tracking-wider uppercase font-mono">
        <span>Made With</span>
        <span className="text-red-500 text-sm">&hearts;</span>
      </div>
    </section>
  );
}
