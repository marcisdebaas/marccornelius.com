import type { Metadata } from "next";
import Image from "next/image";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "The tools I use, love, and recommend. Tried, tested, and trusted.",
};

interface Tool {
  name: string;
  icon: ReactNode;
  desc: string;
  link?: string;
  url?: string;
  full?: boolean;
}

// SVG Icons
const ClaudeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#D4A574">
    <path d="M4.709 15.955l4.72-2.756.08-.046 2.91-1.707c.122-.073.122-.194 0-.265L9.51 9.474l-.08-.048-4.382-2.56A1.063 1.063 0 004 7.837v7.15c0 .735.802 1.2 1.449.868l-.74.1z"/>
    <path d="M19.291 8.045l-4.72 2.756-.08.046-2.91 1.707c-.122.073-.122.194 0 .265l2.908 1.707.08.048 4.382 2.56A1.063 1.063 0 0020 16.163v-7.15c0-.735-.802-1.2-1.449-.868l.74-.1z"/>
  </svg>
);

const SlackIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#E01E5A"/>
  </svg>
);

const PaperIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#6366F1">
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <text x="12" y="16" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">P</text>
  </svg>
);

const CanvaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <circle cx="12" cy="12" r="10" fill="#00C4CC"/>
    <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">C</text>
  </svg>
);

const AngularIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#DD0031">
    <path d="M12 2L3.5 5.5l1.3 11.2L12 22l7.2-5.3 1.3-11.2L12 2zm0 2.1l6.1 2.4-1 8.8L12 19.5l-5.1-4.2-1-8.8L12 4.1zm0 1.8L8.5 15h1.3l.7-1.8h3l.7 1.8h1.3L12 5.9zm0 3.2l1.1 2.9h-2.2L12 9.1z"/>
  </svg>
);

const LaravelIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#FF2D20">
    <path d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934c0 .135-.073.26-.188.326l-9.032 5.208a.35.35 0 01-.063.029c-.009.003-.018.009-.028.013a.37.37 0 01-.194 0c-.011-.004-.02-.01-.03-.014a.367.367 0 01-.063-.03L.533 18.755a.376.376 0 01-.189-.326V3.334c0-.034.005-.069.014-.1.003-.012.01-.022.014-.034a.352.352 0 01.023-.058c.007-.012.018-.022.027-.033a.389.389 0 01.034-.04c.01-.01.023-.017.035-.025a.376.376 0 01.04-.03L5.044.806a.37.37 0 01.377 0L9.934 3.02a.376.376 0 01.189.314v9.652l3.758-2.164V5.87c0-.034.005-.069.014-.1.004-.013.01-.023.015-.034a.352.352 0 01.023-.058c.007-.013.018-.023.028-.034a.348.348 0 01.033-.04c.01-.009.024-.016.036-.025a.376.376 0 01.04-.029l4.512-2.599a.375.375 0 01.377 0l4.513 2.6c.015.008.027.019.04.029.012.009.025.015.035.025z"/>
  </svg>
);

const SkillsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#D4A574" strokeWidth="2">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PenIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#34D399" strokeWidth="2">
    <path d="M12 20h9" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChartIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#34D399" strokeWidth="2">
    <line x1="18" y1="20" x2="18" y2="10" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="12" y1="20" x2="12" y2="4" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="6" y1="20" x2="6" y2="14" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#34D399" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FileTextIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#34D399" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="14 2 14 8 20 8" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="16" y1="13" x2="8" y2="13" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="16" y1="17" x2="8" y2="17" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#34D399" strokeWidth="2">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CoworkIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#D4A574" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TerminalIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#7C3AED" strokeWidth="2">
    <polyline points="4 17 10 11 4 5" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="12" y1="19" x2="20" y2="19" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const categories: { label: string; title: string; tools: Tool[] }[] = [
  {
    label: "AI & Automation",
    title: "The brain of every automation",
    tools: [
      {
        name: "Claude",
        icon: <ClaudeIcon />,
        desc: "The backbone of everything I build. Claude by Anthropic is the most capable AI assistant I've ever worked with. It thinks, reasons, and writes like a real partner. Every AI OS Blueprint is built with Claude at its core.",
        link: "anthropic.com",
        url: "https://anthropic.com",
        full: true,
      },
      {
        name: "Claude Skills",
        icon: <SkillsIcon />,
        desc: "Custom skills that extend Claude's capabilities. I build reusable workflows that make Claude even more powerful for specific tasks.",
      },
      {
        name: "Claude Cowork",
        icon: <CoworkIcon />,
        desc: "Collaborative AI workflows where Claude works alongside you in real-time. The future of human-AI collaboration.",
      },
      {
        name: "Claude Terminal",
        icon: <TerminalIcon />,
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
        icon: <SlackIcon />,
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
        icon: <PaperIcon />,
        desc: "The design tool I use to create interfaces and page layouts. AI-native, fast, and incredibly intuitive. This entire website was designed in Paper.",
        link: "paper.design",
        url: "https://paper.design",
      },
      {
        name: "Canva",
        icon: <CanvaIcon />,
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
        icon: <AngularIcon />,
        desc: "Our frontend framework of choice at Sticky Tooling. Robust, scalable, and perfect for building complex web applications that need to last.",
        link: "angular.dev",
        url: "https://angular.dev",
      },
      {
        name: "Laravel",
        icon: <LaravelIcon />,
        desc: "The backend framework that powers Sticky Tooling's custom software. Elegant, powerful, and battle-tested for building APIs and full-stack applications.",
        link: "laravel.com",
        url: "https://laravel.com",
      },
    ],
  },
  {
    label: "My Claude Skills",
    title: "Custom AI skills I built",
    tools: [
      {
        name: "LinkedIn Writer",
        icon: <PenIcon />,
        desc: "Generates LinkedIn posts in my personal tone of voice. Follows a proven structure for engagement — hook, story, insight, CTA. One prompt, one polished post.",
      },
      {
        name: "Google Ads Report",
        icon: <ChartIcon />,
        desc: "Pulls campaign performance data via the API and generates a positive, actionable report with month-over-month comparison, keyword insights, and a plan for next month.",
      },
      {
        name: "Repo Security Audit",
        icon: <ShieldIcon />,
        desc: "Runs a full security audit on any codebase — code review, severity scan, performance review, and architecture check. Outputs findings as a structured report.",
      },
      {
        name: "SLA Generator",
        icon: <FileTextIcon />,
        desc: "Creates professional Service Level Agreements for StickyTooling clients. Fills in all the legal and technical details from a simple brief.",
      },
      {
        name: "Business Context Gatherer",
        icon: <BriefcaseIcon />,
        desc: "Conducts a structured interview to map a client's business model, unit economics, goals, and competitive landscape. Creates a full context document for future reference.",
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

          <div className={`grid grid-cols-1 ${
            cat.tools.filter((t) => !t.full).length === 3
              ? "md:grid-cols-3"
              : "md:grid-cols-2"
          } gap-5`}>
            {cat.tools.map((tool) => (
              <div
                key={tool.name}
                className={`bg-dark-card border border-dark-border hover:border-dark-accent/30 transition-colors rounded-xl p-7 flex flex-col gap-4 ${
                  tool.full ? "md:col-span-full" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-dark-border/50 flex items-center justify-center">
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
                    className="text-dark-accent font-semibold text-sm hover:opacity-80 transition-opacity"
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
