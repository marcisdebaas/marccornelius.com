"use client";

import { usePathname } from "next/navigation";

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

        <p
          className={`text-sm ${
            isLight ? "text-light-body" : "text-dark-body"
          }`}
        >
          &copy; 2025 Marc Cornelius. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://linkedin.com/in/marccornelius"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm transition-colors ${
              isLight
                ? "text-light-body hover:text-light-heading"
                : "text-dark-body hover:text-dark-heading"
            }`}
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/marccornelius"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm transition-colors ${
              isLight
                ? "text-light-body hover:text-light-heading"
                : "text-dark-body hover:text-dark-heading"
            }`}
          >
            Twitter
          </a>
          <a
            href="mailto:marc@marccornelius.com"
            className={`text-sm transition-colors ${
              isLight
                ? "text-light-body hover:text-light-heading"
                : "text-dark-body hover:text-dark-heading"
            }`}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
