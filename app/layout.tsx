import './globals.css';
import Header from '@/app/components/Header';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Minimalist Portfolio & Gallery',
  description: 'Next.js App Router, TypeScript, and Tailwind CSS',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-zinc-900 min-h-screen flex flex-col font-sans selection:bg-zinc-900 selection:text-white antialiased">
        <Header />
        <main className="flex-grow">{children}</main>
        <footer className="py-12 border-t border-zinc-100 text-center text-xs text-zinc-400 tracking-widest uppercase">
        </footer>
      </body>
    </html>
  );
}