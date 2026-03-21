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
  return (
    <section>
      {/* Header */}
      <div className="bg-[#1A1A1A] pt-16 pb-6 px-12">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
          <p className="tracking-[0.12em] uppercase text-dark-accent font-medium text-[13px] text-center">
            Trusted by business leaders
          </p>
          <h2 className="font-heading text-dark-heading text-3xl md:text-[2.5rem] leading-tight text-center">
            They automated. You can too.
          </h2>
        </div>
      </div>

      {/* Cards on warm background */}
      <div className="bg-[#EDE7DC] pb-16 px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-dark-card border border-dark-border rounded-xl p-7 flex flex-col gap-4"
            >
              <p className="text-dark-body italic text-sm leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-dark-heading font-semibold text-sm">
                  {t.name}
                </p>
                <p className="text-[#666666] text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
