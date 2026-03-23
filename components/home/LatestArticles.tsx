"use client";

import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
}

export function LatestArticles({ posts }: { posts: Post[] }) {
  const { locale, t } = useI18n();
  const lp = locale === "nl" ? "/nl" : "";

  return (
    <section className="max-w-6xl mx-auto px-12 py-20">
      <p className="tracking-[0.12em] uppercase text-dark-accent font-medium text-[13px] text-center">
        {t("articles.subtitle")}
      </p>
      <h2 className="font-heading text-dark-heading text-3xl md:text-[2.5rem] leading-tight text-center mt-4 mb-14">
        {t("articles.title")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`${lp}/blog/${post.slug}`}
            className="bg-dark-card border border-dark-border rounded-xl overflow-hidden flex flex-col group hover:border-dark-accent/30 transition-colors"
          >
            {post.image && (
              <div className="relative w-full h-40">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-7 flex flex-col gap-3 flex-1">
              <p className="text-[#666] text-sm">{post.date}</p>
              <h3 className="font-heading text-dark-heading text-lg leading-snug group-hover:text-dark-accent transition-colors">
                {post.title}
              </h3>
              <p className="text-dark-body text-sm leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>
              <p className="text-dark-accent font-semibold text-sm mt-auto">
                {t("articles.read")} &rarr;
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
