'use client';

import { useEffect, useState } from 'react';

const ScrollToTop = () => {
   const [visible, setVisible] = useState(false);

   useEffect(() => {
     const onScroll = () => setVisible(window.scrollY > 400);
     window.addEventListener('scroll', onScroll);
     return () => window.removeEventListener('scroll', onScroll);
   }, []);
  return (
    <>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 z-30 w-10 h-10 flex items-center justify-center bg-white text-black transition-opacity ${
          visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <svg className="w-3 h-3" viewBox="0 0 10 6" fill="none">
          <path d="M1 5l4-4 4 4" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>
      ;
    </>
  );
};

export default ScrollToTop;
