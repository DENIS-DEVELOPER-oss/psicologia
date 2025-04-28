import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, History, Award, Target } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container py-16 md:py-24 lg:py-32 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12 md:mb-16">
          <Building className="h-16 w-16 mx-auto text-primary mb-4" />
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-primary">
            Sobre Nuestra Escuela
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprometidos con la formación de líderes en el campo de la psicología.
          </p>
        </header>

        <div className="grid gap-12 md:gap-16">
          {/* Mission Section */}
          <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
             <CardHeader className="bg-primary/10 p-6">
                 <div className="flex items-center gap-4">
                   <Target className="h-8 w-8 text-primary" />
                   <CardTitle className="text-2xl font-semibold text-primary">Nuestra Misión</CardTitle>
                 </div>
               </CardHeader>
            <CardContent className="p-6 md:p-8">
              <p className="text-muted-foreground leading-relaxed">
                Formar profesionales de la psicología con sólidos conocimientos científicos, habilidades clínicas y un fuerte compromiso ético y social. Buscamos contribuir al bienestar individual y colectivo a través de la investigación, la docencia y la extensión universitaria, promoviendo una comprensión profunda del comportamiento humano y sus contextos.
              </p>
            </CardContent>
          </Card>

          {/* History Section */}
         <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="bg-primary/10 p-6">
              <div className="flex items-center gap-4">
                <History className="h-8 w-8 text-primary" />
                 <CardTitle className="text-2xl font-semibold text-primary">Nuestra Historia</CardTitle>
               </div>
             </CardHeader>
             <CardContent className="p-6 md:p-8 grid md:grid-cols-2 gap-8 items-center">
               <div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Fundada en [Año de Fundación - Placeholder], la Escuela Profesional de Psicología ha crecido significativamente, consolidándose como un referente en la educación psicológica en la región. A lo largo de los años, hemos adaptado nuestros programas a las nuevas demandas sociales y avances científicos, manteniendo siempre nuestro compromiso con la calidad educativa.
                </p>
                 <p className="text-muted-foreground leading-relaxed">
                  Nuestros egresados se desempeñan exitosamente en diversos ámbitos, reflejando el impacto positivo de nuestra formación.
                 </p>
               </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                 <Image
                    src="https://picsum.photos/seed/history/600/400"
                    alt="Hito histórico de la escuela"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
             </CardContent>
           </Card>

          {/* Accreditation Section */}
         <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
           <CardHeader className="bg-primary/10 p-6">
             <div className="flex items-center gap-4">
                <Award className="h-8 w-8 text-primary" />
                 <CardTitle className="text-2xl font-semibold text-primary">Acreditación y Calidad</CardTitle>
               </div>
            </CardHeader>
             <CardContent className="p-6 md:p-8">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Estamos orgullosos de contar con la acreditación [Nombre del Organismo Acreditador - Placeholder], un reconocimiento a nuestro compromiso con los más altos estándares de calidad educativa.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Esta acreditación valida la excelencia de nuestros programas académicos, la calificación de nuestro cuerpo docente y la adecuación de nuestra infraestructura y recursos para el aprendizaje. Continuamos trabajando en procesos de mejora continua para asegurar una formación de vanguardia.
              </p>
              {/* Optionally add logos of accreditation bodies */}
              {/* <div className="mt-6 flex gap-4">
                <Image src="/placeholder-logo.png" alt="Accreditation Logo 1" width={100} height={50} />
                <Image src="/placeholder-logo.png" alt="Accreditation Logo 2" width={100} height={50} />
              </div> */}
             </CardContent>
           </Card>
        </div>
      </div>
    </div>
  );
}
