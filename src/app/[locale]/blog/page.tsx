import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { getArticles } from "@/content/blog/articles";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const articles = getArticles(locale);

  return (
    <main>
      <Header locale={locale} />

      <div className="bg-premium-cream pb-20 pt-40">
        <Container>
          <h1 className="mb-8 text-6xl font-serif">
            {locale === "pt" ? "Blog" : "Blog"}
          </h1>

          <p className="max-w-2xl text-xl text-premium-dark/60">
            {locale === "pt"
              ? "Nossas últimas reflexões e artigos."
              : "Our latest reflections and articles."}
          </p>
        </Container>
      </div>

      <section className="py-20">
        <Container>
          <BlogGrid articles={articles} locale={locale} />
        </Container>
      </section>

      <Footer locale={locale} />
    </main>
  );
}
