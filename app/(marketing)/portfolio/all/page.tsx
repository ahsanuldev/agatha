import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import PortfolioGrid5Col from '@/components/portfolio/PortfolioGrid5Col';

export const metadata: Metadata = {
  title: 'Portfolio — Agatha Photography',
  description: 'Explore our complete photography portfolio showcasing portraits, weddings, fashion, editorial, and outdoor work.',
};

export default function PortfolioAllPage() {
  return (
    <main className="min-h-screen bg-[#111111] text-white">
      {/* Page Header matching Agatha template */}
      <PageHeader
        title="PORTFOLIO"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Portfolio' },
        ]}
        bgImage="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Portfolio Grid matching user screenshot */}
      <PortfolioGrid5Col />
    </main>
  );
}
