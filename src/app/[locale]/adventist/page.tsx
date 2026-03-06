import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';

export default async function AdventistPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return (
    <main>
      <Header locale={locale} />
      <div className="pt-40 pb-20 bg-premium-cream">
        <Container>
          <h1 className="text-6xl font-serif mb-8">{locale === 'pt' ? 'Adventista' : 'Adventist'}</h1>
          <p className="text-xl text-premium-dark/60 max-w-2xl">
            {locale === 'pt' ? 'Patrimônio e teologia adventista.' : 'Adventist heritage and theology.'}
          </p>
        </Container>
      </div>
      <section className="py-20">
        <Container>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[1,2,3].map(i => (
               <div key={i} className="premium-card p-12 text-center">
                 <div className="w-20 h-20 bg-premium-accent/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <span className="text-premium-accent font-serif text-3xl">{i}</span>
                 </div>
                 <h3 className="text-2xl font-serif mb-4">Adventist Pillar {i}</h3>
                 <p className="text-premium-dark/60">A deep dive into the historical and theological foundations...</p>
               </div>
             ))}
           </div>
        </Container>
      </section>
      <Footer locale={locale} />
    </main>
  );
}
