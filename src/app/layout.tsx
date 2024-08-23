import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import { DEFAULT_METADATA } from '@/constants/metadata';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = DEFAULT_METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster richColors position="bottom-center" closeButton visibleToasts={1} />
      </body>
    </html>
  );
}
