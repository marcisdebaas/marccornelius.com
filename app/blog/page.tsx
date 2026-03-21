import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";
import { NewsletterForm } from "@/components/ui/NewsletterForm";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical insights for service businesses that want to work less and grow more.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featured = posts.find((p) => p.featured) || posts[0];
  const recent = posts.filter((p) => p.slug !== featured?.slug);

  return (
    <>
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <p className="tracking-[0.12em] uppercase text-dark-accent font-medium text-[13px]">
          Blog
        </p>
        <h1 className="font-heading text-dark-heading text-4xl md:text-5xl leading-tight mt-3">
          Automation, systems, and getting your time back
        </h1>
        <p className="text-dark-body text-base mt-4 max-w-lg">
          Practical insights for service businesses that want to work less and
          grow more.
        </p>
      </section>

      {/* Featured article */}
      {featured && (
        <section className="max-w-6xl mx-auto px-6 pb-12">
          <Link
            href={`/blog/${featured.slug}`}
            className="block bg-dark-card rounded-2xl overflow-hidden group"
          >
            {featured.image && (
              <div className="relative w-full h-64 md:h-80">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-dark-accent font-semibold text-xs uppercase tracking-wider">
                  Featured
                </span>
                <span className="text-[#666] text-sm">{featured.date}</span>
              </div>
              <h2 className="font-heading text-dark-heading text-2xl md:text-3xl leading-snug group-hover:text-dark-accent transition-colors">
                {featured.title}
              </h2>
              <p className="text-dark-body text-sm mt-3 max-w-2xl">
                {featured.excerpt}
              </p>
              <p className="text-dark-accent font-semibold text-sm mt-4">
                Read article &rarr;
              </p>
            </div>
          </Link>
        </section>
      )}

      {/* Recent articles */}
      {recent.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <p className="tracking-[0.12em] uppercase text-dark-body font-medium text-[13px] mb-6">
            Recent Articles
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {recent.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-dark-card rounded-xl overflow-hidden group"
              >
                {post.image && (
                  <div className="relative w-full h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <p className="text-[#666] text-sm mb-2">{post.date}</p>
                  <h3 className="font-heading text-dark-heading text-lg leading-snug group-hover:text-dark-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-dark-body text-sm mt-2 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <p className="text-dark-accent font-semibold text-sm mt-3">
                    Read &rarr;
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="font-heading text-dark-heading text-3xl leading-tight mb-2">
          Get Timehacker in your inbox
        </h2>
        <p className="text-dark-body text-base mb-8">
          Practical automation tips for service businesses. Free, weekly, no
          fluff.
        </p>
        <NewsletterForm />
      </section>
    </>
  );
}
