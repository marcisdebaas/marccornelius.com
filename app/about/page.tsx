import type { Metadata } from "next";
import Image from "next/image";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { LatestArticles } from "@/components/home/LatestArticles";

export const metadata: Metadata = {
  title: "About",
  description:
    "Marketing automations, investing & above all, entrepreneurship. Learn about Marc Cornelius.",
};

const timelinePeriods = [
  {
    period: "2007 – 2009",
    title: 'YouTube "career" as teenager',
    image: "/images/_MG_9599.jpg",
    paragraphs: [
      "I was introduced to entrepreneurship at an early age (16), when as a teenager I invented loopholes within games and made YouTube videos about them. Although these videos were extremely popular and generated significant income, I also experienced the downside of online fame. This experience taught me about the impact of online negativity, and eventually I decided to quit.",
    ],
    imageRight: false,
  },
  {
    period: "2009 – 2016",
    title: "Study & experience",
    image: "/images/_MG_9621.jpg",
    paragraphs: [
      "After this experience, I pushed entrepreneurship aside. I decided to focus on school first. Went quite well. I finished my master's degree in Computer Communications in Groningen. Straight after, I started working at a marketing agency, where I gained business experience. There I learned the ropes of SEO, SEA and project management.",
    ],
    imageRight: true,
  },
  {
    period: "2018 – 2023",
    title: "Blood flows where it can not go",
    image: "/images/_MG_9649.jpg",
    paragraphs: [
      "Pretty soon, I found myself in a kind of rut during this job. I wasn't learning anything new, and my desire to do things my way was growing by the day. I wanted to have control over my work. I wanted clients to be helped my way. Continuous accountability? Nope!",
      "However, the step to start for myself seemed too big. After all, no one around me was an entrepreneur. The mere thought of it terrified me. Until I met someone at the gym who was an entrepreneur. He shared his experiences with me and began to encourage me to go my own way.",
      "Thanks to his encouragement and his promise to help me find clients, the idea of starting for myself began to feel less scary. In fact, I made the move in March 2018. I started calling and building people in my network, and the positive feedback I received boosted my confidence. Best choice ever...",
    ],
    imageRight: false,
  },
  {
    period: "2024 –",
    title: "What intrigues me now",
    image: "/images/_MG_0044.jpg",
    paragraphs: [
      "Nowadays I call myself a solopreneur. I started building Google Ads campaigns for clients in 2018. Automations have always been the motor during this journey and helped me achieve way more in fewer time, and with more fun.",
      'This resulted into my choice to start building automations for marketers & agencies. Also, I am an investor in TinyLivingLife.com and Localium.com. I also wrote a book on productivity "Hack Your Time".',
      "Of course, there were mistakes and setbacks along the way, but these only contributed to my growth and success. Now I enjoy the freedom of running my own business and do things I enjoy.",
    ],
    imageRight: true,
  },
];

const tabPeriods = [
  { label: "2007 – 2009", anchor: "period-2007" },
  { label: "2009 – 2016", anchor: "period-2009" },
  { label: "2016 – 2023", anchor: "period-2018" },
  { label: "NOW", anchor: "period-2024" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
        <p className="tracking-[0.12em] uppercase text-dark-accent font-semibold text-[13px]">
          Marketing automations, investing &amp; above all, entrepreneurship
        </p>
        <h1 className="font-heading text-dark-heading text-5xl md:text-[56px] leading-tight mt-5 tracking-tight">
          Hi there!
        </h1>
        <p className="max-w-xl mx-auto text-dark-body text-base leading-relaxed mt-5">
          Since I was 14, I&apos;ve been looking for ways to do more in less
          time. Then it was on YouTube, now it&apos;s all over the internet. I
          love creating automations. First for my own business. Now it&apos;s
          time to share my automations with everyone.
        </p>
      </section>

      {/* Timeline header */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-4 text-center">
        <p className="tracking-[0.12em] uppercase text-dark-accent font-medium text-[13px]">
          Tracking through history
        </p>
        <h2 className="font-heading text-dark-heading text-3xl md:text-[2.5rem] leading-tight mt-4">
          A trip down memory lane
        </h2>
      </section>

      {/* Timeline tabs */}
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex justify-between border-t border-dark-accent pt-4">
          {tabPeriods.map((t) => (
            <a key={t.anchor} href={`#${t.anchor}`} className="text-dark-heading font-semibold text-sm hover:text-dark-accent transition-colors">
              {t.label}
            </a>
          ))}
        </div>
      </div>

      {/* Timeline periods */}
      <section className="max-w-6xl mx-auto px-6">
        {timelinePeriods.map((p, i) => (
          <div
            key={p.period}
            id={tabPeriods[i].anchor}
            className={`scroll-mt-24 flex flex-col ${
              p.imageRight ? "md:flex-row-reverse" : "md:flex-row"
            } items-start gap-10 py-10`}
          >
            <div className="w-60 h-45 shrink-0 rounded-xl overflow-hidden relative">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 flex flex-col gap-3">
              <p className="text-[#666666] font-semibold text-[13px]">
                {p.period}
              </p>
              <h3 className="font-heading text-dark-heading text-2xl tracking-tight">
                {p.title}
              </h3>
              {p.paragraphs.map((text, i) => (
                <p key={i} className="text-dark-body text-sm leading-relaxed">
                  {text}
                </p>
              ))}
            </div>
          </div>
        ))}
      </section>

      <LatestArticles />

      {/* Newsletter CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <p className="tracking-[0.12em] uppercase text-dark-accent font-medium text-[13px]">
          Productivity &amp; automation hacks straight to your e-mail
        </p>
        <h2 className="font-heading text-dark-heading text-3xl md:text-[2.5rem] leading-tight mt-4 mb-2">
          Get Timehacker for free in your inbox right now
        </h2>
        <p className="text-dark-body text-base mb-8">
          Join over 1,000+ savvy marketeers who benefit from this FREE
          inspirational newsletter!
        </p>
        <div className="max-w-xl mx-auto bg-dark-card border border-dark-border rounded-2xl p-8">
          <NewsletterForm variant="full" />
        </div>
      </section>
    </>
  );
}
