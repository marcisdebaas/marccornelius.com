import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Accordion } from "@/components/ui/Accordion";

export const metadata: Metadata = {
  title: "Business OS — Turn Your Business Into a System",
  description:
    "So your business stops depending on you for every decision.",
};

const painPoints = [
  "onboarding every new client manually",
  "sending reports by hand",
  "answering the same support questions over and over",
  "writing proposals from scratch",
  "making invoices manually",
  "drafting and repurposing content",
  "pulling data from Stripe, your CRM, or random spreadsheets",
  "updating dashboards and summaries yourself",
  "creating marketing materials every week",
  "constantly switching between tools just to keep things moving",
];

const lookingFor = [
  "where data moves manually",
  "where decisions depend on you",
  "where people wait for input",
  "where work gets duplicated",
  "where things only work because someone remembers",
];

const automationTags = [
  "Client onboarding",
  "Reporting",
  "Customer support",
  "Proposals",
  "Invoices",
  "Email responses",
  "Content drafting",
  "Thumbnail generation",
  "Data extraction",
  "Dashboard summaries",
  "Internal handoffs",
  "Marketing materials",
];

const outcomes = [
  "Your team knows what to do without asking you",
  "Fewer interruptions during the day",
  "Less decision fatigue",
  "Clear workflows across your business",
  "Less dependency on you as the owner",
  "30–50% workload reduction in the short term",
];

const pricingFeatures = [
  "1-day Business OS session",
  "Full written automation blueprint",
  "Prioritized roadmap",
];

const faqItems = [
  {
    question: "Is this implementation or strategy?",
    answer:
      "This is the strategy and blueprint phase. I map exactly what should be automated and how. If you want, StickyTooling can implement it afterward.",
  },
  {
    question: "Do I need technical knowledge?",
    answer:
      "No. This is designed for business owners who want automation without having to become technical themselves.",
  },
  {
    question: "What if I want you to build it afterward?",
    answer:
      "That is possible. If we move into implementation, 50% of your Business OS investment is credited toward the build.",
  },
  {
    question: "Is this only for Dutch businesses?",
    answer:
      "The Business OS is available internationally. The subsidy angle is Dutch-only.",
  },
  {
    question: "How fast will I see results?",
    answer:
      "Most businesses can reduce 30–50% of workload in the short term once the highest-impact automations are identified and implemented.",
  },
  {
    question: "How do I know this will be worth it?",
    answer:
      "Because if you do not walk away with a clear and valuable automation plan, you get your money back.",
  },
];

function CTAButton() {
  return (
    <div className="flex flex-col items-center gap-3">
      <Link
        href="/book-a-call"
        className="inline-flex items-center justify-center rounded-[10px] py-4.5 px-10 bg-dark-accent text-dark-bg font-inter font-semibold text-base transition-opacity hover:opacity-90"
      >
        Book Your Business OS
      </Link>
      <p className="text-[#999] font-inter text-[13px]">
        Takes 60 seconds &middot; Money-back guaranteed
      </p>
    </div>
  );
}

export default function BusinessOSPage() {
  return (
    <div className="bg-white text-light-body font-inter">
      {/* Hero */}
      <section className="bg-[#F0F0EE]">
        <div className="max-w-6xl mx-auto px-12 pt-16 pb-20 flex flex-col md:flex-row gap-12">
          <div className="flex-1 flex flex-col gap-2">
            <p className="tracking-[0.12em] uppercase text-light-accent font-medium text-[13px] leading-4">
              Your Business OS
            </p>
            <h1 className="font-inter text-light-heading font-bold text-4xl md:text-[48px] md:leading-[56px] tracking-tight mb-4">
              Turn Your Business Into a <span className="accent-underline-light">System That Runs Without You</span>
            </h1>
            {/* [CHANGED] Stronger subheadline */}
            <p className="max-w-[520px] text-light-body font-inter text-[17px] leading-7 mb-8">
              So your business stops depending on you for every decision.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <CTAButton />
            </div>
            <p className="text-[#777] font-inter text-sm leading-relaxed max-w-md mt-3">
              For CEOs and founders doing €5k–€20k/month who are still the
              operational bottleneck.
            </p>
          </div>

          <div className="w-64 h-64 md:w-[400px] md:h-[400px] shrink-0 rounded-2xl overflow-hidden relative self-start">
            <Image
              src="/images/_MG_9611.jpg"
              alt="Marc Cornelius"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Strong line + Signature — dark cinematic block */}
      <section className="py-20 px-6 md:px-16 bg-[#141414]">
        <div className="max-w-5xl mx-auto mb-16">
          <p className="text-dark-body font-medium text-xl md:text-2xl leading-relaxed max-w-2xl">
            Your team doesn&apos;t need more tools.
            <br />
            They need a system they can run <span className="accent-underline">without you</span>.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <blockquote className="border-l-4 border-dark-accent pl-8">
            <p className="text-dark-heading font-bold text-3xl md:text-[36px] leading-snug tracking-tight italic">
              &ldquo;If everything depends on you, you don&apos;t have a system.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* Problem — [CHANGED] stronger ending */}
      <section className="bg-light-alt py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto flex flex-col gap-7">
          <h2 className="text-light-heading font-bold text-3xl md:text-4xl leading-tight tracking-tight max-w-2xl">
            Your business works. But it still <span className="accent-underline-light">depends on you</span> for everything.
          </h2>
          <p className="text-light-body text-[17px] leading-7 max-w-2xl">
            You&apos;ve built something real. Clients are coming in. Revenue is
            happening.
          </p>
          <p className="text-light-body text-[17px] leading-7 max-w-2xl">
            But behind the scenes, your business is still held together by
            manual work, repeated decisions, and you being involved in too many
            steps.
          </p>
          <p className="text-light-body font-medium text-base">Maybe it&apos;s:</p>
          <div className="flex flex-col gap-2.5 max-w-2xl">
            {painPoints.map((p) => (
              <p key={p} className="text-[#555] text-base leading-relaxed">
                — {p}
              </p>
            ))}
          </div>
          {/* [CHANGED] Visually stronger ending */}
          <div className="max-w-2xl mt-4 pt-8 border-t border-[#E0E0E0]">
            <p className="text-light-heading font-bold text-xl md:text-2xl leading-9">
              You&apos;re busy all day…
              <br />
              but you&apos;re not actually getting ahead.
            </p>
            <p className="text-light-heading font-bold text-xl md:text-2xl leading-9 mt-6">
              <span className="accent-underline-light">Everything still depends on you.</span>
            </p>
            <p className="text-light-heading font-bold text-xl md:text-2xl leading-9 mt-6">
              And if you stop working, everything slows down.
            </p>
          </div>
        </div>
      </section>

      {/* Reframe — [CHANGED] sharpened last line */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto flex flex-col gap-7">
          <h2 className="text-light-heading font-bold text-3xl md:text-4xl leading-tight tracking-tight max-w-2xl">
            This is not a team problem
          </h2>
          <p className="text-light-body text-[17px] leading-7 max-w-2xl">
            It&apos;s a <span className="accent-underline-light">system problem</span>.
          </p>
          <p className="text-light-heading font-medium text-[17px] leading-7 max-w-2xl">
            Once the structure is clear, your team <span className="accent-underline-light">stops needing you</span> for everything.
          </p>
        </div>
      </section>

      {/* Video placeholder */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#1A1A1A] border border-[#E5E5E5] flex items-center justify-center group cursor-pointer">
            <Image
              src="/images/_MG_0073.jpg"
              alt="Watch the video"
              fill
              className="object-cover opacity-40"
            />
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-dark-accent/90 flex items-center justify-center group-hover:bg-dark-accent transition-colors">
                <svg viewBox="0 0 24 24" className="w-8 h-8 ml-1" fill="#141414">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </div>
              <p className="text-white font-medium text-sm tracking-wide">
                Watch how it works
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POV */}
      <section className="bg-light-alt py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto flex flex-col gap-7">
          <h2 className="text-light-heading font-bold text-3xl md:text-4xl leading-tight tracking-tight max-w-2xl">
            Most businesses don&apos;t have a tool problem
          </h2>
          <p className="text-light-body text-[17px] leading-7 max-w-2xl">
            Most businesses already have enough tools.
          </p>
          <p className="text-light-body text-[17px] leading-7 max-w-2xl">
            What they&apos;re missing is clarity on how their work <span className="accent-underline-light">actually flows</span>.
          </p>
          <p className="text-light-body text-[17px] leading-7 max-w-2xl">
            Without that, automation just creates more complexity.
          </p>
          <p className="text-light-heading font-medium text-[17px] leading-7 max-w-2xl">
            Once the workflow is clear, the right systems become obvious.
          </p>
        </div>
      </section>

      {/* Shadowing — dark section for drama */}
      <section className="py-28 px-6 md:px-16 bg-[#141414]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
          {/* Photo */}
          <div className="w-full md:w-64 h-80 shrink-0 rounded-2xl overflow-hidden relative md:sticky md:top-24">
            <Image
              src="/images/_MG_9649.jpg"
              alt="Marc observing workflows"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col gap-8">
          <h2 className="text-dark-heading font-bold text-3xl md:text-[40px] leading-tight tracking-tight max-w-2xl">
            I don&apos;t ask. I watch.
          </h2>
          <div className="flex flex-col gap-6 max-w-2xl text-dark-body text-lg leading-8">
            <p>Most people will ask how your business works.</p>
            <p>You&apos;ll explain it.</p>
            <p>And it will sound structured.</p>
            <p className="text-dark-heading font-semibold text-lg">
              But that&apos;s not how it <span className="accent-underline">actually runs</span>.
            </p>
            <p>So I don&apos;t start with questions.</p>
            <p>I sit with you and your team.</p>
            <p className="text-dark-heading font-medium text-lg">
              I watch how work <span className="accent-underline">actually happens</span>.
            </p>
          </div>
          <div className="flex flex-col gap-3 max-w-2xl mt-2">
            <p className="text-[#777] text-base leading-relaxed">
              What gets copied.
            </p>
            <p className="text-[#777] text-base leading-relaxed">
              What gets repeated.
            </p>
            <p className="text-[#777] text-base leading-relaxed">
              Where things break.
            </p>
            <p className="text-[#777] text-base leading-relaxed">
              Where people get stuck.
            </p>
          </div>
          <p className="text-dark-accent font-semibold text-lg leading-7 max-w-2xl mt-2">
            That&apos;s where the <span className="accent-underline">real leverage</span> is.
          </p>
          {/* Micro-insight */}
          <div className="border-t border-dark-border mt-6 pt-8 max-w-2xl">
            <p className="text-dark-heading font-medium text-xl md:text-2xl leading-relaxed">
              Most problems don&apos;t show up in reports.
              <br />
              They show up in how work actually happens.
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* What I Look For */}
      <section className="bg-light-alt py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
          <div className="flex-1 flex flex-col gap-7">
            <h2 className="text-light-heading font-bold text-3xl md:text-4xl leading-tight tracking-tight max-w-2xl">
              What I&apos;m actually looking for
            </h2>
            <p className="text-light-body text-[17px] leading-7 max-w-2xl">
              I&apos;m not looking for tools.
            </p>
            <p className="text-light-body text-[17px] leading-7 max-w-2xl">
              I&apos;m looking for:
            </p>
            <div className="flex flex-col gap-2.5 max-w-2xl">
              {lookingFor.map((item) => (
                <p key={item} className="text-[#555] text-base leading-relaxed">
                  — {item}
                </p>
              ))}
            </div>
            <p className="text-light-heading font-medium text-[17px] leading-7 max-w-2xl">
              Once you see these patterns, the system becomes <span className="accent-underline-light">obvious</span>.
            </p>
          </div>

          {/* Bottleneck pattern diagram */}
          <div className="w-full md:w-[340px] shrink-0 self-center">
            <svg viewBox="0 0 340 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              {/* Center node — YOU */}
              <circle cx="170" cy="190" r="36" fill="#1B5E3B" />
              <text x="170" y="195" textAnchor="middle" fill="white" fontSize="13" fontWeight="600">YOU</text>

              {/* Surrounding nodes */}
              {/* Top: Manual data */}
              <circle cx="170" cy="60" r="28" fill="white" stroke="#E5E5E5" strokeWidth="1.5" />
              <text x="170" y="55" textAnchor="middle" fill="#555" fontSize="9" fontWeight="500">Manual</text>
              <text x="170" y="68" textAnchor="middle" fill="#555" fontSize="9" fontWeight="500">data</text>
              <line x1="170" y1="88" x2="170" y2="154" stroke="#1B5E3B" strokeWidth="1.5" strokeDasharray="4 3" />

              {/* Top-right: Decisions */}
              <circle cx="280" cy="110" r="28" fill="white" stroke="#E5E5E5" strokeWidth="1.5" />
              <text x="280" y="105" textAnchor="middle" fill="#555" fontSize="9" fontWeight="500">Decisions</text>
              <text x="280" y="118" textAnchor="middle" fill="#555" fontSize="9" fontWeight="500">depend on you</text>
              <line x1="257" y1="130" x2="200" y2="175" stroke="#1B5E3B" strokeWidth="1.5" strokeDasharray="4 3" />

              {/* Bottom-right: Waiting */}
              <circle cx="280" cy="270" r="28" fill="white" stroke="#E5E5E5" strokeWidth="1.5" />
              <text x="280" y="265" textAnchor="middle" fill="#555" fontSize="9" fontWeight="500">People</text>
              <text x="280" y="278" textAnchor="middle" fill="#555" fontSize="9" fontWeight="500">wait for input</text>
              <line x1="257" y1="250" x2="200" y2="205" stroke="#1B5E3B" strokeWidth="1.5" strokeDasharray="4 3" />

              {/* Bottom: Duplicated */}
              <circle cx="170" cy="320" r="28" fill="white" stroke="#E5E5E5" strokeWidth="1.5" />
              <text x="170" y="315" textAnchor="middle" fill="#555" fontSize="9" fontWeight="500">Work gets</text>
              <text x="170" y="328" textAnchor="middle" fill="#555" fontSize="9" fontWeight="500">duplicated</text>
              <line x1="170" y1="292" x2="170" y2="226" stroke="#1B5E3B" strokeWidth="1.5" strokeDasharray="4 3" />

              {/* Bottom-left: Memory */}
              <circle cx="60" cy="270" r="28" fill="white" stroke="#E5E5E5" strokeWidth="1.5" />
              <text x="60" y="265" textAnchor="middle" fill="#555" fontSize="9" fontWeight="500">Runs on</text>
              <text x="60" y="278" textAnchor="middle" fill="#555" fontSize="9" fontWeight="500">memory</text>
              <line x1="83" y1="250" x2="140" y2="205" stroke="#1B5E3B" strokeWidth="1.5" strokeDasharray="4 3" />

              {/* Top-left: empty for balance — shows "bottleneck" label */}
              <circle cx="60" cy="110" r="28" fill="white" stroke="#E5E5E5" strokeWidth="1.5" />
              <text x="60" y="105" textAnchor="middle" fill="#555" fontSize="9" fontWeight="500">Tasks need</text>
              <text x="60" y="118" textAnchor="middle" fill="#555" fontSize="9" fontWeight="500">your approval</text>
              <line x1="83" y1="130" x2="140" y2="175" stroke="#1B5E3B" strokeWidth="1.5" strokeDasharray="4 3" />

              {/* Label */}
              <text x="170" y="375" textAnchor="middle" fill="#999" fontSize="11" fontWeight="500" fontStyle="italic">Everything flows through one person.</text>
            </svg>
          </div>
        </div>
      </section>

      {/* Automation Examples */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto flex flex-col gap-7">
          <h2 className="text-light-heading font-bold text-3xl md:text-4xl leading-tight tracking-tight max-w-2xl">
            The kinds of things I often map for automation
          </h2>
          <div className="flex flex-wrap gap-3 max-w-2xl">
            {automationTags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg py-2.5 px-5 bg-[#FAFAFA] border border-[#E5E5E5] text-light-body text-[15px]"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-[#555] font-medium text-base">
            I focus on the tasks that eat your week alive.
          </p>

          {/* Built with */}
          <div className="flex items-center gap-8 mt-6 opacity-50">
            {/* Claude */}
            <svg viewBox="0 0 24 24" className="h-6 w-auto" fill="#D4A574">
              <path d="M4.709 15.955l4.72-2.756.08-.046 2.91-1.707c.122-.073.122-.194 0-.265L9.51 9.474l-.08-.048-4.382-2.56A1.063 1.063 0 004 7.837v7.15c0 .735.802 1.2 1.449.868l-.74.1z"/>
              <path d="M19.291 8.045l-4.72 2.756-.08.046-2.91 1.707c-.122.073-.122.194 0 .265l2.908 1.707.08.048 4.382 2.56A1.063 1.063 0 0020 16.163v-7.15c0-.735-.802-1.2-1.449-.868l.74-.1z"/>
            </svg>
            {/* Zapier */}
            <svg viewBox="0 0 244 66" className="h-5 w-auto" fill="#555">
              <path d="M57.1 27.3l-10.8 10.8 10.8 10.8-4.5 4.5L41.8 42.6l-10.8 10.8-4.5-4.5 10.8-10.8-10.8-10.8 4.5-4.5L41.8 33.6l10.8-10.8 4.5 4.5zM78.3 53.4h8.1V24.6h-8.1v28.8zm12.6-15.6c0-2.4.6-4.5 1.8-6.3 1.2-1.8 2.7-3 4.8-3.9 2.1-.9 4.2-1.2 6.6-1.2 3.6 0 6.6 1.2 8.7 3.3l-4.8 5.1c-1.2-1.2-2.7-1.8-4.2-1.8-1.5 0-2.7.3-3.6 1.2-.9.9-1.2 1.8-1.2 3.3v.3c0 1.5.3 2.7 1.2 3.6.9.9 2.1 1.2 3.6 1.2 1.8 0 3.3-.6 4.5-1.8l4.8 5.1c-2.4 2.4-5.4 3.6-9 3.6-2.4 0-4.5-.3-6.3-1.2-1.8-.9-3.3-2.1-4.5-3.9-1.2-1.8-1.5-3.9-1.5-6.3v-.3zm53.1 0c0 2.4-.6 4.5-1.5 6.3-1.2 1.8-2.4 3.3-4.5 4.2-1.8.9-3.9 1.5-6.3 1.5h-1.2c-3.9 0-7.2-1.2-9.6-3.6-2.4-2.4-3.6-5.4-3.6-8.7v-.3c0-2.4.6-4.5 1.5-6.3 1.2-1.8 2.7-3 4.5-4.2 1.8-.9 3.9-1.5 6.3-1.5h.6c3.9 0 7.2 1.2 9.6 3.6 2.4 2.4 3.6 5.4 3.6 8.7v.3zm-8.1-.3c0-1.5-.3-2.7-1.2-3.6-.9-.9-2.1-1.5-3.6-1.5-1.5 0-2.7.6-3.6 1.5-.9.9-1.2 2.1-1.2 3.6v.3c0 1.5.3 2.7 1.2 3.6.9.9 2.1 1.5 3.6 1.5 1.5 0 2.7-.6 3.6-1.5.9-.9 1.2-2.1 1.2-3.6v-.3zm14.1-9.9h8.1v1.8c1.8-1.5 3.9-2.4 6.6-2.4 2.7 0 4.8.9 6.3 2.7 1.5 1.8 2.4 4.2 2.4 7.2v12.3h-8.1V38.1c0-1.5-.3-2.4-.9-3.3-.6-.6-1.5-.9-2.7-.9-1.2 0-2.1.3-2.7.9-.6.6-.9 1.8-.9 3.3v15.3h-8.1V27.6zm54-3v28.8h-8.1v-1.8c-1.8 1.5-3.9 2.4-6.6 2.4-2.7 0-4.8-.9-6.3-2.7-1.5-1.8-2.4-4.2-2.4-7.2V31.8h8.1v12.3c0 1.5.3 2.7.9 3.3.6.6 1.5.9 2.7.9 1.2 0 2.1-.3 2.7-.9.6-.6.9-1.8.9-3.3V24.6h8.1zm13.5 3v2.4c1.8-2.1 4.2-3 7.2-3h1.5v7.8h-2.4c-1.8 0-3.3.3-4.2 1.2-.9.9-1.5 2.1-1.5 3.9v11.4h-8.1V27.6h7.5z"/>
            </svg>
            {/* Laravel */}
            <svg viewBox="0 0 24 24" className="h-5 w-auto" fill="#555">
              <path d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934c0 .135-.073.26-.188.326l-9.032 5.208a.35.35 0 01-.063.029c-.009.003-.018.009-.028.013a.37.37 0 01-.194 0c-.011-.004-.02-.01-.03-.014a.367.367 0 01-.063-.03L.533 18.755a.376.376 0 01-.189-.326V3.334c0-.034.005-.069.014-.1.003-.012.01-.022.014-.034a.352.352 0 01.023-.058c.007-.012.018-.022.027-.033a.389.389 0 01.034-.04c.01-.01.023-.017.035-.025a.376.376 0 01.04-.03L5.044.806a.37.37 0 01.377 0L9.934 3.02a.376.376 0 01.189.314v9.652l3.758-2.164V5.87c0-.034.005-.069.014-.1.004-.013.01-.023.015-.034a.352.352 0 01.023-.058c.007-.013.018-.023.028-.034a.348.348 0 01.033-.04c.01-.009.024-.016.036-.025a.376.376 0 01.04-.029l4.512-2.599a.375.375 0 01.377 0l4.513 2.6c.015.008.027.019.04.029.012.009.025.015.035.025z"/>
            </svg>
            {/* Angular */}
            <svg viewBox="0 0 24 24" className="h-5 w-auto" fill="#555">
              <path d="M12 2L3.5 5.5l1.3 11.2L12 22l7.2-5.3 1.3-11.2L12 2zm0 2.1l6.1 2.4-1 8.8L12 19.5l-5.1-4.2-1-8.8L12 4.1zm0 1.8L8.5 15h1.3l.7-1.8h3l.7 1.8h1.3L12 5.9zm0 3.2l1.1 2.9h-2.2L12 9.1z"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Outcomes — [CHANGED] dependency language */}
      <section className="bg-light-alt py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto flex flex-col gap-7">
          <h2 className="text-light-heading font-bold text-3xl md:text-4xl leading-tight tracking-tight">
            What you walk away with
          </h2>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex flex-col gap-3.5 flex-1">
              {outcomes.map((item) => (
                <p key={item} className="text-light-body text-base leading-relaxed">
                  ✓ {item}
                </p>
              ))}
            </div>

            {/* Blueprint mockup placeholder */}
            <div className="w-full md:w-80 h-64 md:h-auto shrink-0 rounded-2xl overflow-hidden relative bg-white border border-[#E5E5E5] flex items-center justify-center">
              <div className="flex flex-col items-center gap-3 p-6 text-center">
                <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="#1B5E3B" strokeWidth="1.5">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="14 2 14 8 20 8" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="16" y1="13" x2="8" y2="13" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="16" y1="17" x2="8" y2="17" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="10 9 9 9 8 9" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-light-heading font-semibold text-sm">
                  Your Business OS Blueprint
                </p>
                <p className="text-[#999] text-xs leading-relaxed">
                  A custom automation blueprint tailored to your business — ready to act on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Worth It */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
          <div className="flex-1 flex flex-col gap-7">
          <h2 className="text-light-heading font-bold text-3xl md:text-4xl leading-tight tracking-tight">
            Why this is worth it
          </h2>
          {/* [NEW] ROI hook */}
          <div className="flex flex-col items-start rounded-xl py-5 px-7 gap-1 bg-[#F0FAF5] border border-[#D1F0E2] max-w-md">
            <p className="text-light-heading font-semibold text-lg">
              Most clients free up 12–20 hours per week.
            </p>
            <p className="text-light-accent font-medium text-base">
              That&apos;s 2–3 full days back.
            </p>
          </div>
          <p className="text-light-body text-[17px] leading-7 max-w-2xl">
            If you free up 30–50% of your workload, that is not just &ldquo;a
            little more efficient.&rdquo; That is not just &ldquo;a little more
            free time.&rdquo;
          </p>
          <p className="text-light-heading font-medium text-[17px]">
            That is the difference between:
          </p>
          <div className="flex flex-col gap-2 max-w-lg">
            <p className="text-light-body text-base">
              — working 50 hours vs. 30
            </p>
            <p className="text-light-body text-base">
              — reacting all day vs. having time to plan
            </p>
            <p className="text-light-body text-base">
              — surviving vs. scaling
            </p>
          </div>
          <p className="text-light-body text-[17px] leading-7 max-w-2xl">
            If you currently work 40 hours per week, freeing up 30–50% means 12
            to 20 hours back. That&apos;s 2 to 3 full workdays.
          </p>
          <p className="text-light-heading font-medium text-[17px] max-w-2xl">
            You&apos;re redesigning how your business operates. That&apos;s the
            <span className="accent-underline-light"> real shift</span>.
          </p>
          </div>
          {/* Photo */}
          <div className="hidden md:block w-64 h-80 shrink-0 rounded-2xl overflow-hidden relative self-start sticky top-24">
            <Image
              src="/images/_MG_9599.jpg"
              alt="Marc Cornelius"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="bg-light-alt py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">
          <h2 className="text-light-heading font-bold text-3xl md:text-4xl leading-tight tracking-tight">
            Investment
          </h2>
          {/* [NEW] Clarity line */}
          <p className="text-light-heading font-medium text-lg text-center max-w-lg">
            This is not about saving a few hours.
            <br />
            This is about <span className="accent-underline-light">removing yourself as the bottleneck</span>.
          </p>

          <div className="w-full max-w-lg bg-white border border-[#E5E5E5] rounded-2xl p-12 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <p className="tracking-[0.04em] uppercase text-light-accent font-semibold text-[15px]">
                Your Business OS
              </p>
              <p className="text-light-heading font-bold text-5xl tracking-tight">
                €2.250
              </p>
              <p className="text-[#777] text-[15px]">One-time investment</p>
            </div>
            <div className="flex flex-col gap-3.5">
              {pricingFeatures.map((f) => (
                <p key={f} className="text-light-body text-[15px] leading-6">
                  ✓ {f}
                </p>
              ))}
            </div>
            <div className="w-full h-px bg-[#E5E5E5]" />
            <div className="flex flex-col gap-2.5">
              <p className="text-light-heading font-medium text-[15px] leading-6">
                50% credited toward implementation if you continue with
                StickyTooling.
              </p>
              <p className="text-[#777] text-sm leading-relaxed">
                For many Dutch businesses, up to 60% subsidy may apply.
              </p>
            </div>
            <CTAButton />
          </div>
        </div>
      </section>

      {/* Guarantee — dark for weight */}
      <section className="py-24 px-6 md:px-16 text-center bg-[#141414]">
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          <h2 className="text-dark-heading font-bold text-3xl tracking-tight">
            Zero-risk guarantee
          </h2>
          <p className="text-dark-heading font-semibold text-xl">
            If this isn&apos;t valuable, I&apos;ll refund you.
          </p>
          <p className="text-dark-body text-base leading-relaxed">
            I&apos;d rather lose money than waste your time.
          </p>
        </div>
      </section>

      {/* Scarcity — [CHANGED] more urgent */}
      <section className="bg-light-alt py-24 px-6 md:px-16 text-center">
        <div className="max-w-3xl mx-auto flex flex-col gap-5">
          <h2 className="text-light-heading font-bold text-3xl tracking-tight">
            I only take 1 client per week
          </h2>
          <p className="text-[#555] text-[17px] leading-7">
            That&apos;s 4 per month.
          </p>
          <p className="text-light-heading font-semibold text-base">
            Once it&apos;s booked, it&apos;s gone.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto flex flex-col gap-10">
          <h2 className="text-light-heading font-bold text-3xl md:text-4xl leading-tight tracking-tight">
            Frequently asked questions
          </h2>
          <Accordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA — [CHANGED] sharpened */}
      <section className="bg-[#111] py-24 px-6 md:px-16 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-7">
          <h2 className="text-dark-heading font-bold text-3xl md:text-[40px] leading-tight tracking-tight max-w-xl">
            If your business still depends on you, this is the fastest way to fix it.
          </h2>
          <CTAButton />
        </div>
      </section>
    </div>
  );
}
