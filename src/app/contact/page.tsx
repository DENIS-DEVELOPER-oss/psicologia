
'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce un correo electrónico válido." }),
  subject: z.string().min(5, { message: "El asunto debe tener al menos 5 caracteres." }),
   inquiryType: z.enum(["general", "admission", "program", "faculty", "other"], {
    required_error: "Por favor, selecciona un tipo de consulta.",
  }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }).max(500, { message: "El mensaje no puede exceder los 500 caracteres." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false); // Added state for submission status

  // Get search params for pre-filling the form
  const [searchParams, setSearchParams] = useState<URLSearchParams | null>(null);
  useEffect(() => {
      if (typeof window !== 'undefined') {
          setSearchParams(new URLSearchParams(window.location.search));
      }
  }, []);

  const action = searchParams?.get("action");
  const program = searchParams?.get("program");

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: action === 'apply' ? 'Solicitud de Admisión' : '',
      inquiryType: action === 'apply' ? 'admission' : 'general',
      message: action === 'apply' ? `Estoy interesado/a en aplicar al programa: ${program || 'Indicar programa'}. Por favor, envíenme más información sobre el proceso de admisión.` : '',
    },
  });

   // Update form if params change after initial load
  useEffect(() => {
    if (searchParams) { // Ensure searchParams is loaded
        const currentAction = searchParams.get("action");
        const currentProgram = searchParams.get("program");
        const defaultSubject = currentAction === 'apply' ? 'Solicitud de Admisión' : '';
        const defaultInquiryType = currentAction === 'apply' ? 'admission' : 'general';
        const defaultMessage = currentAction === 'apply' ? `Estoy interesado/a en aplicar al programa: ${currentProgram || 'Indicar programa'}. Por favor, envíenme más información sobre el proceso de admisión.` : '';

        // Only reset if the values are still the initial defaults or empty
        if (!form.getValues('subject') || form.getValues('subject') === 'Solicitud de Admisión') {
            form.setValue('subject', defaultSubject);
        }
         if (form.getValues('inquiryType') === 'general' || form.getValues('inquiryType') === 'admission') {
             form.setValue('inquiryType', defaultInquiryType as "general" | "admission" | "program" | "faculty" | "other"); // Ensure type safety
         }
         if (!form.getValues('message') || form.getValues('message').startsWith('Estoy interesado/a')) {
           form.setValue('message', defaultMessage);
         }
    }
   }, [searchParams, form]);


  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true); // Set submitting state
    // Simulate form submission
    console.log("Form data:", data);
     await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

    toast({
      title: "Mensaje Enviado",
      description: "Gracias por contactarnos. Nos pondremos en contacto contigo pronto.",
    });
    form.reset({ // Reset form to initial defaults after successful submission
      name: "",
      email: "",
      subject: action === 'apply' ? 'Solicitud de Admisión' : '',
      inquiryType: action === 'apply' ? 'admission' : 'general',
      message: action === 'apply' ? `Estoy interesado/a en aplicar al programa: ${program || 'Indicar programa'}. Por favor, envíenme más información sobre el proceso de admisión.` : '',
    });
    setIsSubmitting(false); // Reset submitting state
  }

  return (
    <div className="container py-16 md:py-24 lg:py-32 px-4 md:px-6">
      <header className="text-center mb-12 md:mb-16">
         <Mail className="h-16 w-16 mx-auto text-primary mb-4" />
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-primary">
          Contáctanos
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          ¿Tienes preguntas? Estamos aquí para ayudarte. Rellena el formulario o utiliza nuestros datos de contacto.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Contact Form */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-primary">Envíanos un Mensaje</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre Completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu nombre" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Correo Electrónico</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="tu@correo.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="inquiryType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tipo de Consulta</FormLabel>
                       <Select onValueChange={field.onChange} value={field.value}> {/* Controlled component */}
                         <FormControl>
                           <SelectTrigger>
                             <SelectValue placeholder="Selecciona un tipo" />
                           </SelectTrigger>
                         </FormControl>
                         <SelectContent>
                           <SelectItem value="general">Consulta General</SelectItem>
                           <SelectItem value="admission">Admisión</SelectItem>
                           <SelectItem value="program">Información de Programa</SelectItem>
                           <SelectItem value="faculty">Contacto con Docente</SelectItem>
                           <SelectItem value="other">Otro</SelectItem>
                         </SelectContent>
                       </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Asunto</FormLabel>
                      <FormControl>
                        <Input placeholder="Asunto de tu mensaje" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensaje</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Escribe tu mensaje aquí..."
                          className="resize-none min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="text-xs">
                         Máximo 500 caracteres.
                       </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : <>Enviar Mensaje <Send className="ml-2 h-4 w-4" /></>}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-primary">Información de Contacto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4"> {/* Changed items-center to items-start */}
                <MapPin className="h-6 w-6 text-accent mt-1 shrink-0" /> {/* Added mt-1 */}
                <div>
                  <h3 className="font-medium">Dirección</h3>
                  <p className="text-muted-foreground">
                    [Dirección Completa de la Escuela], [Ciudad], [País] - Placeholder
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-accent" />
                <div>
                  <h3 className="font-medium">Teléfono</h3>
                  <p className="text-muted-foreground">[Número de Teléfono] - Placeholder</p>
                  {/* <p className="text-muted-foreground">Horario: Lunes a Viernes, 9:00 - 17:00</p> */}
                </div>
              </div>
              <div className="flex items-center gap-4">
                 <Mail className="h-6 w-6 text-accent" />
                <div>
                   <h3 className="font-medium">Correo Electrónico</h3>
                   <p className="text-muted-foreground">
                     <a href="mailto:info.psicologia@university.edu" className="hover:underline">
                       info.psicologia@university.edu - Placeholder
                     </a>
                   </p>
                 </div>
               </div>
             </CardContent>
           </Card>

          {/* Map Section */}
          <Card className="shadow-lg overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-primary">Nuestra Ubicación</CardTitle>
            </CardHeader>
             <CardContent className="p-0">
               <div className="aspect-video bg-muted flex items-center justify-center text-muted-foreground">
                 {/* Placeholder for map */}
                  <MapPin className="h-12 w-12 opacity-50" />
                  <span className="ml-2">Mapa próximamente</span>
                  {/* Example using an iframe (replace with your map embed code) */}
                  {/* <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..."
                    width="100%"
                    height="300" // Adjusted height
                    style={{ border:0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe> */}
               </div>
             </CardContent>
           </Card>
        </div>
      </div>
    </div>
  );
}
