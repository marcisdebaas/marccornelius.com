import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export function LatestArticles() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section className="max-w-6xl mx-auto px-12 py-20">
      <p className="tracking-[0.12em] uppercase text-dark-accent font-medium text-[13px] text-center">
        From the blog
      </p>
      <h2 className="font-heading text-dark-heading text-3xl md:text-[2.5rem] leading-tight text-center mt-4 mb-14">
        Latest articles
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="bg-dark-card border border-dark-border rounded-xl p-7 flex flex-col gap-3 group"
          >
            <p className="text-[#666] text-sm">{post.date}</p>
            <h3 className="font-heading text-dark-heading text-lg leading-snug group-hover:text-dark-accent transition-colors">
              {post.title}
            </h3>
            <p className="text-dark-body text-sm leading-relaxed line-clamp-2">
              {post.excerpt}
            </p>
            <p className="text-dark-accent font-semibold text-sm mt-auto">
              Read &rarr;
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
