'use client';

import { useState } from 'react';
import { PortfolioItem, portfolioSingleShots } from './PortfolioData';

type PortfolioSingleProps = {
  item: PortfolioItem;
};

const PortfolioSingle = ({ item }: PortfolioSingleProps) => {
  const [active, setActive] = useState<number | null>(null);
  const [favorited, setFavorited] = useState<Set<number>>(new Set());

  const toggleFavorite = (i: number) => {
    setFavorited((prev) => {
      const next = new Set(prev);

      if (next.has(i)) {
        next.delete(i);
      } else {
        next.add(i);
      }

      return next;
    });
  };

  const shots = portfolioSingleShots.slice(
    0,
    item.photos > 14 ? 10 : Math.min(6, portfolioSingleShots.length),
  );

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-[280px_1fr] gap-12">
      <aside className="space-y-6">
        <h1 className="text-xs uppercase tracking-wide2 text-gray-400">About Project</h1>

        <div className="text-sm text-gray-400">
          {item.photos} Photos / {item.views} Views
        </div>

        <p className="text-sm text-gray-300 leading-relaxed">
          A short project note goes here — mood, location, and what the shoot was trying to capture.
          Swap this placeholder for the real story.
        </p>

        <dl className="space-y-3 text-sm pt-4 border-t border-white/10">
          <div>
            <dt className="text-xs uppercase tracking-wide2 text-gray-500">Client</dt>
            <dd className="text-gray-300">{item.client}</dd>
          </div>

          {item.website && (
            <div>
              <dt className="text-xs uppercase tracking-wide2 text-gray-500">Website</dt>

              <dd>
                <a
                  href={`https://${item.website}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 hover:text-white underline"
                >
                  {item.website}
                </a>
              </dd>
            </div>
          )}

          <div>
            <dt className="text-xs uppercase tracking-wide2 text-gray-500">Category</dt>

            <dd className="text-gray-300">{item.categories.join(', ')}</dd>
          </div>
        </dl>

        <a
          href="/portfolio"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-wide2 text-gray-400 hover:text-white pt-4"
        >
          &larr; Back to list
        </a>
      </aside>

      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {shots.map((shot, i) => (
            <div key={i} className="relative aspect-square bg-neutral-800 overflow-hidden">
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group absolute inset-0 w-full h-full text-left"
                aria-label={`View ${shot.title}`}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100">
                  <h3 className="text-sm text-white">{shot.title}</h3>

                  <p className="text-xs text-gray-300">#{shot.category}</p>
                </div>
              </button>

              <button
                type="button"
                onClick={() => toggleFavorite(i)}
                className="absolute top-2 right-2 z-10 flex items-center gap-1 text-xs px-2 py-1 bg-black/50 rounded"
                aria-label={favorited.has(i) ? 'Remove from favorites' : 'Add to favorites'}
              >
                <span className={favorited.has(i) ? 'text-red-400' : 'text-white'}>♥</span>

                {shot.favorites + (favorited.has(i) ? 1 : 0)}
              </button>
            </div>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-6 cursor-zoom-out"
        >
          <div
            className="w-full max-w-2xl aspect-[4/3] bg-neutral-800"
            onClick={(e) => e.stopPropagation()}
          />

          <p className="text-sm text-gray-300 mt-4">{shots[active].title}</p>

          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Close"
            className="absolute top-6 right-6 text-white text-2xl leading-none"
          >
            &times;
          </button>
        </div>
      )}
    </section>
  );
};

export default PortfolioSingle;
