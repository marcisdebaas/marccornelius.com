import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Accordion } from "@/components/ui/Accordion";

export const metadata: Metadata = {
  title: "Business OS — Cut 30–50% of Your Workload in 1 Day",
  description:
    "I map out exactly what to automate in your business, so you stop drowning in client work and finally get your time back.",
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

const sessionSteps = [
  {
    title: "Your current workflow",
    desc: "What happens from lead to delivery to support",
  },
  {
    title: "Your biggest time drains",
    desc: "Where you lose time, energy, and focus every week",
  },
  {
    title: "Where you can remove the most work immediately",
    desc: "What can be automated first for the fastest, highest-impact wins",
  },
  {
    title: "Your exact plan to remove yourself from the busywork",
    desc: "A written blueprint showing exactly what to automate, in what order, and how",
  },
];

const outcomes = [
  "A custom Business OS mapped to your business",
  "A clear overview of your biggest automation opportunities",
  "A prioritized roadmap of what to automate first",
  "Specific recommendations for workflows, tools, and structure",
  "A plan to reduce 30–50% of your workload in the short term",
  "Clarity on what to keep, what to remove, and what to delegate to systems",
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

const pricingFeatures = [
  "1-day Business OS mapping session",
  "Full written automation blueprint",
  "Prioritized action plan",
  "Custom recommendations for your workflow",
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
          {/* Left column: heading + body */}
          <div className="flex-1 flex flex-col gap-2">
            <p className="tracking-[0.12em] uppercase text-light-accent font-medium text-[13px] leading-4">
              AI OS Setup
            </p>
            <h1 className="font-inter text-light-heading font-bold text-4xl md:text-[48px] md:leading-[56px] tracking-tight mb-6">
              Cut 30–50% of Your Workload in 1 Day
            </h1>
            <p className="max-w-[520px] text-light-body font-inter text-[17px] leading-7 mb-8">
              I map out exactly what to automate in your business, so you stop
              drowning in client work and finally get your time back.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <CTAButton />
            </div>
            <p className="text-[#777] font-inter text-sm leading-relaxed max-w-md mt-3">
              For service businesses doing €5k–€20k/month that are stuck in
              client work and want more time, more structure, and less chaos.
            </p>
          </div>

          {/* Right column: image */}
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
            You do not need more clients. You need a Business OS.
          </h2>
          <p className="text-light-body text-[17px] leading-7 max-w-2xl">
            Most service businesses do not have a client problem. They have a
            systems problem.
          </p>
          <blockquote className="max-w-2xl pl-5 border-l-[3px] border-light-accent">
            <p className="text-light-heading font-semibold text-[19px] leading-7">
              More clients won&apos;t fix this.
              <br />
              They will make it worse.
            </p>
          </blockquote>
          <p className="text-light-body text-[17px] leading-7 max-w-2xl">
            The real bottleneck is the amount of manual work required to keep
            delivery, communication, and operations moving. That&apos;s what I
            fix.
          </p>
          <p className="text-light-body text-[17px] leading-7 max-w-2xl">
            In one day, I map your actual day-to-day operations and turn them
            into a clear automation blueprint:
          </p>
          <div className="flex flex-col gap-2 max-w-2xl">
            {[
              "what should be automated",
              "what should stay human",
              "what to prioritize first",
              "what tools to use",
              "how everything should work together",
            ].map((item) => (
              <p key={item} className="text-[#555] text-base leading-relaxed">
                — {item}
              </p>
            ))}
          </div>
          <p className="text-light-heading font-medium text-[17px] leading-7 max-w-2xl">
            You walk away with clarity, structure, and a step-by-step plan to
            remove yourself from the busywork.
          </p>
        </div>
      </section>

      {/* What It Is */}
      <section className="bg-light-alt py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto flex flex-col gap-7">
          <h2 className="text-light-heading font-bold text-3xl md:text-4xl leading-tight tracking-tight max-w-2xl">
            What is &ldquo;Your Business OS&rdquo;?
          </h2>
          <p className="text-light-body text-[17px] leading-7 max-w-2xl">
            Your Business OS is a productized 1-day session where I map out the
            most important parts of your business to automate.
          </p>
          <p className="text-light-body text-[17px] leading-7 max-w-2xl">
            I look over your shoulder, study how your business actually runs, and
            identify the highest-impact opportunities to save time and reduce
            manual work.
          </p>
          <p className="text-light-heading font-semibold text-[17px] leading-7 max-w-2xl">
            You walk away with a custom operating blueprint built around how your
            business actually works. Specific to you. Ready to act on.
          </p>
        </div>
      </section>

      {/* What Happens */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto flex flex-col gap-7">
          <h2 className="text-light-heading font-bold text-3xl md:text-4xl leading-tight tracking-tight max-w-2xl">
            What happens in your 1-day Business OS session
          </h2>
          <p className="text-light-body text-[17px] leading-7 max-w-2xl">
            During the session, I go through your real workflow with you. I look
            at how work enters your business, how it gets delivered, where
            communication breaks, where time gets wasted, and where manual
            repetition is slowing you down.
          </p>
          <p className="text-light-body font-medium text-[17px] leading-7">
            Together, I map:
          </p>
          <div className="flex flex-col gap-6 max-w-2xl">
            {sessionSteps.map((step, i) => (
              <div key={i} className="flex items-start gap-5">
                <span className="flex items-center justify-center shrink-0 w-9 h-9 rounded-full bg-dark-accent text-dark-bg font-semibold text-sm">
                  {i + 1}
                </span>
                <div>
                  <p className="text-light-heading font-semibold text-[17px] leading-6">
                    {step.title}
                  </p>
                  <p className="text-[#555] text-base leading-relaxed mt-1">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
          <p className="text-light-heading font-medium text-[17px] leading-7 max-w-2xl">
            In plain English: you&apos;ll know exactly what to automate first to
            get your time back fast.
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

          {/* Pricing card */}
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
            <p className="text-light-accent font-medium italic text-sm text-center">
              If you free up 30–50% of your workload, this pays for itself fast.
            </p>
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
            If this isn&apos;t valuable, you don&apos;t pay.
          </p>
          <p className="text-[#555] text-base leading-relaxed">
            You should leave with a clear, practical automation plan that saves
            you real hours. If you don&apos;t, I refund you fully.
          </p>
        </div>
      </section>

      {/* Scarcity */}
      <section className="bg-light-alt py-24 px-6 md:px-16 text-center">
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          <h2 className="text-light-heading font-bold text-3xl tracking-tight">
            Only 1 Business OS client per week
          </h2>
          <p className="text-[#555] text-[17px] leading-7">
            I only take 1 client per week. That&apos;s 4 per month.
          </p>
          <p className="text-[#555] text-[17px] leading-7">
            This is a deliberately small scale. Every client gets my full focus
            for an entire day. That&apos;s the only way this works.
          </p>
          <p className="text-light-heading font-medium text-base mt-2">
            Once a slot is booked, it&apos;s gone.
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
          <h2 className="text-dark-heading font-bold text-3xl md:text-[40px] leading-tight tracking-tight">
            Get your Business OS
          </h2>
          <p className="text-[#888] text-[17px] leading-7 max-w-xl">
            If your business is doing €5k–€20k/month and you&apos;re buried in
            manual work, this is the fastest way to see exactly what to automate
            first.
          </p>
          <CTAButton />
        </div>
      </section>
    </div>
  );
}
