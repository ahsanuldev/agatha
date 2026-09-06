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
        bgImage="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Content Section Overlay Container */}
      <section id="content-section" className="-mt-[80px] md:-mt-[100px] relative z-10 w-full pb-16">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1320px] mx-auto bg-[#0b0b0b] border border-neutral-800/80 rounded-[6px] p-6 md:p-[45px] shadow-2xl">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
