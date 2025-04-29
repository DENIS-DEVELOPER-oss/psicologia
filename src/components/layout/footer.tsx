'use client'; // Required for useState and form handling

import Link from 'next/link';
import { GraduationCap, Facebook, Twitter, Instagram, Youtube, Linkedin, Send, MapPin, Phone, Mail, Clock, MapIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({ title: "Error", description: "Por favor, introduce tu correo electrónico.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Subscribing with email:', email);
    setIsSubmitting(false);
    setEmail('');
    toast({ title: "Suscripción Exitosa", description: "¡Gracias por suscribirte!" });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Sección de Redes Sociales */}
      <div className="py-8 text-center bg-white text-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Síguenos en nuestras redes sociales</h2>
          <div className="flex justify-center gap-4">
            <SocialButton icon={<Facebook className="h-5 w-5" />} href="https://www.facebook.com/UNAPOficial/" label="Facebook" />
            <SocialButton icon={<Instagram className="h-5 w-5" />} href="https://www.instagram.com/unap_puno_oficial/" label="Instagram" />
            <SocialButton icon={<Twitter className="h-5 w-5" />} href="https://twitter.com/UNAP_Puno" label="Twitter" />
            <SocialButton icon={<Youtube className="h-5 w-5" />} href="https://www.youtube.com/channel/UC8noaON7oyn7qxnXYNEB0hg" label="YouTube" />
            <SocialButton icon={<Linkedin className="h-5 w-5" />} href="#" label="LinkedIn" />
            <SocialButton icon={<Mail className="h-5 w-5" />} href="mailto:info@unap.edu.pe" label="Email" />
          </div>
        </div>
      </div>

      {/* Banner/Imagen Panorámica */}
      <div className="w-full h-64 relative">
        <Image 
          src="/images/campus.jpg" 
          alt="Campus de la Universidad Nacional del Altiplano" 
          fill 
          style={{ objectFit: 'cover' }}
          className="w-full"
        />
      </div>

      {/* Sección Principal del Footer */}
      <div className="container mx-auto py-10 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Columna 1: Universidad */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-tight border-b-2 border-primary-foreground/50 pb-1 inline-block">UNIVERSIDAD</h3>
            <ul className="space-y-2">
              <FooterLink href="/admision">Admisión</FooterLink>
              <FooterLink href="/pregrado">Pregrado</FooterLink>
              <FooterLink href="/postgrado">Postgrado</FooterLink>
              <FooterLink href="/investigacion">Investigación</FooterLink>
              <FooterLink href="/defensoria">Defensoría Universitaria</FooterLink>
            </ul>
          </div>

          {/* Columna 2: Contáctanos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-tight border-b-2 border-primary-foreground/50 pb-1 inline-block">CONTÁCTANOS</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/90">
              <li>Campus Central UNA Puno</li>
              <li>Av. Floral Nº 1153 - Puno, Perú</li>
              <li className="flex items-center gap-2">
                <MapIcon className="h-4 w-4 shrink-0" />
                <Link href="https://goo.gl/maps/5eUv3Y2x9XDh7uMX9" className="hover:underline">Ver mapa</Link>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>(051) 365050</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@unap.edu.pe</span>
              </li>
              <li>
                <Link href="https://unap.edu.pe/directorio" className="hover:underline">Directorio Institucional</Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Libro de Reclamaciones y Web UNA */}
          <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Libro de Reclamaciones */}
            <div className="bg-[#29ABE2] rounded-lg p-4 flex flex-col items-center justify-center text-white">
              <Image 
                src="/images/libro.png" 
                alt="Libro de Reclamaciones" 
                width={180} 
                height={180}
                className="mb-2"
              />
              <span className="text-center font-medium">Libro de Reclamaciones</span>
            </div>
            
            {/* Web UNA */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold tracking-tight border-b-2 border-primary-foreground/50 pb-1 inline-block">WEB UNA</h3>
              <ul className="space-y-2">
                <FooterLink href="/mapa-sitio">Mapa de Sitio</FooterLink>
                <FooterLink href="/normatividad">Normatividad Universitaria</FooterLink>
                <FooterLink href="/terminos">Términos y Condiciones</FooterLink>
                <FooterLink href="/datos-personales">Protección de Datos Personales</FooterLink>
                <FooterLink href="/transparencia">Transparencia Institucional</FooterLink>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-primary/90 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-primary-foreground/80 text-center md:text-left mb-4 md:mb-0">
            © {currentYear} Universidad Nacional del Altiplano - Puno. Todos los derechos reservados.
          </p>
          <div className="flex justify-center gap-3">
            <SocialIconSmall icon={<Facebook className="h-4 w-4" />} href="https://www.facebook.com/UNAPOficial/" />
            <SocialIconSmall icon={<Instagram className="h-4 w-4" />} href="https://www.instagram.com/unap_puno_oficial/" />
            <SocialIconSmall icon={<Twitter className="h-4 w-4" />} href="https://twitter.com/UNAP_Puno" />
            <SocialIconSmall icon={<Youtube className="h-4 w-4" />} href="https://www.youtube.com/channel/UC8noaON7oyn7qxnXYNEB0hg" />
            <SocialIconSmall icon={<Linkedin className="h-4 w-4" />} href="#" />
            <SocialIconSmall icon={<Mail className="h-4 w-4" />} href="mailto:info@unap.edu.pe" />
          </div>
        </div>
      </div>
    </footer>
  );
}

// Componentes auxiliares
function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm text-primary-foreground/80 hover:text-primary-foreground hover:underline transition-colors">
        {children}
      </Link>
    </li>
  );
}

function SocialButton({ icon, href, label }: { icon: React.ReactNode, href: string, label: string }) {
  return (
    <Link href={href} aria-label={label}>
      <button className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition-colors">
        {icon}
      </button>
    </Link>
  );
}

function SocialIconSmall({ icon, href }: { icon: React.ReactNode, href: string }) {
  return (
    <Link href={href} className="text-primary-foreground/80 hover:text-primary-foreground">
      {icon}
    </Link>
  );
}
