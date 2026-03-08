import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { articles } from "@/content/blog/articles";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  const article = articles.find((item) => item.slug === slug);

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
          <header className="mx-auto mb-20 max-w-4xl text-center">
            <span className="mb-6 block text-xs font-bold uppercase tracking-widest text-premium-accent">
              {article.category}
            </span>

            <h1 className="mb-8 text-5xl font-serif leading-tight md:text-7xl">
              {article.title}
            </h1>

            <div className="flex items-center justify-center space-x-4 text-xs font-bold uppercase tracking-widest text-premium-dark/40">
              <span>{locale === "pt" ? "Por" : "By"} {article.author}</span>
              <span>•</span>
              <span>{article.date}</span>
            </div>
          </header>

          <div className="mb-20 aspect-[21/9] overflow-hidden rounded-3xl">
            <img
              src={article.image}
              alt={article.title}
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="prose prose-xl mx-auto max-w-3xl font-serif leading-relaxed text-premium-dark/80">
            <p className="mb-12 text-2xl font-light italic">{article.excerpt}</p>

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
