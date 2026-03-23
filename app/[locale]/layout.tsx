import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { I18nProvider } from "@/lib/i18n";
import { notFound } from "next/navigation";

const locales = ["en", "nl"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <I18nProvider initialLocale={locale as "en" | "nl"}>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </I18nProvider>
  );
}
