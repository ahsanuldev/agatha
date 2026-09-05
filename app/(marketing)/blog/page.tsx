import type { Metadata } from 'next';
import BlogList from '@/components/blog/blogList/page';

export const metadata: Metadata = { title: 'Articles — Agatha Photography' };

const BlogPage = () => {
  return <BlogList />;
};

export default BlogPage;

