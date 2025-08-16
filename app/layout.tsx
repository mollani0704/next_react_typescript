import {Metadata} from 'next';
import './globals.css';
import MobileShell from '@/components/layout/MobileShell';
import {Toaster} from 'sonner';

export const metadata: Metadata = {
  title: 'HomeNiq Shop',
  description: 'Mobile e-commerce demo',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="bg-muted/30">
        <MobileShell>{children}</MobileShell>
        <Toaster richColors position="top-center" duration={2200} expand />
      </body>
    </html>
  );
}
