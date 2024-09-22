import './globals.css';

import type { Metadata } from 'next';
import { bebas, sans } from './fonts';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import '@radix-ui/themes/styles.css';

export const metadata: Metadata = {
  title: 'Franquia Blocok',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${bebas.variable} ${sans.variable} scroll-smooth scroll-py-[80px]`}
    >
      <body className="font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
