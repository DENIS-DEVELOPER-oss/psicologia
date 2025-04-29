
'use client'; // Required for Carousel and Autoplay plugin

import * as React from 'react'; // Import React
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Newspaper, Users, BookOpen, Camera, MapPin, Rocket, Check, FlaskConical, Handshake, Globe, Lightbulb } from 'lucide-react';
import { ImageLightbox } from '@/components/ui/image-lightbox';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay"; // Import Autoplay plugin
import Image from 'next/image'; // Use regular Image for Carousel background

// Define Hero Images
const heroImages = [
  { seed: 'psychology-hero-1', alt: 'Escuela Profesional de Psicología Fondo 1' },
  { seed: 'psychology-hero-2', alt: 'Escuela Profesional de Psicología Fondo 2' },
  { seed: 'psychology-hero-3', alt: 'Escuela Profesional de Psicología Fondo 3' },
];


export default function Home() {
   const plugin = React.useRef(
     Autoplay({ delay: 8000, stopOnInteraction: true }) // Autoplay every 8 seconds
   );

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]"> {/* Adjust for header height */}
      {/* Hero Section with Carousel */}
      <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center text-center overflow-hidden">

        <Carousel
          plugins={[plugin.current]}
          className="absolute inset-0 w-full h-full z-0"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="m-0 h-full">
            {heroImages.map((img, index) => (
              <CarouselItem key={index} className="p-0 relative h-full">
                 {/* Use regular Image for carousel background - lightbox trigger removed */}
                <Image
                  src={`https://picsum.photos/seed/${img.seed}/1920/1080`}
                  alt={img.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-opacity duration-1000 ease-in-out" // Add fade transition if needed, Carousel handles slide
                  priority={index === 0} // Load first image quickly
                  quality={75}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Optional: Add Previous/Next buttons */}
          {/* <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-background/50 hover:bg-background/80 text-foreground" /> */}
          {/* <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-background/50 hover:bg-background/80 text-foreground" /> */}
        </Carousel>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div> {/* Dark overlay */}

        {/* Content Box */}
        <div className="container mx-auto px-4 md:px-6 relative z-20 max-w-3xl bg-black/30 backdrop-blur-sm p-8 rounded-lg shadow-xl"> {/* Added mx-auto */}
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 animate-fade-in-up">
            Explora el Mundo de la Psicología
          </h1>
          <p className="mb-8 text-lg text-neutral-200 md:text-xl animate-fade-in-up animation-delay-200">
            Descubre nuestros programas, conoce a nuestros docentes y mantente al día con las últimas noticias de la Escuela Profesional de Psicología.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center animate-fade-in-up animation-delay-400">
            <Button size="lg" asChild className="transition-transform hover:scale-105 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/programs">
                 <span>Ver Programas <ArrowRight className="ml-2 h-5 w-5 inline" /></span>
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="transition-transform hover:scale-105 border-white text-white hover:bg-white/10 hover:text-white">
              <Link href="/contact?action=inquire">
                Solicitar Información
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6"> {/* Added mx-auto */}
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
                    <Link href="/about">
                       <span>Leer Más <ArrowRight className="ml-1 h-4 w-4 inline" /></span>
                    </Link>
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
                    <Link href="/programs">
                        <span>Ver Detalles <ArrowRight className="ml-1 h-4 w-4 inline" /></span>
                    </Link>
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
                    <Link href="/news">
                        <span>Ver Noticias <ArrowRight className="ml-1 h-4 w-4 inline" /></span>
                    </Link>
                 </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* New Information Section (Inspired by Reference) */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6"> {/* Added mx-auto */}
           {/* Main Content Grid */}
           <div className="grid lg:grid-cols-3 gap-12">
             {/* Director's Message */}
             <div className="lg:col-span-2">
               <Card className="shadow-md h-full">
                 <CardHeader>
                   <CardTitle className="text-2xl font-semibold text-primary">Mensaje del Director</CardTitle>
                 </CardHeader>
                 <CardContent className="grid md:grid-cols-3 gap-6">
                   <div className="md:col-span-1 relative h-48 md:h-full rounded-md overflow-hidden">
                     {/* Replace Image with ImageLightbox */}
                     <ImageLightbox
                       src="https://picsum.photos/seed/director/300/400"
                       alt="Foto del Director/a - Placeholder"
                       fill
                       style={{ objectFit: "cover", objectPosition: "top" }}
                       className="transition-transform duration-500" // Removed hover:scale from internal image
                       triggerClassName="h-full w-full" // Ensure trigger fills the container
                       sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 20vw"
                     />
                   </div>
                   <div className="md:col-span-2 space-y-4">
                     <p className="text-muted-foreground leading-relaxed">
                       En nombre de nuestra comunidad académica, les damos la más cordial bienvenida a la Escuela Profesional de Psicología. Nuestra misión es formar profesionales altamente calificados, éticos y comprometidos con el bienestar psicológico individual y social, contribuyendo al desarrollo sostenible de nuestra región y país.
                     </p>
                     <p className="text-muted-foreground leading-relaxed">
                       Los invitamos a explorar nuestro sitio web y descubrir todo lo que tenemos para ofrecer.
                       <br /><em>- [Nombre del Director/a - Placeholder]</em>
                     </p>
                     <Button variant="link" asChild className="p-0 h-auto">
                       <Link href="/about">
                           <span>Leer más <ArrowRight className="ml-1 h-4 w-4 inline" /></span>
                       </Link>
                     </Button>
                   </div>
                 </CardContent>
               </Card>
             </div>

             {/* Why Choose Us & Career Perspectives */}
             <div className="space-y-8">
               {/* Why Choose Us */}
               <Card className="shadow-md bg-secondary/50">
                 <CardHeader>
                   <CardTitle className="text-xl font-semibold text-primary">¿Por qué elegirnos?</CardTitle>
                 </CardHeader>
                 <CardContent>
                   <ul className="space-y-3 text-sm text-muted-foreground">
                     <li className="flex items-start gap-2">
                       <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                       <span>Programa acreditado por [Organismo Acreditador - Placeholder].</span>
                     </li>
                     <li className="flex items-start gap-2">
                       <FlaskConical className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                       <span>Laboratorios equipados con tecnología de punta.</span>
                     </li>
                      <li className="flex items-start gap-2">
                       <Handshake className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                       <span>Convenios estratégicos con instituciones nacionales e internacionales.</span>
                     </li>
                     <li className="flex items-start gap-2">
                       <Globe className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                       <span>Oportunidades de intercambio internacional.</span>
                     </li>
                     <li className="flex items-start gap-2">
                       <Users className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                       <span>Comunidad estudiantil diversa y dinámica.</span>
                     </li>
                      <li className="flex items-start gap-2">
                       <Lightbulb className="h-4 w-4 text-accent mt-0.5 shrink-0" /> {/* Added Item */}
                       <span>Participación en proyectos de investigación.</span>
                     </li>
                   </ul>
                 </CardContent>
               </Card>

               {/* Career Perspectives */}
               <Card className="shadow-md">
                 <CardHeader>
                   <CardTitle className="text-xl font-semibold text-primary">Perspectivas de Carrera</CardTitle>
                 </CardHeader>
                 <CardContent>
                   <p className="text-sm text-muted-foreground mb-4">
                     Nuestros egresados ocupan puestos importantes en diversas áreas, incluyendo:
                   </p>
                   <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                     <li>Psicología Clínica (Hospitales, Consultorios)</li>
                     <li>Psicología Educativa (Colegios, Universidades)</li>
                     <li>Psicología Organizacional (Empresas, Recursos Humanos)</li>
                     <li>Psicología Social y Comunitaria (ONGs, Proyectos Sociales)</li>
                     <li>Investigación y Docencia</li>
                     <li>Neuropsicología</li>
                   </ul>
                    <Button variant="outline" size="sm" asChild className="mt-6 w-full">
                      <Link href="/programs">
                          <span>Ver más oportunidades <ArrowRight className="ml-1 h-4 w-4 inline" /></span>
                      </Link>
                    </Button>
                 </CardContent>
               </Card>
             </div>
           </div>
        </div>
      </section>


      {/* Gallery Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6"> {/* Added mx-auto */}
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
               <div key={index} className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                 {/* Replace Image with ImageLightbox */}
                 <ImageLightbox
                   src={`https://picsum.photos/seed/${img.seed}/400/400`}
                   alt={img.alt}
                   fill
                   style={{ objectFit: 'cover' }}
                   className="transition-transform duration-500" // Removed group-hover:scale from internal image
                   triggerClassName="w-full h-full" // Make the trigger div fill the container
                   sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                   quality={60}
                 />
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Platform/Initiative Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6"> {/* Added mx-auto */}
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
                 <Link href="#">
                   <span>Explorar PsycheConnect <ArrowRight className="ml-2 h-4 w-4 inline" /></span>
                 </Link>
               </Button>
             </div>
             <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                {/* Replace Image with ImageLightbox */}
                <ImageLightbox
                  src="https://picsum.photos/seed/platform/600/400"
                  alt="Plataforma PsycheConnect"
                  fill
                  style={{ objectFit: 'cover' }}
                  triggerClassName="w-full h-full"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
           </div>
         </div>
       </section>

       {/* Call to Action Section */}
      <section className="w-full py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto text-center px-4 md:px-6"> {/* Added mx-auto */}
           <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary mb-4">¿Listo para Empezar Tu Carrera en Psicología?</h2>
           <p className="max-w-xl mx-auto mb-8 text-muted-foreground md:text-lg">
             Da el primer paso hacia tu futuro profesional. Aplica ahora o contáctanos para más información.
           </p>
           <Button size="lg" asChild className="transition-transform hover:scale-105">
             <Link href="/contact?action=apply">
                <span>Aplicar Ahora <ArrowRight className="ml-2 h-5 w-5 inline" /></span>
             </Link>
           </Button>
         </div>
       </section>

    </div>
  );
}
