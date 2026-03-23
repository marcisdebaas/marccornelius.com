"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export function AboutMe() {
  const { locale, t } = useI18n();
  const lp = locale === "nl" ? "/nl" : "";

  return (
    <section className="max-w-6xl mx-auto px-12 py-20">
      <div className="relative flex flex-col md:flex-row items-stretch">
        <div className="relative w-full md:w-[420px] h-[400px] md:h-[500px] shrink-0 rounded-2xl overflow-hidden z-10">
          <Image
            src="/images/_MG_9656.jpg"
            alt="Marc Cornelius"
            fill
            className="object-cover object-top"
          />
        </div>

        <div className="relative md:-ml-16 mt-[-60px] md:mt-auto md:self-end bg-dark-card rounded-2xl border border-dark-border hover:border-dark-accent/30 transition-colors p-10 flex-1 z-20">
          <p className="tracking-[0.12em] uppercase text-dark-accent font-semibold text-[13px] mb-2">
            {t("aboutme.subtitle")}
          </p>
          <h2 className="font-heading text-dark-heading text-3xl md:text-[2rem] leading-tight mb-5">
            {t("aboutme.title")}
          </h2>
          <p className="text-dark-body text-base leading-7 mb-4">
            {t("aboutme.p1")}
          </p>
          <p className="text-dark-body text-base leading-7 mb-6">
            {t("aboutme.p2")}
          </p>
          <Link
            href={`${lp}/about`}
            className="text-dark-heading font-semibold text-base hover:text-dark-accent transition-colors"
          >
            {t("aboutme.link")}
          </Link>
        </div>
      </div>
    </section>
  );
}
