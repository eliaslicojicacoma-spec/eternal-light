import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { getAdventistCards } from "@/content/adventist/cards";

export default async function AdventistPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const cards = getAdventistCards(locale);

  return (
    <main>
      <Header locale={locale} />

      <div className="bg-premium-cream pb-20 pt-40">
        <Container>
          <h1 className="mb-8 text-6xl font-serif">
            {locale === "pt" ? "Adventista" : "Adventist"}
          </h1>

          <p className="max-w-2xl text-xl text-premium-dark/60">
            {locale === "pt"
              ? "Patrimônio e teologia adventista."
              : "Adventist heritage and theology."}
          </p>
        </Container>
      </div>

      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            {cards.map((card, index) => (
              <Link
                key={card.slug}
                href={`/${locale}/adventist/${card.slug}`}
                className="premium-card p-12 text-center transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-premium-accent/10">
                  <span className="text-3xl font-serif text-premium-accent">
                    {index + 1}
                  </span>
                </div>

                <h3 className="mb-4 text-2xl font-serif">{card.title}</h3>
                <p className="mb-8 text-premium-dark/60">{card.desc}</p>

                <span className="border-b border-premium-gold pb-1 text-xs font-bold uppercase tracking-widest">
                  {locale === "pt" ? "Ler mais" : "Read More"}
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <Footer locale={locale} />
    </main>
  );
}
