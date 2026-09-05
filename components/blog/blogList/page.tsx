import { blogPosts } from '../blogData/page';
import BlogSidebar from '../blogSidebar/page';

const BlogList = () => {
  return <>(
        <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-[1fr_300px] gap-16">
      <div className="space-y-14">
        {blogPosts.map((post) => (
          <article key={post.slug}>
            <div className="aspect-[16/9] bg-neutral-800 mb-6" />
            <h2 className="text-xl mb-2">
              <a href={`/blog/${post.slug}`} className="hover:text-gray-300 transition-colors">
                {post.title}
              </a>
            </h2>
            <div className="text-xs text-gray-500 uppercase tracking-wide2 mb-4">
              {post.date} · by {post.author} · #{post.category}
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">{post.excerpt}</p>
            <a
              href={`/blog/${post.slug}`}
              className="inline-block text-xs uppercase tracking-wide2 border border-white/30 px-4 py-2 hover:bg-white hover:text-black transition-colors"
            >
              Read More
            </a>
          </article>
        ))}

        <nav className="flex items-center gap-2 pt-6 text-xs text-gray-500">
          <span className="px-3 py-1.5 border border-white text-white">1</span>
          <span className="px-3 py-1.5 hover:text-gray-300 cursor-pointer">2</span>
          <span className="px-3 py-1.5 hover:text-gray-300 cursor-pointer">3</span>
          <span className="px-2">…</span>
          <span className="px-3 py-1.5 hover:text-gray-300 cursor-pointer">Next</span>
        </nav>
      </div>

      <BlogSidebar />
    </section>
    )</>;
};

export default BlogList;
