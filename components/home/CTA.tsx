import Link from "next/link";

export function CTA() {
  return (
    <section className="bg-[#1A1A1A] py-20">
      <div className="max-w-xl mx-auto px-12 flex flex-col items-center gap-6 text-center">
        <h2 className="font-heading text-dark-heading text-3xl md:text-[2.5rem] leading-tight">
          Ready to get your time back?
        </h2>
        <p className="text-dark-body text-base leading-relaxed">
          Book a free call and let&apos;s explore what we can automate in your
          business — no strings attached.
        </p>
        <Link
          href="/book-a-call"
          className="inline-flex items-center justify-center rounded-full py-3.5 px-8 bg-dark-accent text-[#141414] font-semibold text-base transition-opacity hover:opacity-90"
        >
          Book your free call
        </Link>
      </div>
    </section>
  );
}
