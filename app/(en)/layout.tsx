import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { I18nProvider } from "@/lib/i18n";

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <I18nProvider initialLocale="en">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </I18nProvider>
  );
}
