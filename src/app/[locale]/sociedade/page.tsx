import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';

export default async function SocietyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return (
    <main>
      <Header locale={locale} />
      <div className="pt-40 pb-20 bg-premium-cream">
        <Container>
          <h1 className="text-6xl font-serif mb-8">{locale === 'pt' ? 'Sociedade' : 'Society'}</h1>
          <p className="text-xl text-premium-dark/60 max-w-2xl">
            {locale === 'pt' ? 'Fé na praça pública.' : 'Faith in the public square.'}
          </p>
        </Container>
      </div>
      <section className="py-20">
        <Container>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             {[1,2,3,4].map(i => (
               <div key={i} className="premium-card overflow-hidden group">
                 <div className="aspect-video overflow-hidden">
                    <img src={`https://picsum.photos/seed/society${i}/1200/800`} alt="Society" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                 </div>
                 <div className="p-12">
                    <h3 className="text-3xl font-serif mb-4">Society Topic {i}</h3>
                    <p className="text-premium-dark/60 mb-8">Exploring the intersection of faith and modern culture...</p>
                    <button className="text-xs font-bold uppercase tracking-widest border-b border-premium-gold pb-1">Read More</button>
                 </div>
               </div>
             ))}
           </div>
        </Container>
      </section>
      <Footer locale={locale} />
    </main>
  );
}
