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
  bgImage = 'https://images.unsplash.com/photo-1511468102400-883d6ea28755?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  overlayClassName = 'bg-black/65',
  className = '',
  children,
}: PageHeaderProps) {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Default breadcrumbs if none provided
  const defaultBreadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: title },
  ];

  const itemsToRender = breadcrumbs || defaultBreadcrumbs;

  return (
    <section
      id="page-header-section"
      className={`relative overflow-hidden text-center text-white pt-28 pb-32 md:pt-36 md:pb-40 lg:pt-40 lg:pb-48 px-5 md:px-11 ${className}`}
    >
      {/* Dynamic Background Image Layer with Parallax Effect */}
      <div
        className="page-header-image absolute -top-[10%] left-0 w-full h-[125%] bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: `url('${bgImage}')`,
          transform: `translate3d(0, ${(Math.max(0, scrollY) * 0.25).toFixed(2)}px, 0)`,
        }}
        aria-hidden="true"
      />

      {/* Dark Overlay Cover matching theme (rgba(0,0,0,0.65)) */}
      <div
        className={`page-header-cover absolute inset-0 transition-opacity duration-300 ${overlayClassName}`}
        aria-hidden="true"
      />

      {/* Bottom Gradient Blend Masking (Fades image seamlessly into page background #131313) */}
      <div
        className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent via-[#131313]/50 to-[#131313] pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Content Container (Comfortably proportioned spacing) */}
      <div className="container-fluid page-header-content relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center -mt-3 md:-mt-6">
        {/* Main Title (Slightly smaller) */}
        <h1 className="album-title text-2xl sm:text-3xl md:text-4xl font-extralight uppercase tracking-[6px] text-white mb-3 leading-tight">
          {title}
        </h1>

        {/* Subtitle / Meta Info (Optional) */}
        {subtitle && (
          <p className="album-meta text-xs sm:text-sm text-neutral-300 font-light tracking-[2px] uppercase mb-3 opacity-90">
            {subtitle}
          </p>
        )}

        {/* Breadcrumb Navigation */}
        {itemsToRender && itemsToRender.length > 0 && (
          <nav aria-label="Breadcrumb" className="mt-1">
            <ol className="breadcrumb flex items-center justify-center space-x-2 text-[11px] uppercase tracking-[2px] font-light text-neutral-400">
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
