import { notFound } from 'next/navigation';
import BlogSingle from '@/components/blog/blogSingle/page';
import { blogPosts } from '@/components/blog/blogData/page';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

const BlogSinglePage = ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return <BlogSingle post={post} />;
};

export default BlogSinglePage;

