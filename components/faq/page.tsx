"use client";

import { useState } from "react";

const faqs = [
    "What is a short/long term goal of yours?",
    "What is the longest that you've stayed awake for?",
    "How would you know if you were in love?",
    "Do you have any pets?",
    "What is your least favorite chore?",
    "What was your favorite cartoon?",
    "What is your favorite holiday?",
    "If you could invent a holiday, what would it be?",
    "What is your favorite hangout spot?",
    "What position do you usually sleep in?",
];

const answer =
    "A placeholder answer goes here — swap this copy for the real response to each question once you have it.";

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      <h2 className="text-sm uppercase tracking-wide text-gray-400 mb-6">General Help</h2>
      <div className="divide-y divide-white/10 border-t border-b border-white/10">
        {faqs.map((q, i) => (
          <div key={i}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 py-4 text-left text-sm text-gray-200 hover:text-white transition-colors"
            >
              {q}
              <svg
                className={`w-3 h-3 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                viewBox="0 0 10 6"
                fill="none"
              >
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            {open === i && (
              <p className="pb-4 text-sm text-gray-400 leading-relaxed">{answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}