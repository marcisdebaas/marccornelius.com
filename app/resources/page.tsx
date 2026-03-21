import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "The tools I use, love, and recommend. Tried, tested, and trusted.",
};

interface Tool {
  name: string;
  icon: string;
  iconBg: string;
  desc: string;
  link?: string;
  url?: string;
  full?: boolean;
}

const categories: { label: string; title: string; tools: Tool[] }[] = [
  {
    label: "AI & Automation",
    title: "The brain of every automation",
    tools: [
      {
        name: "Claude",
        icon: "C",
        iconBg: "bg-[#D4A574]",
        desc: "The backbone of everything I build. Claude by Anthropic is the most capable AI assistant I've ever worked with. It thinks, reasons, and writes like a real partner. Every AI OS Blueprint is built with Claude at its core.",
        link: "anthropic.com",
        url: "https://anthropic.com",
        full: true,
      },
      {
        name: "Claude Skills",
        icon: "S",
        iconBg: "bg-[#D4A574]",
        desc: "Custom skills that extend Claude's capabilities. I build reusable workflows that make Claude even more powerful for specific tasks.",
      },
      {
        name: "Claude Cowork",
        icon: "Co",
        iconBg: "bg-[#D4A574]",
        desc: "Collaborative AI workflows where Claude works alongside you in real-time. The future of human-AI collaboration.",
      },
      {
        name: "Claude Terminal",
        icon: ">",
        iconBg: "bg-[#7C3AED]",
        desc: "Claude Code in the terminal. For developers and power users who want AI-assisted coding, scripting, and system management.",
      },
    ],
  },
  {
    label: "Communication & Collaboration",
    title: "Where work actually happens",
    tools: [
      {
        name: "Slack",
        icon: "#",
        iconBg: "bg-[#4A154B]",
        desc: "The hub for team communication. With Claude integrations, Slack becomes a powerful automation trigger — messages, notifications, and workflows all in one place.",
        link: "slack.com",
        url: "https://slack.com",
        full: true,
      },
    ],
  },
  {
    label: "Design & Creative",
    title: "Making things look great",
    tools: [
      {
        name: "Paper",
        icon: "P",
        iconBg: "bg-[#6366F1]",
        desc: "The design tool I use to create interfaces and page layouts. AI-native, fast, and incredibly intuitive. This entire website was designed in Paper.",
        link: "paper.design",
        url: "https://paper.design",
      },
      {
        name: "Canva",
        icon: "Ca",
        iconBg: "bg-[#00C4CC]",
        desc: "For quick social media graphics, presentations, and brand assets. Canva's simplicity makes it perfect for non-designers who need professional visuals fast.",
        link: "canva.com",
        url: "https://canva.com",
      },
    ],
  },
  {
    label: "Development",
    title: "When code is needed",
    tools: [
      {
        name: "Angular",
        icon: "A",
        iconBg: "bg-[#DD0031]",
        desc: "Our frontend framework of choice at Sticky Tooling. Robust, scalable, and perfect for building complex web applications that need to last.",
        link: "angular.dev",
        url: "https://angular.dev",
      },
      {
        name: "Laravel",
        icon: "L",
        iconBg: "bg-[#FF2D20]",
        desc: "The backend framework that powers Sticky Tooling's custom software. Elegant, powerful, and battle-tested for building APIs and full-stack applications.",
        link: "laravel.com",
        url: "https://laravel.com",
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12 flex flex-col md:flex-row items-start gap-12">
        <div className="flex-1">
          <p className="tracking-[0.12em] uppercase text-dark-accent font-medium text-[13px]">
            My Tool Stack
          </p>
          <h1 className="font-heading text-dark-heading text-4xl md:text-5xl leading-tight mt-3">
            The tools I use, love, and recommend
          </h1>
          <p className="text-dark-body text-base leading-relaxed mt-6 max-w-md">
            These are the tools that power my business and the automations I
            build for clients. Tried, tested, and trusted.
          </p>
        </div>
        <div className="w-52 h-52 shrink-0 rounded-2xl overflow-hidden relative">
          <Image
            src="/images/_MG_0073.jpg"
            alt="Marc Cornelius with tools"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Categories */}
      {categories.map((cat) => (
        <section key={cat.label} className="max-w-6xl mx-auto px-6 pb-16">
          <p className="tracking-[0.12em] uppercase text-dark-accent font-medium text-[13px]">
            {cat.label}
          </p>
          <h2 className="font-heading text-dark-heading text-2xl md:text-3xl leading-tight mt-3 mb-6">
            {cat.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {cat.tools.map((tool) => (
              <div
                key={tool.name}
                className={`bg-dark-card border border-dark-border rounded-xl p-7 flex flex-col gap-4 ${
                  tool.full ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-8 h-8 rounded-lg ${tool.iconBg} flex items-center justify-center text-white text-xs font-bold`}
                  >
                    {tool.icon}
                  </span>
                  <span className="text-dark-heading font-semibold text-base">
                    {tool.name}
                  </span>
                </div>
                <p className="text-dark-body text-sm leading-relaxed">
                  {tool.desc}
                </p>
                {tool.link && tool.url && (
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-accent font-semibold text-sm"
                  >
                    {tool.link} &rarr;
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
