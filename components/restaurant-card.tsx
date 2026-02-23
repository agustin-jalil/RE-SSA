import Link from "next/link"
import Image from "next/image"
import { Star, MapPin, UtensilsCrossed } from "lucide-react"
import type { Restaurant } from "@/lib/restaurants"
import { formatPrice } from "@/lib/restaurants"

export function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  return (
    <Link
      href={`/restaurantes/${restaurant.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-glass-border bg-glass shadow-sm backdrop-blur-sm transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={restaurant.image}
          alt={restaurant.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-foreground/5 transition-opacity group-hover:opacity-0" />

        {/* Badges */}
        <div className="absolute left-3 top-3 flex gap-2">
          <span className="rounded-lg bg-primary/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider backdrop-blur-md text-primary-foreground">
            {restaurant.cuisineType}
          </span>
          {restaurant.rating >= 4.5 && (
            <span className="rounded-lg bg-accent/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider backdrop-blur-md text-accent-foreground inline-flex items-center gap-1">
              <Star className="h-3 w-3" />
              {restaurant.rating}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="font-serif text-base font-semibold leading-snug text-foreground line-clamp-1 group-hover:text-primary transition-colors">
            {restaurant.name}
          </h3>
          <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
            {restaurant.description}
          </p>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
            {restaurant.location}
          </span>
          <span className="inline-flex items-center gap-2">
            <UtensilsCrossed className="h-3.5 w-3.5 flex-shrink-0" />
            {restaurant.dishes.length} platos
          </span>
        </div>

        {/* Price & Rating */}
        <div className="mt-auto border-t border-border pt-3">
          <div className="flex items-center justify-between">
            <p className="font-serif text-lg font-semibold text-foreground">
              {formatPrice(restaurant.averagePrice, restaurant.currency)}
            </p>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span className="text-sm font-semibold text-foreground">{restaurant.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
