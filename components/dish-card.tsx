import Image from "next/image"
import { Flame, Leaf } from "lucide-react"
import type { Dish } from "@/lib/restaurants"
import { formatPrice } from "@/lib/restaurants"

export function DishCard({ dish, onClick }: { dish: Dish; onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className={`group flex flex-col overflow-hidden rounded-xl border border-glass-border bg-glass backdrop-blur-sm transition-all ${
        onClick ? "cursor-pointer hover:shadow-md hover:scale-[1.02] active:scale-[0.98]" : ""
      }`}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
        />
        <div className="absolute inset-0 bg-foreground/5 transition-opacity group-hover:opacity-0" />

        {/* Badges */}
        <div className="absolute right-2 top-2 flex flex-col gap-1">
          {dish.isVegetarian && (
            <span className="rounded-lg bg-accent/90 p-1.5 text-accent-foreground backdrop-blur-md">
              <Leaf className="h-3.5 w-3.5" />
            </span>
          )}
          {dish.isSpicy && (
            <span className="rounded-lg bg-destructive/90 p-1.5 text-destructive-foreground backdrop-blur-md">
              <Flame className="h-3.5 w-3.5" />
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 p-3">
        <div>
          <h4 className="font-serif text-sm font-semibold leading-snug text-foreground line-clamp-1">
            {dish.name}
          </h4>
          <p className="text-[11px] text-muted-foreground line-clamp-2">
            {dish.description}
          </p>
        </div>

        {/* Price */}
        <div className="mt-auto">
          <p className="font-serif text-base font-semibold text-primary">
            {formatPrice(dish.price, dish.currency)}
          </p>
        </div>
      </div>
    </div>
  )
}
