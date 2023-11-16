import { Lato } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';

import Providers from './providers';
import { Navbar } from '@/components';

const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
});

export const metadata: Metadata = {
  title: 'Everyday Sneakers',
  description: 'One Sneaker for Eeach Day!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${lato.variable}`} data-theme='light'>
      <body>
        <Providers>
          <Navbar />
          <main className='min-h-screen'>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
