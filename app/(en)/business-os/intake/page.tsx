import type { Metadata } from "next";
import { CalendlyEmbed } from "@/components/ui/CalendlyEmbed";

export const metadata: Metadata = {
  title: "Business OS Intake — See If We're the Right Fit",
  description:
    "Book a short intake call to see if the Business OS is right for your business. No commitment, no pressure.",
};

export default function BusinessOSIntakePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1A1A1A]">
        <div className="max-w-3xl mx-auto px-12 pt-20 pb-16 text-center">
          <p className="tracking-[0.12em] uppercase text-dark-accent font-medium text-[13px] mb-4">
            Business OS Intake
          </p>
          <h1 className="font-heading text-dark-heading text-3xl md:text-[40px] leading-tight mb-6">
            See if we&apos;re the right fit
          </h1>
          <p className="text-dark-body text-lg leading-7 max-w-xl mx-auto">
            A short conversation to understand your business, your bottlenecks,
            and whether the Business OS makes sense for you. No commitment, no
            pressure.
          </p>
        </div>
      </section>

      {/* Calendly */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <CalendlyEmbed url="https://calendly.com/marccornelius" />
      </section>

      {/* What to expect */}
      <section className="max-w-3xl mx-auto px-12 pb-20">
        <div className="bg-dark-card border border-dark-border rounded-2xl p-10">
          <h2 className="font-heading text-dark-heading text-2xl mb-6">
            What to expect
          </h2>
          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-4">
              <span className="flex items-center justify-center shrink-0 w-8 h-8 rounded-full bg-dark-accent text-dark-bg font-semibold text-sm">
                1
              </span>
              <div>
                <p className="text-dark-heading font-semibold text-base">
                  Your situation
                </p>
                <p className="text-dark-body text-sm leading-relaxed mt-1">
                  What does your business look like? How big is your team? Where
                  do you spend most of your time?
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex items-center justify-center shrink-0 w-8 h-8 rounded-full bg-dark-accent text-dark-bg font-semibold text-sm">
                2
              </span>
              <div>
                <p className="text-dark-heading font-semibold text-base">
                  Your bottlenecks
                </p>
                <p className="text-dark-body text-sm leading-relaxed mt-1">
                  Where does work get stuck? What depends on you that
                  shouldn&apos;t?
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex items-center justify-center shrink-0 w-8 h-8 rounded-full bg-dark-accent text-dark-bg font-semibold text-sm">
                3
              </span>
              <div>
                <p className="text-dark-heading font-semibold text-base">
                  Honest advice
                </p>
                <p className="text-dark-body text-sm leading-relaxed mt-1">
                  If the Business OS is a good fit, I&apos;ll explain how it
                  works. If it&apos;s not, I&apos;ll tell you that too.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
