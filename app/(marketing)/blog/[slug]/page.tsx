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
        bgImage="https://images.unsplash.com/photo-1511468102400-883d6ea28755?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <BlogSingle post={post} />
    </main>
  );
}


