import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';

export default async function AdventistArticlePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  
  return (
    <main>
      <Header locale={locale} />
      <article className="pt-40 pb-32">
        <Container>
          <header className="max-w-4xl mx-auto mb-20">
            <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">Adventist Heritage</h1>
          </header>
          <div className="max-w-3xl prose prose-xl font-serif leading-relaxed text-premium-dark/80">
            <p>Content for {slug}...</p>
          </div>
        </Container>
      </article>
      <Footer locale={locale} />
    </main>
  );
}
