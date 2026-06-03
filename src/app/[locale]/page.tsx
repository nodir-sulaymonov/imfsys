import { Hero } from "@/components/Hero";
import { AboutIntro } from "@/components/AboutIntro";
import { Features } from "@/components/Features";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { TeamSection } from "@/components/TeamSection";
import { Integrations } from "@/components/Integrations";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { type Locale } from "@/i18n/settings";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;

  return (
    <>
      <Hero locale={locale} />
      <AboutIntro locale={locale} />
      <Features locale={locale} />
      <ServicesSection locale={locale} />
      <PortfolioSection locale={locale} />
      <TeamSection locale={locale} />
      <Integrations locale={locale} />
      <TestimonialsSection locale={locale} />
      <FAQ locale={locale} />
      <CTASection locale={locale} />
    </>
  );
}
