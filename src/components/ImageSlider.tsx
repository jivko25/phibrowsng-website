"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { ProcedureImage } from "@/lib/procedures";

type ImageSliderProps = {
  images: ProcedureImage[];
};

export function ImageSlider({ images }: ImageSliderProps) {
  const [index, setIndex] = useState(0);

  const goTo = useCallback(
    (next: number) => {
      setIndex((next + images.length) % images.length);
    },
    [images.length],
  );

  useEffect(() => {
    const timer = setInterval(() => goTo(index + 1), 6000);
    return () => clearInterval(timer);
  }, [index, goTo]);

  if (images.length === 0) return null;

  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-card">
      <div className="relative aspect-[4/3] w-full md:aspect-[16/10]">
        {images.map((image, i) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-500 ${
              i === index ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              className="absolute top-1/2 left-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-primary/30 bg-background/80 text-primary backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground"
              aria-label="Предишна снимка"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              className="absolute top-1/2 right-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-primary/30 bg-background/80 text-primary backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground"
              aria-label="Следваща снимка"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex justify-center gap-2 border-t border-border bg-card/80 px-4 py-3">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-8 bg-primary" : "w-2 bg-muted-foreground/40 hover:bg-primary/60"
              }`}
              aria-label={`Снимка ${i + 1} от ${images.length}`}
              aria-current={i === index}
            />
          ))}
        </div>
      )}
    </div>
  );
}
