"use client";

import { useI18n } from "@/lib/i18n";

export function WhatIDo() {
  const { t } = useI18n();

  return (
    <section className="border-t border-dark-border">
      <div className="max-w-6xl mx-auto px-12 py-20">
        <p className="tracking-[0.12em] uppercase text-dark-accent font-medium text-[13px] mb-4">
          {t("whatido.subtitle")}
        </p>
        <h2 className="font-heading text-dark-heading text-3xl md:text-[2.5rem] leading-tight mb-8">
          {t("whatido.title")}
        </h2>
        <div className="flex flex-col gap-6 text-dark-body text-lg leading-8">
          <p>{t("whatido.p1")}</p>
          <p>{t("whatido.p2a")}</p>
          <p>
            {t("whatido.p3a")}{" "}
            <a
              href="https://stickytooling.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-accent hover:opacity-80 transition-opacity"
            >
              StickyTooling
            </a>{" "}
            {t("whatido.p3b")}
          </p>
          <p className="text-dark-heading font-medium">
            {t("whatido.result")}
          </p>
        </div>
      </div>
    </section>
  );
}
