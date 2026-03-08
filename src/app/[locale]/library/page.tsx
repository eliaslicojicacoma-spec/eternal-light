import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { getBooks } from "@/content/books/books";

export default async function LibraryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const books = getBooks(locale);

  return (
    <main>
      <Header locale={locale} />

      <div className="bg-premium-cream pb-20 pt-40">
        <Container>
          <h1 className="mb-8 text-6xl font-serif">
            {locale === "pt" ? "Biblioteca" : "Library"}
          </h1>

          <p className="max-w-2xl text-xl text-premium-dark/60">
            {locale === "pt"
              ? "Uma coleção curada de literatura cristã."
              : "A curated collection of Christian literature."}
          </p>
        </Container>
      </div>

      <section className="py-20">
        <Container>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 xl:grid-cols-4">
            {books.map((book) => (
              <Link
                key={book.slug}
                href={`/${locale}/library/${book.slug}`}
                className="group block"
              >
                <div className="mb-4 aspect-[3/4] overflow-hidden rounded-2xl">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <h3 className="text-xl font-serif text-premium-dark">
                  {book.title}
                </h3>

                <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-premium-dark/40">
                  {book.author}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <Footer locale={locale} />
    </main>
  );
}
