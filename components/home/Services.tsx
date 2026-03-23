import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "AI OS Setup",
    desc: "A full AI operating system built around your company. I work with you 1-on-1 to integrate Claude into every layer of your business.",
    link: "/business-os",
    linkText: "Learn more",
    image: "/images/_MG_9599.jpg",
  },
  {
    title: "Custom Automations",
    desc: "From content pipelines to reporting workflows — I build automations that save your team hours every single week.",
    link: "/book-a-call",
    linkText: "Get your automations",
    image: "/images/_MG_0073.jpg",
  },
];

export function Services() {
  return (
    <section className="max-w-6xl mx-auto px-12 pt-10 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {services.map((service) => (
          <Link
            key={service.title}
            href={service.link}
            className="bg-dark-card rounded-2xl overflow-hidden flex flex-col hover:border-dark-accent/30 border border-transparent transition-colors group"
          >
            <div className="relative w-full h-48">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 flex flex-col gap-5 flex-1">
              <h3 className="font-heading text-dark-heading text-[22px] leading-7">
                {service.title}
              </h3>
              <p className="text-[#B8AFA3] text-sm leading-relaxed">
                {service.desc}
              </p>
              <p className="text-dark-accent font-semibold text-sm hover:opacity-80 transition-opacity mt-auto">
                {service.linkText} &rarr;
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
