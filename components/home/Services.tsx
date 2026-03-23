"use client";

import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";

export function Services() {
  const { locale, t } = useI18n();
  const lp = locale === "nl" ? "/nl" : "";

  const services = [
    {
      title: t("services.aios.title"),
      desc: t("services.aios.desc"),
      link: `${lp}/business-os`,
      linkText: t("services.aios.link"),
      image: "/images/_MG_9599.jpg",
    },
    {
      title: t("services.automations.title"),
      desc: t("services.automations.desc"),
      link: `${lp}/book-a-call`,
      linkText: t("services.automations.link"),
      image: "/images/_MG_0073.jpg",
    },
  ];

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
