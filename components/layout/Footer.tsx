"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/book-a-call", label: "Contact" },
];

export function Footer() {
  const pathname = usePathname();
  const isLight = pathname === "/business-os";

  return (
    <footer
      className={`border-t ${
        isLight
          ? "bg-white border-gray-200"
          : "bg-dark-bg border-dark-border"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1">
          <span
            className={`text-lg font-bold ${
              isLight ? "text-light-heading" : "text-dark-heading"
            }`}
          >
            MC
          </span>
        </div>

        <div className="flex items-center gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                isLight
                  ? "text-light-body hover:text-light-heading"
                  : "text-dark-body hover:text-dark-heading"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <p
          className={`text-sm ${
            isLight ? "text-light-body" : "text-dark-body"
          }`}
        >
          &copy; {new Date().getFullYear()} marccornelius.com
        </p>
      </div>
    </footer>
  );
}
