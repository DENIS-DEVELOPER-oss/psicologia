// No client directive needed as styled-jsx is removed

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Newspaper, Users, BookOpen, Camera, MapPin, Rocket } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]"> {/* Adjust for header height */}
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-gradient-to-b from-primary/10 to-background">
         <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-50"></div>
         <div className="container px-4 md:px-6 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary mb-4 animate-fade-in-up">
              Explora el Mundo de la Psicología
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl animate-fade-in-up animation-delay-200">
              Descubre nuestros programas, conoce a nuestros docentes y mantente al día con las últimas noticias de la Escuela Profesional de Psicología.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center animate-fade-in-up animation-delay-400">
              <Button size="lg" asChild className="transition-transform hover:scale-105">
                <Link href="/programs">
                  Ver Programas <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="transition-transform hover:scale-105">
                <Link href="/contact?action=inquire">
                  Solicitar Información
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* About Preview */}
            <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in animation-delay-600">
              <CardHeader>
                <Users className="h-10 w-10 text-accent mb-4" />
                <CardTitle className="text-2xl">Nuestra Escuela</CardTitle>
                <CardDescription>Conoce nuestra misión, visión y valores.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Comprometidos con la excelencia académica y la formación integral de futuros psicólogos.
                </p>
              </CardContent>
              <CardFooter>
                 <Button variant="link" asChild className="p-0 h-auto">
                    <Link href="/about">Leer Más <ArrowRight className="ml-1 h-4 w-4" /></Link>
                 </Button>
              </CardFooter>
            </Card>

            {/* Programs Preview */}
            <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in animation-delay-800">
              <CardHeader>
                <BookOpen className="h-10 w-10 text-accent mb-4" />
                <CardTitle className="text-2xl">Programas Académicos</CardTitle>
                <CardDescription>Explora nuestras carreras y especializaciones.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Ofrecemos programas de pregrado y postgrado diseñados para el éxito profesional.
                </p>
              </CardContent>
              <CardFooter>
                 <Button variant="link" asChild className="p-0 h-auto">
                    <Link href="/programs">Ver Detalles <ArrowRight className="ml-1 h-4 w-4" /></Link>
                 </Button>
              </CardFooter>
            </Card>

            {/* News Preview */}
            <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in animation-delay-1000">
              <CardHeader>
                <Newspaper className="h-10 w-10 text-accent mb-4" />
                <CardTitle className="text-2xl">Noticias y Eventos</CardTitle>
                <CardDescription>Mantente informado sobre nuestras actividades.</CardDescription>
              </CardHeader>
              <CardContent>
                 <p className="text-sm text-muted-foreground">
                    Entérate de los últimos logros, conferencias y talleres.
                 </p>
              </CardContent>
              <CardFooter>
                 <Button variant="link" asChild className="p-0 h-auto">
                    <Link href="/news">Ver Noticias <ArrowRight className="ml-1 h-4 w-4" /></Link>
                 </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <header className="text-center mb-12 md:mb-16">
             <Camera className="h-12 w-12 mx-auto text-primary mb-4" />
             <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
               Galería de la Escuela
             </h2>
             <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
               Un vistazo a nuestras instalaciones, eventos y vida estudiantil.
             </p>
           </header>
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
             {[
               { seed: 'campus1', alt: 'Vista del campus' },
               { seed: 'library', alt: 'Biblioteca moderna' },
               { seed: 'classroom', alt: 'Aula de clases' },
               { seed: 'event1', alt: 'Evento académico' },
               { seed: 'lab1', alt: 'Laboratorio de psicología' },
               { seed: 'students1', alt: 'Estudiantes colaborando' },
               { seed: 'conference1', alt: 'Conferencia de psicología' },
               { seed: 'graduation1', alt: 'Ceremonia de graduación' },
             ].map((img, index) => (
               <div key={index} className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
                 <Image
                   src={`https://picsum.photos/seed/${img.seed}/400/400`}
                   alt={img.alt}
                   layout="fill"
                   objectFit="cover"
                   className="transition-transform duration-500 group-hover:scale-105"
                 />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
                    <p className="text-white text-xs font-medium">{img.alt}</p>
                  </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Platform/Initiative Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Rocket className="h-12 w-12 text-accent mb-4" />
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary mb-4">
                Nuestra Iniciativa: PsycheConnect
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                PsycheConnect es nuestra plataforma digital innovadora diseñada para fomentar la colaboración entre estudiantes, docentes e investigadores. Facilita el acceso a recursos académicos, la participación en proyectos de investigación y la conexión con oportunidades profesionales en el campo de la psicología.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                 <li>Acceso a biblioteca digital y bases de datos especializadas.</li>
                 <li>Foros de discusión y grupos de estudio temáticos.</li>
                 <li>Bolsa de trabajo y prácticas profesionales.</li>
                 <li>Calendario de eventos y seminarios exclusivos.</li>
               </ul>
              <Button asChild variant="outline" className="transition-transform hover:scale-105">
                 {/* Update link when PsycheConnect page/section exists */}
                 <Link href="#">
                   Explorar PsycheConnect <ArrowRight className="ml-2 h-4 w-4" />
                 </Link>
               </Button>
             </div>
             <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://picsum.photos/seed/platform/600/400"
                  alt="Plataforma PsycheConnect"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
           </div>
         </div>
       </section>

      {/* Location Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <header className="text-center mb-12 md:mb-16">
             <MapPin className="h-12 w-12 mx-auto text-primary mb-4" />
             <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
               Encuéntranos
             </h2>
             <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
               Visita nuestras modernas instalaciones ubicadas en el corazón de la ciudad.
             </p>
           </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Map Placeholder */}
            <div className="aspect-video rounded-lg overflow-hidden bg-muted flex items-center justify-center text-muted-foreground shadow-md">
               {/* Replace with an actual map embed later */}
              <MapPin className="h-16 w-16 opacity-50" />
              <span className="ml-4 text-xl">Mapa Próximamente</span>
               {/* Example Map Embed (replace src): */}
               {/* <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..."
                 width="100%"
                 height="100%"
                 style={{ border:0 }}
                 allowFullScreen={true}
                 loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade">
               </iframe> */}
            </div>
            {/* Address and Info */}
            <div className="space-y-4">
               <h3 className="text-2xl font-semibold text-primary">Nuestra Ubicación</h3>
               <p className="text-muted-foreground">
                 [Dirección Completa de la Escuela], <br />
                 [Piso/Oficina - Opcional], <br />
                 [Ciudad], [Código Postal], [País] <br />
                 (Placeholder: Reemplazar con dirección real)
               </p>
               <p className="text-muted-foreground">
                  Contamos con fácil acceso mediante transporte público y estacionamiento cercano.
               </p>
               <div className="flex gap-4 pt-4">
                 <Button asChild>
                   <Link href="/contact">
                     Contactar <ArrowRight className="ml-2 h-4 w-4" />
                   </Link>
                 </Button>
                 <Button variant="outline" asChild>
                    {/* Update link with real address for Google Maps */}
                   <Link href="https://maps.google.com/?q=Placeholder+Address" target="_blank" rel="noopener noreferrer">
                     Ver en Mapa (Externo)
                   </Link>
                 </Button>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* Call to Action Section */}
      <section className="w-full py-16 md:py-24 bg-secondary/50">
        <div className="container text-center px-4 md:px-6">
           <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary mb-4">¿Listo para Empezar Tu Carrera en Psicología?</h2>
           <p className="max-w-xl mx-auto mb-8 text-muted-foreground md:text-lg">
             Da el primer paso hacia tu futuro profesional. Aplica ahora o contáctanos para más información.
           </p>
           <Button size="lg" asChild className="transition-transform hover:scale-105">
             <Link href="/contact?action=apply">
               Aplicar Ahora <ArrowRight className="ml-2 h-5 w-5" />
             </Link>
           </Button>
         </div>
       </section>

       {/* Removed redundant styled-jsx block. Animations are handled by globals.css */}
    </div>
  );
}
