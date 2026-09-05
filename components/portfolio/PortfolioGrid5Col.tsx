'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export interface PortfolioAlbum {
  id: string;
  title: string;
  category: 'fashion' | 'portraits' | 'black-and-white' | 'outdoor';
  photos: number;
  views: number;
  imageUrl: string;
}

const portfolioAlbums: PortfolioAlbum[] = [
  {
    id: 'dancing-studio',
    title: 'Dancing Studio',
    category: 'portraits',
    photos: 33,
    views: 566,
    imageUrl:
      'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'sit-back-and-relax',
    title: 'Sit Back and Relax',
    category: 'portraits',
    photos: 152,
    views: 449,
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'say-goodbye',
    title: 'Say Goodbye',
    category: 'outdoor',
    photos: 211,
    views: 890,
    imageUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'beauty-and-fashion',
    title: 'Beauty & Fashion',
    category: 'fashion',
    photos: 153,
    views: 672,
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'autumn-nights',
    title: 'Autumn Nights',
    category: 'outdoor',
    photos: 347,
    views: 1349,
    imageUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'mondays-monochromes',
    title: "Monday's Monochromes",
    category: 'black-and-white',
    photos: 15,
    views: 134,
    imageUrl:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'suspendisse-potenti',
    title: 'Suspendisse Potenti',
    category: 'portraits',
    photos: 62,
    views: 850,
    imageUrl:
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'amazing-iphoneography',
    title: 'Amazing Iphoneography',
    category: 'outdoor',
    photos: 47,
    views: 684,
    imageUrl:
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop',
  },
];

export default function PortfolioGrid5Col() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [showCount, setShowCount] = useState<number>(10);

  const filteredAlbums = portfolioAlbums.filter((album) => {
    if (activeFilter === 'all') return true;
    return album.category === activeFilter;
  });

  const displayedAlbums = filteredAlbums.slice(0, showCount);

  return (
    <section id="content-section" className="-mt-[80px] md:-mt-[100px] relative z-10 w-full pb-16">
      {/* Container matching theme container-fluid with 45px padding */}
      <div className="w-full px-[15px] md:px-[45px]">
        {/* .content-wrap card container with dark background & 40px padding */}
        <div className="content-wrap bg-[#111111] border border-neutral-800/80 rounded-[6px] p-5 md:p-[40px] shadow-2xl">
          {/* Gallery Top Content Filter Bar matching screenshot */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            {/* Left: Stacked FILTERS heading & category links */}
            <div>
              <h2 className="font-mono text-[12px] uppercase text-[#888888] tracking-widest font-normal mb-2.5">
                FILTERS
              </h2>
              <div className="flex flex-wrap items-center gap-6 font-mono text-[13px] uppercase tracking-wider">
                {[
                  { id: 'all', label: 'all' },
                  { id: 'fashion', label: 'Fashion' },
                  { id: 'portraits', label: 'Portraits' },
                  { id: 'black-and-white', label: 'Black & White' },
                  { id: 'outdoor', label: 'Outdoor' },
                ].map((tab) => (
                  <a
                    key={tab.id}
                    href="#0"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveFilter(tab.id);
                    }}
                    className={`relative py-1 transition-colors ${
                      activeFilter === tab.id
                        ? 'text-white font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-white'
                        : 'text-[#999999] hover:text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200'
                    }`}
                  >
                    {tab.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Right: SHOW: 10 items ▾ dropdown pill */}
            <div className="flex items-center gap-2.5 font-mono text-[11px] text-[#999999] uppercase tracking-wider self-start md:self-end">
              <span>SHOW:</span>
              <div className="relative">
                <select
                  id="show-items"
                  className="bg-[rgba(154,154,154,0.16)] text-white border border-neutral-700/60 rounded-full pl-4 pr-8 py-1.5 text-[11px] font-mono outline-none focus:border-neutral-500 cursor-pointer appearance-none"
                  value={showCount}
                  onChange={(e) => setShowCount(Number(e.target.value))}
                >
                  <option value={10} className="bg-[#222] text-white">10 items</option>
                  <option value={15} className="bg-[#222] text-white">15 items</option>
                  <option value={50} className="bg-[#222] text-white">50 items</option>
                  <option value={100} className="bg-[#222] text-white">Show All</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#999999] text-[9px]">
                  ▼
                </div>
              </div>
            </div>
          </div>

          {/* 4 Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {displayedAlbums.map((album) => (
              <div key={album.id} className="w-full">
                <div className="group relative w-full">
                  {/* Photo Stack 2 Top Lines with Subtle Independent Expanding Motion */}
                  <div className="relative w-full pt-[8px]">
                    {/* Top Line 2 (Highest line - moves up 2px on hover) */}
                    <div className="absolute top-[2px] left-[14px] right-[14px] h-[1px] bg-white/20 z-10 transition-all duration-300 group-hover:top-[0px]" />
                    {/* Top Line 1 (Lower line - moves up 1px on hover) */}
                    <div className="absolute top-[5px] left-[8px] right-[8px] h-[1px] bg-white/35 z-10 transition-all duration-300 group-hover:top-[4px]" />

                    <Link href={`/portfolio/${album.id}`} className="block w-full">
                      {/* Centered Image Container - No Hover Zoom */}
                      <div className="aspect-[4/3] w-full overflow-hidden relative rounded-[6px] bg-[#181818] border border-neutral-800/80 shadow-md flex items-center justify-center">
                        <img
                          src={album.imageUrl}
                          alt={album.title}
                          className="w-full h-full object-cover object-center rounded-[6px] transform-none scale-100"
                        />
                      </div>

                      {/* Centered Caption & Meta */}
                      <div className="text-center pt-3 font-mono">
                        <h2 className="text-[#CECECE] text-[14px] uppercase font-normal tracking-wide hover:text-white transition-colors">
                          {album.title}
                        </h2>
                        <div className="text-[#999999] text-[11px] uppercase tracking-wider mt-1">
                          {album.photos} photos · {album.views} views
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Row OUTSIDE .content-wrap container */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-10 px-2">
          {/* Left: Pagination Buttons */}
          <nav>
            <ul className="flex flex-wrap items-center gap-2 list-none p-0 m-0">
              {[
                { label: 'First', active: false },
                { label: 'Prev', active: false },
                { label: '1', active: true },
                { label: '2', active: false },
                { label: '3', active: false },
                { label: '...', active: false },
                { label: '6', active: false },
                { label: '7', active: false },
                { label: '8', active: false },
                { label: 'Next', active: false },
                { label: 'Last', active: false },
              ].map((item, idx) => {
                const isNumber = !isNaN(Number(item.label));
                return (
                  <li key={idx} className="inline-block">
                    <a
                      href="#0"
                      onClick={(e) => e.preventDefault()}
                      className={`inline-flex items-center justify-center font-mono text-[11px] uppercase tracking-wider transition-all duration-200 h-[34px] ${
                        isNumber
                          ? 'w-[34px] aspect-square rounded-full !p-0'
                          : 'px-3.5 rounded-full'
                      } ${
                        item.active
                          ? 'bg-[#444444] text-white border border-[#555555] font-semibold shadow-sm'
                          : 'bg-[rgba(154,154,154,0.16)] text-[#999999] border border-[rgba(154,154,154,0.16)] hover:bg-[rgba(179,179,179,0.2)] hover:text-white hover:border-[rgba(179,179,179,0.2)]'
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right: Stacked Pagination Info */}
          <div className="font-mono text-[11px] text-[#999999] tracking-widest text-right leading-relaxed uppercase flex flex-col items-end gap-0.5">
            <span>Showing page 1 of 8</span>
            <span>Items 1 - {displayedAlbums.length} of 94</span>
          </div>
        </div>
      </div>
    </section>
  );
}
