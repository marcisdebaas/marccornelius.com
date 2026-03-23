"use client";

import { useState } from "react";

interface AccordionItem {
  question: string;
  answer: string;
}

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col w-full">
      {items.map((item, i) => (
        <div
          key={i}
          className={`py-6 ${
            i < items.length - 1 ? "border-b border-[#E5E5E5]" : ""
          }`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between text-left gap-4"
          >
            <span className="text-light-heading font-body font-semibold text-[17px] leading-6">
              {item.question}
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className={`shrink-0 transition-transform ${
                openIndex === i ? "rotate-180" : ""
              }`}
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="#555"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {openIndex === i && (
            <p className="mt-3 text-[#555] font-body text-[15px] leading-6 max-w-2xl">
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
