import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marc Cornelius — Links",
  description:
    "Everything in one place: my website, StickyTooling, Business OS, workshops, custom software and LinkedIn.",
  openGraph: {
    title: "Marc Cornelius — Links",
    description:
      "Everything in one place: my website, StickyTooling, Business OS, workshops, custom software and LinkedIn.",
    images: ["/images/_MG_9611.jpg"],
  },
};

type LinkItem = {
  label: string;
  sublabel: string;
  href: string;
  external?: boolean;
  icon: React.ReactNode;
};

const ArrowIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M17 7H8M17 7v9" />
  </svg>
);

const links: LinkItem[] = [
  {
    label: "MarcCornelius.com",
    sublabel: "My personal website",
    href: "/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.7 3.8 6 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-6-3.8-9S9.5 5.7 12 3z" />
      </svg>
    ),
  },
  {
    label: "StickyTooling.com",
    sublabel: "My AI transformation company",
    href: "https://stickytooling.com",
    external: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a4 4 0 0 0-5.6 5.6l-4 4a2 2 0 1 0 2.8 2.8l4-4a4 4 0 0 0 5.6-5.6l-2.3 2.3a1.5 1.5 0 0 1-2.1-2.1z" />
      </svg>
    ),
  },
  {
    label: "Business OS",
    sublabel: "A 1-day deep dive into your operations",
    href: "/business-os",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    label: "Workshops",
    sublabel: "Hands-on sessions for your team",
    href: "https://stickytooling.com",
    external: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: "Custom software",
    sublabel: "Have your software built by StickyTooling",
    href: "https://stickytooling.com",
    external: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    sublabel: "Follow me for automation insights",
    href: "https://www.linkedin.com/in/marc-cornelius/",
    external: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 8.98h4v12H3v-12zM9.5 8.98h3.84v1.64h.05c.53-.95 1.84-1.95 3.78-1.95 4.04 0 4.78 2.66 4.78 6.12v6.19h-4v-5.49c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9v5.59h-4v-12z" />
      </svg>
    ),
  },
];

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-dark-bg flex flex-col items-center px-6 py-16">
      <div className="w-full max-w-md flex flex-col items-center">
        {/* Avatar */}
        <div className="w-24 h-24 rounded-full overflow-hidden relative ring-2 ring-dark-accent/40">
          <Image
            src="/images/_MG_9611.jpg"
            alt="Marc Cornelius"
            fill
            className="object-cover object-center"
            sizes="96px"
            priority
          />
        </div>

        {/* Name + tagline */}
        <h1 className="font-heading text-dark-heading text-3xl mt-5">
          Marc Cornelius
        </h1>
        <p className="text-dark-body text-center text-[15px] leading-6 mt-2 max-w-xs">
          Automation for growing businesses. I build the systems your team is
          missing.
        </p>

        {/* Links */}
        <nav className="w-full flex flex-col gap-3 mt-9">
          {links.map((item) => {
            const inner = (
              <>
                <span className="text-dark-accent shrink-0">{item.icon}</span>
                <span className="flex-1 min-w-0">
                  <span className="block text-dark-heading font-medium text-[15px] leading-5">
                    {item.label}
                  </span>
                  <span className="block text-dark-body text-[13px] leading-5 truncate">
                    {item.sublabel}
                  </span>
                </span>
                <span className="text-dark-body group-hover:text-dark-accent transition-colors shrink-0">
                  {ArrowIcon}
                </span>
              </>
            );

            const className =
              "group flex items-center gap-4 w-full rounded-2xl border border-dark-border bg-dark-card px-5 py-4 transition-all hover:border-dark-accent/60 hover:bg-[#242424]";

            return item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {inner}
              </a>
            ) : (
              <Link key={item.label} href={item.href} className={className}>
                {inner}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <a
          href="mailto:info@marc.nl"
          className="text-dark-body hover:text-dark-heading text-sm mt-10 transition-colors"
        >
          info@marc.nl
        </a>
      </div>
    </main>
  );
}
