"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isLight = pathname.includes("/business-os");

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/business-os", label: "AI OS Setup" },
    { href: "/resources", label: "Resources" },
    { href: "/newsletter", label: "Newsletter" },
  ];

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
        <Link href="/" className="flex items-center">
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

          <Link
            href="/book-a-call"
            className={`text-sm px-5 py-2 rounded-full border transition-colors ${
              isLight
                ? "border-light-accent text-light-accent hover:bg-light-accent hover:text-white"
                : "border-dark-accent text-dark-accent hover:bg-dark-accent hover:text-dark-bg"
            }`}
          >
            Book a Call
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
            <Link
              href="/book-a-call"
              onClick={() => setMobileOpen(false)}
              className={`text-sm px-5 py-2 rounded-full border text-center ${
                isLight
                  ? "border-light-accent text-light-accent"
                  : "border-dark-accent text-dark-accent"
              }`}
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
