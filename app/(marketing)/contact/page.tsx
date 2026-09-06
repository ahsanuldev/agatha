import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import ContactForm from '@/components/contact/page';

export const metadata: Metadata = {
  title: 'Contact Us — Agatha Photography',
  description: 'Get in touch with Agatha Photography.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#131313] text-white">
      {/* Page Header matching reference screenshot */}
      <PageHeader
        title="CONTACT US"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Page - Contact Us' },
        ]}
        bgImage="https://images.unsplash.com/photo-1511468102400-883d6ea28755?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      {/* Content Section Overlay Container */}
      <section id="content-section" className="-mt-[80px] md:-mt-[100px] relative z-10 w-full pb-16">
        <div className="w-full px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Main Contact Form Container */}
          <div className="max-w-[1320px] mx-auto bg-[#0b0b0b] border border-neutral-800/80 rounded-[6px] p-6 md:p-[45px] shadow-2xl">
            <ContactForm />
          </div>

          {/* Separate Compact Container for Google Maps Iframe */}
          <div className="max-w-[1320px] mx-auto bg-[#0b0b0b] border border-neutral-800/80 rounded-[6px] p-6 md:p-[45px] shadow-2xl">
            <div className="w-full overflow-hidden rounded-[4px] border border-neutral-800">
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d303586.39920994313!2d-113.82228697238985!3d53.52618685651585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0224580deff23%3A0x411fa00c4af6155d!2sEdmonton%2C%20AB%2C%20Canada!5e0!3m2!1sen!2sbd!4v1788655927872!5m2!1sen!2sbd"
                className="w-full h-[300px] sm:h-[360px] md:h-[420px] border-0 filter contrast-125 brightness-90 grayscale-[25%]"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
