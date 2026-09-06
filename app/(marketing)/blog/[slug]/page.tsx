import { notFound } from 'next/navigation';
import PageHeader from '@/components/layout/PageHeader';
import BlogSingle from '@/components/blog/blogSingle/page';
import { blogPosts } from '@/components/blog/blogData/page';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogSinglePage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = blogPosts.find((p) => p.slug === params.slug) || blogPosts[0];

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#131313] text-white">
      <PageHeader
        title={post.title.toUpperCase()}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: post.title },
        ]}
        bgImage="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop"
      />
      <BlogSingle post={post} />
    </main>
  );
}


