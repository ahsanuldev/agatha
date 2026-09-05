import { notFound } from 'next/navigation';
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

  return <PortfolioSingle item={item} />;
};

export default PortfolioSinglePage;

