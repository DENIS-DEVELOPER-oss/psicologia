'use client';

import Link from 'next/link';
import { GraduationCap, Menu, X, School } from 'lucide-react'; // Added School icon for Admisión
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import * as React from 'react';

const navItems = [
  { href: '/', label: 'Inicio' },
  { href: '/about', label: 'Nosotros' },
  { href: '/faculty', label: 'Docentes' },
  { href: '/programs', label: 'Programas' },
  { href: '/news', label: 'Noticias y Eventos' },
  { href: '/contact', label: 'Contacto' },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm transition-shadow duration-300 hover:shadow-md">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
          <GraduationCap className="h-7 w-7 text-primary transition-transform duration-300 group-hover:rotate-[-15deg]" />
          <span className="font-bold text-lg text-primary transition-colors duration-300 group-hover:text-primary/80">PsycheSite</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'transition-colors duration-200 hover:text-primary relative after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full',
                pathname === item.href ? 'text-primary font-semibold after:w-full' : 'text-foreground/60'
              )}
            >
              {item.label}
            </Link>
          ))}
           <Button asChild className="transition-transform duration-300 hover:scale-105 hover:shadow-md">
             <Link href="/contact?action=apply">
                <School className="mr-2 h-4 w-4" /> Admisión {/* Changed text and added icon */}
             </Link>
           </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b">
                 <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                    <GraduationCap className="h-6 w-6 text-primary" />
                    <span className="font-bold text-md text-primary">PsycheSite</span>
                  </Link>
                <SheetClose asChild>
                   <Button variant="ghost" size="icon">
                      <X className="h-5 w-5" />
                      <span className="sr-only">Cerrar menú</span>
                    </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col gap-4 p-4">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        'block rounded-md p-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground',
                        pathname === item.href ? 'bg-accent text-accent-foreground' : 'text-foreground'
                      )}
                    >
                      {item.label}
                    </Link>
                   </SheetClose>
                ))}
                 <SheetClose asChild>
                   <Button asChild className="mt-4 w-full">
                     <Link href="/contact?action=apply">
                       <School className="mr-2 h-4 w-4" /> Admisión {/* Changed text and added icon */}
                      </Link>
                   </Button>
                 </SheetClose>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
