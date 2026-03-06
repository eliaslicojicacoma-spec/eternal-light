'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe, Moon, Sun } from 'lucide-react';
import { Container } from './Container';
import { cn } from '@/utils/cn';
import { internationalConfig } from '@/config/internationalConfig';

export const Header = ({ locale }: { locale: string }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: `/${locale}/blog`, label: locale === 'pt' ? 'Blog' : 'Blog' },
    { href: `/${locale}/sociedade`, label: locale === 'pt' ? 'Sociedade' : 'Society' },
    { href: `/${locale}/adventist`, label: locale === 'pt' ? 'Adventista' : 'Adventist' },
    { href: `/${locale}/library`, label: locale === 'pt' ? 'Biblioteca' : 'Library' },
  ];

  const otherLocale = locale === 'en' ? 'pt' : 'en';
  const switchLocalePath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-4' : 'bg-transparent py-6'
      )}
    >
      <Container className="flex items-center justify-between">
        <div className="flex flex-col">
          <Link href={`/${locale}`} className="text-2xl font-serif font-bold tracking-tight text-premium-dark">
            EternalLight
          </Link>
          <span className="text-[10px] uppercase tracking-[0.2em] text-premium-accent font-medium">
            {locale === 'pt' ? 'Editorial Cristão' : 'Christian Editorial'}
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-premium-dark/70 hover:text-premium-dark transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Link
            href={switchLocalePath}
            className="hidden sm:flex items-center space-x-1 text-xs font-bold uppercase tracking-widest text-premium-dark/60 hover:text-premium-dark"
          >
            <Globe size={14} />
            <span>{otherLocale}</span>
          </Link>
          
          <button className="p-2 text-premium-dark/60 hover:text-premium-dark">
            <Moon size={20} />
          </button>

          <button
            className="md:hidden p-2 text-premium-dark"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-premium-dark z-[60] transition-transform duration-500 ease-in-out md:hidden',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-12">
            <span className="text-white font-serif text-2xl">EternalLight</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
              <X size={32} />
            </button>
          </div>

          <nav className="flex flex-col space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl font-serif text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-12 border-t border-white/10 flex flex-col space-y-6">
            <Link
              href={switchLocalePath}
              className="flex items-center space-x-2 text-white/60"
            >
              <Globe size={20} />
              <span className="uppercase tracking-widest font-bold">
                {locale === 'pt' ? 'Mudar para Inglês' : 'Switch to Portuguese'}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
