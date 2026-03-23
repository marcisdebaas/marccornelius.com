import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-12 pt-16 pb-20">
        {/* Top: heading + image */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
          <div className="flex-1 flex flex-col gap-2">
            <p className="tracking-[0.12em] uppercase text-dark-accent font-medium text-[13px] leading-4">
              AI Automation for Business Leaders
            </p>
            <h1 className="font-heading text-dark-heading text-4xl md:text-[48px] md:leading-[56px]">
              Automate your business so you can lead it
            </h1>
          </div>
          <div className="w-64 h-64 md:w-[400px] md:h-[400px] shrink-0 rounded-2xl overflow-hidden relative">
            <Image
              src="/images/_MG_9611.jpg"
              alt="Marc Cornelius"
              fill
              className="object-cover object-center"
              preload
            />
          </div>
        </div>

        {/* Body */}
        <p className="max-w-[520px] text-dark-body text-lg leading-7 mb-8">
          I help CEOs and managers build smart automations that save hours
          every week — powered by Claude AI. Less busywork, more focus on what
          matters.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/book-a-call"
            className="inline-flex items-center justify-center rounded-full py-3.5 px-8 bg-dark-accent text-[#141414] font-semibold text-base transition-opacity hover:opacity-90"
          >
            Let&apos;s automate together
          </Link>
          <Link
            href="#how-it-works"
            className="inline-flex items-center justify-center rounded-full py-3.5 px-8 border border-dark-heading text-dark-heading font-medium text-base transition-colors hover:bg-dark-heading/10"
          >
            See how it works
          </Link>
        </div>
      </div>
    </section>
  );
}
