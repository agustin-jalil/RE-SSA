import Link from "next/link"
import Image from "next/image"
import { Clock, Flame, Leaf, Star } from "lucide-react"
import type { Dish } from "@/lib/menu"
import { formatPrice, dishCategories } from "@/lib/menu"

export function DishCard({ dish }: { dish: Dish }) {
  const categoryLabel = dishCategories.find((c) => c.value === dish.category)?.label ?? dish.category

  return (
    <Link
      href={`/catalogo/${dish.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-glass-border bg-glass shadow-sm backdrop-blur-sm transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-foreground/5 transition-opacity group-hover:opacity-0" />

        {/* Badges */}
        <div className="absolute left-3 top-3 flex gap-2">
          <span className="rounded-lg bg-accent/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-foreground backdrop-blur-md">
            {categoryLabel}
          </span>
          {dish.isPopular && (
            <span className="rounded-lg bg-primary/90 px-2.5 py-1 text-[11px] font-medium text-primary-foreground backdrop-blur-md">
              Popular
            </span>
          )}
        </div>

        {/* Diet indicators top right */}
        <div className="absolute right-3 top-3 flex gap-1.5">
          {dish.isVegetarian && (
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600/90 backdrop-blur-md" title="Vegetariano">
              <Leaf className="h-3.5 w-3.5 text-white" />
            </span>
          )}
          {dish.isSpicy && (
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-600/90 backdrop-blur-md" title="Picante">
              <Flame className="h-3.5 w-3.5 text-white" />
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="font-serif text-base font-semibold leading-snug text-foreground line-clamp-1 group-hover:text-accent transition-colors">
            {dish.name}
          </h3>
          <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
            {dish.description}
          </p>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
            {dish.rating}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {dish.prepTime} min
          </span>
          <span className="text-xs">
            {dish.calories} kcal
          </span>
        </div>

        {/* Price */}
        <div className="mt-auto border-t border-border pt-3">
          <p className="font-serif text-lg font-semibold text-foreground">
            {formatPrice(dish.price)}
          </p>
        </div>
      </div>
    </Link>
  )
}
