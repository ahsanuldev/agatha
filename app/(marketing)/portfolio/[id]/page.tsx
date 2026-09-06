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
    <main className="min-h-screen bg-[#131313] text-white">
      <PageHeader
        title={item.title ? item.title.toUpperCase() : "PORTFOLIO SINGLE V.4"}
        bgImage="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Portfolio', href: '/portfolio' },
          { label: 'Portfolio single v.4' },
        ]}
      />
      <PortfolioSingle item={item} />
    </main>
  );
}

