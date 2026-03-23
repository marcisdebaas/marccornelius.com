"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export function CTA() {
  const { t } = useI18n();

  return (
    <section className="bg-[#1A1A1A] py-20">
      <div className="max-w-xl mx-auto px-12 flex flex-col items-center gap-6 text-center">
        <h2 className="font-heading text-dark-heading text-3xl md:text-[2.5rem] leading-tight">
          {t("cta.title")}
        </h2>
        <p className="text-dark-body text-base leading-relaxed">
          {t("cta.body")}
        </p>
        <Link
          href="/book-a-call"
          className="inline-flex items-center justify-center rounded-full py-3.5 px-8 bg-dark-accent text-[#141414] font-semibold text-base transition-opacity hover:opacity-90"
        >
          {t("cta.button")}
        </Link>
      </div>
    </section>
  );
}
