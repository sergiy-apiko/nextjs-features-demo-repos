import './globals.css';
import { Inter } from 'next/font/google';
import AppNavigation from '@/components/Navigation';
import { Metadata } from 'next';
import QueryProvider from '@/utils/query.provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Learn English by memoization',
  description: 'Ready to level up you english vocabulary',
  alternates: {
    canonical: 'http://localhost:3001',
  },
};

export default function RootLayout({
  children,
  modal,
  ...rest
}: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={' '}>
        <QueryProvider>
          <AppNavigation />
          <main className="p-8  container max-w-screen-xl">{children}</main>
        </QueryProvider>
        {modal}
      </body>
    </html>
  );
}
