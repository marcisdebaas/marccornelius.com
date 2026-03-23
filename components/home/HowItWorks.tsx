const steps = [
  {
    num: "1",
    title: "We talk",
    desc: "I sit down with you to understand your workflows, bottlenecks, and where time disappears.",
  },
  {
    num: "2",
    title: "I build",
    desc: "I design and set up custom automations using Claude AI — tailored to your team and tools.",
  },
  {
    num: "3",
    title: "You scale",
    desc: "Your team works faster, you reclaim hours every week, and your business runs on autopilot.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-dark-border">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-12 pt-20 pb-12 flex flex-col items-center gap-4">
        <p className="tracking-[0.12em] uppercase text-dark-accent font-medium text-[13px] text-center">
          How it works
        </p>
        <h2 className="font-heading text-dark-heading text-3xl md:text-[2.5rem] leading-tight text-center">
          Three steps to a smarter business
        </h2>
      </div>

      {/* Steps */}
      <div className="max-w-6xl mx-auto px-12 pb-20 grid grid-cols-1 md:grid-cols-3 gap-5">
        {steps.map((step) => (
          <div key={step.num} className="bg-dark-card rounded-xl p-8 flex flex-col gap-4 border border-transparent hover:border-dark-accent/30 transition-colors">
            <span className="font-heading text-[#3A3A3A] text-5xl leading-none">
              {step.num}
            </span>
            <h3 className="text-dark-heading font-semibold text-[17px]">
              {step.title}
            </h3>
            <p className="text-dark-body text-sm leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
