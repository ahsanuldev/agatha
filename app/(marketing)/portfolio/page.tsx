import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import PortfolioGrid5Col from '@/components/portfolio/PortfolioGrid5Col';

export const metadata: Metadata = {
  title: 'Portfolio — Agatha Photography',
  description: 'Explore our complete photography portfolio showcasing portraits, weddings, fashion, editorial, and outdoor work.',
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#131313] text-white">
      {/* Page Header matching Agatha template */}
      <PageHeader
        title="PORTFOLIO"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Portfolio' },
        ]}
        bgImage="https://images.unsplash.com/photo-1511468102400-883d6ea28755?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      {/* Portfolio Grid matching user screenshot */}
      <PortfolioGrid5Col />
    </main>
  );
}

