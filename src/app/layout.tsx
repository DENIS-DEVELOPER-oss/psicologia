'use client'; // Add this directive if using client-side hooks like useState or useEffect in Header/Footer if needed, or if styled-jsx is implicitly used.

import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";

// Metadata definition should ideally be static or generated via generateMetadata
// If dynamic metadata is needed based on client-side state, reconsider approach.
// export const metadata: Metadata = {
//   title: 'PsycheSite - Escuela Profesional de Psicología',
//   description: 'Sitio web oficial de la Escuela Profesional de Psicología.',
//   icons: {
//     // Consider adding a favicon later if needed
//     // icon: "/favicon.ico",
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Metadata can be placed here directly or generated */}
        <title>PsycheSite - Escuela Profesional de Psicología</title>
        <meta name="description" content="Sitio web oficial de la Escuela Profesional de Psicología." />
        {/* Add favicon link here if available */}
      </head>
      <body className="flex min-h-screen flex-col antialiased">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
