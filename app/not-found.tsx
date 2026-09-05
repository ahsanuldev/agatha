import React from 'react';

const notFound = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-neutral-900 text-center px-6">
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10">
        <h1 className="text-4xl font-light tracking-wide2 mb-3">404 Error!</h1>
        <p className="text-gray-400 mb-8">Page not found.</p>
        <a href="/"
          className="inline-block px-8 py-3 border border-white text-xs uppercase tracking-wide2 hover:bg-white hover:text-black transition-colors"
        >
          Back to Home
        </a>
      </div>
    </section>
  );
};

export default notFound;
