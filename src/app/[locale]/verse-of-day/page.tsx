import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';

export default async function VerseOfDayPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return (
    <main>
      <Header locale={locale} />
      <div className="min-h-screen flex items-center justify-center bg-premium-cream pt-20">
        <Container className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.4em] mb-12 block text-premium-accent">
            {locale === 'pt' ? 'Versículo do Dia' : 'Verse of the Day'}
          </span>
          <blockquote className="max-w-4xl mx-auto">
            <p className="text-4xl md:text-7xl font-serif italic leading-tight mb-12">
              "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life."
            </p>
            <cite className="text-sm uppercase tracking-widest font-bold not-italic text-premium-dark/40">
              John 3:16
            </cite>
          </blockquote>
          <div className="mt-20">
            <button className="bg-premium-dark text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-premium-accent transition-colors">
              {locale === 'pt' ? 'Compartilhar' : 'Share'}
            </button>
          </div>
        </Container>
      </div>
      <Footer locale={locale} />
    </main>
  );
}
