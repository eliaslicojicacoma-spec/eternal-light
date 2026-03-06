import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return (
    <main>
      <Header locale={locale} />
      <div className="pt-40 pb-20 bg-premium-cream">
        <Container>
          <h1 className="text-6xl font-serif mb-8">{locale === 'pt' ? 'Sobre Nós' : 'About Us'}</h1>
        </Container>
      </div>
      <section className="py-20">
        <Container>
          <div className="max-w-3xl prose prose-lg">
            <p className="text-xl leading-relaxed text-premium-dark/80">
              EternalLight is a premium editorial platform...
            </p>
          </div>
        </Container>
      </section>
      <Footer locale={locale} />
    </main>
  );
}
