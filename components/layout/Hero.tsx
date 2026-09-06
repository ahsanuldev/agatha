'use client';

import React from 'react';
import Link from 'next/link';

const bgGalleryImages = [
  { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop', className: 'col-span-1 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop', className: 'col-span-2 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop', className: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop', className: 'col-span-2 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=600&auto=format&fit=crop', className: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop', className: 'col-span-2 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop', className: 'col-span-1 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop', className: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=600&auto=format&fit=crop', className: 'col-span-2 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop', className: 'col-span-1 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=600&auto=format&fit=crop', className: 'col-span-2 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop', className: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=600&auto=format&fit=crop', className: 'col-span-2 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=600&auto=format&fit=crop', className: 'col-span-1 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=600&auto=format&fit=crop', className: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop', className: 'col-span-2 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=600&auto=format&fit=crop', className: 'col-span-1 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=600&auto=format&fit=crop', className: 'col-span-2 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=600&auto=format&fit=crop', className: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=600&auto=format&fit=crop', className: 'col-span-2 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop', className: 'col-span-1 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop', className: 'col-span-2 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop', className: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop', className: 'col-span-2 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=600&auto=format&fit=crop', className: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop', className: 'col-span-2 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop', className: 'col-span-1 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop', className: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=600&auto=format&fit=crop', className: 'col-span-2 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop', className: 'col-span-1 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=600&auto=format&fit=crop', className: 'col-span-2 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop', className: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=600&auto=format&fit=crop', className: 'col-span-2 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=600&auto=format&fit=crop', className: 'col-span-1 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=600&auto=format&fit=crop', className: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop', className: 'col-span-2 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=600&auto=format&fit=crop', className: 'col-span-1 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=600&auto=format&fit=crop', className: 'col-span-2 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=600&auto=format&fit=crop', className: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=600&auto=format&fit=crop', className: 'col-span-2 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop', className: 'col-span-1 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop', className: 'col-span-2 row-span-1' },
];

export default function Hero() {
  return (
    <section
      id="intro-section"
      className="relative w-full flex-1 flex items-end justify-start pb-8 sm:pb-12 md:pb-16 bg-[#000000] overflow-hidden"
    >
      {/* Background Photo Wall Grid (Infinite Marquee Carousel) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-85">
        <div className="w-full flex flex-col animate-scroll-up">
          {/* Grid Set 1 */}
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-8 auto-rows-[100px] sm:auto-rows-[120px] md:auto-rows-[135px] grid-flow-dense gap-0">
            {bgGalleryImages.map((img, idx) => (
              <div
                key={`g1-${idx}`}
                className={`relative w-full h-full overflow-hidden bg-neutral-900 ${img.className}`}
              >
                <img
                  src={img.src}
                  alt={`Gallery preview ${idx + 1}`}
                  className="w-full h-full object-cover brightness-95"
                />
              </div>
            ))}
          </div>

          {/* Grid Set 2 (Duplicate for Seamless Loop) */}
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-8 auto-rows-[100px] sm:auto-rows-[115px] md:auto-rows-[135px] grid-flow-dense gap-0">
            {bgGalleryImages.map((img, idx) => (
              <div
                key={`g2-${idx}`}
                className={`relative w-full h-full overflow-hidden bg-neutral-900 ${img.className}`}
              >
                <img
                  src={img.src}
                  alt={`Gallery preview ${idx + 1}`}
                  className="w-full h-full object-cover brightness-95"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
