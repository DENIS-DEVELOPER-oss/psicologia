import type {Metadata} from 'next';
// Removed Geist Sans import as it's not installed
// import { GeistSans } from 'geist/font/sans';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'PsycheSite - Escuela Profesional de Psicología',
  description: 'Sitio web oficial de la Escuela Profesional de Psicología.',
  icons: {
    // Consider adding a favicon later if needed
    // icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Removed GeistSans.variable from className
    <html lang="es">
      <body className="flex min-h-screen flex-col antialiased">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
