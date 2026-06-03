import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "../globals.css";
import { languages, type Locale } from "@/i18n/settings";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "imfsys — Technology-driven Business Solutions",
  description:
    "Creating latest solutions that redefine innovation. Stay ahead with AI-powered technology for the future.",
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
    <html lang={locale} className={`${dmSans.variable} antialiased`}>
      <body className="min-h-screen bg-black text-white font-sans">
        <Navbar locale={locale} />
        <main>{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
