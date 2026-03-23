"use client";

import { useI18n } from "@/lib/i18n";

const testimonials = [
  {
    quote:
      "Marc has been a huge help to our agency. He's great at finding ways to make it easier or automate it.",
    name: "Marieke",
    role: "CEO, Adverge",
  },
  {
    quote:
      "Meeting deadlines has always been stressful. Marc's approach has made it all so much more manageable.",
    name: "Erwin Enter",
    role: "Business Owner",
  },
  {
    quote:
      "He automates tasks he doesn't enjoy so he can focus on what really excites him. Inspiring approach.",
    name: "Edwin Dijkstra",
    role: "Manager",
  },
];

export function Testimonials() {
  const { t } = useI18n();

  return (
    <section className="max-w-6xl mx-auto px-12 py-16">
      <p className="tracking-[0.12em] uppercase text-dark-accent font-medium text-[13px] text-center">
        {t("testimonials.subtitle")}
      </p>
      <h2 className="font-heading text-dark-heading text-3xl md:text-[2.5rem] leading-tight text-center mt-4 mb-14">
        {t("testimonials.title")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonials.map((tm) => (
          <div
            key={tm.name}
            className="bg-dark-card border border-dark-border rounded-xl p-7 flex flex-col gap-4 hover:border-dark-accent/30 transition-colors"
          >
            <p className="text-dark-body italic text-sm leading-relaxed">
              &ldquo;{tm.quote}&rdquo;
            </p>
            <div>
              <p className="text-dark-heading font-semibold text-sm">
                {tm.name}
              </p>
              <p className="text-[#666666] text-xs">{tm.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
