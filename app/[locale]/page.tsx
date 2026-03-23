import { Hero } from "@/components/home/Hero";
import { WhatIDo } from "@/components/home/WhatIDo";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Services } from "@/components/home/Services";
import { AboutMe } from "@/components/home/AboutMe";
import { Testimonials } from "@/components/home/Testimonials";
import { LatestArticles } from "@/components/home/LatestArticles";
import { NewsletterCTA } from "@/components/home/NewsletterCTA";
import { CTA } from "@/components/home/CTA";
import { getAllPosts } from "@/lib/blog";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <Hero />
      <WhatIDo />
      <HowItWorks />
      <Services />
      <AboutMe />
      <Testimonials />
      <LatestArticles posts={posts} />
      <NewsletterCTA />
      <CTA />
    </>
  );
}
