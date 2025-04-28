import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Mail, BookUser, Brain } from 'lucide-react';

// Placeholder data for faculty members
const facultyMembers = [
  {
    id: 1,
    name: 'Dra. Ana García',
    title: 'Profesora Principal | PhD en Psicología Clínica',
    bio: 'Experta en terapia cognitivo-conductual y salud mental comunitaria. Más de 15 años de experiencia en docencia e investigación.',
    researchInterests: 'Ansiedad, Depresión, Intervenciones Psicológicas Basadas en Evidencia.',
    email: 'agarcia@university.edu',
    imageUrl: 'https://picsum.photos/seed/prof1/300/300',
  },
  {
    id: 2,
    name: 'Dr. Carlos Martínez',
    title: 'Profesor Asociado | PhD en Neuropsicología',
    bio: 'Investigador en las bases neurales de la memoria y el aprendizaje. Interesado en el desarrollo de herramientas de evaluación neuropsicológica.',
    researchInterests: 'Neurociencia Cognitiva, Evaluación Neuropsicológica, Rehabilitación Cognitiva.',
    email: 'cmartinez@university.edu',
    imageUrl: 'https://picsum.photos/seed/prof2/300/300',
  },
  {
     id: 3,
     name: 'Mg. Luisa Fernández',
     title: 'Profesora Auxiliar | Magíster en Psicología Educativa',
     bio: 'Especialista en dificultades de aprendizaje y desarrollo infantil. Trabaja en la implementación de programas de intervención psicoeducativa.',
     researchInterests: 'Psicología del Desarrollo, Psicología Educativa, Inclusión Educativa.',
     email: 'lfernandez@university.edu',
     imageUrl: 'https://picsum.photos/seed/prof3/300/300',
   },
   {
     id: 4,
     name: 'Dr. Javier Torres',
     title: 'Profesor Principal | PhD en Psicología Social',
     bio: 'Investiga sobre dinámicas grupales, prejuicio y relaciones intergrupales. Ha publicado numerosos artículos en revistas internacionales.',
     researchInterests: 'Identidad Social, Relaciones Intergrupales, Cognición Social.',
     email: 'jtorres@university.edu',
     imageUrl: 'https://picsum.photos/seed/prof4/300/300',
   },
   // Add more faculty members as needed
];

export default function FacultyPage() {
  return (
    <div className="container py-16 md:py-24 lg:py-32 px-4 md:px-6">
      <header className="text-center mb-12 md:mb-16">
         <Users className="h-16 w-16 mx-auto text-primary mb-4" />
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-primary">
          Nuestro Cuerpo Docente
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Conoce a los expertos que guían la formación de nuestros estudiantes.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {facultyMembers.map((member) => (
          <Card key={member.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <div className="relative w-full h-56 sm:h-64">
              <Image
                src={member.imageUrl}
                alt={`Foto de ${member.name}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <CardHeader className="p-4 pb-2">
               <CardTitle className="text-xl font-semibold text-primary">{member.name}</CardTitle>
               <CardDescription className="text-sm text-primary/80">{member.title}</CardDescription>
            </CardHeader>
             <CardContent className="p-4 pt-0 flex-grow flex flex-col justify-between">
                <div>
                 <div className="flex items-start gap-2 mt-2">
                    <BookUser className="h-4 w-4 text-accent mt-1 shrink-0" />
                    <p className="text-sm text-muted-foreground mb-2">{member.bio}</p>
                  </div>
                  <div className="flex items-start gap-2 mt-2">
                     <Brain className="h-4 w-4 text-accent mt-1 shrink-0" />
                     <p className="text-sm text-muted-foreground"><strong>Intereses:</strong> {member.researchInterests}</p>
                  </div>
                </div>
               <div className="mt-4 flex items-center gap-2 text-sm text-accent hover:underline">
                 <Mail className="h-4 w-4" />
                 <a href={`mailto:${member.email}`} aria-label={`Enviar correo a ${member.name}`}>
                   {member.email}
                 </a>
               </div>
             </CardContent>
           </Card>
         ))}
       </div>
     </div>
   );
 }
