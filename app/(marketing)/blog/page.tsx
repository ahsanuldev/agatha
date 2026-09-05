import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import BlogList from '@/components/blog/blogList/page';

export const metadata: Metadata = {
  title: 'Articles — Agatha Photography',
  description: 'Read the latest stories, photography guides, behind-the-scenes articles, and tips from Agatha Photography.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#111111] text-white">
      {/* Page Header matching Agatha template blog-list-sidebar-left.html */}
      <PageHeader
        title="ARTICLES"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog' },
        ]}
        bgImage="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Blog List with Left Sidebar matching Agatha template */}
      <BlogList />
    </main>
  );
}


