import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';

export default async function LibraryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return (
    <main>
      <Header locale={locale} />
      <div className="pt-40 pb-20 bg-premium-cream">
        <Container>
          <h1 className="text-6xl font-serif mb-8">{locale === 'pt' ? 'Biblioteca' : 'Library'}</h1>
          <p className="text-xl text-premium-dark/60 max-w-2xl">
            {locale === 'pt' ? 'Uma coleção curada de literatura cristã.' : 'A curated collection of Christian literature.'}
          </p>
        </Container>
      </div>
      <section className="py-20">
        <Container>
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
             {[1,2,3,4,5,6,7,8,9,10].map(i => (
               <div key={i} className="group cursor-pointer">
                 <div className="aspect-[2/3] bg-premium-dark/5 rounded-lg mb-4 shadow-sm group-hover:shadow-xl transition-all duration-500 overflow-hidden">
                    <img src={`https://picsum.photos/seed/book${i}/400/600`} alt="Book" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                 </div>
                 <h3 className="font-serif text-lg mb-1">Book Title {i}</h3>
                 <p className="text-xs text-premium-dark/40 uppercase tracking-widest font-bold">Author Name</p>
               </div>
             ))}
           </div>
        </Container>
      </section>
      <Footer locale={locale} />
    </main>
  );
}
