'use client';

import React from 'react';
import Link from 'next/link';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageHeaderProps {
  /**
   * Main title of the page header (e.g. "PORTFOLIO", "ABOUT US", "CONTACT")
   */
  title: string;
  /**
   * Optional subtitle or meta description (e.g. "347 photos · 1349 views")
   */
  subtitle?: string;
  /**
   * Array of breadcrumb items, e.g. [{ label: 'Home', href: '/' }, { label: 'Portfolio' }]
   */
  breadcrumbs?: BreadcrumbItem[];
  /**
   * Unsplash or custom background image URL.
   * Defaults to a premium dark photography wallpaper.
   */
  bgImage?: string;
  /**
   * Custom overlay styling class. Defaults to matching the theme's dark cover rgba(0, 0, 0, 0.65).
   */
  overlayClassName?: string;
  /**
   * Additional wrapper section classes
   */
  className?: string;
  /**
   * Optional children for custom badge, author info, or extra CTAs
   */
  children?: React.ReactNode;
}

/**
 * Reusable PageHeader component matching Agatha Photography template style
 * (`portfolio-list-grid-5col.html`).
 */
export default function PageHeader({
  title,
  subtitle,
  breadcrumbs,
  bgImage = 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop',
  overlayClassName = 'bg-black/65',
  className = '',
  children,
}: PageHeaderProps) {
  // Default breadcrumbs if none provided
  const defaultBreadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: title },
  ];

  const itemsToRender = breadcrumbs || defaultBreadcrumbs;

  return (
    <section
      id="page-header-section"
      className={`relative overflow-hidden text-center text-white pt-24 pb-36 md:pt-32 md:pb-44 lg:pt-36 lg:pb-48 px-5 md:px-11 ${className}`}
    >
      {/* Background Image Layer */}
      <div
        className="page-header-image absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out scale-105"
        style={{ backgroundImage: `url('${bgImage}')` }}
        aria-hidden="true"
      />

      {/* Dark Overlay Cover matching theme (rgba(0,0,0,0.65)) */}
      <div
        className={`page-header-cover absolute inset-0 transition-opacity duration-300 ${overlayClassName}`}
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className="container-fluid page-header-content relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center">
        {/* Main Title */}
        <h1 className="album-title text-3xl sm:text-4xl md:text-5xl font-extralight uppercase tracking-[6px] text-white mb-4 leading-tight">
          {title}
        </h1>

        {/* Subtitle / Meta Info (Optional) */}
        {subtitle && (
          <p className="album-meta text-xs sm:text-sm text-neutral-300 font-light tracking-[2px] uppercase mb-4 opacity-90">
            {subtitle}
          </p>
        )}

        {/* Breadcrumb Navigation */}
        {itemsToRender && itemsToRender.length > 0 && (
          <nav aria-label="Breadcrumb" className="mt-2">
            <ol className="breadcrumb flex items-center justify-center space-x-2 text-xs uppercase tracking-[2px] font-light text-neutral-400">
              {itemsToRender.map((item, idx) => {
                const isLast = idx === itemsToRender.length - 1;
                return (
                  <React.Fragment key={idx}>
                    {idx > 0 && <span className="text-neutral-500 mx-1">/</span>}
                    <li>
                      {item.href && !isLast ? (
                        <Link
                          href={item.href}
                          className="hover:text-white transition-colors duration-200"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <span className="text-white font-normal">{item.label}</span>
                      )}
                    </li>
                  </React.Fragment>
                );
              })}
            </ol>
          </nav>
        )}

        {/* Optional Custom Children (e.g. Author badge, actions) */}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}
