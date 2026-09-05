import { notFound } from 'next/navigation';
import PageShell from '@/components/page/pageShell/page';
import PageHeader from '@/components/page/pageHeader/page';
import PortfolioSingle from '@/components/portfolio/PortfolioSingle';
import { portfolioItems } from '@/components/portfolio/PortfolioData';

export function generateStaticParams() {
  return portfolioItems.map((item) => ({
    id: String(item.id),
  }));
}

const PortfolioSinglePage = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const item = portfolioItems.find((p) => p.id === Number(params.id));

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

      <PortfolioSingle item={item} />
    </PageShell>
  );
};

export default PortfolioSinglePage;
