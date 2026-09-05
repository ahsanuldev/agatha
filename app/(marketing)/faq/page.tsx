'use client';

import PageShell from '@/components/page/pageShell/page';
import PageHeader from '@/components/page/pageHeader/page';
import Faq from '../faq/page';

const usefulLinks = ['About', 'Services', 'Portfolio', 'Contact'];

const FaqPage = () => {
  return (
    <PageShell>
      <PageHeader title="FAQ" crumbs={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]} />

      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        <aside className="space-y-8 order-2 md:order-1">
          <div>
            <h3 className="text-xs uppercase tracking-wide2 text-gray-400 mb-3">Info</h3>

            <hr className="border-white/10 mb-4" />

            <p className="text-sm text-gray-400 leading-relaxed">
              Can&rsquo;t find what you&rsquo;re looking for? Reach out directly and we&rsquo;ll get
              back to you.
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-wide2 text-gray-400 mb-3">Useful Links</h3>

            <hr className="border-white/10 mb-4" />

            <ul className="space-y-2 text-sm text-gray-400">
              {usefulLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <a
            href="/contact"
            className="block text-center text-xs uppercase tracking-wide2 border border-white/30 py-3 hover:bg-white hover:text-black transition-colors"
          >
            Ask a Question
          </a>
        </aside>

        <div className="md:col-span-2 order-1 md:order-2">
          <Faq />
        </div>
      </section>
    </PageShell>
  );
};

export default FaqPage;
