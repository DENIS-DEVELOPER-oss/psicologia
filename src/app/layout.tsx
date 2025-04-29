
'use client'; // Keep this if Header or Footer uses client hooks

import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

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
  const pathname = usePathname();

  return (
    <html lang="es">
      <head>
        {/* You can place static meta tags directly here */}
        <title>Escuela Profesional de Psicología</title>
        <meta name="description" content="Sitio web oficial de la Escuela Profesional de Psicología." />
        {/* Add favicon link here if/when available */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </head>
      {/* Apply flex column layout to body to push footer down */}
      <body className="flex flex-col min-h-screen antialiased">
        <Header />
        {/* Make the main content area grow to fill available space */}
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname} // Key change triggers animation
              initial="initialState"
              animate="animateState"
              exit="exitState"
              transition={{
                duration: 0.5, // Adjust duration as needed
                ease: 'easeInOut',
              }}
              variants={{
                initialState: {
                  opacity: 0,
                  clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', // Optional: Add clip-path for reveal effect
                  // translateY: '20px', // Optional: Add slight vertical movement
                },
                animateState: {
                  opacity: 1,
                  clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
                 // translateY: '0px',
                },
                exitState: {
                  opacity: 0,
                  clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)', // Optional: Add clip-path for exit effect
                 // translateY: '-20px', // Optional: Add slight vertical movement on exit
                },
              }}
              className="base-page-size" // Optional class for styling
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
