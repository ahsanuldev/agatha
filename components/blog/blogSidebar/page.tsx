'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { blogPosts, blogCategories, blogTags } from '../blogData/page';

export default function BlogSidebar() {
  const [query, setQuery] = useState('');
  const recent = blogPosts ? blogPosts.slice(0, 4) : [];

  const photoStreamImages = [
    'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=300&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=300&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=300&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=300&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=300&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=300&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=300&auto=format&fit=crop',
  ];

  const recentCommenters = [
    {
      name: 'Brayan Peterson',
      date: '29 jan 2016',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop',
      comment: 'Aliquet praesent tempor ac dolor aliquet. Risus mi vitae hendrerit orci vitae amet...',
    },
    {
      name: 'David Bradley',
      date: '26 jan 2016',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=120&auto=format&fit=crop',
      comment: 'Iaculis molestie rhoncus. Amet maecenas ut orci id dui. Et dui morbi...',
    },
    {
      name: 'Kate Dixon',
      date: '19 jan 2016',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120&auto=format&fit=crop',
      comment: 'Feugiat fringilla sequi. Anunc adipiscing nisl lorem morbi tincidunt gravida...',
    },
  ];

  return (
    <aside className="sidebar sidebar-left space-y-10 font-mono pr-0 md:pr-8 md:border-r md:border-dashed md:border-neutral-800/80">
      {/* Search Widget */}
      <div className="sidebar-widget sidebar-search no-margin-top mb-8">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="relative flex items-center bg-[#161616] border border-neutral-800 rounded-full px-4 py-1.5 focus-within:border-neutral-600 transition-all"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className="w-full bg-transparent px-2 py-1 text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none font-mono"
          />
          <div className="h-4 w-[1px] bg-neutral-800/80 mx-2 flex-shrink-0" />
          <button
            type="submit"
            className="p-1 text-neutral-400 hover:text-white transition-colors flex-shrink-0"
            aria-label="Search"
          >
            <svg className="w-4 h-4 fill-none stroke-current stroke-[2.2]" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-4.2-4.2" strokeLinecap="round" />
            </svg>
          </button>
        </form>
      </div>

      {/* Categories Widget */}
      <div className="sidebar-widget sidebar-categories">
        <h3 className="sidebar-heading text-xs uppercase text-white font-medium tracking-wider mb-2">
          Blog Categories
        </h3>
        <div className="hr-short w-6 h-[4px] bg-neutral-700 rounded-full mb-6" />
        <ul className="space-y-0 text-xs">
          {blogCategories.map((c, idx) => (
            <li key={c.label}>
              <a
                href="#0"
                onClick={(e) => e.preventDefault()}
                className={`flex items-center justify-between text-[#999999] hover:text-white transition-colors py-2.5 ${
                  idx !== 0 ? 'border-t border-dotted border-neutral-800' : ''
                }`}
              >
                <span>#{c.label}</span>
                <span className="w-6 h-6 rounded-full bg-[rgba(132,132,132,0.14)] text-[#cccccc] flex items-center justify-center text-[11px]">
                  {c.count}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts Widget */}
      <div className="sidebar-widget sidebar-post-list">
        <h3 className="sidebar-heading text-xs uppercase text-white font-medium tracking-wider mb-2">
          Recent Posts
        </h3>
        <div className="hr-short w-6 h-[4px] bg-neutral-700 rounded-full mb-6" />
        <ul className="space-y-5">
          {recent.map((p, idx) => (
            <li
              key={p.slug}
              className={`flex gap-3.5 items-center pb-4 ${
                idx !== recent.length - 1 ? 'border-b border-dotted border-neutral-800' : ''
              }`}
            >
              <Link
                href={`/blog/${p.slug}`}
                className="post-thumb w-14 h-14 rounded-full overflow-hidden bg-neutral-800 border border-neutral-800 shrink-0 group block"
              >
                <img
                  src={p.imageUrl || p.gallery?.[0] || 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=300&auto=format&fit=crop'}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:opacity-75 transition-opacity duration-200"
                />
              </Link>
              <div className="post-data space-y-0.5">
                <h5 className="post-title text-xs text-[#999999] hover:text-white uppercase font-medium transition-colors leading-snug">
                  <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                </h5>
                <div className="author text-[11px] text-[#777777] uppercase tracking-wider">
                  By: <span className="text-[#aaaaaa]">{p.author}</span>
                </div>
                <div className="date text-[10px] text-[#666666] uppercase">{p.date}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Comments Widget */}
      <div className="sidebar-widget sidebar-comments-list">
        <h3 className="sidebar-heading text-xs uppercase text-white font-medium tracking-wider mb-2">
          Recent Comments
        </h3>
        <div className="hr-short w-6 h-[4px] bg-neutral-700 rounded-full mb-6" />
        <ul className="space-y-5">
          {recentCommenters.map((c, i) => (
            <li
              key={i}
              className={`flex gap-3 items-start pb-4 ${
                i !== recentCommenters.length - 1 ? 'border-b border-dotted border-neutral-800' : ''
              }`}
            >
              <div className="sidebar-comment-avatar w-8 h-8 rounded-full overflow-hidden bg-neutral-800 border border-white/10 shrink-0">
                <img src={c.avatar} alt={c.name} className="w-full h-full object-cover" />
              </div>
              <div className="sidebar-comment-meta space-y-1">
                <div className="sidebar-comment-data text-[11px] text-[#777777] uppercase tracking-wider">
                  By: <span className="text-white font-medium">{c.name}</span> · <span className="text-[#666666]">{c.date}</span>
                </div>
                <p className="text-xs text-[#999999] leading-relaxed hover:text-white transition-colors cursor-pointer">
                  {c.comment}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Tags Widget */}
      <div className="sidebar-widget sidebar-tags">
        <h3 className="sidebar-heading text-xs uppercase text-white font-medium tracking-wider mb-2">
          Popular Tags
        </h3>
        <div className="hr-short w-6 h-[4px] bg-neutral-700 rounded-full mb-6" />
        <div className="flex flex-wrap gap-2">
          {blogTags.map((t) => (
            <a
              key={t}
              href="#0"
              onClick={(e) => e.preventDefault()}
              className="text-[11px] font-mono uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#181818] border border-neutral-800 text-[#999999] hover:text-white hover:border-neutral-600 transition-all"
            >
              #{t}
            </a>
          ))}
        </div>
      </div>

      {/* Photo Stream Widget */}
      <div className="sidebar-widget sidebar-photo-stream">
        <h3 className="sidebar-heading text-xs uppercase text-white font-medium tracking-wider mb-2">
          Photo Stream
        </h3>
        <div className="hr-short w-6 h-[4px] bg-neutral-700 rounded-full mb-6" />
        <div className="grid grid-cols-4 gap-2">
          {photoStreamImages.map((src, i) => (
            <a
              key={i}
              href="#0"
              onClick={(e) => e.preventDefault()}
              className="aspect-square rounded-[2px] overflow-hidden bg-neutral-800 border border-neutral-800 group"
            >
              <img
                src={src}
                alt={`Stream ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Subscribe Widget */}
      <div className="sidebar-widget sidebar-subscribe">
        <h3 className="sidebar-heading text-xs uppercase text-white font-medium tracking-wider mb-2">
          Subscribe
        </h3>
        <div className="hr-short w-6 h-[4px] bg-neutral-700 rounded-full mb-4" />
        <p className="text-xs text-[#888888] mb-3">Follow our latest news:</p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="relative flex items-center bg-[#181818] border border-neutral-800 rounded-[4px] overflow-hidden"
        >
          <input
            type="email"
            required
            placeholder="enter your email address..."
            className="w-full bg-transparent px-3 py-2.5 text-xs text-white placeholder-[#777777] focus:outline-none font-mono"
          />
          <button
            type="submit"
            className="px-3.5 py-2.5 text-[#888888] hover:text-white transition-colors border-l border-neutral-800"
            aria-label="Subscribe"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </button>
        </form>
      </div>

      {/* Meta Widget */}
      <div className="sidebar-widget sidebar-meta">
        <h3 className="sidebar-heading text-xs uppercase text-white font-medium tracking-wider mb-2">
          Meta
        </h3>
        <div className="hr-short w-6 h-[4px] bg-neutral-700 rounded-full mb-4" />
        <ul className="space-y-2 text-xs text-[#999999]">
          <li>
            <a href="#0" className="hover:text-white transition-colors">
              Log In
            </a>
          </li>
          <li>
            <a href="#0" className="hover:text-white transition-colors">
              Entries RSS
            </a>
          </li>
          <li>
            <a href="#0" className="hover:text-white transition-colors">
              Comments RSS
            </a>
          </li>
          <li>
            <a
              href="https://wordpress.org/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              WordPress.org
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}


