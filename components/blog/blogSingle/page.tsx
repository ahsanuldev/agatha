'use client';

import { useState } from 'react';
import Link from 'next/link';
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
  const [favoriteCount, setFavoriteCount] = useState(56);
  const [isFavorited, setIsFavorited] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited((prev) => !prev);
    setFavoriteCount((prev) => (isFavorited ? prev - 1 : prev + 1));
  };

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
    <section id="content-section" className="agatha-page-section">
      <div className="agatha-container">
        <div className="agatha-card-container-compact">
          <div className="agatha-grid-layout">
            
            {/* Left Column: Sidebar (col-md-4 col-md-pull-8) */}
            <div className="col-left md:col-span-4 lg:col-span-3.5 order-2 md:order-1">
              <BlogSidebar />
            </div>

            {/* Right Column: Single Article Content (col-md-8 col-md-push-4) */}
            <div className="col-right md:col-span-8 lg:col-span-8.5 order-1 md:order-2">
              <article className="blog-single-post">
                
                {/* Blog Single Attributes / Meta Header */}
                <div className="blog-single-attributes mb-8 pb-6 border-b border-neutral-800/80">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    
                    {/* Author Avatar & Metadata */}
                    <div className="flex items-center gap-3.5">
                      <div className="w-9 h-9 rounded-full overflow-hidden bg-neutral-800 border border-white/10 shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop"
                          alt={post.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-xs text-[#888888] space-y-0.5 font-mono">
                        <div className="text-white font-medium uppercase tracking-[1.5px]">
                          Author: <a href="#0" className="text-[#999999] hover:text-white transition-colors">{post.author}</a>
                        </div>
                        <div className="uppercase tracking-[1.5px] text-[11px]">
                          <span className="hover:text-white transition-colors">{post.date}</span> - in{' '}
                          <a href="#0" className="text-[#999999] hover:text-white transition-colors">#{post.category}</a>
                        </div>
                      </div>
                    </div>

                    {/* Single Links: Share, Favorite, Comments */}
                    <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-[1.5px] text-[#888888]">
                      {/* Share Button */}
                      <button
                        type="button"
                        onClick={() => setShowShareModal(true)}
                        className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
                        </svg>
                        <span>Share</span>
                      </button>

                      {/* Favorite Button */}
                      <button
                        type="button"
                        onClick={toggleFavorite}
                        className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
                      >
                        <svg className={`w-3.5 h-3.5 ${isFavorited ? 'fill-white text-white' : 'fill-none stroke-current stroke-2'}`} viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        <span>{favoriteCount}</span>
                      </button>

                      {/* Comments Count */}
                      <a href="#comments" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                        </svg>
                        <span>{comments.length}</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Main Article Image */}
                {post.imageUrl && (
                  <div className="overflow-hidden rounded-[4px] bg-[#181818] border border-neutral-800/80 mb-8 aspect-[16/9]">
                    <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                )}

                {/* Article Body Content */}
                <div className="post-content space-y-6 text-sm text-[#999999] leading-[1.8] mb-10 font-mono tracking-normal">
                  {post.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}

                  {/* Blockquote with Agatha dark styling */}
                  <blockquote className="my-6 border-l-2 border-neutral-700 pl-5 py-3 text-white/90 italic font-mono text-sm leading-[1.8] bg-[#161616] rounded-r-[4px]">
                    "Non mauris nullam. Wisi gravida quis quisque mattis dolor. Etiam sociis turpis nesciunt sed lacus sed hendrerit diam. Accumsan varius venenatis arcu maecenas nulla."
                  </blockquote>
                </div>

                {/* Bottom Attributes: Tags & Counter Actions */}
                <div className="blog-single-attributes pt-6 pb-6 border-t border-b border-neutral-800/80 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#888888] font-mono">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="uppercase text-white font-medium tracking-[1.5px]">Tags:</span>
                    {['photography', 'fashion', 'black & white'].map((tag) => (
                      <a
                        key={tag}
                        href="#0"
                        onClick={(e) => e.preventDefault()}
                        className="px-3.5 py-1 rounded-full bg-[#181818] border border-neutral-800 text-[#999999] hover:text-white hover:border-neutral-600 transition-all uppercase text-[11px] tracking-[1px]"
                      >
                        #{tag}
                      </a>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 uppercase tracking-[1.5px]">
                    <button
                      type="button"
                      onClick={() => setShowShareModal(true)}
                      className="hover:text-white transition-colors cursor-pointer"
                    >
                      Share
                    </button>
                    <span>·</span>
                    <button
                      type="button"
                      onClick={toggleFavorite}
                      className="hover:text-white transition-colors cursor-pointer"
                    >
                      {favoriteCount} Likes
                    </button>
                  </div>
                </div>

                {/* Single Post Navigation (Prev / Next) */}
                <div className="blog-single-nav grid sm:grid-cols-2 gap-6 pb-10 border-b border-neutral-800/80 mb-10 font-mono">
                  <div className="prev-post flex items-center gap-3.5 p-4 rounded-[4px] bg-[#161616] border border-neutral-800/80 hover:border-neutral-700 transition-colors group cursor-pointer">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-800 shrink-0 border border-neutral-800">
                      <img
                        src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=150&auto=format&fit=crop"
                        alt="Prev Post"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#777777] uppercase tracking-[1.5px] block">‹ Previous Post</span>
                      <h4 className="text-xs text-[#999999] group-hover:text-white font-medium uppercase tracking-wider transition-colors line-clamp-1">
                        Night Photography
                      </h4>
                    </div>
                  </div>

                  <div className="next-post flex items-center justify-end text-right gap-3.5 p-4 rounded-[4px] bg-[#161616] border border-neutral-800/80 hover:border-neutral-700 transition-colors group cursor-pointer">
                    <div>
                      <span className="text-[10px] text-[#777777] uppercase tracking-[1.5px] block">Next Post ›</span>
                      <h4 className="text-xs text-[#999999] group-hover:text-white font-medium uppercase tracking-wider transition-colors line-clamp-1">
                        50 Quick Photography Tips
                      </h4>
                    </div>
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-800 shrink-0 border border-neutral-800">
                      <img
                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop"
                        alt="Next Post"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Comments Section */}
                <div id="comments" className="pt-2 font-mono">
                  <h3 className="text-xs sm:text-sm uppercase text-white font-medium mb-6 tracking-[2px]">
                    {comments.length} Comments:
                  </h3>

                  <ul className="space-y-6 mb-12">
                    {comments.map((comment, index) => (
                      <li key={index} className="flex gap-4 p-4 rounded-[4px] bg-[#161616] border border-neutral-800/80">
                        <div className="w-10 h-10 rounded-full bg-neutral-800 border border-white/10 shrink-0 overflow-hidden">
                          <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop"
                            alt={comment.author}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="space-y-1 w-full">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-white uppercase tracking-wider">{comment.author}</span>
                            <a href="#reply" className="text-[10px] text-[#777777] hover:text-white uppercase tracking-wider transition-colors">
                              Reply
                            </a>
                          </div>
                          <div className="text-[10px] text-[#666666] uppercase tracking-wider">{comment.date}</div>
                          <p className="text-xs text-[#aaaaaa] leading-[1.7] pt-1">{comment.text}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Comment Form */}
                  <form onSubmit={submitComment} className="space-y-4">
                    <h4 className="text-xs uppercase tracking-[2px] text-white font-medium mb-3">Leave a Comment</h4>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name*"
                        required
                        className="bg-[#181818] border border-neutral-800 rounded-[4px] px-4 py-2.5 text-xs text-white placeholder-[#777777] focus:outline-none focus:border-neutral-600 transition-colors font-mono tracking-wide"
                      />

                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email*"
                        required
                        className="bg-[#181818] border border-neutral-800 rounded-[4px] px-4 py-2.5 text-xs text-white placeholder-[#777777] focus:outline-none focus:border-neutral-600 transition-colors font-mono tracking-wide"
                      />
                    </div>

                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Your Comment*"
                      required
                      rows={5}
                      className="w-full bg-[#181818] border border-neutral-800 rounded-[4px] px-4 py-2.5 text-xs text-white placeholder-[#777777] focus:outline-none focus:border-neutral-600 transition-colors font-mono tracking-wide"
                    />

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#1e1e1e] hover:bg-white text-[#dddddd] hover:text-black border border-neutral-700/60 text-xs font-mono uppercase tracking-[2px] transition-all duration-200 shadow-md cursor-pointer"
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

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#161616] border border-neutral-800 rounded-[6px] p-6 max-w-sm w-full font-mono text-center relative space-y-4 shadow-2xl">
            <button
              type="button"
              onClick={() => setShowShareModal(false)}
              className="absolute top-3 right-3 text-neutral-400 hover:text-white transition-colors"
            >
              ✕
            </button>
            <h4 className="text-xs uppercase text-white font-medium tracking-[2px]">Share this Article</h4>
            <div className="flex flex-wrap justify-center gap-2 text-xs text-neutral-300 py-2">
              {['Facebook', 'Twitter', 'Pinterest', 'LinkedIn'].map((platform) => (
                <button
                  key={platform}
                  type="button"
                  onClick={() => setShowShareModal(false)}
                  className="px-3.5 py-1.5 rounded-full bg-[#202020] border border-neutral-700 hover:bg-white hover:text-black text-[11px] uppercase tracking-wider transition-all"
                >
                  {platform}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogSingle;
