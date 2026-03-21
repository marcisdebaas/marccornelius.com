import Link from "next/link";

const services = [
  {
    title: "AI OS Setup",
    desc: "A full AI operating system built around your company. I work with you 1-on-1 to integrate Claude into every layer of your business.",
    link: "/business-os",
    linkText: "Learn more",
  },
  {
    title: "Custom Automations",
    desc: "From content pipelines to reporting workflows — I build automations that save your team hours every single week.",
    link: "/book-a-call",
    linkText: "Get your automations",
  },
];

export function Services() {
  return (
    <section className="max-w-6xl mx-auto px-12 pt-10 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-dark-card rounded-2xl p-8 flex flex-col gap-5"
          >
            <h3 className="font-heading text-dark-heading text-[22px] leading-7">
              {service.title}
            </h3>
            <p className="text-[#B8AFA3] text-sm leading-relaxed">
              {service.desc}
            </p>
            <Link
              href={service.link}
              className="text-dark-accent font-semibold text-sm"
            >
              {service.linkText} &rarr;
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-5 bg-dark-card border border-dark-border rounded-2xl p-8 flex flex-col gap-4">
        <h3 className="font-heading text-dark-heading text-[22px] leading-7">
          Consulting &amp; Training
        </h3>
        <p className="text-dark-body text-sm leading-relaxed">
          Want your team to think in automations? I train managers and teams to
          use Claude effectively — so the knowledge stays in-house.
        </p>
        <Link
          href="/book-a-call"
          className="text-dark-accent font-semibold text-sm"
        >
          Book a session &rarr;
        </Link>
      </div>
    </section>
  );
}
