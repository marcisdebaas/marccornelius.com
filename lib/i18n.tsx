"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Locale = "en" | "nl";

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const translations: Record<Locale, Record<string, string>> = {
  en: {
    // Navbar
    "nav.about": "About",
    "nav.aiOsSetup": "AI OS Setup",
    "nav.resources": "Resources",
    "nav.bookACall": "Book a Call",

    // Hero
    "hero.subtitle": "Automation for growing businesses",
    "hero.title": "Your team is great. Your systems aren't.",
    "hero.body": "I help businesses with 3–25 employees build systems that remove bottlenecks, reduce manual work, and let your team operate without everything going through you.",
    "hero.cta1": "Let's talk",
    "hero.cta2": "Read more about me",

    // What I Do
    "whatido.subtitle": "What I do",
    "whatido.title": "I build the systems your team is missing",
    "whatido.p1": "Your team is capable. But they're stuck in manual processes, duplicated work, and waiting for decisions that only you can make. That's not a people problem — it's a systems problem.",
    "whatido.p2a": "I map your operations, find the bottlenecks, and build automations that let your team move faster. From simple workflows to full operational systems — using tools like Make, Slack, and custom integrations.",
    "whatido.p3a": "For complex builds, I work with my software company",
    "whatido.p3b": "— where we develop custom tools, integrations, and platforms for businesses that have outgrown spreadsheets and manual processes.",
    "whatido.result": "The result: your team operates independently, your workload drops 30–50%, and your business stops depending on you for everything.",

    // How It Works
    "howitworks.subtitle": "How it works",
    "howitworks.title": "Three steps to a business that runs itself",
    "howitworks.step1.title": "We map",
    "howitworks.step1.desc": "I observe how your team actually works — the handoffs, the bottlenecks, the tasks that eat everyone's time.",
    "howitworks.step2.title": "I build",
    "howitworks.step2.desc": "I design and implement automations tailored to your workflows, your tools, and your team.",
    "howitworks.step3.title": "Your team scales",
    "howitworks.step3.desc": "Your people work faster, decisions flow without you, and your business runs with less friction.",

    // Services
    "services.aios.title": "Business OS",
    "services.aios.desc": "A 1-day deep dive into your operations. I map your workflows, identify bottlenecks, and deliver a clear automation blueprint your team can act on.",
    "services.aios.link": "Learn more",
    "services.automations.title": "Custom Automations",
    "services.automations.desc": "From client onboarding to reporting to internal handoffs — I build the systems that save your team hours every week.",
    "services.automations.link": "Get started",

    // About Me
    "aboutme.subtitle": "I'm Marc",
    "aboutme.title": "Pleasure to meet you",
    "aboutme.p1": "I run an automation consultancy and co-own StickyTooling, a software company that builds custom tools for businesses. I've helped teams across agencies, service businesses, and SaaS companies streamline their operations.",
    "aboutme.p2": "I believe most businesses don't need more people — they need better systems. I find the manual work your team shouldn't be doing, and I replace it with something that just works.",
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
    "cta.body": "Book a free call and let's look at what's slowing your team down — and what we can fix first.",
    "cta.button": "Book your free call",

    // Footer
    "footer.copyright": "© 2025 Marc Cornelius. All rights reserved.",
  },
  nl: {
    // Navbar
    "nav.about": "Over mij",
    "nav.aiOsSetup": "AI OS Setup",
    "nav.resources": "Tools",
    "nav.bookACall": "Plan een gesprek",

    // Hero
    "hero.subtitle": "Automatisering voor groeiende bedrijven",
    "hero.title": "Je team is goed. Je systemen niet.",
    "hero.body": "Ik help bedrijven met 3–25 medewerkers systemen bouwen die knelpunten wegnemen, handmatig werk verminderen en je team laten werken zonder dat alles via jou hoeft te lopen.",
    "hero.cta1": "Laten we praten",
    "hero.cta2": "Meer over mij",

    // What I Do
    "whatido.subtitle": "Wat ik doe",
    "whatido.title": "Ik bouw de systemen die je team mist",
    "whatido.p1": "Je team is capabel. Maar ze zitten vast in handmatige processen, dubbel werk en wachten op beslissingen die alleen jij kunt nemen. Dat is geen mensenprobleem — dat is een systeemprobleem.",
    "whatido.p2a": "Ik breng je werkprocessen in kaart, vind de knelpunten en bouw automatiseringen waarmee je team sneller kan werken. Van simpele workflows tot complete systemen — met tools als Make, Slack en maatwerk integraties.",
    "whatido.p3a": "Voor complexe projecten werk ik samen met mijn softwarebedrijf",
    "whatido.p3b": "— waar we op maat gemaakte tools, integraties en platformen bouwen voor bedrijven die spreadsheets en handmatige processen ontgroeid zijn.",
    "whatido.result": "Het resultaat: je team werkt zelfstandig, je werkdruk daalt 30–50% en je bedrijf stopt met alles van jou te laten afhangen.",

    // How It Works
    "howitworks.subtitle": "Hoe het werkt",
    "howitworks.title": "Drie stappen naar een bedrijf dat zichzelf draait",
    "howitworks.step1.title": "We brengen in kaart",
    "howitworks.step1.desc": "Ik observeer hoe je team echt werkt — de overdrachten, de knelpunten, de taken die ieders tijd opeten.",
    "howitworks.step2.title": "Ik bouw",
    "howitworks.step2.desc": "Ik ontwerp en implementeer automatiseringen op maat voor je workflows, tools en team.",
    "howitworks.step3.title": "Je team schaalt",
    "howitworks.step3.desc": "Je mensen werken sneller, beslissingen lopen zonder jou en je bedrijf draait met minder wrijving.",

    // Services
    "services.aios.title": "Business OS",
    "services.aios.desc": "Een 1-dag deep dive in je bedrijfsvoering. Ik breng je workflows in kaart, vind knelpunten en lever een helder automatiseringsplan waar je team mee aan de slag kan.",
    "services.aios.link": "Meer info",
    "services.automations.title": "Maatwerk Automatiseringen",
    "services.automations.desc": "Van klant-onboarding tot rapportages tot interne overdrachten — ik bouw de systemen die je team elke week uren besparen.",
    "services.automations.link": "Aan de slag",

    // About Me
    "aboutme.subtitle": "Ik ben Marc",
    "aboutme.title": "Aangenaam kennis te maken",
    "aboutme.p1": "Ik run een automatiseringsbureau en ben mede-eigenaar van StickyTooling, een softwarebedrijf dat maatwerk tools bouwt. Ik heb teams bij bureaus, dienstverleners en SaaS-bedrijven geholpen hun werkprocessen te stroomlijnen.",
    "aboutme.p2": "Ik geloof dat de meeste bedrijven geen extra mensen nodig hebben — ze hebben betere systemen nodig. Ik vind het handmatige werk dat je team niet zou moeten doen en vervang het door iets dat gewoon werkt.",
    "aboutme.link": "Ontdek meer over mijn reis",

    // Testimonials
    "testimonials.subtitle": "Vertrouwd door ondernemers",
    "testimonials.title": "Zij systematiseerden. Jij ook.",

    // Latest Articles
    "articles.subtitle": "Van de blog",
    "articles.title": "Laatste artikelen",
    "articles.read": "Lees",

    // Newsletter
    "newsletter.subtitle": "Gratis nieuwsbrief",
    "newsletter.title": "Ontvang Timehacker in je inbox",
    "newsletter.body": "Wekelijkse automatiseringstips, AI-tool reviews en productiviteitshacks voor ondernemers. Gratis, geen onzin.",

    // CTA
    "cta.title": "Klaar om jezelf als bottleneck te verwijderen?",
    "cta.body": "Plan een gratis gesprek en laten we kijken wat je team vertraagt — en wat we als eerste kunnen oplossen.",
    "cta.button": "Plan je gratis gesprek",

    // Footer
    "footer.copyright": "© 2025 Marc Cornelius. Alle rechten voorbehouden.",
  },
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children, initialLocale = "en" }: { children: ReactNode; initialLocale?: Locale }) {
  const locale = initialLocale;

  const setLocale = (_newLocale: Locale) => {
    // Navigation-based — handled by Navbar via router.push
  };

  const t = (key: string) => {
    return translations[locale][key] || key;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}
