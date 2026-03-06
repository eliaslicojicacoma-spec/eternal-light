import { internationalConfig } from '@/config/internationalConfig';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={internationalConfig.defaultLocale}>
      <body>{children}</body>
    </html>
  );
}
