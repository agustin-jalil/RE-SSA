import Image from "next/image"
import { Star, Clock, MapPin } from "lucide-react"

export function ProfileHeader() {
  return (
    <div className="w-full">
      <div className="group relative w-full overflow-hidden rounded-2xl shadow-2xl shadow-black/30">
        {/* Background cover image */}
        <div className="relative aspect-[4/5] w-full sm:aspect-[3/4]">
          <Image
            src="/images/restaurant-cover.jpg"
            alt="Interior del restaurante"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 640px) 100vw, 420px"
          />

          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 35%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.88) 100%)",
            }}
            aria-hidden="true"
          />

          {/* Top vignette */}
          <div
            className="absolute inset-x-0 top-0 h-20"
            style={{
              background: "linear-gradient(to bottom, rgba(0,0,0,0.3), transparent)",
            }}
            aria-hidden="true"
          />

          {/* Logo — top left */}
          <div className="absolute left-3 top-3 sm:left-4 sm:top-4">
            <div className="h-14 w-14 overflow-hidden rounded-xl border border-white/20 shadow-lg sm:h-16 sm:w-16">
              <Image
                src="/images/restaurant-logo.jpg"
                alt="Logo de La Casa del Sabor"
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Open badge — top right */}
          <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-2.5 py-1 backdrop-blur-md sm:right-4 sm:top-4">
            <Clock className="h-3.5 w-3.5 text-emerald-400" />
            <span className="text-[11px] font-medium text-white/90">
              {"Abierto ahora"}
            </span>
          </div>

          {/* Content area — pinned to bottom */}
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-5 sm:p-6">
            {/* Restaurant name + location */}
            <div className="flex flex-col gap-1.5">
              <h1 className="font-serif text-[26px] font-semibold leading-tight tracking-tight text-white sm:text-3xl text-balance">
                La Casa del Sabor
              </h1>
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3 w-3 text-white/50" />
                <span className="text-[12px] tracking-wide text-white/50">
                  {"Av. Reforma 234, Ciudad de Mexico"}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="max-w-[320px] text-[13px] leading-relaxed text-white/60 text-pretty">
              Cocina de autor con lo mejor de la gastronomia mexicana e internacional. Ingredientes frescos, recetas con alma.
            </p>

            {/* Stats bar */}
            <div className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.07] px-4 py-3 backdrop-blur-xl sm:px-5">
              <Stat value="12" label="Platillos" />
              <div className="h-8 w-px bg-white/10" />
              <Stat value="5" label="Anos" />
              <div className="h-8 w-px bg-white/10" />
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 fill-amber-400/80 text-amber-400/80"
                    />
                  ))}
                </div>
                <span className="text-[9px] uppercase tracking-[0.15em] text-white/35">
                  {"Rating"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-sm font-semibold tabular-nums text-white/90 sm:text-base">
        {value}
      </span>
      <span className="text-[9px] uppercase tracking-[0.15em] text-white/35">
        {label}
      </span>
    </div>
  )
}
