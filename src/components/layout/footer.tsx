import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/40">
      <div className="container flex flex-col items-center justify-center gap-4 h-20 py-10 text-center md:h-24 md:flex-row md:py-0">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground">
          © {currentYear} Escuela Profesional de Psicología. Todos los derechos reservados.
          {/* Optional: Add a link to privacy policy or terms */}
          {/* <Link href="/privacy" className="font-medium underline underline-offset-4 ml-2">Privacy Policy</Link> */}
        </p>
      </div>
    </footer>
  );
}
