
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Mail, BookUser, Brain, Heart, BookOpen, Briefcase, Star, UserCheck, UserCog } from 'lucide-react'; // Added icons
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';

// Updated Placeholder data for faculty members with rank and area
const facultyMembers = [
  {
    id: 1,
    name: 'Dra. Ana García',
    title: 'Profesora Principal | PhD en Psicología Clínica',
    rank: 'principal', // Added rank
    area: 'clinica', // Added area
    bio: 'Experta en terapia cognitivo-conductual y salud mental comunitaria. Más de 15 años de experiencia en docencia e investigación.',
    researchInterests: 'Ansiedad, Depresión, Intervenciones Psicológicas Basadas en Evidencia.',
    email: 'agarcia@university.edu',
    imageUrl: 'https://picsum.photos/seed/prof1/300/300',
  },
  {
    id: 2,
    name: 'Dr. Carlos Martínez',
    title: 'Profesor Asociado | PhD en Neuropsicología',
    rank: 'asociado', // Added rank
    area: 'neuro', // Added area
    bio: 'Investigador en las bases neurales de la memoria y el aprendizaje. Interesado en el desarrollo de herramientas de evaluación neuropsicológica.',
    researchInterests: 'Neurociencia Cognitiva, Evaluación Neuropsicológica, Rehabilitación Cognitiva.',
    email: 'cmartinez@university.edu',
    imageUrl: 'https://picsum.photos/seed/prof2/300/300',
  },
  {
     id: 3,
     name: 'Mg. Luisa Fernández',
     title: 'Profesora Auxiliar | Magíster en Psicología Educativa',
     rank: 'auxiliar', // Added rank
     area: 'educativa', // Added area
     bio: 'Especialista en dificultades de aprendizaje y desarrollo infantil. Trabaja en la implementación de programas de intervención psicoeducativa.',
     researchInterests: 'Psicología del Desarrollo, Psicología Educativa, Inclusión Educativa.',
     email: 'lfernandez@university.edu',
     imageUrl: 'https://picsum.photos/seed/prof3/300/300',
   },
   {
     id: 4,
     name: 'Dr. Javier Torres',
     title: 'Profesor Principal | PhD en Psicología Social',
     rank: 'principal', // Added rank
     area: 'social', // Added area
     bio: 'Investiga sobre dinámicas grupales, prejuicio y relaciones intergrupales. Ha publicado numerosos artículos en revistas internacionales.',
     researchInterests: 'Identidad Social, Relaciones Intergrupales, Cognición Social.',
     email: 'jtorres@university.edu',
     imageUrl: 'https://picsum.photos/seed/prof4/300/300',
   },
   {
    id: 5,
    name: 'Dr. Ricardo Solis',
    title: 'Profesor Asociado | PhD en Psicología Organizacional',
    rank: 'asociado',
    area: 'organizacional',
    bio: 'Consultor y académico enfocado en comportamiento organizacional, liderazgo y bienestar laboral.',
    researchInterests: 'Clima Laboral, Liderazgo Transformacional, Selección de Personal, Psicología Positiva Organizacional.',
    email: 'rsolis@university.edu',
    imageUrl: 'https://picsum.photos/seed/prof5/300/300',
  },
  {
    id: 6,
    name: 'Mg. Elena Vargas',
    title: 'Profesora Auxiliar | Magíster en Psicología Clínica',
    rank: 'auxiliar',
    area: 'clinica',
    bio: 'Psicoterapeuta con experiencia en terapia familiar sistémica y atención a adolescentes.',
    researchInterests: 'Terapia Familiar, Psicología del Adolescente, Vínculos Afectivos.',
    email: 'evargas@university.edu',
    imageUrl: 'https://picsum.photos/seed/prof6/300/300',
  },
   // Add more faculty members as needed
];

// Define filter categories
const filterCategories = [
  { value: 'todos', label: 'Todos', icon: Users },
  { value: 'principal', label: 'Principales', icon: Star },
  { value: 'asociado', label: 'Asociados', icon: UserCheck },
  { value: 'auxiliar', label: 'Auxiliares', icon: UserCog },
  { value: 'clinica', label: 'Psicología Clínica', icon: Heart },
  { value: 'educativa', label: 'Psicología Educativa', icon: BookOpen },
  { value: 'organizacional', label: 'Psicología Organizacional', icon: Briefcase },
  { value: 'social', label: 'Psicología Social', icon: Users }, // Re-using Users icon for social
  { value: 'neuro', label: 'Neuropsicología', icon: Brain },
];

export default function FacultyPage() {
  const [filter, setFilter] = useState('todos'); // Default filter

  const filteredMembers = facultyMembers.filter(member => {
    if (filter === 'todos') return true;
    if (['principal', 'asociado', 'auxiliar'].includes(filter)) {
      return member.rank === filter;
    }
    if (['clinica', 'educativa', 'organizacional', 'social', 'neuro'].includes(filter)) {
        // Check if the faculty member belongs to the selected area, potentially considering their title or interests too
        // Simple check based on added 'area' field:
        return member.area === filter;
        // More complex check (example):
        // const areaKeywords = {
        //     clinica: /clínica|psicoterapia|salud mental/i,
        //     educativa: /educativa|aprendizaje|desarrollo infantil|escolar/i,
        //     organizacional: /organizacional|laboral|liderazgo|empresas|recursos humanos/i,
        //     social: /social|comunitaria|grupal|intergrupal/i,
        //     neuro: /neuropsicología|neurociencia|cognitiva|cerebro/i,
        // };
        // const regex = areaKeywords[filter as keyof typeof areaKeywords];
        // return regex && (regex.test(member.title) || regex.test(member.bio) || regex.test(member.researchInterests));
    }
    return false;
  });

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

      {/* Filter Tabs */}
      <div className="mb-10 flex justify-center">
         <Tabs value={filter} onValueChange={setFilter} className="w-auto">
           <TabsList className="flex flex-wrap h-auto justify-center bg-primary/5 p-2 rounded-full shadow-inner gap-1 md:gap-2">
             {filterCategories.map((category) => (
               <TabsTrigger
                 key={category.value}
                 value={category.value}
                 className={cn(
                   "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out",
                   "data-[state=inactive]:bg-transparent data-[state=inactive]:text-muted-foreground data-[state=inactive]:hover:bg-primary/10 data-[state=inactive]:hover:text-primary",
                   "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md"
                 )}
               >
                 <category.icon className="h-4 w-4" />
                 {category.label}
               </TabsTrigger>
             ))}
           </TabsList>
         </Tabs>
       </div>


      {/* Faculty Grid */}
       {filteredMembers.length > 0 ? (
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member) => (
             <Card key={member.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col group animate-fade-in"> {/* Added animation */}
               <div className="relative w-full h-56 sm:h-64">
                 <Image
                   src={member.imageUrl}
                   alt={`Foto de ${member.name}`}
                   fill
                   style={{ objectFit: 'cover', objectPosition: 'top' }} // Added objectPosition
                   className="transition-transform duration-500 group-hover:scale-105"
                   sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" // Added sizes attribute
                 />
                 {/* Optional overlay for contact info on hover */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex justify-end items-center space-x-3">
                    <a href={`mailto:${member.email}`} aria-label={`Enviar correo a ${member.name}`} className="text-white hover:text-primary transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                    {/* Add more icons like LinkedIn, ResearchGate if applicable */}
                 </div>
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
                  {/* Email link moved to hover overlay, can be kept here as fallback if needed */}
                   {/* <div className="mt-4 flex items-center gap-2 text-sm text-accent hover:underline">
                    <Mail className="h-4 w-4" />
                    <a href={`mailto:${member.email}`} aria-label={`Enviar correo a ${member.name}`}>
                      {member.email}
                    </a>
                  </div> */}
                </CardContent>
              </Card>
            ))}
          </div>
         ) : (
          <div className="text-center col-span-full py-12">
            <p className="text-muted-foreground text-lg">No se encontraron docentes que coincidan con el filtro seleccionado.</p>
           </div>
       )}
     </div>
   );
 }
