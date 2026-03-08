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
              <div className="overflow-hidden rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
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

              <h1 className="mb-4 text-5xl font-serif leading-tight text-premium-dark md:text-6xl">
                {book.title}
              </h1>

              <div className="mb-8 text-sm uppercase tracking-[0.15em] text-premium-dark/45">
                {book.author}
                {book.year ? ` · ${book.year}` : ""}
              </div>

              <p className="mb-10 text-2xl font-light italic leading-relaxed text-premium-dark/70">
                {book.excerpt}
              </p>

              <div className="mb-12 flex flex-col gap-4 sm:flex-row">
                <a
                  href={`/downloads/${book.slug}.pdf`}
                  className="inline-flex items-center justify-center rounded-2xl bg-premium-dark px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:opacity-90"
                >
                  {locale === "pt" ? "Baixar PDF" : "Download PDF"}
                </a>

                <a
                  href={`/reader/${book.slug}`}
                  className="inline-flex items-center justify-center rounded-2xl border border-premium-dark px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-premium-dark transition hover:bg-premium-dark hover:text-white"
                >
                  {locale === "pt" ? "Ler Online" : "Read Online"}
                </a>
              </div>

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
