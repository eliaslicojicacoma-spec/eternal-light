import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';

export default async function ArticlePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  
  return (
    <main>
      <Header locale={locale} />
      <article className="pt-40 pb-32">
        <Container>
          <header className="max-w-4xl mx-auto text-center mb-20">
            <span className="text-xs font-bold uppercase tracking-widest text-premium-accent mb-6 block">Theology</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">The Eternal Light of Grace</h1>
            <div className="flex items-center justify-center space-x-4 text-xs font-bold uppercase tracking-widest text-premium-dark/40">
              <span>By Elias Lico</span>
              <span>•</span>
              <span>March 5, 2026</span>
            </div>
          </header>

          <div className="aspect-[21/9] rounded-3xl overflow-hidden mb-20">
            <img src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=80&w=2000" alt="Hero" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>

          <div className="max-w-3xl mx-auto prose prose-xl font-serif leading-relaxed text-premium-dark/80">
            <p className="text-2xl font-light italic mb-12">
              "In the beginning was the Word, and the Word was with God, and the Word was God."
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </Container>
      </article>
      <Footer locale={locale} />
    </main>
  );
}
