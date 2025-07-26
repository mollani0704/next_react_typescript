import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-gray-50">
        <div className="w-full min-h-screen flex justify-center bg-gray-50">
          <div className="w-full min-w-[320px] max-w-[420px] min-h-screen flex flex-col bg-white shadow-md border-x b-rder-gray-200">
            <Header />
            <main className="flex-1 px-2 pb-16 pt-2">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
