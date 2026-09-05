import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import PageShell from '@/components/page/pageShell/page';
import PageHeader from '@/components/page/pageHeader/page';
import { portfolioItems } from '@/components/portfolio/PortfolioData';

type PortfolioSinglePageProps = {
  params: {
    id: string;
  };
};

export const metadata: Metadata = {
  title: 'Portfolio — Agatha Photography',
};

const PortfolioSinglePage = ({ params }: PortfolioSinglePageProps) => {
  const item = portfolioItems.find((p) => p.id === params.id);

  if (!item) {
    notFound();
  }

  return (
    <PageShell>
      <PageHeader
        title={item.title}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Portfolio', href: '/portfolio' },
          { label: item.title },
        ]}
      />

      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="aspect-[16/9] bg-neutral-800 mb-8" />

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div>
            <h1 className="text-2xl md:text-4xl font-light text-white mb-3">{item.title}</h1>

            <p className="text-sm text-gray-500">
              {item.photos} photos · {item.views} views
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {item.categories.map((category) => (
              <span
                key={category}
                className="border border-white/15 px-3 py-1.5 text-xs uppercase tracking-wide2 text-gray-400"
              >
                {category.replace('-', ' & ')}
              </span>
            ))}
          </div>
        </div>
      </main>
    </PageShell>
  );
};

export default PortfolioSinglePage;
