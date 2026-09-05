import { notFound } from 'next/navigation';
import PageHeader from '@/components/layout/PageHeader';
import PortfolioSingle from '@/components/portfolio/PortfolioSingle';
import { portfolioItems } from '@/components/portfolio/PortfolioData';

export function generateStaticParams() {
  return portfolioItems.map((item) => ({
    id: String(item.id),
  }));
}

export default function PortfolioSinglePage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const item = portfolioItems.find((p) => String(p.id) === params.id) || portfolioItems[0];

  if (!item) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <PageHeader
        title={item.title.toUpperCase()}
        subtitle={`${item.photos} photos · ${item.views} views`}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Portfolio', href: '/portfolio/all' },
          { label: item.title },
        ]}
      />
      <PortfolioSingle item={item} />
    </main>
  );
}
