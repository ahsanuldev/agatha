'use client';

import { useState } from 'react';

const portfolioFilters = ['all', 'portrait', 'wedding', 'editorial', 'commercial'] as const;

const portfolioItems = [
  {
    id: 'portrait',
    title: 'Portraits',
    categories: ['portrait'],
    photos: 24,
    views: 1280,
  },
  {
    id: 'weddings',
    title: 'Weddings',
    categories: ['wedding'],
    photos: 48,
    views: 2340,
  },
  {
    id: 'editorial',
    title: 'Editorial',
    categories: ['editorial'],
    photos: 32,
    views: 1875,
  },
  {
    id: 'commercial',
    title: 'Commercial',
    categories: ['commercial'],
    photos: 28,
    views: 1540,
  },
  {
    id: 'fashion-portrait',
    title: 'Fashion Portrait',
    categories: ['portrait', 'editorial'],
    photos: 36,
    views: 2190,
  },
];

const PortfolioList = () => {
  const [filter, setFilter] = useState('all');

  const visible =
    filter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.categories.includes(filter));

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
        <h2 className="text-xs uppercase tracking-wide2 text-gray-400">Filters</h2>

        <div className="flex flex-wrap gap-2">
          {portfolioFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`text-xs px-3 py-1.5 uppercase tracking-wide2 border transition-colors ${
                filter === f
                  ? 'border-white text-white'
                  : 'border-white/15 text-gray-500 hover:text-gray-300'
              }`}
            >
              {f === 'all' ? 'All' : f.replace('-', ' & ')}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visible.map((item) => (
          <a key={item.id} href={`/portfolio/${item.id}`} className="group block">
            <div className="aspect-[4/5] bg-neutral-800 mb-3 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors" />
            </div>

            <h3 className="text-sm text-gray-200 group-hover:text-white transition-colors">
              {item.title}
            </h3>

            <p className="text-xs text-gray-500">
              {item.photos} photos · {item.views} views
            </p>
          </a>
        ))}
      </div>

      {visible.length === 0 && (
        <p className="text-sm text-gray-500 mt-10">No projects in this category yet.</p>
      )}

      <nav
        className="flex items-center justify-center gap-2 mt-16 text-xs text-gray-500"
        aria-label="Portfolio pagination"
      >
        <span className="px-3 py-1.5 border border-white text-white">1</span>

        <span className="px-3 py-1.5 hover:text-gray-300 cursor-pointer">2</span>

        <span className="px-3 py-1.5 hover:text-gray-300 cursor-pointer">3</span>

        <span className="px-2">…</span>

        <span className="px-3 py-1.5 hover:text-gray-300 cursor-pointer">Next</span>
      </nav>
    </section>
  );
};

export default PortfolioList;
