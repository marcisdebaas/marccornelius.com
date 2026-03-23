import Image from "next/image";
import Link from "next/link";

export function AboutMe() {
  return (
    <section className="max-w-6xl mx-auto px-12 py-20">
      <div className="relative flex flex-col md:flex-row items-stretch">
        {/* Image */}
        <div className="relative w-full md:w-[420px] h-[400px] md:h-[500px] shrink-0 rounded-2xl overflow-hidden z-10">
          <Image
            src="/images/_MG_9656.jpg"
            alt="Marc Cornelius"
            fill
            className="object-cover object-top"
          />
        </div>

        {/* Text card overlapping image */}
        <div className="relative md:-ml-16 mt-[-60px] md:mt-auto md:self-end bg-dark-card rounded-2xl border border-dark-border p-10 flex-1 z-20">
          <p className="tracking-[0.12em] uppercase text-dark-accent font-semibold text-[13px] mb-2">
            I&apos;m Marc
          </p>
          <h2 className="font-heading text-dark-heading text-3xl md:text-[2rem] leading-tight mb-5">
            Pleasure to meet you
          </h2>
          <p className="text-dark-body text-base leading-7 mb-4">
            Since childhood, I&apos;ve always sought faster, better methods,
            cultivating my efficiency. I manage an automation company and hold
            shares in an affiliate website and a marketing agency.
          </p>
          <p className="text-dark-body text-base leading-7 mb-6">
            Additionally, I co-own a software company focused on automation.
            Despite the workload, automation makes it all manageable. Does this
            sound like a dream to you?
          </p>
          <Link
            href="/about"
            className="text-dark-heading font-semibold text-base hover:text-dark-accent transition-colors"
          >
            Discover more about my journey
          </Link>
        </div>
      </div>
    </section>
  );
}
