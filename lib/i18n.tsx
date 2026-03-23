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
    "hero.subtitle": "AI Automation for Business Leaders",
    "hero.title": "Automate your business so you can lead it",
    "hero.body": "I help CEOs and managers build smart automations that save hours every week — powered by Claude AI. Less busywork, more focus on what matters.",
    "hero.cta1": "Let's automate together",
    "hero.cta2": "Read more about me",

    // What I Do
    "whatido.subtitle": "What I do",
    "whatido.title": "I help business owners stop doing work a machine should do",
    "whatido.p1": "Most service businesses are stuck in a loop: more clients means more manual work. More onboarding emails, more reports, more invoices, more follow-ups — all done by hand, every single time.",
    "whatido.p2a": "I step in, map your day-to-day operations, and actually build the automations — from simple workflows to complex systems. Using Claude AI and tools like Make, Slack, and Google Ads Scripts, I create systems that handle the repetitive work so you can focus on strategy, clients, and growth.",
    "whatido.p3a": "For larger builds, I work together with my software company",
    "whatido.p3b": "— where we develop custom tools, integrations, and full automation platforms for businesses that need more than off-the-shelf solutions.",
    "whatido.result": "The result: 30–50% less manual work. More time. Less chaos.",

    // How It Works
    "howitworks.subtitle": "How it works",
    "howitworks.title": "Three steps to a smarter business",
    "howitworks.step1.title": "We talk",
    "howitworks.step1.desc": "I sit down with you to understand your workflows, bottlenecks, and where time disappears.",
    "howitworks.step2.title": "I build",
    "howitworks.step2.desc": "I design and set up custom automations using Claude AI — tailored to your team and tools.",
    "howitworks.step3.title": "You scale",
    "howitworks.step3.desc": "Your team works faster, you reclaim hours every week, and your business runs on autopilot.",

    // Services
    "services.aios.title": "AI OS Setup",
    "services.aios.desc": "A full AI operating system built around your company. I work with you 1-on-1 to integrate Claude into every layer of your business.",
    "services.aios.link": "Learn more",
    "services.automations.title": "Custom Automations",
    "services.automations.desc": "From content pipelines to reporting workflows — I build automations that save your team hours every single week.",
    "services.automations.link": "Get your automations",

    // About Me
    "aboutme.subtitle": "I'm Marc",
    "aboutme.title": "Pleasure to meet you",
    "aboutme.p1": "Since childhood, I've always sought faster, better methods, cultivating my efficiency. I manage an automation company and hold shares in an affiliate website and a marketing agency.",
    "aboutme.p2": "Additionally, I co-own a software company focused on automation. Despite the workload, automation makes it all manageable. Does this sound like a dream to you?",
    "aboutme.link": "Discover more about my journey",

    // Testimonials
    "testimonials.subtitle": "Trusted by business leaders",
    "testimonials.title": "They automated. You can too.",

    // Latest Articles
    "articles.subtitle": "From the blog",
    "articles.title": "Latest articles",
    "articles.read": "Read",

    // CTA
    "cta.title": "Ready to get your time back?",
    "cta.body": "Book a free call and let's explore what we can automate in your business — no strings attached.",
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
    "hero.subtitle": "AI-automatisering voor ondernemers",
    "hero.title": "Automatiseer je bedrijf zodat jij kunt ondernemen",
    "hero.body": "Ik help CEO's en managers slimme automatiseringen bouwen die elke week uren besparen — aangedreven door Claude AI. Minder handwerk, meer focus op wat ertoe doet.",
    "hero.cta1": "Laten we automatiseren",
    "hero.cta2": "Meer over mij",

    // What I Do
    "whatido.subtitle": "Wat ik doe",
    "whatido.title": "Ik help ondernemers stoppen met werk dat een machine hoort te doen",
    "whatido.p1": "De meeste dienstverlenende bedrijven zitten vast in een lus: meer klanten betekent meer handmatig werk. Meer onboarding-mails, meer rapporten, meer facturen, meer opvolgingen — allemaal met de hand, elke keer opnieuw.",
    "whatido.p2a": "Ik stap in, breng je dagelijkse werkzaamheden in kaart, en bouw de automatiseringen — van simpele workflows tot complexe systemen. Met Claude AI en tools als Make, Slack en Google Ads Scripts maak ik systemen die het repetitieve werk overnemen, zodat jij je kunt richten op strategie, klanten en groei.",
    "whatido.p3a": "Voor grotere projecten werk ik samen met mijn softwarebedrijf",
    "whatido.p3b": "— waar we op maat gemaakte tools, integraties en volledige automatiseringsplatformen ontwikkelen voor bedrijven die meer nodig hebben dan standaardoplossingen.",
    "whatido.result": "Het resultaat: 30–50% minder handmatig werk. Meer tijd. Minder chaos.",

    // How It Works
    "howitworks.subtitle": "Hoe het werkt",
    "howitworks.title": "Drie stappen naar een slimmer bedrijf",
    "howitworks.step1.title": "We praten",
    "howitworks.step1.desc": "Ik ga met je zitten om je workflows, knelpunten en tijdverspilling te begrijpen.",
    "howitworks.step2.title": "Ik bouw",
    "howitworks.step2.desc": "Ik ontwerp en bouw automatiseringen op maat met Claude AI — afgestemd op jouw team en tools.",
    "howitworks.step3.title": "Jij schaalt",
    "howitworks.step3.desc": "Je team werkt sneller, je wint uren per week terug en je bedrijf draait op automatische piloot.",

    // Services
    "services.aios.title": "AI OS Setup",
    "services.aios.desc": "Een compleet AI-besturingssysteem rondom jouw bedrijf. Ik werk 1-op-1 met je om Claude in elke laag van je bedrijf te integreren.",
    "services.aios.link": "Meer info",
    "services.automations.title": "Maatwerk Automatiseringen",
    "services.automations.desc": "Van contentpipelines tot rapportage-workflows — ik bouw automatiseringen die je team elke week uren besparen.",
    "services.automations.link": "Automatiseer nu",

    // About Me
    "aboutme.subtitle": "Ik ben Marc",
    "aboutme.title": "Aangenaam kennis te maken",
    "aboutme.p1": "Sinds mijn jeugd zoek ik altijd naar snellere, betere methodes. Ik run een automatiseringsbedrijf en heb aandelen in een affiliate website en een marketingbureau.",
    "aboutme.p2": "Daarnaast ben ik mede-eigenaar van een softwarebedrijf gericht op automatisering. Ondanks de werkdruk maakt automatisering alles beheersbaar. Klinkt dat als een droom?",
    "aboutme.link": "Ontdek meer over mijn reis",

    // Testimonials
    "testimonials.subtitle": "Vertrouwd door ondernemers",
    "testimonials.title": "Zij automatiseerden. Jij ook.",

    // Latest Articles
    "articles.subtitle": "Van de blog",
    "articles.title": "Laatste artikelen",
    "articles.read": "Lees",

    // CTA
    "cta.title": "Klaar om je tijd terug te winnen?",
    "cta.body": "Plan een gratis gesprek en laten we verkennen wat we kunnen automatiseren in jouw bedrijf — vrijblijvend.",
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
