import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { getBookBySlug } from "@/content/books/books";

export default async function ReadBookPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  const book = getBookBySlug(locale, slug);

  if (!book) {
    notFound();
  }

  return (
    <main>
      <Header locale={locale} />

      <article className="pb-32 pt-40">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-premium-gold">
              {book.category}
            </div>

            <h1 className="mb-4 text-5xl font-serif leading-tight text-premium-dark dark:text-white md:text-6xl">
              {book.title}
            </h1>

            <div className="mb-10 text-sm uppercase tracking-[0.15em] text-premium-dark/45 dark:text-white/50">
              {book.author}
              {book.year ? ` · ${book.year}` : ""}
            </div>

            <div className="mb-10 flex flex-wrap gap-4">
              <Link
                href={`/${locale}/library/${book.slug}`}
                className="inline-flex items-center justify-center rounded-2xl border border-premium-dark px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-premium-dark transition hover:bg-premium-dark hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
              >
                {locale === "pt" ? "Voltar ao livro" : "Back to book"}
              </Link>

              <a
                href={book.pdfPath}
                download
                className="inline-flex items-center justify-center rounded-2xl bg-premium-dark px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:opacity-90 dark:bg-white dark:text-black"
              >
                {locale === "pt" ? "Baixar PDF" : "Download PDF"}
              </a>
            </div>

            <div className="premium-card p-8 md:p-10">
              <div className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-premium-gold">
                {locale === "pt" ? "Leitura online" : "Online reading"}
              </div>

              <div className="space-y-5 text-lg leading-8 text-premium-dark/80 dark:text-white/80">
                <p>
                  {locale === "pt"
                    ? "A leitura completa dentro do site será adicionada na próxima fase. Por enquanto, usa o botão de baixar PDF para abrir o livro completo."
                    : "Full in-site reading will be added in the next phase. For now, use the download PDF button to open the complete book."}
                </p>

                <p>{book.excerpt}</p>
              </div>
            </div>
          </div>
        </Container>
      </article>

      <Footer locale={locale} />
    </main>
  );
}
