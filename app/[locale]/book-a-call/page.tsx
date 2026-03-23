import type { Metadata } from "next";
import Image from "next/image";
import { CalendlyEmbed } from "@/components/ui/CalendlyEmbed";

export const metadata: Metadata = {
  title: "Book a Call",
  description:
    "30 minutes to explore how AI can save you hours every week. No strings attached.",
};

const steps = [
  {
    num: "1",
    title: "Your day-to-day",
    desc: "We talk about your business, your workflows, and where time gets lost.",
  },
  {
    num: "2",
    title: "Quick wins",
    desc: "I'll show you which tasks can be automated right away — and how.",
  },
  {
    num: "3",
    title: "Next steps",
    desc: "If it's a fit, we discuss how the AI OS Blueprint works. If not, no pressure.",
  },
];

export default function BookACallPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12 flex flex-col md:flex-row items-start gap-12">
        <div className="flex-1">
          <p className="tracking-[0.12em] uppercase text-dark-accent font-medium text-[13px]">
            Let&apos;s talk automation
          </p>
          <h1 className="font-heading text-dark-heading text-4xl md:text-5xl leading-tight mt-3">
            Book your free discovery call
          </h1>
          <p className="text-dark-body text-base leading-relaxed mt-6 max-w-md">
            30 minutes to explore how AI can save you hours every week. No
            strings attached, no sales pitch — just an honest conversation.
          </p>
        </div>
        <div className="w-64 h-64 shrink-0 rounded-2xl overflow-hidden relative">
          <Image
            src="/images/_MG_9611.jpg"
            alt="Marc Cornelius"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Calendly embed */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <CalendlyEmbed url="https://calendly.com/marccornelius/discovery-call" />
      </section>

      {/* What to expect */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <p className="tracking-[0.12em] uppercase text-dark-accent font-medium text-[13px]">
          What to expect
        </p>
        <h2 className="font-heading text-dark-heading text-3xl md:text-[2.5rem] leading-tight mt-4 mb-14">
          A relaxed 30-minute conversation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-dark-card rounded-xl p-8 flex flex-col gap-4 text-left"
            >
              <span className="font-heading text-dark-border text-5xl leading-none">
                {step.num}
              </span>
              <h3 className="text-dark-heading font-semibold text-[17px]">
                {step.title}
              </h3>
              <p className="text-dark-body text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
