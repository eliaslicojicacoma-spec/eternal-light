import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return (
    <main>
      <Header locale={locale} />
      <div className="pt-40 pb-20 bg-premium-cream">
        <Container>
          <h1 className="text-6xl font-serif mb-8">Blog</h1>
          <p className="text-xl text-premium-dark/60 max-w-2xl">
            {locale === 'pt' ? 'Nossas últimas reflexões e artigos.' : 'Our latest reflections and articles.'}
          </p>
        </Container>
      </div>
      <section className="py-20">
        <Container>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {/* Placeholder for blog grid */}
             {[1,2,3,4,5,6].map(i => (
               <div key={i} className="premium-card p-8">
                 <div className="aspect-video bg-premium-dark/5 rounded-xl mb-6" />
                 <h3 className="text-2xl font-serif mb-4">Article Title {i}</h3>
                 <div className="h-4 w-full bg-premium-dark/5 rounded mb-2" />
                 <div className="h-4 w-2/3 bg-premium-dark/5 rounded" />
               </div>
             ))}
           </div>
        </Container>
      </section>
      <Footer locale={locale} />
    </main>
  );
}
