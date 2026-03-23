import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Services } from "@/components/home/Services";
import { AboutMe } from "@/components/home/AboutMe";
import { Testimonials } from "@/components/home/Testimonials";
import { LatestArticles } from "@/components/home/LatestArticles";
import { CTA } from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Services />
      <AboutMe />
      <Testimonials />
      <LatestArticles />
      <CTA />
    </>
  );
}
