import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'About Me — Agatha Photography',
  description: 'Learn more about John Smith, professional photographer and designer based in New York.',
};

export default function AboutMePage() {
  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
        </svg>
      ),
    },
    {
      name: 'Pinterest',
      href: 'https://www.pinterest.com',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.25 2.67 7.9 6.44 9.34-.09-.78-.17-1.99.04-2.85.19-.77 1.2-5.09 1.2-5.09s-.31-.61-.31-1.52c0-1.43.83-2.5 1.86-2.5.88 0 1.3.66 1.3 1.45 0 .88-.56 2.21-.85 3.44-.24 1.03.52 1.87 1.54 1.87 1.85 0 3.28-1.95 3.28-4.76 0-2.49-1.79-4.23-4.34-4.23-2.96 0-4.7 2.22-4.7 4.51 0 .89.34 1.85.77 2.37.08.1.1.19.07.31-.08.31-.25 1.02-.28 1.16-.05.21-.18.26-.41.16-1.53-.71-2.48-2.94-2.48-4.73 0-3.85 2.8-7.39 8.07-7.39 4.24 0 7.53 3.02 7.53 7.06 0 4.21-2.65 7.6-6.34 7.6-1.24 0-2.4-.64-2.8-1.4l-.76 2.91c-.28 1.07-1.03 2.41-1.54 3.24A10 10 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: 'Contact Me',
      href: 'mailto:john.smith@example.com',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-[#131313] text-white">
      {/* Page Header matching Agatha alter-heading style */}
      <PageHeader
        title="ABOUT ME"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Page - About Me' },
        ]}
        bgImage="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Content Section */}
      <section id="content-section" className="agatha-page-section page-about-me">
        <div className="agatha-container">
          <div className="agatha-card-container-compact">
            <div className="agatha-grid-layout items-start">
              
              {/* Left Column: Bio & Text Details */}
              <div className="col-left md:col-span-7 lg:col-span-8 space-y-6 font-mono">
                <div>
                  <h3 className="text-2xl md:text-3xl font-light text-[#999999] uppercase tracking-[3px] mb-2 leading-snug font-mono">
                    John Smith
                  </h3>
                  <h6 className="text-xs text-[#888888] font-mono uppercase tracking-[2px] font-normal mb-6">
                    Photographer / Designer
                  </h6>
                </div>

                <p className="text-sm text-[#999999] leading-[1.8] font-mono">
                  Integer nec rhoncus lacus. Vestibulum suscipit tristique cursus. Nunc tempor, leo ornare dignissim laoreet, ex ligula imperdiet metus, a pellentesque lectus sem eu nunc. Donec malesuada id velit eget laoreet. Nullam posuere diam nec dolor volutpat bibendum. Aliquam efficitur id sapien in feugiat.
                </p>

                <p className="text-sm text-[#999999] leading-[1.8] font-mono">
                  Mauris sed ligula at felis maximus aliquet. Phasellus vulputate elit in nisi hendrerit, id convallis sem pulvinar. Proin non varius quam. Vestibulum diam lectus, congue nec efficitur ac, pretium vel diam.
                </p>

                {/* Agatha Theme Blockquote matching screenshot */}
                <blockquote className="relative my-8 pl-0 py-2 border-none bg-transparent font-mono">
                  <span className="block text-2xl font-mono text-[#888888] not-italic mb-1 leading-none">“</span>
                  <p className="text-sm text-[#cccccc] italic leading-[1.8] font-mono m-0">
                    Neque sit amet mauris egestas quis mattis velit fringilla. Curabitur viver justo sed scelerisque. Cras consectetur purus sit amet fermentum. Aenean mattis eu leo quam curcus.
                  </p>
                </blockquote>

                {/* Social Icons Section matching screenshot */}
                <div className="social-icons pt-4 font-mono">
                  <h6 className="text-xs uppercase tracking-[2px] text-[#888888] font-medium mb-4">
                    Find me on:
                  </h6>
                  <ul className="flex items-center gap-5 list-none p-0 m-0 text-[#888888]">
                    {socialLinks.map((social) => (
                      <li key={social.name}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                          title={social.name}
                          className="text-[#888888] hover:text-white transition-colors duration-200 block cursor-pointer"
                        >
                          {social.icon}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Photographer Portrait Image */}
              <div className="col-right md:col-span-5 lg:col-span-4">
                <div className="rounded-[4px] overflow-hidden bg-[#181818] aspect-[3/4]">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                    alt="John Smith - Photographer"
                    className="w-full h-full object-cover rounded-[4px]"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
