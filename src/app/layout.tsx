import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { internationalConfig } from "@/config/internationalConfig";

export const metadata: Metadata = {
  title: "EternalLight",
  description: "Premium bilingual Christian editorial platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={internationalConfig.defaultLocale}
      suppressHydrationWarning
    >
      <body className="bg-white text-premium-dark transition-colors duration-300 dark:bg-[#0a0a0b] dark:text-white">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
