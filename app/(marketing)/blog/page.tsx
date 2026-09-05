import type { Metadata } from 'next';
import PageShell from '@/components/page/pageShell/page';
import PageHeader from '@/components/page/pageHeader/page';
import BlogList from '@/components/blog/blogList/page';

export const metadata: Metadata = { title: 'Articles — Agatha Photography' };

const BlogPage = () => {
  return 
  <>
    (
    <PageShell>
      <PageHeader title="Articles" crumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />
      <BlogList />
    </PageShell>
    )
  </>;
};

export default BlogPage;
