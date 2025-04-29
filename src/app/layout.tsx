'use client'; // Keep this if Header or Footer uses client hooks

import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";

// Static metadata can be defined here. For dynamic, use generateMetadata.
// export const metadata: Metadata = {
//   title: 'PsycheSite - Escuela Profesional de Psicología',
//   description: 'Sitio web oficial de la Escuela Profesional de Psicología.',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* You can place static meta tags directly here */}
        <title>PsycheSite - Escuela Profesional de Psicología</title>
        <meta name="description" content="Sitio web oficial de la Escuela Profesional de Psicología." />
        {/* Add favicon link here if/when available */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </head>
      {/* Apply flex column layout to body to push footer down */}
      <body className="flex flex-col min-h-screen antialiased">
        <Header />
        {/* Make the main content area grow to fill available space */}
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
