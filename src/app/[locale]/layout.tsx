import type { Metadata } from "next";
import "../globals.css";
import { languages, type Locale } from "@/i18n/settings";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "IMFSYS — Software Engineering & AI Solutions",
  description:
    "Software engineering and AI solutions for scalable products, intelligent analytics platforms and automation systems.",
  icons: {
    icon: "/assets/imfsys-logo.svg",
    shortcut: "/assets/imfsys-logo.svg",
    apple: "/assets/imfsys-logo.svg",
  },
};

export async function generateStaticParams() {
  return languages.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;

  return (
    <html lang={locale} className="antialiased">
      <body
        className="min-h-screen bg-black text-white font-sans"
        suppressHydrationWarning
      >
        <Navbar locale={locale} />
        <main>{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
