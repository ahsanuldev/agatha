'use client';

import { useState } from 'react';
import { blogPosts, blogCategories, blogTags } from '../blogData/page';

const BlogSidebar = () => {
  const [query, setQuery] = useState('');
  const recent = blogPosts ? blogPosts.slice(0, 3) : [];

  return (
    <aside className="space-y-10">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex items-center border border-white/20"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
          className="w-full bg-transparent px-3 py-2 text-sm placeholder-gray-500 focus:outline-none"
        />
        <button
          type="submit"
          className="px-3 py-2 text-gray-400 hover:text-white"
          aria-label="Search"
        >
          <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none">
            <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.4" />
            <path
              d="M14 14l4.5 4.5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </form>

      <div>
        <h3 className="text-xs uppercase tracking-wide text-gray-400 mb-4">Categories</h3>
        <ul className="space-y-2 text-sm">
          {blogCategories.map((c) => (
            <li key={c.label}>
              <a
                href="#"
                className="flex justify-between text-gray-300 hover:text-white transition-colors"
              >
                <span>#{c.label}</span>
                <span className="text-gray-600">{c.count}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-wide text-gray-400 mb-4">Recent Posts</h3>
        <ul className="space-y-4">
          {recent.map((p) => (
            <li key={p.slug}>
              <a href={`/blog/${p.slug}`} className="block group">
                <h4 className="text-sm text-gray-200 group-hover:text-white transition-colors">
                  {p.title}
                </h4>
                <span className="text-xs text-gray-500">
                  {p.author} · {p.date}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-wide text-gray-400 mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {blogTags.map((t) => (
            <a
              key={t}
              href="#"
              className="text-xs px-2.5 py-1 border border-white/15 text-gray-400 hover:text-white hover:border-white/40 transition-colors"
            >
              #{t}
            </a>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-wide text-gray-400 mb-4">Photo Stream</h3>
        <div className="grid grid-cols-4 gap-1.5">
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i} className="aspect-square bg-neutral-800" />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-wide text-gray-400 mb-4">Subscribe</h3>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex items-center border border-white/20"
        >
          <input
            type="email"
            required
            placeholder="Your email address"
            className="w-full bg-transparent px-3 py-2 text-sm placeholder-gray-500 focus:outline-none"
          />
          <button
            type="submit"
            className="px-3 py-2 text-gray-400 hover:text-white"
            aria-label="Subscribe"
          >
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none">
              <path d="M2 4h16v12H2z" stroke="currentColor" strokeWidth="1.4" />
              <path d="M2 5l8 6 8-6" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </button>
        </form>
      </div>
    </aside>
  );
};

export default BlogSidebar;
