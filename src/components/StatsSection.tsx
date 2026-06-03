import { getTranslation } from "@/i18n/server";
import { type Locale } from "@/i18n/settings";

const stats = [
  { key: "projects", value: "150+" },
  { key: "clients", value: "80+" },
  { key: "experience", value: "5+" },
  { key: "team", value: "40+" },
];

export async function StatsSection({ locale }: { locale: Locale }) {
  const { t } = await getTranslation(locale);

  return (
    <section className="py-12 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.key} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-gray-400">
                {t(`stats.${stat.key}`)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
