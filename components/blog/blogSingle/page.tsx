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
    <section id="content-section" className="page -mt-[80px] md:-mt-[100px] relative z-10 w-full pb-16">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="content-wrap max-w-[1360px] mx-auto bg-[#111111] border border-neutral-800/80 rounded-[6px] p-5 md:p-[40px] shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 font-mono">
              
              {/* Left Column: Sidebar */}
              <div className="col-left md:col-span-4 order-2 md:order-1">
                <BlogSidebar />
              </div>

              {/* Right Column: Single Article Content */}
              <div className="col-right md:col-span-8 order-1 md:order-2">
                <article className="blog-single-post">
                  {/* Article Header Meta */}
                  <div className="flex items-center justify-between text-xs text-[#888888] uppercase tracking-wider mb-8 pb-4 border-b border-neutral-800 font-mono">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <a href="#0" className="text-[#888888] hover:text-white transition-colors">{post.date}</a>
                      <span>- by:</span>
                      <a href="#0" className="text-[#888888] hover:text-white transition-colors">{post.author}</a>
                      <span>- in</span>
                      <a href="#0" className="text-[#888888] hover:text-white transition-colors">#{post.category}</a>
                    </div>

                    <a href="#comments" className="hover:text-white transition-colors">
                      {comments.length} comments
                    </a>
                  </div>

                  {/* Feature Image if present */}
                  {post.imageUrl && (
                    <div className="overflow-hidden rounded-[4px] bg-[#181818] border border-neutral-800/80 mb-8">
                      <img src={post.imageUrl} alt={post.title} className="w-full aspect-[16/9] object-cover" />
                    </div>
                  )}

                  {/* Article Body */}
                  <div className="space-y-6 text-sm text-[#999999] leading-relaxed mb-14 font-mono">
                    {post.content.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Comments Section */}
                  <div id="comments" className="pt-10 border-t border-neutral-800/80">
                    <h3 className="text-lg uppercase text-white font-medium mb-6">{comments.length} Comments</h3>

                    <ul className="space-y-6 mb-12">
                      {comments.map((comment, index) => (
                        <li key={index} className="flex gap-4 p-4 rounded-[4px] bg-[#161616] border border-neutral-800">
                          <div className="w-10 h-10 rounded-full bg-neutral-800 border border-white/10 shrink-0 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop" alt={comment.author} className="w-full h-full object-cover" />
                          </div>

                          <div>
                            <div className="text-xs font-semibold text-white uppercase">{comment.author}</div>
                            <div className="text-[10px] text-[#777777] uppercase mb-2">{comment.date}</div>
                            <p className="text-xs text-[#aaaaaa] leading-relaxed">{comment.text}</p>
                          </div>
                        </li>
                      ))}
                    </ul>

                    {/* Comment Form */}
                    <form onSubmit={submitComment} className="space-y-4">
                      <h4 className="text-xs uppercase tracking-wider text-white font-medium mb-2">Leave a Comment</h4>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your Name*"
                          required
                          className="bg-[#181818] border border-neutral-800 rounded-[4px] px-4 py-2.5 text-xs text-white placeholder-[#777777] focus:outline-none"
                        />

                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Your Email*"
                          required
                          className="bg-[#181818] border border-neutral-800 rounded-[4px] px-4 py-2.5 text-xs text-white placeholder-[#777777] focus:outline-none"
                        />
                      </div>

                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Your Comment*"
                        required
                        rows={5}
                        className="w-full bg-[#181818] border border-neutral-800 rounded-[4px] px-4 py-2.5 text-xs text-white placeholder-[#777777] focus:outline-none"
                      />

                      <button
                        type="submit"
                        className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#1e1e1e] hover:bg-white text-[#dddddd] hover:text-black border border-neutral-700/60 text-xs font-mono uppercase tracking-wider transition-all duration-200 shadow-md cursor-pointer"
                      >
                        Submit Comment
                      </button>
                    </form>
                  </div>
                </article>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  };

export default BlogSingle;

