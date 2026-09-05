'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { blogPosts, BlogPost } from '../blogData/page';
import BlogSidebar from '../blogSidebar/page';

export default function BlogList() {
  const [carouselIndices, setCarouselIndices] = useState<Record<string, number>>({});

  const handleNextSlide = (slug: string, galleryLength: number) => {
    setCarouselIndices((prev) => ({
      ...prev,
      [slug]: ((prev[slug] || 0) + 1) % galleryLength,
    }));
  };

  const handlePrevSlide = (slug: string, galleryLength: number) => {
    setCarouselIndices((prev) => ({
      ...prev,
      [slug]: ((prev[slug] || 0) - 1 + galleryLength) % galleryLength,
    }));
  };

  return (
    <section id="content-section" className="page -mt-[80px] md:-mt-[100px] relative z-10 w-full pb-16">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="content-wrap max-w-[1360px] mx-auto bg-[#111111] border border-neutral-800/80 rounded-[6px] p-5 md:p-[40px] shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
              
              {/* Left Column: Sidebar (col-md-4 col-md-pull-8) */}
              <div className="col-left md:col-span-4 lg:col-span-3.5 order-2 md:order-1">
                <BlogSidebar />
              </div>

              {/* Right Column: Main Blog Items (col-md-8 col-md-push-4) */}
              <div className="col-right md:col-span-8 lg:col-span-8.5 order-1 md:order-2">
                <div className="blog-list-items-wrap space-y-12 md:space-y-16">
                  {blogPosts.map((post: BlogPost) => {
                    const currentIndex = carouselIndices[post.slug] || 0;

                    return (
                      <article key={post.slug} className="blog-list-item pb-10 border-b border-dotted border-neutral-800/80 last:border-none font-mono">
                        {/* Media rendering based on post type */}
                        {post.type === 'image' && post.imageUrl && (
                          <Link href={`/blog/${post.slug}`} className="bli-image block overflow-hidden rounded-[4px] bg-[#181818] border border-neutral-800/80 mb-6 group">
                            <img
                              src={post.imageUrl}
                              alt={post.title}
                              className="w-full aspect-[16/9] object-cover rounded-[4px] group-hover:opacity-90 transition-opacity duration-300"
                            />
                          </Link>
                        )}

                        {post.type === 'carousel' && post.gallery && post.gallery.length > 0 && (
                          <div className="relative overflow-hidden rounded-[4px] bg-[#181818] border border-neutral-800/80 mb-6 group aspect-[16/9]">
                            <img
                              src={post.gallery[currentIndex]}
                              alt={post.title}
                              className="w-full h-full object-cover rounded-[4px] transition-opacity duration-300"
                            />

                            {/* Carousel Controls */}
                            <button
                              type="button"
                              onClick={() => handlePrevSlide(post.slug, post.gallery!.length)}
                              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
                              aria-label="Previous Slide"
                            >
                              ‹
                            </button>
                            <button
                              type="button"
                              onClick={() => handleNextSlide(post.slug, post.gallery!.length)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
                              aria-label="Next Slide"
                            >
                              ›
                            </button>

                            {/* Carousel Dots */}
                            <div className="absolute bottom-3 right-4 flex items-center gap-1.5 z-10">
                              {post.gallery.map((_, dotIdx) => (
                                <button
                                  key={dotIdx}
                                  type="button"
                                  onClick={() =>
                                    setCarouselIndices((prev) => ({ ...prev, [post.slug]: dotIdx }))
                                  }
                                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                                    currentIndex === dotIdx
                                      ? 'bg-white w-4'
                                      : 'bg-white/40 hover:bg-white/70'
                                  }`}
                                  aria-label={`Slide ${dotIdx + 1}`}
                                />
                              ))}
                            </div>
                          </div>
                        )}

                        {post.type === 'video' && post.videoUrl && (
                          <div className="relative overflow-hidden rounded-[4px] bg-black border border-neutral-800/80 mb-6 aspect-[16/9]">
                            <iframe
                              src={post.videoUrl}
                              title={post.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="w-full h-full border-0"
                            />
                          </div>
                        )}

                        {/* Post Info */}
                        <div className="bli-info">
                          <h2 className="bli-title text-2xl md:text-[26px] font-light uppercase tracking-[2px] mb-2 leading-snug">
                            <Link href={`/blog/${post.slug}`} className="text-[#999999] hover:text-white transition-colors duration-200">
                              {post.title}
                            </Link>
                          </h2>

                          {/* Post Meta */}
                          <div className="bli-meta text-xs text-[#888888] uppercase tracking-[1.5px] mb-4 flex flex-wrap items-center gap-1.5 font-mono">
                            <a href="#0" className="article-time text-[#888888] hover:text-white transition-colors">{post.date}</a>
                            <span>- by:</span>
                            <a href="#0" className="article-author text-[#888888] hover:text-white transition-colors">{post.author}</a>
                            <span>- in</span>
                            <a href="#0" className="article-category text-[#888888] hover:text-white transition-colors">#{post.category}</a>
                          </div>

                          {/* Excerpt */}
                          <p className="bli-desc text-sm text-[#999999] leading-[1.8] mb-6 font-mono">
                            {post.excerpt}
                          </p>

                          {/* Read More Button (Right aligned as in Agatha theme) */}
                          <div className="bli-button text-right">
                            <Link
                              href={`/blog/${post.slug}`}
                              className="btn btn-dark btn-rounded-5x btn-sm inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#1e1e1e] hover:bg-white text-[#dddddd] hover:text-black border border-neutral-700/60 text-xs font-mono uppercase tracking-[2px] transition-all duration-200 shadow-md"
                            >
                              Read More
                            </Link>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>

                {/* Bottom Pagination matching blog-list-sidebar-left.html */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-neutral-800/80 mt-10 font-mono">
                  {/* Pagination Links */}
                  <nav aria-label="Blog Pagination">
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
                              className={`inline-flex items-center justify-center text-[11px] uppercase tracking-wider transition-all duration-200 h-[34px] ${
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

                  {/* Pagination Info */}
                  <div className="text-[11px] text-[#999999] tracking-widest uppercase text-right">
                    Showing page 1 of 8
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }


