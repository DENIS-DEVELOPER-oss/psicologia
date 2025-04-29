
'use client'; // Required for useState and form handling

import Link from 'next/link';
import { GraduationCap, Facebook, Twitter, Instagram, Youtube, Linkedin, Send, MapPin, Phone, Mail, Clock } from 'lucide-react'; // Added social and contact icons
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator'; // Import Separator

// Placeholder for social media links
const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  // Add TikTok if available in lucide-react or use SVG
];

const quickLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/about', label: 'Nosotros' },
  { href: '/programs', label: 'Programas' }, // Changed from Plan de Estudios
  { href: '/faculty', label: 'Docentes' },
  // { href: '#', label: 'Estudiantes' }, // Placeholder
  { href: '/news', label: 'Noticias' }, // Changed from Logros to News
  { href: '/contact', label: 'Contacto' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { toast } = useToast();


  const handleSubscribe = async (e: React.FormEvent) => {
     e.preventDefault();
     if (!email) {
       toast({ title: "Error", description: "Por favor, introduce tu correo electrónico.", variant: "destructive" });
       return;
     }
     setIsSubmitting(true);
     // Simulate API call
     await new Promise(resolve => setTimeout(resolve, 1000));
     console.log('Subscribing with email:', email);
     setIsSubmitting(false);
     setShowSuccess(true);
     setEmail(''); // Clear input
     toast({ title: "Suscripción Exitosa", description: "¡Gracias por suscribirte!" });
     // Hide success message after a few seconds
     setTimeout(() => setShowSuccess(false), 5000);
   };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Column 1: About & Social */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-8 w-8" />
              <span className="font-bold text-xl">PsycheSite</span>
            </Link>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Formando profesionales líderes en psicología con excelencia académica e innovación, comprometidos con el bienestar integral y el desarrollo humano en nuestra sociedad.
            </p>
            <p className="text-sm font-semibold text-primary-foreground/90 pt-2">
              Acreditación Internacional 2023 - 2028 (Placeholder)
            </p>
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((link) => (
                <Button key={link.name} variant="outline" size="icon" asChild className="bg-primary-foreground/10 hover:bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground">
                  <Link href={link.href} aria-label={link.name} target="_blank" rel="noopener noreferrer">
                    <link.icon className="h-4 w-4" />
                  </Link>
                </Button>
              ))}
              {/* Placeholder for TikTok or other icons */}
               {/* <Button variant="outline" size="icon" className="bg-primary-foreground/10 hover:bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16.66 5.34A2.17 2.17 0 0 1 19 7.47v5.1a13.55 13.55 0 0 1-6.5 1.64h-.09a13.63 13.63 0 0 1-6.53-1.64V7.47a2.16 2.16 0 0 1 2.31-2.13 6.28 6.28 0 0 1 3.6.86 6.3 6.3 0 0 1 3.82-.86Z"></path><path d="M12.53 14.21v-5.1a3.87 3.87 0 0 0-2.94-3.87"></path><path d="M11.47 14.21v-5.1a3.87 3.87 0 0 1 2.94-3.87"></path></svg>
                 <span className="sr-only">TikTok</span>
               </Button> */}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-tight border-b-2 border-primary-foreground/50 pb-1 inline-block">Enlaces rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="flex items-center text-sm text-primary-foreground/80 hover:text-primary-foreground hover:underline transition-colors">
                     <span className="mr-2">&gt;</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-tight border-b-2 border-primary-foreground/50 pb-1 inline-block">Contacto</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                 <span>Av. Universidad 123, Ciudad Universitaria (Placeholder)</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>(+51) 123 456 789 (Placeholder)</span>
              </li>
              <li className="flex items-center gap-2">
                 <Mail className="h-4 w-4 shrink-0" />
                 <a href="mailto:escuela@psicologia.edu.pe" className="hover:underline hover:text-primary-foreground transition-colors">
                   escuela@psicologia.edu.pe (Placeholder)
                 </a>
              </li>
               <li className="flex items-center gap-2">
                 <Clock className="h-4 w-4 shrink-0" />
                 <span>Lunes a Viernes: 8:00 am - 5:00 pm</span>
               </li>
            </ul>
            {/* Newsletter Form */}
            <form onSubmit={handleSubscribe} className="pt-4 space-y-2">
               <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Tu correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background text-foreground placeholder:text-muted-foreground border-input flex-grow"
                  disabled={isSubmitting}
                  aria-label="Correo electrónico para suscribirse"
                />
                 <Button type="submit" disabled={isSubmitting} className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shrink-0">
                  {isSubmitting ? 'Enviando...' : <><Send className="h-4 w-4 mr-1 md:hidden" /> Suscribirse</>}
                </Button>
              </div>
               {/* {showSuccess && (
                 <p className="text-xs text-green-300 flex items-center gap-1">
                   <Mail className="h-3 w-3" /> ¡Gracias por suscribirte!
                 </p>
               )} */}
             </form>
          </div>
        </div>
      </div>

       {/* Bottom Bar */}
       <div className="bg-primary/90 py-4 mt-8"> {/* Slightly darker blue */}
          <div className="container flex flex-col md:flex-row justify-between items-center text-center md:text-left text-xs text-primary-foreground/70">
            <p>© {currentYear} Escuela Profesional de Psicología. Todos los derechos reservados.</p>
             <div className="flex items-center gap-4 mt-2 md:mt-0">
               {/* <p>Desarrollado con <span role="img" aria-label="love">❤️</span> por Mi Equipo</p> */}
               {/* Use a heart icon if preferred */}
               {/* <p>Desarrollado con <Heart className="inline h-3 w-3 mx-1" /> por Mi Equipo</p> */}
                <Link href="#" className="hover:text-primary-foreground hover:underline">Política de Privacidad</Link>
               <Separator orientation="vertical" className="h-4 bg-primary-foreground/50" />
               <Link href="#" className="hover:text-primary-foreground hover:underline">Términos y Condiciones</Link>
             </div>
           </div>
         </div>
    </footer>
  );
}
