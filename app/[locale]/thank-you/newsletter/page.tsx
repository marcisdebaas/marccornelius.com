import type { Metadata } from "next";
import Link from "next/link";
import { ThankYouTracker } from "@/components/ui/ThankYouTracker";

export const metadata: Metadata = {
  title: "Thank You — Newsletter",
};

export default function ThankYouNewsletterPage() {
  return (
    <>
      <ThankYouTracker event="newsletter_signup" />
      <section className="max-w-2xl mx-auto px-6 py-32 text-center">
        <h1 className="font-heading text-dark-heading text-4xl md:text-5xl leading-tight">
          You&apos;re in!
        </h1>
        <p className="text-dark-body text-lg mt-6 leading-relaxed">
          Check your inbox — your first Timehacker edition is on its way. In the
          meantime, here are some things you might enjoy:
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-full py-3.5 px-8 bg-dark-accent text-dark-bg font-semibold text-base"
          >
            Read the blog
          </Link>
          <Link
            href="/resources"
            className="inline-flex items-center justify-center rounded-full py-3.5 px-8 border border-dark-heading text-dark-heading font-medium text-base"
          >
            Explore resources
          </Link>
        </div>
      </section>
    </>
  );
}
