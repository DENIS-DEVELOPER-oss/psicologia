
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Building, History, Award, Target, Users, Library, Network, Check, FlaskConical, Handshake, Globe, GraduationCap, BookOpen, Server, Lightbulb } from 'lucide-react'; // Added Lightbulb icon
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { ImageLightbox } from '@/components/ui/image-lightbox'; // Import the new component

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-32"> {/* Added mx-auto */}
      {/* Removed redundant max-w-4xl mx-auto wrapper */}
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

        {/* Quick Links Row */}
        <section className="w-full">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-8 text-primary">Nuestra Escuela Profesional</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Misión y Visión", icon: Target, href: "#mission-vision" }, // Link to sections below
              { title: "Objetivos Educacionales", icon: BookOpen, href: "#objectives" },
              { title: "Perfil del Egresado", icon: GraduationCap, href: "#graduate-profile" },
              { title: "Recursos e Infraestructura", icon: Server, href: "#resources" }, // Changed title for consistency
            ].map((item, index) => (
              <Link key={index} href={item.href} className="block group">
                <Card className="text-center hover:shadow-lg transition-shadow duration-300 p-4 h-full flex flex-col justify-center items-center bg-primary/5 hover:bg-primary/10">
                  <item.icon className="h-8 w-8 text-primary mb-2 transition-transform group-hover:scale-110" />
                  <CardTitle className="text-sm md:text-base font-semibold text-primary group-hover:underline">{item.title}</CardTitle>
                </Card>
              </Link>
            ))}
          </div>
        </section>


        {/* Director's Message */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-primary">Mensaje del Director</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-1 h-48 md:h-56 rounded-md overflow-hidden">
              {/* Replace Image with ImageLightbox */}
              <ImageLightbox
                src="https://picsum.photos/seed/director/300/400"
                alt="Foto del Director/a - Placeholder"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
                className="transition-transform duration-500" // Removed hover:scale
                triggerClassName="w-full h-full"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 20vw"
              />
            </div>
            <div className="md:col-span-2 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                En nombre de nuestra comunidad académica, les damos la más cordial bienvenida a la Escuela Profesional de Psicología. Nuestra misión es formar profesionales altamente calificados, éticos y comprometidos con el bienestar psicológico individual y social, contribuyendo al desarrollo sostenible de nuestra región y país.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Fomentamos un ambiente de aprendizaje colaborativo, investigación innovadora y servicio a la comunidad. Creemos firmemente en el poder de la psicología para transformar vidas y sociedades.
              </p>
              <p className="text-muted-foreground leading-relaxed italic">
                - [Nombre del Director/a - Placeholder], Director/a
              </p>
            </div>
          </CardContent>
        </Card>


        {/* Mission Section */}
        <Card id="mission-vision" className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 scroll-mt-20">
            <CardHeader className="bg-primary/10 p-6">
                <div className="flex items-center gap-4">
                  <Target className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl font-semibold text-primary">Nuestra Misión y Visión</CardTitle>
                </div>
              </CardHeader>
          <CardContent className="p-6 md:p-8">
            <h3 className="text-xl font-semibold text-foreground mb-2">Misión</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Formar profesionales de la psicología con sólidos conocimientos científicos, habilidades clínicas y un fuerte compromiso ético y social. Buscamos contribuir al bienestar individual y colectivo a través de la investigación, la docencia y la extensión universitaria, promoviendo una comprensión profunda del comportamiento humano y sus contextos.
            </p>
            <h3 className="text-xl font-semibold text-foreground mb-2">Visión</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser una escuela líder y referente a nivel nacional e internacional en la formación de psicólogos, reconocida por su excelencia académica, innovación en investigación y contribución significativa al desarrollo social y al bienestar psicológico de la comunidad. (Placeholder Vision)
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
              <div className="h-64 rounded-lg overflow-hidden">
                {/* Replace Image with ImageLightbox */}
                <ImageLightbox
                  src="https://picsum.photos/seed/history/600/400"
                  alt="Hito histórico de la escuela"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500" // Removed hover:scale
                  triggerClassName="w-full h-full"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </CardContent>
          </Card>

          {/* Why Choose Us Section */}
            <Card className="shadow-md bg-secondary/50">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-primary">¿Por qué elegirnos?</CardTitle>
                <CardDescription>Descubre las ventajas de estudiar con nosotros.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent mt-1 shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground">Calidad Acreditada</h4>
                      <p>Programa acreditado por [Organismo Acreditador - Placeholder], garantizando altos estándares educativos.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FlaskConical className="h-5 w-5 text-accent mt-1 shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground">Infraestructura Moderna</h4>
                      <p>Laboratorios especializados (Gesell, psicometría) y aulas equipadas con tecnología.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Handshake className="h-5 w-5 text-accent mt-1 shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground">Convenios Estratégicos</h4>
                      <p>Alianzas con instituciones de salud, educativas y empresariales para prácticas preprofesionales.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-accent mt-1 shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground">Proyección Internacional</h4>
                      <p>Oportunidades de intercambio y colaboración con universidades extranjeras.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-accent mt-1 shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground">Comunidad Activa</h4>
                      <p>Ambiente estudiantil diverso, participativo y de apoyo mutuo.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lightbulb className="h-5 w-5 text-accent mt-1 shrink-0" /> {/* Added Item */}
                    <div>
                      <h4 className="font-medium text-foreground">Fomento a la Investigación</h4>
                      <p>Participación en proyectos de investigación junto a docentes y acceso a grupos de estudio.</p>
                    </div>
                  </li>
                </ul>
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
            </CardContent>
          </Card>

          {/* Additional Sections based on Quick Links */}
            <Card id="objectives" className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 scroll-mt-20">
              <CardHeader className="bg-primary/10 p-6">
                <div className="flex items-center gap-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl font-semibold text-primary">Objetivos Educacionales</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 md:p-8">
                <p className="text-muted-foreground leading-relaxed mb-4">Nuestros objetivos se centran en:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Proporcionar una sólida formación teórica y metodológica en psicología.</li>
                  <li>Desarrollar habilidades clínicas y de intervención eficaces y éticas.</li>
                  <li>Fomentar el pensamiento crítico y la capacidad de investigación.</li>
                  <li>Promover el compromiso social y la aplicación del conocimiento psicológico para el bienestar comunitario.</li>
                  <li>Cultivar el desarrollo personal y profesional continuo de nuestros estudiantes.</li>
                </ul>
              </CardContent>
            </Card>

            <Card id="graduate-profile" className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 scroll-mt-20">
              <CardHeader className="bg-primary/10 p-6">
                <div className="flex items-center gap-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl font-semibold text-primary">Perfil del Egresado</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 md:p-8">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El egresado de la Escuela Profesional de Psicología será un profesional competente, ético y reflexivo, capaz de:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Evaluar, diagnosticar e intervenir en problemáticas psicológicas individuales, grupales y comunitarias.</li>
                  <li>Diseñar y ejecutar proyectos de investigación relevantes en el campo de la psicología.</li>
                  <li>Aplicar conocimientos psicológicos en diversos contextos (clínico, educativo, organizacional, social).</li>
                  <li>Comunicarse eficazmente y trabajar en equipos multidisciplinarios.</li>
                  <li>Comprometerse con el aprendizaje continuo y el desarrollo profesional.</li>
                </ul>
              </CardContent>
            </Card>

            <Card id="resources" className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 scroll-mt-20">
              <CardHeader className="bg-primary/10 p-6">
                <div className="flex items-center gap-4">
                  <Server className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl font-semibold text-primary">Recursos e Infraestructura</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 md:p-8 grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Contamos con instalaciones modernas y recursos para apoyar tu aprendizaje:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Cámara Gesell para observación y práctica clínica.</li>
                      <li>Laboratorio de Psicometría con pruebas actualizadas.</li>
                      <li>Biblioteca especializada con acceso a bases de datos científicas.</li>
                      <li>Aulas multimedia equipadas con tecnología audiovisual.</li>
                      <li>Auditorio para conferencias y eventos académicos.</li>
                      <li>Plataforma virtual de aprendizaje (PsycheConnect - si aplica).</li>
                      <li>Salas de estudio y espacios comunes.</li>
                    </ul>
                  </div>
                  <div className="h-64 rounded-lg overflow-hidden">
                        {/* Replace Image with ImageLightbox */}
                      <ImageLightbox
                          src="https://picsum.photos/seed/resources/600/400"
                          alt="Instalaciones de la escuela"
                          fill
                          style={{ objectFit: 'cover' }}
                          className="transition-transform duration-500" // Removed hover:scale
                          triggerClassName="w-full h-full"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                  </div>
              </CardContent>
            </Card>

      </div>
      {/* Removed closing div for max-w-4xl mx-auto */}
    </div>
  );
}
