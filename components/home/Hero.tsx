import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section>
      {/* Hero top */}
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-8 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 flex flex-col gap-4">
          <p className="tracking-[0.12em] uppercase text-dark-accent font-medium text-[13px]">
            AI Automation for Business Leaders
          </p>
          <h1 className="font-heading text-dark-heading text-4xl md:text-5xl leading-tight">
            Automate your business so you can lead it
          </h1>
        </div>
        <div className="w-52 h-52 md:w-64 md:h-64 shrink-0 rounded-2xl overflow-hidden relative">
          <Image
            src="/images/_MG_9611.jpg"
            alt="Marc Cornelius"
            fill
            className="object-cover"
            preload
          />
        </div>
      </div>

      {/* Hero body */}
      <div className="bg-[#2C2418] px-6 py-16">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          <p className="max-w-xl text-dark-body text-lg leading-7">
            I help CEOs and managers build smart automations that save hours
            every week — powered by Claude AI. Less busywork, more focus on what
            matters.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/book-a-call"
              className="inline-flex items-center justify-center rounded-full py-3.5 px-8 bg-dark-accent text-dark-bg font-semibold text-base transition-opacity hover:opacity-90"
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
      </div>
    </section>
  );
}
