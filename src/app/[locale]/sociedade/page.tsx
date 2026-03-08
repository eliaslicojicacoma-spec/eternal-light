import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { societyCards } from "@/content/society/cards";

export default async function SocietyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main>
      <Header locale={locale} />

      <div className="bg-premium-cream pb-20 pt-40">
        <Container>
          <h1 className="mb-8 text-6xl font-serif">
            {locale === "pt" ? "Sociedade" : "Society"}
          </h1>

          <p className="max-w-2xl text-xl text-premium-dark/60">
            {locale === "pt"
              ? "Fé na praça pública."
              : "Faith in the public square."}
          </p>
        </Container>
      </div>

      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {societyCards.map((card) => (
              <Link
                key={card.slug}
                href={`/${locale}/sociedade/${card.slug}`}
                className="premium-card group overflow-hidden transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-12">
                  <h3 className="mb-4 text-3xl font-serif">{card.title}</h3>

                  <p className="mb-8 text-premium-dark/60">{card.desc}</p>

                  <span className="border-b border-premium-gold pb-1 text-xs font-bold uppercase tracking-widest">
                    {locale === "pt" ? "Ler mais" : "Read More"}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <Footer locale={locale} />
    </main>
  );
}
