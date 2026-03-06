import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';

export default async function SubscribePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return (
    <main>
      <Header locale={locale} />
      <div className="pt-40 pb-20 bg-premium-dark text-white">
        <Container className="text-center">
          <h1 className="text-6xl font-serif mb-8">{locale === 'pt' ? 'Inscreva-se' : 'Subscribe'}</h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            {locale === 'pt' ? 'Receba nosso conteúdo editorial diretamente no seu e-mail.' : 'Get our editorial content delivered straight to your inbox.'}
          </p>
        </Container>
      </div>
      <section className="py-20">
        <Container>
          <div className="max-w-md mx-auto premium-card p-12">
            <form className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2">Email</label>
                <input type="email" className="w-full p-4 rounded-xl border border-black/10 focus:ring-2 focus:ring-premium-gold outline-none" placeholder="you@example.com" />
              </div>
              <button className="w-full bg-premium-dark text-white py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-premium-accent transition-colors">
                {locale === 'pt' ? 'Inscrever' : 'Subscribe'}
              </button>
            </form>
          </div>
        </Container>
      </section>
      <Footer locale={locale} />
    </main>
  );
}
