"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="bg-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-12 pt-16 pb-20 flex flex-col md:flex-row gap-12">
        {/* Left column: heading + body */}
        <div className="flex-1 flex flex-col gap-2">
          <p className="tracking-[0.12em] uppercase text-dark-accent font-medium text-[13px] leading-4">
            {t("hero.subtitle")}
          </p>
          <h1 className="font-heading text-dark-heading text-4xl md:text-[48px] md:leading-[56px] mb-6">
            {t("hero.title")}
          </h1>
          <p className="max-w-[520px] text-dark-body text-lg leading-7 mb-8">
            {t("hero.body")}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/book-a-call"
              className="inline-flex items-center justify-center rounded-full py-3.5 px-8 bg-dark-accent text-[#141414] font-semibold text-base transition-opacity hover:opacity-90"
            >
              {t("hero.cta1")}
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full py-3.5 px-8 border border-dark-heading text-dark-heading font-medium text-base transition-colors hover:bg-dark-heading/10"
            >
              {t("hero.cta2")}
            </Link>
          </div>

          {/* Client logos */}
          <div className="mt-10 opacity-40">
            <Image
              src="/images/client-logos.svg"
              alt="Trusted by leading companies"
              width={366}
              height={33}
              className="w-auto h-6"
            />
          </div>
        </div>

        {/* Right column: image */}
        <div className="w-64 h-64 md:w-[400px] md:h-[400px] shrink-0 rounded-2xl overflow-hidden relative self-start">
          <Image
            src="/images/_MG_9611.jpg"
            alt="Marc Cornelius"
            fill
            className="object-cover object-center"
            preload
          />
        </div>
      </div>
    </section>
  );
}
