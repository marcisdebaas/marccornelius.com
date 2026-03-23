import type { Metadata } from "next";
import Link from "next/link";
import { ThankYouTracker } from "@/components/ui/ThankYouTracker";

export const metadata: Metadata = {
  title: "Thank You — Contact",
};

export default function ThankYouContactPage() {
  return (
    <>
      <ThankYouTracker event="contact_form_submit" />
      <section className="max-w-2xl mx-auto px-6 py-32 text-center">
        <h1 className="font-heading text-dark-heading text-4xl md:text-5xl leading-tight">
          Message sent!
        </h1>
        <p className="text-dark-body text-lg mt-6 leading-relaxed">
          Thanks for reaching out. I&apos;ll get back to you within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full py-3.5 px-8 bg-dark-accent text-dark-bg font-semibold text-base"
          >
            Back to home
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-full py-3.5 px-8 border border-dark-heading text-dark-heading font-medium text-base"
          >
            Read the blog
          </Link>
        </div>
      </section>
    </>
  );
}
