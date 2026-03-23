"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useI18n } from "@/lib/i18n";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { locale, t } = useI18n();
  const isLight = pathname.includes("/business-os");

  // English = no prefix, Dutch = /nl prefix
  const lp = locale === "nl" ? "/nl" : "";

  const navLinks = [
    { href: `${lp}/about`, label: t("nav.about") },
    { href: `${lp}/business-os`, label: t("nav.aiOsSetup") },
    { href: `${lp}/resources`, label: t("nav.resources") },
  ];

  function switchLocale() {
    if (locale === "en") {
      // Add /nl prefix
      router.push(`/nl${pathname}`);
    } else {
      // Remove /nl prefix
      const newPath = pathname.replace(/^\/nl/, "") || "/";
      router.push(newPath);
    }
  }

  return (
    <nav
      className={`sticky top-0 z-50 border-b ${
        isLight
          ? "bg-white border-gray-200"
          : "bg-dark-bg/95 backdrop-blur-sm border-dark-border"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href={lp || "/"} className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Marc Cornelius"
            width={48}
            height={24}
            className={isLight ? "invert" : ""}
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                pathname === link.href
                  ? isLight
                    ? "text-light-heading"
                    : "text-dark-heading"
                  : isLight
                  ? "text-light-body hover:text-light-heading"
                  : "text-dark-body hover:text-dark-heading"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Language toggle */}
          <button
            onClick={switchLocale}
            className="text-sm px-3 py-1.5 rounded-full border border-transparent hover:border-dark-border transition-colors"
            title={locale === "en" ? "Switch to Dutch" : "Switch to English"}
          >
            {locale === "en" ? (
              <svg viewBox="0 0 36 24" className="w-6 h-4 rounded-sm overflow-hidden">
                <rect width="36" height="8" fill="#AE1C28"/>
                <rect y="8" width="36" height="8" fill="#FFF"/>
                <rect y="16" width="36" height="8" fill="#21468B"/>
              </svg>
            ) : (
              <svg viewBox="0 0 60 30" className="w-6 h-4 rounded-sm overflow-hidden">
                <clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
                <clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>
                <g clipPath="url(#s)">
                  <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
                  <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                  <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
                  <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
                  <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
                </g>
              </svg>
            )}
          </button>

          <Link
            href={`${lp}/book-a-call`}
            className={`text-sm px-5 py-2 rounded-full border transition-colors ${
              isLight
                ? "border-light-accent text-light-accent hover:bg-light-accent hover:text-white"
                : "border-dark-accent text-dark-accent hover:bg-dark-accent hover:text-dark-bg"
            }`}
          >
            {t("nav.bookACall")}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={isLight ? "#111111" : "#F0EDE8"}
            strokeWidth="2"
          >
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className={`md:hidden border-t ${
            isLight
              ? "bg-white border-gray-200"
              : "bg-dark-bg border-dark-border"
          }`}
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm ${
                  isLight ? "text-light-body" : "text-dark-body"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => { switchLocale(); setMobileOpen(false); }}
              className={`text-sm text-left flex items-center gap-2 ${
                isLight ? "text-light-body" : "text-dark-body"
              }`}
            >
              {locale === "en" ? (
                <>
                  <svg viewBox="0 0 36 24" className="w-5 h-3.5 rounded-sm"><rect width="36" height="8" fill="#AE1C28"/><rect y="8" width="36" height="8" fill="#FFF"/><rect y="16" width="36" height="8" fill="#21468B"/></svg>
                  Nederlands
                </>
              ) : (
                <>
                  <svg viewBox="0 0 60 30" className="w-5 h-3.5 rounded-sm"><clipPath id="ms"><path d="M0,0 v30 h60 v-30 z"/></clipPath><clipPath id="mt"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath><g clipPath="url(#ms)"><path d="M0,0 v30 h60 v-30 z" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/><path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#mt)" stroke="#C8102E" strokeWidth="4"/><path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/><path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/></g></svg>
                  English
                </>
              )}
            </button>
            <Link
              href={`${lp}/book-a-call`}
              onClick={() => setMobileOpen(false)}
              className={`text-sm px-5 py-2 rounded-full border text-center ${
                isLight
                  ? "border-light-accent text-light-accent"
                  : "border-dark-accent text-dark-accent"
              }`}
            >
              {t("nav.bookACall")}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
