import { internationalConfig } from '@/config/internationalConfig';
import { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'EternalLight',
  description: 'Premium Bilingual Christian Editorial Platform',
};

export async function generateStaticParams() {
  return internationalConfig.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  return (
    <html lang={locale}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
