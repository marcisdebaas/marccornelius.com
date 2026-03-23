"use client";

import { useI18n } from "@/lib/i18n";
import { NewsletterForm } from "@/components/ui/NewsletterForm";

export function NewsletterCTA() {
  const { t } = useI18n();

  return (
    <section className="bg-[#1A1A1A] py-20">
      <div className="max-w-3xl mx-auto px-12 text-center">
        <p className="tracking-[0.12em] uppercase text-dark-accent font-medium text-[13px] mb-4">
          {t("newsletter.subtitle")}
        </p>
        <h2 className="font-heading text-dark-heading text-3xl md:text-[2.5rem] leading-tight mb-3">
          {t("newsletter.title")}
        </h2>
        <p className="text-dark-body text-base leading-relaxed mb-10 max-w-lg mx-auto">
          {t("newsletter.body")}
        </p>
        <div className="max-w-lg mx-auto">
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}
