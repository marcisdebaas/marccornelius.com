import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = allPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      {/* Header */}
      <section className="max-w-3xl mx-auto px-6 pt-12 pb-8 text-center">
        <Link
          href="/blog"
          className="text-dark-accent text-sm font-medium mb-4 inline-block"
        >
          &larr; Back to blog
        </Link>
        <p className="tracking-[0.12em] uppercase text-dark-accent font-medium text-[13px] mt-4">
          {post.category}
        </p>
        <h1 className="font-heading text-dark-heading text-3xl md:text-[2.5rem] leading-tight mt-4">
          {post.title}
        </h1>
        <p className="text-[#666] text-sm mt-4">
          Marc Cornelius &middot; {post.date} &middot; {post.readTime}
        </p>
      </section>

      {/* Hero image */}
      {post.image && (
        <div className="max-w-3xl mx-auto px-6 pb-8">
          <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}

      {/* Article content */}
      <article className="max-w-3xl mx-auto px-6 pb-16 prose prose-invert prose-lg prose-headings:font-heading prose-headings:text-dark-heading prose-p:text-dark-body prose-a:text-dark-accent prose-strong:text-dark-heading prose-li:text-dark-body">
        <MDXRemote source={post.content} />
      </article>

      {/* Newsletter CTA */}
      <section className="max-w-2xl mx-auto px-6 py-12 mb-12 bg-dark-card rounded-2xl text-center">
        <p className="tracking-[0.12em] uppercase text-dark-accent font-medium text-[13px]">
          Free Newsletter
        </p>
        <h2 className="font-heading text-dark-heading text-2xl leading-tight mt-3 mb-2">
          Get Timehacker in your inbox
        </h2>
        <p className="text-dark-body text-sm mb-6">
          Join 1,000+ marketeers who receive monthly automation tips, AI tool
          reviews, and productivity hacks. Free forever.
        </p>
        <NewsletterForm />
      </section>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <p className="tracking-[0.12em] uppercase text-dark-accent font-medium text-[13px] text-center">
            Keep Reading
          </p>
          <h2 className="font-heading text-dark-heading text-3xl leading-tight text-center mt-3 mb-10">
            More articles you&apos;ll enjoy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="group"
              >
                {r.image && (
                  <div className="relative w-full h-40 rounded-xl overflow-hidden mb-3">
                    <Image
                      src={r.image}
                      alt={r.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <h3 className="font-heading text-dark-heading text-lg group-hover:text-dark-accent transition-colors">
                  {r.title}
                </h3>
                <p className="text-[#666] text-sm mt-1">{r.date}</p>
                <p className="text-dark-accent font-semibold text-sm mt-2">
                  Read article &rarr;
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
