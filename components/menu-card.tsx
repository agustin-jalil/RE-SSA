import Link from "next/link"
import { Star, Flame, Leaf } from "lucide-react"
import { Dish } from "@/lib/menu"

interface MenuCardProps {
  dish: Dish
}

export function MenuCard({ dish }: MenuCardProps) {
  return (
    <Link href={`/menu/${dish.id}`}>
      <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-lg hover:shadow-white/5">
        <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-white/10 to-white/5">
          <img
            src={dish.image}
            alt={dish.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <div className="absolute bottom-3 left-3 flex gap-2">
            {dish.isVegetarian && (
              <span className="flex items-center gap-1 rounded-full bg-green-500/20 px-2 py-1 text-xs text-green-300 border border-green-500/30 backdrop-blur-sm">
                <Leaf className="h-3 w-3" />
                Vegetariano
              </span>
            )}
            {dish.isSpicy && (
              <span className="flex items-center gap-1 rounded-full bg-red-500/20 px-2 py-1 text-xs text-red-300 border border-red-500/30 backdrop-blur-sm">
                <Flame className="h-3 w-3" />
                Picante
              </span>
            )}
          </div>

          <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 backdrop-blur-sm border border-white/20">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span className="text-sm font-semibold text-white">{dish.rating}</span>
          </div>
        </div>

        <div className="p-4">
          <h3 className="line-clamp-2 text-sm font-semibold text-white group-hover:text-white transition-colors">
            {dish.name}
          </h3>
          <p className="mt-2 line-clamp-2 text-xs text-white/60">
            {dish.description}
          </p>

          <div className="mt-4 flex items-center justify-between">
            <span className="inline-block rounded-md bg-white/10 px-2.5 py-1 text-xs font-medium text-white/80">
              {dish.category === "main" && "Plato Fuerte"}
              {dish.category === "appetizer" && "Entrada"}
              {dish.category === "dessert" && "Postre"}
              {dish.category === "salad" && "Ensalada"}
              {dish.category === "soup" && "Sopa"}
              {dish.category === "drink" && "Bebida"}
            </span>
            <span className="text-lg font-bold text-white">
              ${dish.price}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
