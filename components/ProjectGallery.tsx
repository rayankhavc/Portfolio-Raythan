"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function ProjectGallery({ images, name }: { images: string[]; name: string }) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length)
  const next = () => setCurrent((c) => (c + 1) % images.length)

  return (
    <div className="space-y-3 mb-16">
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-[#333333] bg-[#111]">
        <Image
          src={images[current]}
          alt={`${name} — capture ${current + 1}`}
          fill
          className="object-cover"
          unoptimized
        />
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/70 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center hover:bg-black/90 transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/70 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center hover:bg-black/90 transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </>
        )}
        <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-xs text-[#86868b] font-mono">
          {current + 1} / {images.length}
        </div>
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`relative flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                i === current
                  ? "border-white opacity-100"
                  : "border-[#333333] opacity-40 hover:opacity-70"
              }`}
            >
              <Image src={img} alt="" fill className="object-cover" unoptimized />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}