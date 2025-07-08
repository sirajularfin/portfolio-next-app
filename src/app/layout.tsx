import type { Metadata } from 'next';

import DefaultHeader from '@/common/components/DefaultHeader/DefaultHeader';
import '@/styles/fonts.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Portfolio - Sirajul Arfin',
  description:
    'A software engineer specializing in web and mobile development. Explore my projects, skills, and experience.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          <DefaultHeader />
          {children}
        </main>
      </body>
    </html>
  );
}
