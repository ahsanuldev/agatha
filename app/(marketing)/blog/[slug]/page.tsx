import { notFound } from 'next/navigation';
import PageShell from '@/components/page/pageShell/page';
import PageHeader from '@/components/page/pageHeader/page';
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

  return (
    <PageShell>
      <PageHeader
        title={post.title}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: post.title },
        ]}
      />

      <BlogSingle post={post} />
    </PageShell>
  );
};

export default BlogSinglePage;
