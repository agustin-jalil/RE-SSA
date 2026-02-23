import { Dish } from "@/lib/menu"
import { Star, Flame, Leaf, Clock, Zap } from "lucide-react"

interface DishDetailProps {
  dish: Dish
}

export function DishDetail({ dish }: DishDetailProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div>
        <div className="relative h-96 w-full overflow-hidden rounded-lg border border-white/10">
          <img
            src={dish.image}
            alt={dish.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold text-white">{dish.name}</h1>
              <p className="mt-2 text-lg text-white/60">{dish.description}</p>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 border border-white/20 backdrop-blur-sm">
              <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
              <span className="text-lg font-semibold text-white">{dish.rating}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="rounded-lg bg-white/5 border border-white/10 p-4 text-center">
            <Clock className="h-5 w-5 mx-auto mb-2 text-white/60" />
            <p className="text-sm text-white/60">Tiempo</p>
            <p className="text-xl font-semibold text-white">{dish.preparationTime}m</p>
          </div>
          <div className="rounded-lg bg-white/5 border border-white/10 p-4 text-center">
            <Zap className="h-5 w-5 mx-auto mb-2 text-white/60" />
            <p className="text-sm text-white/60">Calorías</p>
            <p className="text-xl font-semibold text-white">{dish.calories || 0}</p>
          </div>
          <div className="rounded-lg bg-white/5 border border-white/10 p-4 text-center">
            <span className="text-sm text-white/60 block mb-2">Categoría</span>
            <p className="text-sm font-semibold text-white">
              {dish.category === "main" && "Plato Fuerte"}
              {dish.category === "appetizer" && "Entrada"}
              {dish.category === "dessert" && "Postre"}
              {dish.category === "salad" && "Ensalada"}
              {dish.category === "soup" && "Sopa"}
              {dish.category === "drink" && "Bebida"}
            </p>
          </div>
        </div>

        <div className="rounded-lg bg-white/5 border border-white/10 p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Descripción completa</h2>
          <p className="text-white/70 leading-relaxed">{dish.longDescription}</p>
        </div>

        <div className="rounded-lg bg-white/5 border border-white/10 p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Ingredientes</h2>
          <div className="grid grid-cols-2 gap-3">
            {dish.ingredients.map((ingredient) => (
              <div
                key={ingredient}
                className="flex items-center gap-2 rounded-md bg-white/5 px-3 py-2"
              >
                <span className="h-2 w-2 rounded-full bg-white/40" />
                <span className="text-sm text-white/80">{ingredient}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg bg-white/5 border border-white/10 p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Información</h2>
          <div className="space-y-3">
            {dish.allergens.length > 0 && (
              <div>
                <p className="text-sm text-white/60 mb-2">Alérgenos:</p>
                <div className="flex flex-wrap gap-2">
                  {dish.allergens.map((allergen) => (
                    <span
                      key={allergen}
                      className="rounded-full bg-red-500/20 px-3 py-1 text-xs text-red-300 border border-red-500/30"
                    >
                      {allergen}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div className="flex gap-4 pt-2">
              {dish.isVegetarian && (
                <div className="flex items-center gap-2 text-green-400">
                  <Leaf className="h-5 w-5" />
                  <span className="text-sm">Vegetariano</span>
                </div>
              )}
              {dish.isSpicy && (
                <div className="flex items-center gap-2 text-red-400">
                  <Flame className="h-5 w-5" />
                  <span className="text-sm">Picante</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-white/60">Precio</p>
              <p className="text-4xl font-bold text-white mt-1">
                ${dish.price}
                <span className="text-sm text-white/60 ml-2">{dish.currency}</span>
              </p>
            </div>
            <button className="rounded-lg bg-white/10 hover:bg-white/20 px-6 py-3 font-semibold text-white border border-white/20 transition-all duration-200 hover:shadow-lg">
              Agregar al Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
