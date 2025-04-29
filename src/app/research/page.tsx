
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Beaker, FlaskConical, Users, Library, FileText, GraduationCap, Laptop, ChevronRight, Microscope, Target } from 'lucide-react'; // Using available icons
import { ImageLightbox } from '@/components/ui/image-lightbox';
import { cn } from '@/lib/utils';

// Placeholder data for recognized researchers
const researchers = [
  {
    id: 1,
    name: 'Dr. Elena Campos',
    area: 'Psicología Clínica y de la Salud',
    imageUrl: 'https://picsum.photos/seed/researcher1/300/300',
    bio: 'Investigadora principal en estudios sobre el impacto del trauma y desarrollo de intervenciones basadas en mindfulness.',
  },
  {
    id: 2,
    name: 'Dr. Marco Linares',
    area: 'Neurociencia Cognitiva',
    imageUrl: 'https://picsum.photos/seed/researcher2/300/300',
    bio: 'Experto en las bases neurales de la toma de decisiones y el control cognitivo, utilizando técnicas de neuroimagen.',
  },
  {
    id: 3,
    name: 'Dra. Sofia Álvarez',
    area: 'Psicología Social y Comunitaria',
    imageUrl: 'https://picsum.photos/seed/researcher3/300/300',
    bio: 'Lidera proyectos sobre prejuicio intergrupal, identidad social y desarrollo de programas de intervención comunitaria.',
  },
  // Add more researchers
];

// Data for the colored grid cards with updated links
const serviceCards = [
  { title: 'Líneas de Investigación', icon: Target, color: 'bg-blue-500 hover:bg-blue-600', href: '#research-lines', external: false }, // Internal anchor
  { title: 'Ambientes Académicos', icon: Library, color: 'bg-green-500 hover:bg-green-600', href: 'https://www.portal.unap.edu.pe/', external: true }, // External link
  { title: 'Investigadores', icon: Users, color: 'bg-yellow-500 hover:bg-yellow-600', href: '#researchers', external: false }, // Internal anchor
  { title: 'Publicaciones', icon: FileText, color: 'bg-red-500 hover:bg-red-600', href: 'https://biblioteca.concytec.gob.pe/', external: true }, // External link
  { title: 'Repositorio de Tesis', icon: GraduationCap, color: 'bg-purple-500 hover:bg-purple-600', href: 'https://repositorio.unap.edu.pe/', external: true }, // External link
  { title: 'Laboratorios y Gabinetes', icon: FlaskConical, color: 'bg-indigo-500 hover:bg-indigo-600', href: '#', external: false }, // Placeholder internal/no link
  { title: 'Campus Virtual', icon: Laptop, color: 'bg-pink-500 hover:bg-pink-600', href: 'https://aulavirtual2.unap.edu.pe/login?ReturnUrl=%2F', external: true }, // External link
];

// Placeholder data for research lines
const researchLines = [
 {
    title: 'Psicología Clínica y de la Salud',
    icon: <FlaskConical className="h-6 w-6 text-blue-600" />, // Example icon
    points: [
      'Psicopatología y evaluación clínica',
      'Intervenciones psicoterapéuticas basadas en evidencia',
      'Psicología de la salud y enfermedades crónicas',
      'Neuropsicología clínica',
      'Salud mental comunitaria',
    ],
  },
   {
    title: 'Psicología Educativa y del Desarrollo',
    icon: <GraduationCap className="h-6 w-6 text-green-600" />, // Example icon
    points: [
      'Procesos de aprendizaje y enseñanza',
      'Desarrollo socioemocional en niños y adolescentes',
      'Inclusión educativa y necesidades especiales',
      'Orientación vocacional y profesional',
      'Tecnología educativa y aprendizaje',
    ],
  },
  {
     title: 'Psicología Social y Organizacional',
     icon: <Users className="h-6 w-6 text-yellow-600" />, // Example icon
     points: [
       'Comportamiento organizacional y clima laboral',
       'Psicología del consumidor',
       'Relaciones intergrupales y prejuicio',
       'Psicología comunitaria y participación social',
       'Liderazgo y dinámica de grupos',
     ],
   },
   {
      title: 'Neurociencia Cognitiva y Comportamental',
      icon: <Microscope className="h-6 w-6 text-red-600" />, // Example icon (Brain icon not available)
      points: [
        'Bases neurales de la cognición (atención, memoria, lenguaje)',
        'Toma de decisiones y control ejecutivo',
        'Neurociencia afectiva y social',
        'Psicofisiología y biofeedback',
        'Modelado computacional del comportamiento',
      ],
    },
];

export default function ResearchPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-32">
      <header className="text-center mb-12 md:mb-16">
        <Microscope className="h-16 w-16 mx-auto text-primary mb-4" /> {/* Changed icon */}
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-primary">
          Investigación y Servicios
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Explora nuestras áreas de investigación, conoce a nuestros expertos y accede a nuestros servicios.
        </p>
      </header>

      {/* Nuestros Investigadores Reconocidos Section */}
      <section id="researchers" className="mb-16 md:mb-20 scroll-mt-20">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-10 text-primary">
          Nuestros Investigadores Reconocidos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchers.map((researcher) => (
            <Card key={researcher.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <div className="h-56 sm:h-64">
                <ImageLightbox
                  src={researcher.imageUrl}
                  alt={`Foto de ${researcher.name}`}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                  className="transition-transform duration-500"
                  triggerClassName="w-full h-full"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={70}
                />
              </div>
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-xl font-semibold text-primary">{researcher.name}</CardTitle>
                <p className="text-sm font-medium text-accent">{researcher.area}</p>
              </CardHeader>
              <CardContent className="p-4 pt-0 flex-grow">
                <p className="text-sm text-muted-foreground">{researcher.bio}</p>
              </CardContent>
               {/* Optional: Add link to researcher profile page */}
               {/* <CardFooter className="p-4 pt-0">
                 <Button variant="link" size="sm" asChild className="p-0 h-auto">
                   <Link href={`/faculty/${researcher.id}`}>Ver Perfil Completo <ChevronRight className="ml-1 h-4 w-4" /></Link>
                 </Button>
               </CardFooter> */}
            </Card>
          ))}
        </div>
      </section>

      {/* Grid Navigation Cards */}
      <section className="mb-16 md:mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {serviceCards.map((card, index) => (
             <Link
                key={index}
                href={card.href}
                className="block group"
                target={card.external ? "_blank" : undefined}
                rel={card.external ? "noopener noreferrer" : undefined}
              >
                {/* Using inline styles for specific background colors from the image */}
                <Card className={cn("text-center text-white p-6 h-32 flex flex-col justify-center items-center rounded-lg shadow-md transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-xl", card.color)}>
                  <card.icon className="h-8 w-8 mb-2" />
                  <CardTitle className="text-base font-semibold">{card.title}</CardTitle>
                </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Líneas de Investigación Section */}
      <section id="research-lines" className="mb-16 md:mb-20 scroll-mt-20">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-10 text-primary">
          Líneas de Investigación
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {researchLines.map((line, index) => (
            <Card key={index} className="shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center gap-3 pb-3">
                {line.icon}
                <CardTitle className="text-xl font-semibold text-primary">{line.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {line.points.map((point, pIndex) => (
                    <li key={pIndex} className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Servicios Section Placeholder */}
       <section className="mb-16 md:mb-20">
         <h2 className="text-3xl font-bold tracking-tight text-center mb-10 text-primary">
           Nuestros Servicios
         </h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Example Service Cards */}
            <Card className="text-center p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <FlaskConical className="h-12 w-12 mx-auto text-accent mb-4" />
              <CardTitle className="text-xl font-semibold text-primary mb-2">Evaluación Psicológica</CardTitle>
              <p className="text-sm text-muted-foreground">Servicios de evaluación para niños, adolescentes y adultos en diversas áreas.</p>
            </Card>
            <Card className="text-center p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <Users className="h-12 w-12 mx-auto text-accent mb-4" />
              <CardTitle className="text-xl font-semibold text-primary mb-2">Consultoría Organizacional</CardTitle>
               <p className="text-sm text-muted-foreground">Asesoramiento en selección de personal, clima laboral, desarrollo de liderazgo y bienestar.</p>
            </Card>
            <Card className="text-center p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <GraduationCap className="h-12 w-12 mx-auto text-accent mb-4" />
              <CardTitle className="text-xl font-semibold text-primary mb-2">Talleres y Capacitaciones</CardTitle>
              <p className="text-sm text-muted-foreground">Ofrecemos programas de formación continua y talleres especializados para profesionales y público general.</p>
             </Card>
         </div>
          <div className="text-center mt-10">
             <Button asChild>
               <Link href="/contact?inquiryType=other&subject=Consulta%20Servicios">
                 Solicitar más Información sobre Servicios <ChevronRight className="ml-2 h-4 w-4" />
               </Link>
             </Button>
           </div>
       </section>

    </div>
  );
}

