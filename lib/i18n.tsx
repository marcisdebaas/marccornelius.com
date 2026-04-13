const translations: Record<string, string> = {
  // Navbar
  "nav.about": "About",
  "nav.aiOsSetup": "AI OS Setup",
  "nav.resources": "Resources",
  "nav.newsletter": "Newsletter",
  "nav.bookACall": "Book a Call",

  // Hero
  "hero.subtitle": "Automation for growing businesses",
  "hero.title": "Your team is great. Your systems aren't.",
  "hero.body": "I help businesses with 3\u201325 employees build systems that remove bottlenecks, reduce manual work, and let your team operate without everything going through you.",
  "hero.cta1": "Let's talk",
  "hero.cta2": "Read more about me",

  // What I Do
  "whatido.subtitle": "What I do",
  "whatido.title": "I build the systems your team is missing",
  "whatido.p1": "Your team is capable. But they're stuck in manual processes, duplicated work, and waiting for decisions that only you can make. That's not a people problem \u2014 it's a systems problem.",
  "whatido.p2a": "I map your operations, find the bottlenecks, and build automations that let your team move faster. From simple workflows to full operational systems \u2014 using tools like Make, Slack, and custom integrations.",
  "whatido.p3a": "For complex builds, I work with my software company",
  "whatido.p3b": "\u2014 where we develop custom tools, integrations, and platforms for businesses that have outgrown spreadsheets and manual processes.",
  "whatido.result": "The result: your team operates independently, your workload drops 30\u201350%, and your business stops depending on you for everything.",

  // How It Works
  "howitworks.subtitle": "How it works",
  "howitworks.title": "Three steps to a business that runs itself",
  "howitworks.step1.title": "We map",
  "howitworks.step1.desc": "I observe how your team actually works \u2014 the handoffs, the bottlenecks, the tasks that eat everyone's time.",
  "howitworks.step2.title": "I build",
  "howitworks.step2.desc": "I design and implement automations tailored to your workflows, your tools, and your team.",
  "howitworks.step3.title": "Your team scales",
  "howitworks.step3.desc": "Your people work faster, decisions flow without you, and your business runs with less friction.",

  // Services
  "services.aios.title": "Business OS",
  "services.aios.desc": "A 1-day deep dive into your operations. I map your workflows, identify bottlenecks, and deliver a clear automation blueprint your team can act on.",
  "services.aios.link": "Learn more",
  "services.automations.title": "Custom Automations",
  "services.automations.desc": "From client onboarding to reporting to internal handoffs \u2014 I build the systems that save your team hours every week.",
  "services.automations.link": "Get started",

  // About Me
  "aboutme.subtitle": "I'm Marc",
  "aboutme.title": "Pleasure to meet you",
  "aboutme.p1": "I run an automation consultancy and co-own StickyTooling, a software company that builds custom tools for businesses. I've helped teams across agencies, service businesses, and SaaS companies streamline their operations.",
  "aboutme.p2": "I believe most businesses don't need more people \u2014 they need better systems. I find the manual work your team shouldn't be doing, and I replace it with something that just works.",
  "aboutme.link": "Discover more about my journey",

  // Testimonials
  "testimonials.subtitle": "Trusted by business leaders",
  "testimonials.title": "They systematized. You can too.",

  // Latest Articles
  "articles.subtitle": "From the blog",
  "articles.title": "Latest articles",
  "articles.read": "Read",

  // Newsletter
  "newsletter.subtitle": "Free newsletter",
  "newsletter.title": "Get Timehacker in your inbox",
  "newsletter.body": "Weekly automation tips, AI tool reviews, and productivity hacks for business owners. Free, no fluff.",

  // CTA
  "cta.title": "Ready to remove yourself as the bottleneck?",
  "cta.body": "Book a free call and let's look at what's slowing your team down \u2014 and what we can fix first.",
  "cta.button": "Book your free call",

  // Footer
  "footer.copyright": "\u00a9 2025 Marc Cornelius. All rights reserved.",
};

export function useI18n() {
  return {
    locale: "en" as const,
    t: (key: string) => translations[key] || key,
  };
}
