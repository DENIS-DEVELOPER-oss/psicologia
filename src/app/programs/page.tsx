
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookMarked, GraduationCap, ListChecks, Microscope, ArrowRight } from "lucide-react"; // Added ArrowRight
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Placeholder data for programs
const programs = [
  {
    id: "undergrad",
    title: "Programa de Pregrado en Psicología",
    description: "Formación integral para comprender el comportamiento humano y aplicar conocimientos en diversos campos.",
    icon: GraduationCap,
    details: {
      duration: "5 años (10 semestres académicos)",
      degree: "Licenciado(a) en Psicología",
      focusAreas: ["Psicología Clínica", "Psicología Educativa", "Psicología Organizacional", "Psicología Social-Comunitaria"],
      curriculumHighlights: [
        "Bases Biológicas del Comportamiento",
        "Procesos Psicológicos Básicos",
        "Psicopatología",
        "Evaluación Psicológica",
        "Técnicas de Intervención Psicológica",
        "Investigación Psicológica",
        "Prácticas Preprofesionales Supervisadas",
      ],
      admissionLink: "/contact?action=apply&program=undergrad",
    }
  },
  {
    id: "postgrad-clinical",
    title: "Maestría en Psicología Clínica con mención en Psicoterapia",
    description: "Especialización avanzada en evaluación, diagnóstico e intervención psicoterapéutica.",
     icon: Microscope,
    details: {
      duration: "2 años (4 semestres académicos)",
      degree: "Magíster en Psicología Clínica",
      focusAreas: ["Terapia Cognitivo-Conductual", "Terapia Sistémica", "Psicoanálisis", "Terapias Humanistas"],
      curriculumHighlights: [
        "Modelos Psicoterapéuticos Avanzados",
        "Psicodiagnóstico Clínico",
        "Intervención en Crisis",
        "Ética en Psicología Clínica",
        "Supervisión Clínica",
        "Investigación Aplicada a la Clínica",
      ],
      admissionLink: "/contact?action=apply&program=postgrad-clinical",
    }
  },
   {
    id: "postgrad-edu",
    title: "Maestría en Psicología Educativa",
    description: "Profundización en los procesos de aprendizaje, desarrollo y orientación vocacional en contextos educativos.",
    icon: ListChecks,
    details: {
      duration: "2 años (4 semestres académicos)",
      degree: "Magíster en Psicología Educativa",
      focusAreas: ["Dificultades de Aprendizaje", "Orientación Vocacional y Profesional", "Convivencia Escolar", "Inclusión Educativa"],
      curriculumHighlights: [
        "Teorías del Aprendizaje y Desarrollo Cognitivo",
        "Evaluación Psicopedagógica",
        "Diseño de Programas de Intervención Psicoeducativa",
        "Políticas Educativas",
        "Investigación en Psicología Educativa",
      ],
      admissionLink: "/contact?action=apply&program=postgrad-edu",
    }
   },
   // Add more programs as needed
 ];

export default function ProgramsPage() {
  return (
    <div className="container py-16 md:py-24 lg:py-32"> {/* Removed px-4 md:px-6 */}
      <header className="text-center mb-12 md:mb-16">
        <BookMarked className="h-16 w-16 mx-auto text-primary mb-4" />
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-primary">
          Programas Académicos
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Descubre nuestras ofertas académicas diseñadas para tu crecimiento profesional.
        </p>
      </header>

      <div className="max-w-4xl mx-auto">
         <Accordion type="single" collapsible className="w-full space-y-6">
           {programs.map((program) => (
             <AccordionItem value={program.id} key={program.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
               <AccordionTrigger className="bg-primary/5 hover:bg-primary/10 px-6 py-4 text-lg font-semibold text-primary text-left">
                 <div className="flex items-center gap-3">
                    <program.icon className="h-6 w-6 text-primary shrink-0" />
                    <span>{program.title}</span>
                 </div>
               </AccordionTrigger>
               <AccordionContent className="px-6 py-6 bg-background">
                  <p className="text-muted-foreground mb-6">{program.description}</p>

                 <div className="grid md:grid-cols-2 gap-6 mb-6">
                   <Card className="bg-secondary/50">
                      <CardHeader>
                        <CardTitle className="text-base font-medium">Detalles Clave</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm text-muted-foreground space-y-2">
                        <p><strong>Duración:</strong> {program.details.duration}</p>
                        <p><strong>Grado Otorgado:</strong> {program.details.degree}</p>
                         <p><strong>Áreas de Énfasis:</strong> {program.details.focusAreas.join(', ')}</p>
                      </CardContent>
                   </Card>
                   <Card className="bg-secondary/50">
                     <CardHeader>
                        <CardTitle className="text-base font-medium">Plan de Estudios (Destacados)</CardTitle>
                     </CardHeader>
                     <CardContent className="text-sm text-muted-foreground">
                       <ul className="list-disc list-inside space-y-1">
                          {program.details.curriculumHighlights.map((item, index) => (
                            <li key={index}>{item}</li>
                           ))}
                        </ul>
                     </CardContent>
                   </Card>
                 </div>

                  <Button asChild>
                    <Link href={program.details.admissionLink}>
                       Información de Admisión <ArrowRight className="ml-2 h-4 w-4 inline" />
                    </Link>
                  </Button>
               </AccordionContent>
             </AccordionItem>
           ))}
         </Accordion>
       </div>
     </div>
   );
 }
