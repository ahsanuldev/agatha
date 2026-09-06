'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PortfolioItem, portfolioSingleShots } from './PortfolioData';

type PortfolioSingleProps = {
  item: PortfolioItem;
};

export default function PortfolioSingle({ item }: PortfolioSingleProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [favorited, setFavorited] = useState<Set<number>>(new Set());
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const toggleFavorite = (i: number) => {
    setFavorited((prev) => {
      const next = new Set(prev);
      if (next.has(i)) {
        next.delete(i);
      } else {
        next.add(i);
      }
      return next;
    });
  };

  const prevId = item.id > 1 ? item.id - 1 : 10;
  const nextId = item.id < 10 ? item.id + 1 : 1;

  const currentShot = lightboxIndex !== null ? portfolioSingleShots[lightboxIndex] : null;

  const handlePrevShot = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex > 0 ? lightboxIndex - 1 : portfolioSingleShots.length - 1);
    }
  };

  const handleNextShot = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex < portfolioSingleShots.length - 1 ? lightboxIndex + 1 : 0);
    }
  };

  return (
    <section id="content-section" className="agatha-page-section portfolio-single portfolio-single-5">
      <div className="agatha-container">
        <div className="agatha-card-container">
          <div>
            <div className="agatha-grid-layout">
              
              {/* Left Column: Metadata & Details */}
              <div className="col-left md:col-span-4 lg:col-span-3 font-mono">
                <div className="portfolio-info">
                  <h1 className="text-sm uppercase text-white font-normal tracking-[4px] mb-3">
                    About Project:
                  </h1>

                  <div className="text-xs uppercase tracking-[2px] text-[#888888] mb-6 flex items-center">
                    <span>{item.photos || portfolioSingleShots.length} Photos</span>
                    <span className="px-2.5 text-neutral-600">/</span>
                    <span>{item.views || 112} Views</span>
                  </div>

                  {/* Author section */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 rounded-full overflow-hidden border border-white/20 shrink-0 bg-neutral-800">
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop"
                        alt={item.author || "John Smith"}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-xs text-[#999999] uppercase tracking-[2px] font-normal">
                      - Author: {item.author || "John Smith"}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="album-description text-[13px] text-[#999999] leading-relaxed mb-6 pl-4 border-l border-neutral-800/80">
                    <p className="mb-3">
                      Suspendisse metus urna, faucibus nec ex et, suscipit blandit turpis. Suspendisse maximus sodales sem aliquet vehicula.
                    </p>

                    {isExpanded && (
                      <p className="animate-fadeIn">
                        Praesent ultricies interdum augue sit amet tempor. Maecenas at ultricies arcu. Sed lacinia vulputate nulla, at sollicitudin.
                      </p>
                    )}

                    <button
                      type="button"
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="mt-3 text-xs uppercase tracking-[2px] text-[#888888] hover:text-white inline-flex items-center gap-1.5 transition-colors cursor-pointer font-normal"
                    >
                      {isExpanded ? (
                        <>
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
                          </svg>
                          <span>Less</span>
                        </>
                      ) : (
                        <>
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
                          </svg>
                          <span>More</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Attributes list with left vertical lines matching Agatha screenshot */}
                  <div className="portfolio-atr pt-2 space-y-5">
                    <div className="pl-4 border-l border-neutral-800/80">
                      <h4 className="text-xs uppercase tracking-[2px] text-[#cccccc] mb-1 font-normal">Client:</h4>
                      <span className="text-[13px] text-[#999999] font-normal">{item.client || "Sirabella´s Photography"}</span>
                    </div>

                    {item.website && (
                      <div className="pl-4 border-l border-neutral-800/80">
                        <h4 className="text-xs uppercase tracking-[2px] text-[#cccccc] mb-1 font-normal">Website:</h4>
                        <a
                          href={`https://${item.website}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[13px] text-[#999999] hover:text-white underline transition-colors font-normal"
                        >
                          {item.website}
                        </a>
                      </div>
                    )}

                    <div className="pl-4 border-l border-neutral-800/80">
                      <h4 className="text-xs uppercase tracking-[2px] text-[#cccccc] mb-1 font-normal">Category:</h4>
                      <span className="text-[13px] text-[#999999] font-normal">
                        {item.categories ? item.categories.join(', ') : 'models, portraits'}
                      </span>
                    </div>

                    <div className="pl-4 border-l border-neutral-800/80">
                      <h4 className="text-xs uppercase tracking-[2px] text-[#cccccc] mb-2 font-normal">Share:</h4>
                      <div className="flex items-center gap-3.5 text-[#999999]">
                        <a href="#0" title="Share to Facebook" className="hover:text-white transition-colors">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                          </svg>
                        </a>
                        <a href="#0" title="Share to Twitter" className="hover:text-white transition-colors">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
                          </svg>
                        </a>
                        <a href="#0" title="Share to Pinterest" className="hover:text-white transition-colors">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                          </svg>
                        </a>
                        <a href="#0" title="Share to Instagram" className="hover:text-white transition-colors">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Top nav & Image Gallery */}
              <div className="col-right md:col-span-8 lg:col-span-9 font-mono">
                {/* Top Gallery Navigation */}
                <div className="gallery-top-content border-b border-neutral-800/80 pb-4 mb-8">
                  <div className="flex items-center justify-between">
                    <Link
                      href="/portfolio"
                      className="back-to-list text-xs uppercase tracking-normal text-[#bbbbbb] hover:text-white inline-flex items-center gap-2 transition-colors"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M4 6h4v4H4zm0 7h4v4H4zm0 7h4v4H4zm7-14h10v4H11zm0 7h10v4H11zm0 7h10v4H11z" />
                      </svg>
                      <span>Back to list</span>
                    </Link>

                    <div className="flex items-center gap-5">
                      <Link
                        href={`/portfolio/${prevId}`}
                        className="pn-link portf-prev text-xs uppercase tracking-normal text-[#bbbbbb] hover:text-white inline-flex items-center gap-1 transition-colors"
                        title="Previous work"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                        </svg>
                        <span>Prev</span>
                      </Link>

                      <Link
                        href={`/portfolio/${nextId}`}
                        className="pn-link portf-next text-xs uppercase tracking-normal text-[#bbbbbb] hover:text-white inline-flex items-center gap-1 transition-colors"
                        title="Next work"
                      >
                        <span>Next</span>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Masonry Image Grid matching Agatha template portfolio-single-5.html */}
                <div id="gallery" className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 font-mono">
                  {portfolioSingleShots.map((shot, idx) => (
                    <div
                      key={shot.id}
                      className="break-inside-avoid mb-4 album-single-item group relative overflow-hidden rounded-[4px] transition-all duration-300"
                    >
                      {/* Masonry Image with aspect ratio variations */}
                      <img
                        src={shot.imageUrl}
                        alt={shot.title}
                        className={`asi-img w-full ${shot.aspectRatio || 'aspect-[3/4]'} object-cover rounded-[4px]`}
                      />

                      {/* Dark Hover Overlay covering full picture with 2-stage delayed content entrance */}
                      <div
                        onClick={() => setLightboxIndex(idx)}
                        className="asi-cover absolute inset-0 bg-[#0b0b0b]/90 flex flex-col justify-between p-4 text-left opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-200 ease-out cursor-pointer z-10 font-mono rounded-[4px]"
                      >
                        {/* Top-Right Favorite Heart Button with Delayed Zoom-In Effect */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite(idx);
                          }}
                          className="favorite-btn absolute top-3.5 right-3.5 z-20 flex items-center gap-1.5 font-mono text-white/90 hover:text-red-400 transform scale-50 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out delay-150 cursor-pointer"
                          aria-label={favorited.has(idx) ? 'Remove from favorites' : 'Add to favorites'}
                        >
                          <svg
                            className={`w-4 h-4 ${favorited.has(idx) ? 'fill-red-500 text-red-500' : 'fill-white text-white'}`}
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                          <span className="fav-count text-xs sm:text-[13px] font-mono font-medium">
                            {shot.favorites + (favorited.has(idx) ? 1 : 0)}
                          </span>
                        </button>

                        {/* Bottom-Left Title & Hashtag Category with Delayed Staggered Zoom-In Effect */}
                        <div className="asi-info mt-auto font-mono text-left">
                          <h2 className="asi-title text-xs sm:text-sm font-mono uppercase text-white font-normal tracking-normal mb-1 origin-left transform scale-75 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out delay-200">
                            {shot.title}
                          </h2>
                          <h5 className="asi-sub-title text-[11px] font-mono uppercase text-[#a0a0a0] tracking-normal font-light origin-left transform scale-75 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out delay-250">
                            #{shot.category}
                          </h5>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && currentShot && (
        <div
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-10"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl font-light p-2 transition-colors cursor-pointer z-50"
            aria-label="Close Lightbox"
          >
            &times;
          </button>

          {/* Prev button */}
          <button
            type="button"
            onClick={handlePrevShot}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all cursor-pointer z-50"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={handleNextShot}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all cursor-pointer z-50"
            aria-label="Next image"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>

          {/* Image preview */}
          <div className="relative max-w-5xl max-h-[80vh] w-full flex items-center justify-center overflow-hidden rounded-[6px]">
            <img
              src={currentShot.imageUrl}
              alt={currentShot.title}
              className="max-w-full max-h-[80vh] object-contain rounded-[6px]"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Caption */}
          <div className="text-center font-mono mt-4 text-white">
            <h3 className="text-base uppercase font-medium tracking-wide">{currentShot.title}</h3>
            <p className="text-xs text-[#999999] uppercase tracking-wider mt-1">#{currentShot.category}</p>
          </div>
        </div>
      )}
    </section>
  );
}

