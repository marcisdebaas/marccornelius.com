import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marc Cornelius — Links",
  description:
    "Everything in one place: my website, Empathree.ai, Business OS, workshops, custom software, TOADS and LinkedIn.",
  openGraph: {
    title: "Marc Cornelius — Links",
    description:
      "Everything in one place: my website, Empathree.ai, Business OS, workshops, custom software, TOADS and LinkedIn.",
    images: ["/images/_MG_9611.jpg"],
  },
};

type LinkItem = {
  label: string;
  sublabel: string;
  href: string;
  external?: boolean;
  // Logo or icon shown in the tile on the left
  visual: React.ReactNode;
  // Tile background behind the logo or icon
  tile: string;
};

type Section = {
  title: string;
  items: LinkItem[];
};

const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const ArrowIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M17 7H8M17 7v9" />
  </svg>
);

const LinkedInLogo = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFFFFF">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 8.98h4v12H3v-12zM9.5 8.98h3.84v1.64h.05c.53-.95 1.84-1.95 3.78-1.95 4.04 0 4.78 2.66 4.78 6.12v6.19h-4v-5.49c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9v5.59h-4v-12z" />
  </svg>
);

const sections: Section[] = [
  {
    title: "My companies",
    items: [
      {
        label: "Empathree.ai",
        sublabel: "My AI transformation company",
        href: "https://www.empathree.ai",
        external: true,
        tile: "bg-[#F5F1E9]",
        visual: (
          <Image src="/images/logos/empathree-mark.svg" alt="Empathree.ai" width={34} height={10} />
        ),
      },
      {
        label: "TOADS",
        sublabel: "Online marketing for automotive",
        href: "https://toads.nl",
        external: true,
        tile: "bg-[#EAFFF9]",
        visual: (
          <Image src="/images/logos/toads.png" alt="TOADS" width={38} height={9} />
        ),
      },
    ],
  },
  {
    title: "Work with me",
    items: [
      {
        label: "Business OS",
        sublabel: "A 1-day deep dive into your operations",
        href: "/business-os",
        tile: "bg-[#E8F3EC] text-light-accent",
        visual: (
          <svg {...iconProps}>
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" />
          </svg>
        ),
      },
      {
        label: "AI workshops",
        sublabel: "Hands-on sessions for your team",
        href: "https://www.empathree.ai/ai-workshops",
        external: true,
        tile: "bg-[#FBEDE8] text-[#C96B52]",
        visual: (
          <svg {...iconProps}>
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        ),
      },
      {
        label: "Custom software",
        sublabel: "Have your software built by Empathree.ai",
        href: "https://www.empathree.ai/software",
        external: true,
        tile: "bg-[#EEF0FF] text-[#4F5BD5]",
        visual: (
          <svg {...iconProps}>
            <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
          </svg>
        ),
      },
    ],
  },
  {
    title: "Follow along",
    items: [
      {
        label: "LinkedIn",
        sublabel: "Follow me for automation insights",
        href: "https://www.linkedin.com/in/marc-cornelius/",
        external: true,
        tile: "bg-[#0A66C2]",
        visual: LinkedInLogo,
      },
      {
        label: "MarcCornelius.com",
        sublabel: "My personal website",
        href: "/",
        tile: "bg-[#FFF6E0] text-[#B7791F]",
        visual: (
          <svg {...iconProps}>
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3c2.5 2.7 3.8 6 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-6-3.8-9S9.5 5.7 12 3z" />
          </svg>
        ),
      },
    ],
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/marc-cornelius/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 8.98h4v12H3v-12zM9.5 8.98h3.84v1.64h.05c.53-.95 1.84-1.95 3.78-1.95 4.04 0 4.78 2.66 4.78 6.12v6.19h-4v-5.49c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9v5.59h-4v-12z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:marc@empathree.ai",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
  {
    label: "Website",
    href: "/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.7 3.8 6 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-6-3.8-9S9.5 5.7 12 3z" />
      </svg>
    ),
  },
];

function LinkCard({ item }: { item: LinkItem }) {
  const inner = (
    <>
      <span
        className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.tile}`}
      >
        {item.visual}
      </span>
      <span className="flex-1 min-w-0">
        <span className="block text-light-heading font-semibold text-[15px] leading-5">
          {item.label}
        </span>
        <span className="block text-[#78716C] text-[13px] leading-5 truncate">
          {item.sublabel}
        </span>
      </span>
      <span className="text-[#A8A29E] group-hover:text-light-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0">
        {ArrowIcon}
      </span>
    </>
  );

  const className =
    "group flex items-center gap-4 w-full rounded-2xl border border-[#ECE9E4] bg-white px-4 py-3.5 shadow-[0_1px_2px_rgba(17,17,17,0.04)] transition-all hover:border-light-accent/40 hover:shadow-[0_6px_20px_rgba(17,17,17,0.07)] hover:-translate-y-px";

  return item.external ? (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
      {inner}
    </a>
  ) : (
    <Link href={item.href} className={className}>
      {inner}
    </Link>
  );
}

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-light-alt flex flex-col items-center px-5 py-14">
      <div className="w-full max-w-md flex flex-col items-center">
        {/* Avatar */}
        <div className="w-24 h-24 rounded-full overflow-hidden relative ring-4 ring-white shadow-[0_4px_16px_rgba(17,17,17,0.12)]">
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
        <h1 className="font-heading text-light-heading text-3xl mt-5">
          Marc Cornelius
        </h1>
        <p className="text-light-body text-center text-[15px] leading-6 mt-2 max-w-xs">
          Automation for growing businesses. I build the systems your team is
          missing.
        </p>

        {/* Company logos */}
        <div className="flex items-center gap-5 mt-5">
          <Image src="/images/logos/empathree.svg" alt="Empathree.ai" width={104} height={28} className="h-6 w-auto" />
          <span className="w-px h-5 bg-[#DDD8D0]" />
          <Image src="/images/logos/toads.png" alt="TOADS" width={84} height={19} className="h-[15px] w-auto" />
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-3 mt-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="w-10 h-10 rounded-full bg-white border border-[#ECE9E4] flex items-center justify-center text-light-body hover:text-light-accent hover:border-light-accent/40 transition-colors"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Link sections */}
        {sections.map((section) => (
          <section key={section.title} className="w-full mt-9">
            <h2 className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#A8A29E] mb-3 px-1">
              {section.title}
            </h2>
            <nav className="flex flex-col gap-3">
              {section.items.map((item) => (
                <LinkCard key={item.label} item={item} />
              ))}
            </nav>
          </section>
        ))}

        {/* Footer */}
        <a
          href="mailto:marc@empathree.ai"
          className="text-[#78716C] hover:text-light-accent text-sm mt-12 transition-colors"
        >
          marc@empathree.ai
        </a>
      </div>
    </main>
  );
}
