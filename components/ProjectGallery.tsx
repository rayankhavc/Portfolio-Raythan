'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function ProjectGallery({ images, name }: { images: string[]; name: string }) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length)
  const next = () => setCurrent((c) => (c + 1) % images.length)

  return (
    <div className="space-y-3 mb-10">
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-card">
        <Image
          src={images[current]}
          alt={`${name} capture ${current + 1}`}
          fill
          className="object-contain w-full h-full"
        />
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Image précédente"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/70 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center hover:bg-background/90 transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={next}
              aria-label="Image suivante"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/70 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center hover:bg-background/90 transition-colors duration-200"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </>
        )}
        <div className="absolute bottom-4 right-4 px-3 py-1 bg-background/70 backdrop-blur-sm rounded-full text-xs text-metallic-light font-mono">
          {current + 1} / {images.length}
        </div>
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Voir l'image ${i + 1}`}
              className={`relative flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                i === current
                  ? 'border-accent opacity-100'
                  : 'border-white/10 opacity-40 hover:opacity-70'
              }`}
            >
              <Image src={img} alt="" fill className="object-contain w-full h-full" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
