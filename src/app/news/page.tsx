import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Newspaper, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Placeholder data for news and events
const newsItems = [
  {
    id: 1,
    title: 'Conferencia Internacional sobre Salud Mental Post-Pandemia',
    date: '2024-09-15',
    type: 'Evento',
    excerpt: 'Expertos de renombre discutirán los desafíos y estrategias para abordar el impacto psicológico de la pandemia.',
    imageUrl: 'https://picsum.photos/seed/news1/400/250',
    link: '/news/conferencia-salud-mental', // Example link to full news item
  },
  {
    id: 2,
    title: 'Estudiante de Psicología Gana Beca de Investigación',
    date: '2024-08-28',
    type: 'Logro',
    excerpt: 'María Rojas, estudiante del 8vo semestre, obtuvo una prestigiosa beca para investigar sobre resiliencia en adolescentes.',
    imageUrl: 'https://picsum.photos/seed/news2/400/250',
    link: '/news/beca-investigacion-rojas',
  },
  {
    id: 3,
    title: 'Taller: Técnicas de Relajación y Manejo del Estrés',
    date: '2024-10-05',
    type: 'Evento',
    excerpt: 'Dirigido a la comunidad universitaria, este taller práctico ofrecerá herramientas para mejorar el bienestar emocional.',
    imageUrl: 'https://picsum.photos/seed/news3/400/250',
    link: '/news/taller-relajacion',
  },
   {
    id: 4,
    title: 'Publicación de Libro por Docente de la Escuela',
    date: '2024-08-10',
    type: 'Noticia',
    excerpt: 'El Dr. Carlos Martínez presentó su nuevo libro "Neuropsicología del Aprendizaje" en la feria internacional del libro.',
     imageUrl: 'https://picsum.photos/seed/news4/400/250',
     link: '/news/libro-martinez',
   },
  // Add more news items as needed
];

export default function NewsPage() {
  return (
    <div className="container py-16 md:py-24 lg:py-32 px-4 md:px-6">
      <header className="text-center mb-12 md:mb-16">
         <Newspaper className="h-16 w-16 mx-auto text-primary mb-4" />
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-primary">
          Noticias y Eventos
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Mantente al día con las últimas novedades y actividades de nuestra escuela.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item) => (
          <Card key={item.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <Link href={item.link} className="block group">
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={`Imagen para ${item.title}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Link>
            <CardHeader className="p-4 pb-2">
              <div className="flex justify-between items-center mb-2">
                <Badge variant={item.type === 'Evento' ? 'default' : 'secondary'}>{item.type}</Badge>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>{new Date(item.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
              </div>
               <Link href={item.link} className="group">
                  <CardTitle className="text-lg font-semibold text-primary group-hover:underline">{item.title}</CardTitle>
                </Link>
            </CardHeader>
            <CardContent className="p-4 pt-0 flex-grow">
              <CardDescription className="text-sm text-muted-foreground">{item.excerpt}</CardDescription>
            </CardContent>
            <CardFooter className="p-4 pt-0">
               <Button variant="link" asChild className="p-0 h-auto text-sm">
                  <Link href={item.link}>
                    Leer Más <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
               </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

       {/* Placeholder for pagination if needed later */}
      {/* <div className="mt-12 text-center">
         <Button variant="outline">Cargar más noticias</Button>
       </div> */}
    </div>
  );
}
