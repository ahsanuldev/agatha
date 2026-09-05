import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = { title: 'About Me — Agatha Photography' };

const AboutMePage = () => {
  return (
    <>
      <PageShell>
        <PageHeader title="About Me" crumbs={[{ label: 'Home', href: '/' }, { label: 'About Me' }]} />

        <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12 items-start">
        <div className="md:col-span-2 space-y-6">
          <div>
            <h2 className="text-xl">John Smith</h2>
            <p className="text-sm text-gray-500 uppercase tracking-wide2">
              Photographer / Designer
            </p>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            I&rsquo;ve spent the last decade photographing people and places that don&rsquo;t sit
            still — fashion weeks, city streets, and the in-between moments most cameras miss. This
            site is a running collection of that work.
          </p>
          <blockquote className="border-l-2 border-white/20 pl-4 text-gray-400 text-sm italic">
            A good photograph asks a question rather than answering one.
          </blockquote>
          <div className="pt-4">
            <h3 className="text-xs uppercase tracking-wide2 text-gray-400 mb-3">Find me on</h3>
            <ul className="flex gap-4 text-sm">
              {['Facebook', 'Twitter', 'Pinterest', 'Instagram'].map((s) => (
                <li key={s}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="aspect-[3/4] bg-neutral-800" />
      </section>
    </PageShell>
    </>
  );
};

export default AboutMePage;
