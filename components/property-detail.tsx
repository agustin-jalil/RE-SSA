import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  Bed,
  Bath,
  Maximize2,
  MapPin,
  Calendar,
  Building2,
  MessageCircle,
  Phone,
  Check,
} from "lucide-react"
import type { Property } from "@/lib/properties"
import { formatPrice } from "@/lib/properties"

export function PropertyDetail({ property }: { property: Property }) {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      {/* Navigation */}
      <Link
        href="/catalogo"
        className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver al catalogo
      </Link>

      {/* Hero image */}
      <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-2xl shadow-lg md:aspect-[2/1]">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 1024px"
        />
        <div className="absolute inset-0 bg-foreground/10" />

        {/* Badge overlay */}
        <div className="absolute left-4 top-4 flex gap-2">
          <span
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur-md ${
              property.status === "for-sale"
                ? "bg-accent/90 text-accent-foreground"
                : "bg-primary/90 text-primary-foreground"
            }`}
          >
            {property.status === "for-sale" ? "En Venta" : "En Renta"}
          </span>
        </div>

        {/* Price overlay */}
        <div className="absolute bottom-4 right-4 rounded-xl bg-background/80 px-4 py-2 backdrop-blur-md">
          <p className="font-serif text-xl font-bold text-foreground md:text-2xl">
            {formatPrice(property.price, property.currency, property.status)}
          </p>
        </div>
      </div>

      {/* Content grid */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main content */}
        <div className="flex flex-col gap-6 lg:col-span-2">
          {/* Title and address */}
          <div>
            <h1 className="font-serif text-2xl font-semibold tracking-tight text-foreground md:text-3xl text-balance">
              {property.title}
            </h1>
            <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 shrink-0" />
              {property.address}
            </p>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <StatCard icon={<Bed className="h-5 w-5" />} value={`${property.bedrooms}`} label="Recamaras" />
            <StatCard icon={<Bath className="h-5 w-5" />} value={`${property.bathrooms}`} label="Banos" />
            <StatCard icon={<Maximize2 className="h-5 w-5" />} value={`${property.area}m\u00B2`} label="Area" />
            <StatCard icon={<Calendar className="h-5 w-5" />} value={`${property.year}`} label="Ano" />
          </div>

          {/* Description */}
          <div className="rounded-2xl border border-glass-border bg-glass p-6 backdrop-blur-sm">
            <h2 className="mb-3 font-serif text-lg font-semibold text-foreground">
              Descripcion
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {property.longDescription}
            </p>
          </div>

          {/* Features */}
          <div className="rounded-2xl border border-glass-border bg-glass p-6 backdrop-blur-sm">
            <h2 className="mb-4 font-serif text-lg font-semibold text-foreground">
              Caracteristicas
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {property.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="h-4 w-4 shrink-0 text-accent" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-4 lg:sticky lg:top-8 lg:self-start">
          {/* Property type card */}
          <div className="rounded-2xl border border-glass-border bg-glass p-6 text-center backdrop-blur-sm">
            <Building2 className="mx-auto mb-2 h-8 w-8 text-accent" />
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Tipo de Propiedad</p>
            <p className="mt-1 font-serif text-lg font-semibold capitalize text-foreground">
              {property.type}
            </p>
          </div>

          {/* Price card */}
          <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6 text-center backdrop-blur-sm">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Precio</p>
            <p className="mt-1 font-serif text-2xl font-bold text-foreground">
              {formatPrice(property.price, property.currency, property.status)}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">{property.location}</p>
          </div>

          {/* Contact buttons */}
          <a
            href={`https://wa.me/5215512345678?text=Hola, me interesa la propiedad: ${property.title}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3.5 text-sm font-medium text-accent-foreground shadow-md transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageCircle className="h-4 w-4" />
            Contactar por WhatsApp
          </a>
          <a
            href="tel:+5215512345678"
            className="flex items-center justify-center gap-2 rounded-xl border border-glass-border bg-glass px-5 py-3.5 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:bg-card hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            <Phone className="h-4 w-4" />
            Llamar Ahora
          </a>
        </div>
      </div>
    </div>
  )
}

function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode
  value: string
  label: string
}) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-xl border border-glass-border bg-glass p-4 text-center backdrop-blur-sm">
      <div className="text-accent">{icon}</div>
      <p className="text-lg font-semibold text-foreground">{value}</p>
      <p className="text-[11px] text-muted-foreground">{label}</p>
    </div>
  )
}
