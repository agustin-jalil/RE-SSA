import Link from "next/link"
import Image from "next/image"
import { Bed, Bath, Maximize2 } from "lucide-react"
import type { Property } from "@/lib/properties"
import { formatPrice } from "@/lib/properties"

export function PropertyCard({ property }: { property: Property }) {
  return (
    <Link
      href={`/catalogo/${property.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-glass-border bg-glass shadow-sm backdrop-blur-sm transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-foreground/5 transition-opacity group-hover:opacity-0" />

        {/* Badges */}
        <div className="absolute left-3 top-3 flex gap-2">
          <span
            className={`rounded-lg px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider backdrop-blur-md ${
              property.status === "for-sale"
                ? "bg-accent/90 text-accent-foreground"
                : "bg-primary/90 text-primary-foreground"
            }`}
          >
            {property.status === "for-sale" ? "Venta" : "Renta"}
          </span>
          <span className="rounded-lg bg-background/80 px-2.5 py-1 text-[11px] font-medium capitalize backdrop-blur-md text-foreground">
            {property.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="font-serif text-base font-semibold leading-snug text-foreground line-clamp-1 group-hover:text-accent transition-colors">
            {property.title}
          </h3>
          <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
            {property.description}
          </p>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Bed className="h-3.5 w-3.5" />
            {property.bedrooms}
          </span>
          <span className="inline-flex items-center gap-1">
            <Bath className="h-3.5 w-3.5" />
            {property.bathrooms}
          </span>
          <span className="inline-flex items-center gap-1">
            <Maximize2 className="h-3.5 w-3.5" />
            {property.area}m&sup2;
          </span>
        </div>

        {/* Price */}
        <div className="mt-auto border-t border-border pt-3">
          <p className="font-serif text-lg font-semibold text-foreground">
            {formatPrice(property.price, property.currency, property.status)}
          </p>
          <p className="text-[11px] text-muted-foreground">{property.location}</p>
        </div>
      </div>
    </Link>
  )
}
