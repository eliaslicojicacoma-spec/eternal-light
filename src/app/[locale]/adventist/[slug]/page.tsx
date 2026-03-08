import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { getAdventistArticleBySlug } from "@/content/adventist/articles";

export default async function AdventistArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  const article = getAdventistArticleBySlug(locale, slug);

  if (!article) {
    notFound();
  }

  const paragraphs = article.content
    .trim()
    .split("\n")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <main>
      <Header locale={locale} />

      <article className="pb-32 pt-40">
        <Container>
          <header className="mx-auto mb-20 max-w-4xl">
            <div className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-premium-gold">
              {article.category}
            </div>

            <h1 className="mb-8 text-5xl font-serif leading-tight md:text-7xl">
              {article.title}
            </h1>

            <div className="text-sm text-premium-dark/50">
              {article.author} · {article.date}
            </div>
          </header>

          <div className="mx-auto mb-16 max-w-5xl overflow-hidden rounded-[2rem]">
            <img
              src={article.image}
              alt={article.title}
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="prose prose-xl mx-auto max-w-3xl font-serif leading-relaxed text-premium-dark/80">
            <p className="text-2xl text-premium-dark/65">{article.excerpt}</p>

            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </article>

      <Footer locale={locale} />
    </main>
  );
}
