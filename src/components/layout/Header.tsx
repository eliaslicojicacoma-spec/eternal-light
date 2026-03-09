"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe } from "lucide-react";
import { Container } from "./Container";
import { cn } from "@/utils/cn";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

type HeaderProps = {
  locale: string;
};

export function Header({ locale }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isPt = locale === "pt";
  const otherLocale = isPt ? "en" : "pt";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = useMemo(
    () => [
      { href: `/${locale}/blog`, label: isPt ? "Blog" : "Blog" },
      { href: `/${locale}/sociedade`, label: isPt ? "Sociedade" : "Society" },
      { href: `/${locale}/adventist`, label: isPt ? "Adventista" : "Adventist" },
      { href: `/${locale}/library`, label: isPt ? "Biblioteca" : "Library" },
    ],
    [locale, isPt]
  );

  const switchLocalePath = useMemo(() => {
    if (!pathname) {
      return isPt ? "/en" : "/pt";
    }

    if (pathname === `/${locale}`) {
      return `/${otherLocale}`;
    }

    if (pathname.startsWith(`/${locale}/`)) {
      return pathname.replace(`/${locale}`, `/${otherLocale}`);
    }

    return `/${otherLocale}`;
  }, [pathname, locale, otherLocale, isPt]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
          isScrolled
            ? "border-b border-black/5 bg-white/90 py-4 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-[#0a0a0b]/85"
            : "bg-white/85 py-6 backdrop-blur-md dark:bg-[#0a0a0b]/70"
        )}
      >
        <Container className="flex items-center justify-between">
          <div className="flex flex-col">
            <Link
              href={`/${locale}`}
              className="text-[2.1rem] font-semibold leading-none tracking-tight text-premium-dark dark:text-white"
            >
              EternalLight
            </Link>

            <span className="mt-2 text-[0.78rem] font-medium uppercase tracking-[0.32em] text-premium-gold dark:text-white/65">
              {isPt ? "Editorial Cristão" : "Christian Editorial"}
            </span>
          </div>

          <nav className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-premium-dark/75 transition-colors hover:text-premium-dark dark:text-white/75 dark:hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            <Link
              href={switchLocalePath}
              className="hidden items-center space-x-1 rounded-full border border-premium-dark/10 px-3 py-2 text-xs font-bold uppercase tracking-widest text-premium-dark/65 shadow-sm transition hover:bg-black/[0.03] hover:text-premium-dark dark:border-white/10 dark:text-white/70 dark:hover:bg-white/5 dark:hover:text-white sm:inline-flex"
            >
              <Globe size={14} />
              <span>{otherLocale.toUpperCase()}</span>
            </Link>

            <ThemeToggle />

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setIsMobileMenuOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-premium-dark/10 text-premium-dark shadow-sm transition hover:bg-black/[0.03] dark:border-white/10 dark:text-white dark:hover:bg-white/5 md:hidden"
            >
              <Menu size={24} />
            </button>
          </div>
        </Container>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[60] bg-[#0a0a0b] transition-transform duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex h-full flex-col p-8">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <div className="text-3xl font-semibold leading-none tracking-tight text-white">
                EternalLight
              </div>
              <div className="mt-2 text-[0.78rem] font-medium uppercase tracking-[0.32em] text-white/60">
                {isPt ? "Editorial Cristão" : "Christian Editorial"}
              </div>
            </div>

            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition hover:bg-white/5"
            >
              <X size={26} />
            </button>
          </div>

          <nav className="flex flex-col space-y-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl font-serif text-white/85 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto border-t border-white/10 pt-10">
            <div className="flex items-center justify-between gap-4">
              <Link
                href={switchLocalePath}
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center space-x-2 text-white/70 transition hover:text-white"
              >
                <Globe size={18} />
                <span className="text-xs font-bold uppercase tracking-widest">
                  {isPt ? "Mudar para Inglês" : "Switch to Portuguese"}
                </span>
              </Link>

              <div className="shrink-0">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
                }
