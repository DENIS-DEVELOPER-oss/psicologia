'use client'; // Required for Carousel and Autoplay plugin

import * as React from 'react'; // Import React
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ArrowRight, Newspaper, Users, BookOpen, Camera, MapPin, Rocket, 
  Check, FlaskConical, Handshake, Globe, Lightbulb, ChevronLeft, 
  ChevronRight, Download, Share2, InfoIcon 
} from 'lucide-react';
import { ImageLightbox } from '@/components/ui/image-lightbox';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay"; // Import Autoplay plugin
import Image from 'next/image'; // Use regular Image for Carousel background
import { Badge } from '@/components/ui/badge'; // Importamos Badge para el indicador "Evento reciente"

export default function Home() {
   const plugin = React.useRef(
     Autoplay({ delay: 8000, stopOnInteraction: true }) // Autoplay every 8 seconds
   );
   
   // Estados para los carruseles de eventos
   const [currentEventSlide, setCurrentEventSlide] = React.useState(0);
   const eventImages = [
     { src: '/images/fondo1.jpg', alt: 'Ceremonia de Bienvenida', count: '23/29' },
     { src: '/images/portada.jpg', alt: 'Actividades de Integración', count: '18/30' },
     { src: '/images/portada.jpeg', alt: 'Visita a laboratorios', count: '15/25' },
   ];

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]"> {/* Adjust for header height */}
      {/* Hero Section with Background Image - Solución simplificada */}
      <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center text-center overflow-hidden">
        {/* Fondo de imagen fijo en lugar del carrusel */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/portada.jpeg"
            alt="Escuela Profesional de Psicología"
            fill
            style={{ objectFit: 'cover' }}
            priority
            quality={80}
          />
        </div>

        {/* Overlay para mejorar legibilidad */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* Content Box */}
        <div className="container mx-auto px-4 md:px-6 relative z-20 max-w-3xl bg-black/30 backdrop-blur-sm p-8 rounded-lg shadow-xl">
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
      {/* NUEVA SECCIÓN: Eventos Recientes similar a la imagen proporcionada */}
      <section className="w-full py-12">
        <div className="container mx-auto px-4 md:px-6">
          {/* Encabezado del evento con su badge */}
          <div className="flex items-center border-l-4 border-primary pl-4 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Recepción de Cachimbos 2025-I</h2>
            <Badge variant="outline" className="ml-4 bg-green-100 text-green-800 hover:bg-green-200">
              Evento reciente
            </Badge>
          </div>

          {/* Alerta con descripción */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded">
            <div className="flex items-start">
              <InfoIcon className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
              <p className="text-blue-700">
                Bienvenida a nuestros nuevos estudiantes del semestre 2025-I. Una nueva generación de futuros psicólogos inicia su formación profesional en nuestra Escuela.
              </p>
            </div>
          </div>

          {/* Galería de fotos */}
          <div className="relative mb-6">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              {eventImages.map((image, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${index === currentEventSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                  {/* Etiqueta de título y contador */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 flex justify-between items-center">
                    <span className="font-medium">{image.alt}</span>
                    <span className="text-sm bg-black/50 px-2 py-1 rounded">{image.count}</span>
                  </div>
                </div>
              ))}
              
              {/* Etiqueta "Galería" */}
              <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded font-medium z-10">
                Galería
              </div>

              {/* Botones de navegación */}
              <button 
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 z-10"
                onClick={() => setCurrentEventSlide((prev) => (prev === 0 ? eventImages.length - 1 : prev - 1))}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button 
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 z-10"
                onClick={() => setCurrentEventSlide((prev) => (prev === eventImages.length - 1 ? 0 : prev + 1))}
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Botones de acciones */}
          <div className="flex justify-center gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Download className="mr-2 h-4 w-4" /> Descargar fotos
            </Button>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              <Share2 className="mr-2 h-4 w-4" /> Compartir
            </Button>
          </div>
        </div>
      </section>
      {/* Resto del contenido permanece igual... */}
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
                       src="/images/autoridad.png"
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
                   src={`/images/portada1.jpg`}
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
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Rocket className="h-12 w-12 text-accent mb-4" />
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary mb-4">
                Nuestra Iniciativa:
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                La Escuela Profesional de Psicología es un espacio académico comprometido con la formación integral de futuros psicólogos, promoviendo una educación centrada en la excelencia, la ética y la responsabilidad social. Desde el pregrado hasta la proyección profesional, trabajamos por una psicología al servicio del bienestar humano.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nuestro enfoque busca articular la teoría, la práctica y la investigación en el desarrollo de competencias clave para afrontar los desafíos del contexto actual.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                <li>Acceso a bibliografía especializada y recursos académicos de vanguardia.</li>
                <li>Foros de discusión, grupos de estudio y acompañamiento entre pares.</li>
                <li>Oportunidades para prácticas profesionales y vínculos con el mercado laboral.</li>
                <li>Agenda permanente de seminarios, talleres, congresos y actividades de extensión.</li>
              </ul>
              <Button asChild variant="outline" className="transition-transform hover:scale-105">
                <Link href="#">
                  <span>Explorar Escuela Profesional <ArrowRight className="ml-2 h-4 w-4 inline" /></span>
                </Link>
              </Button>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <ImageLightbox
                src="/images/portada.jpg"
                alt="Escuela Profesional de Psicología"
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