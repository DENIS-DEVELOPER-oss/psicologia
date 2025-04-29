
'use client';

import * as React from 'react';
import Image, { type ImageProps } from 'next/image';
import { Dialog, DialogContent, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Maximize, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImageLightboxProps extends Omit<ImageProps, 'onClick'> {
  triggerClassName?: string;
  triggerWrapperClassName?: string;
}

export function ImageLightbox({
  src,
  alt,
  width,
  height,
  className,
  triggerClassName,
  triggerWrapperClassName,
  sizes,
  fill,
  style,
  priority,
  quality,
  ...props
}: ImageLightboxProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  // Determine aspect ratio for the modal image if width/height are provided
  const aspectRatio = width && height ? Number(width) / Number(height) : 16 / 9; // Default aspect ratio

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild className={cn("cursor-zoom-in group", triggerWrapperClassName)}>
        <div className={cn("relative overflow-hidden", triggerClassName)}>
          <Image
            src={src}
            alt={alt}
            width={fill ? undefined : width} // Pass undefined if fill is true
            height={fill ? undefined : height} // Pass undefined if fill is true
            className={cn("transition-transform duration-300 group-hover:scale-105", className)}
            fill={fill}
            style={style}
            sizes={sizes}
            priority={priority}
            quality={quality}
            {...props} // Pass remaining ImageProps like unoptimized, loading, etc.
          />
           {/* Subtle zoom icon on hover */}
           <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors duration-300 opacity-0 group-hover:opacity-100">
             <Maximize className="h-8 w-8 text-white/80" />
           </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[60vw] p-2 sm:p-4 bg-background/90 border-none shadow-2xl rounded-lg">
        <div className="relative w-full" style={{ aspectRatio: `${aspectRatio}` }}>
          <Image
            src={src}
            alt={alt}
            fill
            style={{ objectFit: 'contain' }} // Use contain to show the full image without cropping
            className="rounded"
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 70vw" // Adjust sizes for modal context
            quality={quality ?? 85} // Slightly higher quality for lightbox
          />
        </div>
        {/* Optional: Add caption or description here */}
        {/* <p className="text-center text-sm text-muted-foreground mt-2">{alt}</p> */}
         <DialogClose asChild className="absolute top-2 right-2">
            <Button variant="ghost" size="icon" className="rounded-full bg-background/50 hover:bg-background/80">
                <X className="h-4 w-4 text-foreground" />
                <span className="sr-only">Cerrar</span>
            </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}

