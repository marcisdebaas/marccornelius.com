import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Accordion } from "@/components/ui/Accordion";

export const metadata: Metadata = {
  title: "Business OS — Turn Your Business Into a System",
  description:
    "I map out exactly how your business actually operates, so your team can execute without everything going through you.",
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
  "Your team operates without constant input from you",
  "Fewer interruptions throughout your day",
  "Less decision fatigue",
  "Clear, documented workflows",
  "Reduced dependency on any single person",
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
            <h1 className="font-inter text-light-heading font-bold text-4xl md:text-[48px] md:leading-[56px] tracking-tight mb-6">
              Turn Your Business Into a System That Runs Without You
            </h1>
            <p className="max-w-[520px] text-light-body font-inter text-[17px] leading-7 mb-8">
              I map out exactly how your business actually operates, so your team
              can execute without everything going through you.
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

      {/* Signature line */}
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <blockquote className="border-l-[3px] border-light-accent pl-6">
            <p className="text-light-heading font-bold text-2xl md:text-3xl leading-snug tracking-tight italic">
              &ldquo;If everything depends on you, you don&apos;t have a system.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-light-alt py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto flex flex-col gap-7">
          <h2 className="text-light-heading font-bold text-3xl md:text-4xl leading-tight tracking-tight max-w-2xl">
            Your business works. But it still depends on you for everything.
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
          <div className="max-w-2xl">
            <p className="text-light-heading font-semibold text-xl leading-8">
              You&apos;re busy all day…
              <br />
              but you&apos;re not actually getting ahead.
            </p>
            <p className="text-light-heading font-semibold text-xl leading-8 mt-6">
              Everything still depends on you.
            </p>
            <p className="text-light-heading font-semibold text-xl leading-8 mt-6">
              And if you stop working, everything slows down.
            </p>
          </div>
        </div>
      </section>

      {/* Reframe */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto flex flex-col gap-7">
          <h2 className="text-light-heading font-bold text-3xl md:text-4xl leading-tight tracking-tight max-w-2xl">
            This is not a team problem
          </h2>
          <p className="text-light-body text-[17px] leading-7 max-w-2xl">
            It&apos;s a system problem.
          </p>
          <p className="text-light-heading font-medium text-[17px] leading-7 max-w-2xl">
            Once the structure is clear, your team doesn&apos;t need you for
            everything.
          </p>
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
            What they&apos;re missing is clarity on how their work actually flows.
          </p>
          <p className="text-light-body text-[17px] leading-7 max-w-2xl">
            Without that, automation just creates more complexity.
          </p>
          <p className="text-light-heading font-medium text-[17px] leading-7 max-w-2xl">
            Once the workflow is clear, the right systems become obvious.
          </p>
        </div>
      </section>

      {/* Shadowing */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto flex flex-col gap-7">
          <h2 className="text-light-heading font-bold text-3xl md:text-4xl leading-tight tracking-tight max-w-2xl">
            I don&apos;t ask. I watch.
          </h2>
          <div className="flex flex-col gap-5 max-w-2xl text-light-body text-[17px] leading-7">
            <p>Most people will ask how your business works.</p>
            <p>You&apos;ll explain it.</p>
            <p>And it will sound structured.</p>
            <p className="text-light-heading font-medium">
              But that&apos;s not how it actually runs.
            </p>
            <p>So I don&apos;t start with questions.</p>
            <p>I sit with you and your team.</p>
            <p>I watch how work actually happens.</p>
          </div>
          <div className="flex flex-col gap-2 max-w-2xl">
            <p className="text-[#555] text-base leading-relaxed">
              What gets copied.
            </p>
            <p className="text-[#555] text-base leading-relaxed">
              What gets repeated.
            </p>
            <p className="text-[#555] text-base leading-relaxed">
              Where things break.
            </p>
            <p className="text-[#555] text-base leading-relaxed">
              Where people get stuck.
            </p>
          </div>
          <p className="text-light-heading font-medium text-[17px] leading-7 max-w-2xl">
            That&apos;s where the real opportunities are.
          </p>
        </div>
      </section>

      {/* What I Look For */}
      <section className="bg-light-alt py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto flex flex-col gap-7">
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
            Once you see those patterns, the system becomes obvious.
          </p>
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
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-light-alt py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto flex flex-col gap-7">
          <h2 className="text-light-heading font-bold text-3xl md:text-4xl leading-tight tracking-tight">
            What you walk away with
          </h2>
          <div className="flex flex-col gap-3.5 max-w-2xl">
            {outcomes.map((item) => (
              <p key={item} className="text-light-body text-base leading-relaxed">
                ✓ {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Why Worth It */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto flex flex-col gap-7">
          <h2 className="text-light-heading font-bold text-3xl md:text-4xl leading-tight tracking-tight">
            Why this is worth it
          </h2>
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
            real shift.
          </p>
        </div>
      </section>

      {/* Investment */}
      <section className="bg-light-alt py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">
          <h2 className="text-light-heading font-bold text-3xl md:text-4xl leading-tight tracking-tight">
            Investment
          </h2>
          <div className="flex flex-col items-center rounded-xl py-6 px-8 gap-2 bg-[#F0FAF5] border border-[#D1F0E2]">
            <p className="text-light-heading font-semibold text-xl text-center">
              Most clients free up 12–20 hours per week.
            </p>
            <p className="text-light-accent font-medium text-[17px] text-center">
              That&apos;s 2–3 full days back.
            </p>
          </div>

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

      {/* Guarantee */}
      <section className="py-24 px-6 md:px-16 text-center">
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          <h2 className="text-light-heading font-bold text-3xl tracking-tight">
            Zero-risk guarantee
          </h2>
          <p className="text-light-heading font-medium text-lg">
            If this isn&apos;t valuable, I&apos;ll refund you.
          </p>
          <p className="text-[#555] text-base leading-relaxed">
            I&apos;d rather lose money than waste your time.
          </p>
        </div>
      </section>

      {/* Scarcity */}
      <section className="bg-light-alt py-24 px-6 md:px-16 text-center">
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          <h2 className="text-light-heading font-bold text-3xl tracking-tight">
            I only take 1 client per week
          </h2>
          <p className="text-light-heading font-medium text-base mt-2">
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

      {/* Final CTA */}
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
