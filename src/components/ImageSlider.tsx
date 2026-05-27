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
    <div className="h-fit w-full overflow-hidden rounded-xl border border-border">
      <div className="relative aspect-[4/3] w-full lg:aspect-[3/2]">
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
              sizes="(max-width: 1024px) 100vw, 50vw"
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
              className="absolute top-1/2 left-3 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-primary/30 bg-background/80 text-primary backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground"
              aria-label="Предишна снимка"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              className="absolute top-1/2 right-3 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-primary/30 bg-background/80 text-primary backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground"
              aria-label="Следваща снимка"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center gap-2 bg-gradient-to-t from-black/70 to-transparent px-4 pt-6 pb-2.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`rounded-full transition-all ${
                    i === index
                      ? "h-1.5 w-7 bg-primary"
                      : "h-1.5 w-1.5 bg-white/40 hover:bg-primary/80"
                  }`}
                  aria-label={`Снимка ${i + 1} от ${images.length}`}
                  aria-current={i === index}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
