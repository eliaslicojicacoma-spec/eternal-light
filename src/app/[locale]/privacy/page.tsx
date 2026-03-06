import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return (
    <main>
      <Header locale={locale} />
      <div className="pt-40 pb-20">
        <Container>
          <h1 className="text-4xl font-serif mb-8">{locale === 'pt' ? 'Política de Privacidade' : 'Privacy Policy'}</h1>
          <div className="prose max-w-none">
            <p>Your privacy is important to us...</p>
          </div>
        </Container>
      </div>
      <Footer locale={locale} />
    </main>
  );
}
