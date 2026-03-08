import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { getBookBySlug } from "@/content/books/books";

export default async function LibraryBookPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  const book = getBookBySlug(locale, slug);

  if (!book) {
    notFound();
  }

  const paragraphs = book.description
    .trim()
    .split("\n")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <main>
      <Header locale={locale} />

      <article className="pb-32 pt-40">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[420px_minmax(0,1fr)] lg:items-start">
            <div>
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src={book.image}
                  alt={book.title}
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div>
              <div className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-premium-gold">
                {book.category}
              </div>

              <h1 className="mb-4 text-5xl font-serif leading-tight md:text-6xl">
                {book.title}
              </h1>

              <div className="mb-8 text-sm uppercase tracking-[0.15em] text-premium-dark/45">
                {book.author}
                {book.year ? ` · ${book.year}` : ""}
              </div>

              <p className="mb-10 text-2xl font-light italic leading-relaxed text-premium-dark/70">
                {book.excerpt}
              </p>

              <div className="prose prose-xl max-w-none font-serif leading-relaxed text-premium-dark/80">
                {paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </article>

      <Footer locale={locale} />
    </main>
  );
}
