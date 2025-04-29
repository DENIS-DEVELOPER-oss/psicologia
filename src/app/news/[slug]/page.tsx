
'use client'; // Needed for placeholder data simulation

import { useParams } from 'next/navigation';
import { Calendar, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ImageLightbox } from '@/components/ui/image-lightbox'; // Import the new component

// Placeholder data for news and events (same as news/page.tsx for simulation)
const newsItems = [
 {
    id: 1,
    slug: 'conferencia-salud-mental',
    title: 'Conferencia Internacional sobre Salud Mental Post-Pandemia',
    date: '2024-09-15',
    type: 'Evento',
    excerpt: 'Expertos de renombre discutirán los desafíos y estrategias para abordar el impacto psicológico de la pandemia.',
    content: `
      <p>La reciente pandemia ha dejado una marca indeleble en la salud mental global. Esta conferencia reunirá a psicólogos, psiquiatras, investigadores y responsables políticos para un diálogo crucial.</p>
      <h3 class="text-xl font-semibold mt-6 mb-3 text-primary">Temas Clave:</h3>
      <ul class="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
        <li>Impacto del aislamiento social en niños y adolescentes.</li>
        <li>Estrategias de intervención temprana para la ansiedad y depresión.</li>
        <li>El rol de la telepsicología en la nueva normalidad.</li>
        <li>Bienestar psicológico en el personal de salud.</li>
        <li>Políticas públicas para la recuperación de la salud mental comunitaria.</li>
      </ul>
      <p>Se espera la participación de destacados ponentes internacionales como [Nombre Ponente 1 - Placeholder] y [Nombre Ponente 2 - Placeholder]. Habrá sesiones plenarias, mesas redondas y presentación de pósters.</p>
      <p class="mt-4"><strong>Fecha Límite de Inscripción:</strong> 1 de Septiembre, 2024.</p>
      <p class="mt-4">No pierda la oportunidad de actualizarse y conectar con colegas de todo el mundo.</p>
    `,
    imageUrl: 'https://picsum.photos/seed/news1/800/450', // Larger image for detail page
  },
  {
    id: 2,
    slug: 'beca-investigacion-rojas',
    title: 'Estudiante de Psicología Gana Beca de Investigación',
    date: '2024-08-28',
    type: 'Logro',
    excerpt: 'María Rojas, estudiante del 8vo semestre, obtuvo una prestigiosa beca para investigar sobre resiliencia en adolescentes.',
    content: `
      <p>Con gran orgullo anunciamos que María Rojas, destacada estudiante de nuestra escuela, ha sido galardonada con la Beca [Nombre de la Beca - Placeholder] para el fomento de la investigación joven.</p>
      <p class="mt-4">Su proyecto, titulado "Factores Protectores y Desarrollo de la Resiliencia en Adolescentes Expuestos a Adversidad Temprana", fue seleccionado entre cientos de propuestas a nivel nacional.</p>
      <blockquote class="mt-6 mb-6 p-4 border-l-4 border-primary bg-primary/10 italic text-muted-foreground">
        "Estoy muy agradecida por esta oportunidad. Espero que mi investigación pueda aportar conocimientos útiles para diseñar programas de apoyo más efectivos para los jóvenes", comentó María.
      </blockquote>
      <p>La beca incluye financiamiento por un año y la mentoría del Dr. [Nombre Mentor - Placeholder], reconocido experto en psicología del desarrollo. ¡Felicitaciones, María!</p>
    `,
    imageUrl: 'https://picsum.photos/seed/news2/800/450',
  },
  {
    id: 3,
    slug: 'taller-relajacion',
    title: 'Taller: Técnicas de Relajación y Manejo del Estrés',
    date: '2024-10-05',
    type: 'Evento',
    excerpt: 'Dirigido a la comunidad universitaria, este taller práctico ofrecerá herramientas para mejorar el bienestar emocional.',
     content: `
      <p>En el marco de nuestro programa de Bienestar Universitario, invitamos a estudiantes, docentes y personal administrativo a participar en este taller gratuito diseñado para aprender y practicar técnicas efectivas de relajación.</p>
      <h3 class="text-xl font-semibold mt-6 mb-3 text-primary">Contenido del Taller:</h3>
      <ul class="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
        <li>Introducción al estrés y sus efectos fisiológicos y psicológicos.</li>
        <li>Técnicas de respiración diafragmática.</li>
        <li>Relajación muscular progresiva de Jacobson.</li>
        <li>Mindfulness y atención plena.</li>
        <li>Estrategias cognitivas para el manejo del estrés diario.</li>
      </ul>
      <p>El taller será facilitado por la Mg. [Nombre Facilitador - Placeholder], especialista en manejo del estrés y técnicas de relajación.</p>
      <p class="mt-4"><strong>Lugar:</strong> Auditorio de la Escuela | <strong>Hora:</strong> 10:00 AM - 1:00 PM</p>
      <p class="mt-4"><strong>Inscripciones:</strong> Enviar correo a bienestar@university.edu - Cupos limitados.</p>
    `,
     imageUrl: 'https://picsum.photos/seed/news3/800/450',
   },
   {
     id: 4,
     slug: 'libro-martinez',
     title: 'Publicación de Libro por Docente de la Escuela',
     date: '2024-08-10',
     type: 'Noticia',
     excerpt: 'El Dr. Carlos Martínez presentó su nuevo libro "Neuropsicología del Aprendizaje" en la feria internacional del libro.',
     content: `
       <p>La comunidad académica celebra la publicación del libro "Neuropsicología del Aprendizaje: Bases Neurales y Aplicaciones Educativas", escrito por nuestro distinguido docente, el Dr. Carlos Martínez.</p>
       <p class="mt-4">La obra, fruto de años de investigación y experiencia clínica, explora la compleja relación entre el cerebro y los procesos de aprendizaje, ofreciendo una perspectiva actualizada y aplicada para educadores, psicólogos y neurocientíficos.</p>
       <p class="mt-4">El libro fue presentado oficialmente en la [Nombre Feria del Libro - Placeholder], donde el Dr. Martínez ofreció una charla magistral sobre los avances recientes en el campo.</p>
       <blockquote class="mt-6 mb-6 p-4 border-l-4 border-primary bg-primary/10 italic text-muted-foreground">
         "Comprender cómo aprende el cerebro es fundamental para diseñar estrategias educativas más eficaces y personalizadas", señaló el autor durante la presentación.
       </blockquote>
       <p>El libro ya se encuentra disponible en las principales librerías y plataformas digitales.</p>
     `,
     imageUrl: 'https://picsum.photos/seed/news4/800/450',
   },
 // Add corresponding entries for other news items
];

// Function to simulate fetching data based on slug
async function getNewsItem(slug: string | string[] | undefined) {
  // In a real app, you would fetch this data from a CMS or database
  if (typeof slug !== 'string') return null;
  await new Promise(resolve => setTimeout(resolve, 200)); // Simulate network delay
  return newsItems.find(item => item.slug === slug) || null;
}

export default async function NewsDetailPage() {
  const params = useParams();
  const newsItem = await getNewsItem(params.slug);

  if (!newsItem) {
    // Handle case where news item is not found
    // You could redirect to a 404 page or show a message
     return (
       <div className="container py-16 md:py-24 lg:py-32 text-center"> {/* Removed px-4 md:px-6 */}
         <h1 className="text-3xl font-bold text-destructive mb-4">Noticia no encontrada</h1>
         <p className="text-muted-foreground mb-6">Lo sentimos, la noticia que buscas no existe o ha sido movida.</p>
          <Button asChild variant="outline">
           <Link href="/news">
             <span><ArrowLeft className="mr-2 h-4 w-4 inline" /> Volver a Noticias</span>
           </Link>
         </Button>
       </div>
     );
  }

  return (
    <div className="container py-16 md:py-24 lg:py-32 max-w-4xl mx-auto"> {/* Removed px-4 md:px-6 */}
       <Button asChild variant="outline" className="mb-8">
         <Link href="/news">
           <span><ArrowLeft className="mr-2 h-4 w-4 inline" /> Volver a Noticias</span>
         </Link>
       </Button>

      <article>
        <header className="mb-8">
          <div className="w-full aspect-video rounded-lg overflow-hidden mb-6 shadow-lg">
             {/* Replace Image with ImageLightbox */}
             <ImageLightbox
               src={newsItem.imageUrl}
               alt={`Imagen para ${newsItem.title}`}
               fill
               style={{ objectFit: 'cover' }}
               priority // Prioritize loading the main image
               triggerClassName="w-full h-full" // Make trigger div fill container
               sizes="(max-width: 1024px) 100vw, 896px" // Adjust sizes based on max-w-4xl
             />
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
             <Calendar className="h-4 w-4" />
             <span>Publicado el {new Date(newsItem.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
           </div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl text-primary mb-4">
            {newsItem.title}
          </h1>
           {/* You can add author info here if available */}
           {/* <p className="text-muted-foreground">Por: [Nombre del Autor]</p> */}
        </header>

        <div
           className="prose prose-lg dark:prose-invert max-w-none text-foreground prose-headings:text-primary prose-a:text-accent hover:prose-a:underline prose-blockquote:border-primary prose-blockquote:bg-primary/10 prose-blockquote:text-muted-foreground prose-ul:text-muted-foreground prose-li:text-muted-foreground prose-p:text-muted-foreground dark:prose-blockquote:bg-primary/20 dark:prose-p:text-muted-foreground dark:prose-ul:text-muted-foreground dark:prose-li:text-muted-foreground"
           dangerouslySetInnerHTML={{ __html: newsItem.content }}
         />

       </article>
     </div>
   );
 }

 // Optional: Generate static paths if you know all slugs beforehand
 // export async function generateStaticParams() {
 //   // Fetch all news slugs from your data source
 //   // const slugs = await fetchNewsSlugs();
 //   const slugs = newsItems.map(item => item.slug);

 //   return slugs.map((slug) => ({
 //     slug: slug,
 //   }));
 // }

 // Optional: Add metadata generation
 // export async function generateMetadata({ params }: { params: { slug: string } }) {
 //   const newsItem = await getNewsItem(params.slug);
 //   if (!newsItem) {
 //     return { title: 'Noticia no encontrada' };
 //   }
 //   return {
 //     title: `${newsItem.title} | PsycheSite`,
 //     description: newsItem.excerpt,
 //     // Add Open Graph tags etc.
 //   };
 // }
