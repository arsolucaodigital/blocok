import './globals.css';

import type { Metadata } from 'next';
import { bebas, sans } from './fonts';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import '@radix-ui/themes/styles.css';

export const metadata: Metadata = {
  title: 'Franquia Blocok',
  description:
    'O BLOCOK ORIGINAL é um sistema construtivo revolucionário de paredes prontas. Composto por placas cimentícias e EPS industrial, oferece alta resistência e conforto termoacústico.',
  keywords:
    'Blocok, paredes prontas, sistema construtivo, EPS industrial, antichama, termoacústico, resistência, conforto',
  robots: 'index, follow',
  authors: [{ name: 'Franquia Blocok', url: 'https://franquiablocok.com.br' }],
  openGraph: {
    title: 'Franquia Blocok',
    description:
      'O BLOCOK ORIGINAL é um sistema construtivo revolucionário de paredes prontas. Composto por placas cimentícias e EPS industrial, oferece alta resistência e conforto termoacústico.',
    url: 'https://franquiablocok.com.br',
  },
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
