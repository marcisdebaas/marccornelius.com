import type { Metadata } from "next";
import Image from "next/image";
import { NewsletterForm } from "@/components/ui/NewsletterForm";

export const metadata: Metadata = {
  title: "Timehacker Newsletter",
  description:
    "Get Timehacker for free in your inbox right now. Monthly productivity & automation hacks.",
};

const features = [
  {
    title: "AI Tool Reviews",
    desc: "Honest breakdowns of tools that actually save time — no fluff, no affiliate hype.",
  },
  {
    title: "Automation Playbooks",
    desc: "Step-by-step guides to automate repetitive tasks with Claude, n8n, and more.",
  },
  {
    title: "Productivity Hacks",
    desc: "Practical tips from running my own business — things that actually move the needle.",
  },
];

export default function NewsletterPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12 flex flex-col md:flex-row items-start gap-12">
        <div className="flex-1">
          <p className="tracking-[0.12em] uppercase text-dark-accent font-medium text-[13px]">
            Productivity &amp; automation hacks straight to your e-mail
          </p>
          <h1 className="font-heading text-dark-heading text-4xl md:text-5xl leading-tight mt-3">
            Get Timehacker for free in your inbox right now
          </h1>
          <p className="text-dark-body text-base leading-relaxed mt-6 max-w-lg">
            Join over 1,000+ savvy marketeers who benefit from this FREE
            inspirational newsletter! Receive monthly updates on the best tools,
            hacks and tips to boost your productivity.
          </p>
        </div>
        <div className="w-64 h-64 shrink-0 rounded-2xl overflow-hidden relative">
          <Image
            src="/images/_MG_9656.jpg"
            alt="Marc Cornelius"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Signup form */}
      <section className="max-w-xl mx-auto px-6 pb-16">
        <div className="bg-dark-card border border-dark-border rounded-2xl p-8">
          <NewsletterForm />
        </div>
      </section>

      {/* What's inside */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <p className="tracking-[0.12em] uppercase text-dark-accent font-medium text-[13px]">
          What&apos;s inside
        </p>
        <h2 className="font-heading text-dark-heading text-3xl md:text-[2.5rem] leading-tight mt-4 mb-14">
          Every edition packed with value
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-dark-card border border-dark-border rounded-xl p-7 text-left"
            >
              <h3 className="text-dark-heading font-semibold text-base mb-3">
                {f.title}
              </h3>
              <p className="text-dark-body text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
