import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: '404 Error — Agatha Photography',
  description: 'Page not found on Agatha Photography.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-between overflow-x-hidden relative bg-[#131313] font-mono text-white">
      {/* Header */}
      <Header />

      {/* Main 404 Content Section with Unsplash Background Image */}
      <main className="relative flex-1 flex items-center justify-center min-h-[calc(100vh-140px)] py-24 px-4 sm:px-6">
        {/* Unsplash Background Image matching Agatha page-404.html */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1511468102400-883d6ea28755?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          }}
        />

        {/* Dark Transparent Overlay (cover bg-transparent-7-dark) */}
        <div className="absolute inset-0 bg-black/75 z-0" />

        {/* Centered Dark Card Box matching user reference screenshot */}
        <div className="relative z-10 w-full max-w-[480px] bg-[#0b0b0b]/90 border border-neutral-800/80 rounded-[6px] p-8 sm:p-12 text-center shadow-2xl backdrop-blur-md font-mono">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-mono uppercase text-[#e0e0e0] font-light tracking-normal mb-3">
            404 ERROR!
          </h1>
          <p className="text-xs sm:text-sm font-mono uppercase text-[#a0a0a0] font-light tracking-normal mb-8">
            PAGE NOT FOUND.
          </p>
          <div>
            <Link
              href="/"
              className="w-full sm:w-auto inline-block bg-[#987f28] hover:bg-[#7f6a1e] text-white px-8 py-3.5 rounded-full font-mono text-xs sm:text-sm uppercase tracking-normal font-normal transition-colors cursor-pointer shadow-md"
            >
              BACK TO HOME
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
