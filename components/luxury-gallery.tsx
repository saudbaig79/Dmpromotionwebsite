import Image from 'next/image'
import { FadeIn } from '@/components/fade-in'

export type LuxuryGalleryItem = {
  src: string
  alt: string
  category: string
  title: string
  description: string
}

type LuxuryGalleryProps = {
  eyebrow?: string
  title: string
  description: string
  items: LuxuryGalleryItem[]
}

export function LuxuryGallery({
  eyebrow = 'A DM PROMOTIONS EDIT',
  title,
  description,
  items,
}: LuxuryGalleryProps) {
  return (
    <section className="bg-[#111111] py-20 sm:py-24" aria-labelledby="luxury-gallery-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <header className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[#c9a55a]">
              {eyebrow}
            </p>
            <h2 id="luxury-gallery-title" className="mb-5 font-serif text-3xl font-semibold text-white sm:text-4xl">
              {title}
            </h2>
            <p className="text-base leading-relaxed text-white/60 sm:text-lg">
              {description}
            </p>
          </header>
        </FadeIn>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => (
            <FadeIn key={`${item.title}-${item.src}`} delay={(index % 3) * 80}>
              <figure className="group h-full overflow-hidden rounded border border-white/10 bg-[#171717] transition-colors duration-300 hover:border-[#c9a55a]/50">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full border border-white/25 bg-black/45 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
                <figcaption className="p-5 sm:p-6">
                  <h3 className="mb-2 font-serif text-xl font-semibold text-white group-hover:text-[#c9a55a]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/55">{item.description}</p>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
