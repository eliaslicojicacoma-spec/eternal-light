import React from 'react';
import { Container } from '@/components/layout/Container';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ArrowRight, BookOpen, Users, Globe } from 'lucide-react';
import Link from 'next/link';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const content = {
    en: {
      heroTitle: "Illuminating Faith in a Modern World",
      heroSub: "Premium Christian Editorial",
      heroDesc: "Deep reflections on theology, culture, and the human experience.",
      featured: "Featured Articles",
      verseTitle: "Verse of the Day",
      sections: [
        { title: "Society", icon: Users, desc: "Faith in the public square", href: `/${locale}/sociedade` },
        { title: "Library", icon: BookOpen, desc: "Curated Christian literature", href: `/${locale}/library` },
        { title: "Global", icon: Globe, desc: "The church around the world", href: `/${locale}/blog` },
      ]
    },
    pt: {
      heroTitle: "Iluminando a Fé em um Mundo Moderno",
      heroSub: "Editorial Cristão Premium",
      heroDesc: "Reflexões profundas sobre teologia, cultura e a experiência humana.",
      featured: "Artigos em Destaque",
      verseTitle: "Versículo do Dia",
      sections: [
        { title: "Sociedade", icon: Users, desc: "Fé na praça pública", href: `/${locale}/sociedade` },
        { title: "Biblioteca", icon: BookOpen, desc: "Literatura cristã selecionada", href: `/${locale}/library` },
        { title: "Global", icon: Globe, desc: "A igreja ao redor do mundo", href: `/${locale}/blog` },
      ]
    }
  }[locale as 'en' | 'pt'];

  return (
    <main className="min-h-screen">
      <Header locale={locale} />
      
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Background"
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-premium-dark/60 via-premium-dark/40 to-white" />
        </div>

        <Container className="relative z-10 text-white">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.4em] mb-6 text-premium-gold">
              {content.heroSub}
            </span>
            <h1 className="text-5xl md:text-8xl font-serif leading-[1.1] mb-8">
              {content.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-12 max-w-xl">
              {content.heroDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href={`/${locale}/blog`}
                className="bg-white text-premium-dark px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs flex items-center justify-center hover:bg-premium-gold transition-colors"
              >
                {locale === 'pt' ? 'Explorar' : 'Explore'} <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Sections Grid */}
      <section className="py-32 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.sections.map((section, idx) => (
              <Link 
                key={idx}
                href={section.href}
                className="group p-12 rounded-3xl bg-premium-cream border border-black/5 hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <section.icon className="text-premium-accent mb-8 group-hover:scale-110 transition-transform duration-500" size={40} />
                <h3 className="text-3xl font-serif mb-4">{section.title}</h3>
                <p className="text-premium-dark/60 leading-relaxed mb-8">{section.desc}</p>
                <span className="text-[10px] font-bold uppercase tracking-widest flex items-center group-hover:text-premium-gold transition-colors">
                  {locale === 'pt' ? 'Ver Mais' : 'View More'} <ArrowRight className="ml-2" size={12} />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Verse Spotlight */}
      <section className="py-32 bg-premium-dark text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-premium-gold rounded-full blur-[120px]" />
        </div>
        
        <Container className="relative z-10 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.4em] mb-12 block text-premium-gold">
            {content.verseTitle}
          </span>
          <blockquote className="max-w-4xl mx-auto">
            <p className="text-4xl md:text-6xl font-serif italic leading-tight mb-12">
              "The Lord is my light and my salvation; whom shall I fear? The Lord is the stronghold of my life; of whom shall I be afraid?"
            </p>
            <cite className="text-sm uppercase tracking-widest font-bold not-italic text-white/60">
              Psalm 27:1
            </cite>
          </blockquote>
        </Container>
      </section>

      {/* Featured Articles */}
      <section className="py-32 bg-white">
        <Container>
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-premium-accent mb-4 block">Editorial</span>
              <h2 className="text-5xl font-serif">{content.featured}</h2>
            </div>
            <Link href={`/${locale}/blog`} className="text-xs font-bold uppercase tracking-widest border-b-2 border-premium-gold pb-2 hover:text-premium-gold transition-colors">
              {locale === 'pt' ? 'Ver Todos' : 'View All'}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[1, 2].map((i) => (
              <article key={i} className="group cursor-pointer">
                <div className="aspect-[16/10] overflow-hidden rounded-3xl mb-8">
                  <img 
                    src={`https://picsum.photos/seed/christian${i}/1200/800`} 
                    alt="Article" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-premium-cream px-3 py-1 rounded-full">Theology</span>
                  <span className="text-[10px] text-premium-dark/40 font-medium uppercase tracking-widest">March 5, 2026</span>
                </div>
                <h3 className="text-3xl font-serif mb-4 group-hover:text-premium-accent transition-colors leading-snug">
                  {locale === 'pt' ? 'A Beleza da Graça em Tempos de Incerteza' : 'The Beauty of Grace in Times of Uncertainty'}
                </h3>
                <p className="text-premium-dark/60 leading-relaxed line-clamp-2">
                  {locale === 'pt' 
                    ? 'Explorando como a fé cristã oferece uma âncora sólida quando o mundo ao nosso redor parece estar em constante mudança.'
                    : 'Exploring how Christian faith offers a solid anchor when the world around us seems to be in constant flux.'}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <Footer locale={locale} />
    </main>
  );
}
