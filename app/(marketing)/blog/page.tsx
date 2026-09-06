import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import BlogList from '@/components/blog/blogList/page';

export const metadata: Metadata = {
  title: 'Articles — Agatha Photography',
  description: 'Read the latest stories, photography guides, behind-the-scenes articles, and tips from Agatha Photography.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#131313] text-white">
      {/* Page Header matching Agatha template blog-list-sidebar-left.html */}
      <PageHeader
        title="ARTICLES"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog' },
        ]}
        bgImage="https://images.unsplash.com/photo-1511468102400-883d6ea28755?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      {/* Blog List with Left Sidebar matching Agatha template */}
      <BlogList />
    </main>
  );
}


