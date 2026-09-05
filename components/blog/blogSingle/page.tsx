'use client';

import { useState } from 'react';
import { BlogPost, blogComments } from '../blogData/page';
import BlogSidebar from '../blogSidebar/page';

type BlogSingleProps = {
  post: BlogPost;
};

const BlogSingle = ({ post }: BlogSingleProps) => {
  const [comments, setComments] = useState(blogComments);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submitComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !message) {
      return;
    }

    setComments((prev) => [
      ...prev,
      {
        author: name,
        date: 'just now',
        text: message,
      },
    ]);

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-[1fr_300px] gap-16">
      <div>
        <div className="flex items-center justify-between text-xs text-gray-500 uppercase tracking-wide2 mb-8 pb-8 border-b border-white/10">
          <span>
            By {post.author} · {post.date} · #{post.category}
          </span>

          <a href="#comments" className="hover:text-white transition-colors">
            {comments.length} comments
          </a>
        </div>

        <div className="space-y-5 text-sm text-gray-300 leading-relaxed mb-14">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div id="comments">
          <h3 className="text-lg mb-6">{comments.length} Comments</h3>

          <ul className="space-y-6 mb-12">
            {comments.map((comment, index) => (
              <li key={index} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-neutral-700 shrink-0" />

                <div>
                  <div className="text-sm text-gray-200">{comment.author}</div>

                  <div className="text-xs text-gray-500 mb-2">{comment.date}</div>

                  <p className="text-sm text-gray-400 leading-relaxed">{comment.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <form onSubmit={submitComment} className="space-y-4">
            <h4 className="text-sm uppercase tracking-wide2 text-gray-400">Leave a Comment</h4>

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name*"
                required
                className="bg-transparent border border-white/20 px-3 py-2 text-sm placeholder-gray-500 focus:outline-none"
              />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email*"
                required
                className="bg-transparent border border-white/20 px-3 py-2 text-sm placeholder-gray-500 focus:outline-none"
              />
            </div>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Comment*"
              required
              rows={5}
              className="w-full bg-transparent border border-white/20 px-3 py-2 text-sm placeholder-gray-500 focus:outline-none"
            />

            <button
              type="submit"
              className="text-xs uppercase tracking-wide2 border border-white/30 px-5 py-2.5 hover:bg-white hover:text-black transition-colors"
            >
              Submit Comment
            </button>
          </form>
        </div>
      </div>

      <BlogSidebar />
    </section>
  );
};

export default BlogSingle;
