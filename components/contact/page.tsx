'use client';

import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full font-mono">
      {/* Top 2 Columns Layout: Left Contact Info & Right Intro Header/Paragraph */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-10">
        
        {/* Left Column: Address, Phone, Email & Social Icons */}
        <div className="md:col-span-5 space-y-3.5 text-[13px] text-[#b0b0b0] font-mono leading-relaxed">
          {/* Telio, Inc. with Home Icon */}
          <div className="flex items-center gap-2.5 text-[#a0a0a0] font-mono text-sm font-normal">
            <svg className="w-4 h-4 text-[#a0a0a0] fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
            <span>Telio, Inc.</span>
          </div>

          {/* Address */}
          <p className="pl-6 text-[#b0b0b0] font-mono">
            1355 Market Street, Suite 900
            <br />
            San Francisco, CA 94103
          </p>

          {/* Phone with Phone Icon */}
          <div className="flex items-center gap-2.5 pt-1">
            <svg className="w-4 h-4 text-[#cccccc] fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            <span className="text-[#b0b0b0]">(123) 456-7890</span>
          </div>

          {/* Email with Mail Icon */}
          <div className="flex items-center gap-2.5">
            <svg className="w-4 h-4 text-[#cccccc] fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <a href="mailto:company@email.com" className="text-[#b0b0b0] hover:text-white transition-colors">
              company@email.com
            </a>
          </div>

          {/* Social Icons matching user screenshot */}
          <div className="flex items-center gap-4 pt-3 text-[#aaaaaa]">
            {/* Facebook */}
            <a href="#0" className="hover:text-white transition-colors" aria-label="Facebook">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.6 13.73 5.6c1.07 0 2.19.19 2.19.19v2.41h-1.24c-1.23 0-1.61.77-1.61 1.56V12h2.72l-.43 3H13v6.8c4.56-.93 8-4.96 8-9.8z" />
              </svg>
            </a>
            {/* Twitter */}
            <a href="#0" className="hover:text-white transition-colors" aria-label="Twitter">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            {/* Pinterest */}
            <a href="#0" className="hover:text-white transition-colors" aria-label="Pinterest">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.42 7.63 11.16-.1-.95-.2-2.4.04-3.44.22-.94 1.4-5.96 1.4-5.96s-.36-.72-.36-1.78c0-1.67.97-2.92 2.17-2.92 1.02 0 1.52.77 1.52 1.69 0 1.03-.66 2.57-1 3.99-.28 1.19.6 2.16 1.78 2.16 2.13 0 3.78-2.25 3.78-5.5 0-2.87-2.06-4.88-5.01-4.88-3.41 0-5.42 2.56-5.42 5.2 0 1.03.4 2.13.9 2.73.1.12.11.23.08.35l-.33 1.37c-.05.22-.18.27-.42.16-1.58-.73-2.57-3.04-2.57-4.89 0-3.98 2.9-7.64 8.35-7.64 4.38 0 7.79 3.12 7.79 7.3 0 4.35-2.74 7.85-6.55 7.85-1.28 0-2.48-.67-2.89-1.46l-.79 3.01c-.28 1.1-1.05 2.48-1.57 3.32C9.5 23.82 10.73 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#0" className="hover:text-white transition-colors" aria-label="Instagram">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column: Title & Paragraph */}
        <div className="md:col-span-7 font-mono">
          <h3 className="text-lg md:text-xl font-mono text-[#a0a0a0] uppercase tracking-normal font-light mb-3">
            DON'T BE SHY, TELL US WHAT'S ON YOUR MIND.
          </h3>
          <p className="text-[13px] text-[#b0b0b0] leading-[1.85] font-mono">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam consequat.
          </p>
        </div>

      </div>

      {/* Form Section */}
      {submitted ? (
        <div className="bg-[#1c1c1c] border border-[#333333] rounded-[16px] p-8 text-center text-white font-mono animate-fade-in">
          <h4 className="text-xl font-light mb-2 text-[#987f28]">Thank You!</h4>
          <p className="text-sm text-[#b0b0b0]">Your message has been sent successfully. We will get back to you soon.</p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-6 px-6 py-2.5 bg-[#252525] hover:bg-[#333333] text-white rounded-full text-xs font-mono uppercase tracking-normal cursor-pointer transition-colors"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 font-mono">
          {/* Top 3 Pill Inputs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              required
              className="w-full bg-[#1c1c1c] border border-[#333333] focus:border-[#987f28] px-6 py-3.5 text-sm text-white placeholder-[#888888] font-mono tracking-normal font-normal rounded-full focus:outline-none transition-colors duration-200"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              required
              className="w-full bg-[#1c1c1c] border border-[#333333] focus:border-[#987f28] px-6 py-3.5 text-sm text-white placeholder-[#888888] font-mono tracking-normal font-normal rounded-full focus:outline-none transition-colors duration-200"
            />
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              required
              className="w-full bg-[#1c1c1c] border border-[#333333] focus:border-[#987f28] px-6 py-3.5 text-sm text-white placeholder-[#888888] font-mono tracking-normal font-normal rounded-full focus:outline-none transition-colors duration-200"
            />
          </div>

          {/* Large Textarea */}
          <div>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message (text only)"
              required
              rows={6}
              className="w-full bg-[#1c1c1c] border border-[#333333] focus:border-[#987f28] p-6 text-sm text-white placeholder-[#888888] font-mono tracking-normal font-normal rounded-[24px] focus:outline-none transition-colors duration-200 resize-y min-h-[160px]"
            />
          </div>

          {/* Golden Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-[#987f28] hover:bg-[#7f6a1e] text-white py-3.5 rounded-full font-mono text-sm uppercase tracking-normal font-normal transition-colors cursor-pointer shadow-md"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      )}

      {/* Google Maps Embed Container matching user screenshot */}
      <div className="mt-10 pt-2">
        <div className="w-full bg-[#1c1c1c] border border-[#333333] rounded-[16px] p-3 sm:p-4 overflow-hidden shadow-xl">
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086487192317!2d-122.41941552342939!3d37.7749295150937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            className="w-full h-[280px] sm:h-[350px] md:h-[400px] rounded-[10px] border-0 filter contrast-125 brightness-90 grayscale-[30%]"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;