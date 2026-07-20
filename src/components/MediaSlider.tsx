"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ProcedureMedia } from "@/lib/procedures";

type MediaSliderProps = {
  media: ProcedureMedia[];
};

export function MediaSlider({ media }: MediaSliderProps) {
  const [index, setIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const current = media[index];
  const isVideo = current?.type === "video";

  const goTo = useCallback(
    (next: number) => {
      setIndex((next + media.length) % media.length);
    },
    [media.length],
  );

  useEffect(() => {
    if (media.length <= 1 || isVideo) return;
    const timer = setInterval(() => goTo(index + 1), 6000);
    return () => clearInterval(timer);
  }, [index, goTo, media.length, isVideo]);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === index) {
        void video.play().catch(() => {
          /* autoplay може да е блокиран от браузъра */
        });
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [index]);

  if (media.length === 0) return null;

  return (
    <div className="h-fit w-full overflow-hidden rounded-xl border border-border bg-card">
      {/* Висок кадър + object-contain — целите преди/след снимки без изрязване */}
      <div className="relative h-[min(85vh,720px)] w-full bg-[#1a1614]">
        {media.map((item, i) => (
          <div
            key={item.src}
            className={`absolute inset-0 flex items-center justify-center p-1 transition-opacity duration-500 ${
              i === index ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            aria-hidden={i !== index}
          >
            {item.type === "video" ? (
              <video
                ref={(el) => {
                  videoRefs.current[i] = el;
                }}
                src={item.src}
                className="max-h-full max-w-full object-contain"
                controls
                autoPlay={i === 0}
                muted
                loop
                playsInline
                preload="auto"
                aria-label={item.alt}
              />
            ) : (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
                priority={i === 0 || i === 1}
              />
            )}
          </div>
        ))}

        {media.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              className="absolute top-1/2 left-3 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-primary/30 bg-background/80 text-primary backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground"
              aria-label="Предишна"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              className="absolute top-1/2 right-3 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-primary/30 bg-background/80 text-primary backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground"
              aria-label="Следваща"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center gap-2 bg-gradient-to-t from-black/50 to-transparent px-4 pt-8 pb-2.5">
              {media.map((item, i) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`rounded-full transition-all ${
                    i === index
                      ? "h-1.5 w-7 bg-primary"
                      : "h-1.5 w-1.5 bg-white/40 hover:bg-primary/80"
                  }`}
                  aria-label={
                    item.type === "video"
                      ? `Видео ${i + 1} от ${media.length}`
                      : `Снимка ${i + 1} от ${media.length}`
                  }
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
