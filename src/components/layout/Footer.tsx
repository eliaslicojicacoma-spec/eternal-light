import React from 'react';
import { Container } from './Container';
import Link from 'next/link';

export const Footer = ({ locale }: { locale: string }) => {
  return (
    <footer className="bg-premium-dark text-white py-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-serif mb-4">EternalLight</h2>
            <p className="text-white/60 max-w-md leading-relaxed">
              {locale === 'pt' 
                ? 'Uma plataforma editorial dedicada a explorar a fé, a cultura e a sociedade através de uma lente cristã premium.'
                : 'An editorial platform dedicated to exploring faith, culture, and society through a premium Christian lens.'}
            </p>
          </div>
          
          <div>
            <h3 className="text-xs uppercase tracking-widest font-bold mb-6 text-white/40">
              {locale === 'pt' ? 'Navegação' : 'Navigation'}
            </h3>
            <ul className="space-y-4 text-sm">
              <li><Link href={`/${locale}/blog`} className="hover:text-premium-gold transition-colors">Blog</Link></li>
              <li><Link href={`/${locale}/about`} className="hover:text-premium-gold transition-colors">{locale === 'pt' ? 'Sobre' : 'About'}</Link></li>
              <li><Link href={`/${locale}/subscribe`} className="hover:text-premium-gold transition-colors">{locale === 'pt' ? 'Inscrever-se' : 'Subscribe'}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest font-bold mb-6 text-white/40">
              {locale === 'pt' ? 'Legal' : 'Legal'}
            </h3>
            <ul className="space-y-4 text-sm">
              <li><Link href={`/${locale}/privacy`} className="hover:text-premium-gold transition-colors">{locale === 'pt' ? 'Privacidade' : 'Privacy'}</Link></li>
              <li><Link href={`/${locale}/terms`} className="hover:text-premium-gold transition-colors">{locale === 'pt' ? 'Termos' : 'Terms'}</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 tracking-widest uppercase font-medium">
          <p>© 2026 ETERNAL LIGHT. ALL RIGHTS RESERVED.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
