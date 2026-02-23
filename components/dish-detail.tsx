"use client"

import { X, Flame, Leaf } from "lucide-react"
import Image from "next/image"
import type { Dish } from "@/lib/restaurants"
import { formatPrice } from "@/lib/restaurants"

export function DishDetail({ dish, onClose }: { dish: Dish; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-glass-border bg-background shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-muted-foreground transition-colors hover:text-foreground backdrop-blur-sm"
          aria-label="Cerrar"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
                {dish.name}
              </h2>
              <p className="mt-2 text-lg text-muted-foreground">
                {dish.description}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              {dish.isVegetarian && (
                <span className="inline-flex items-center gap-2 rounded-lg bg-accent/20 px-3 py-2 text-sm font-semibold text-accent-foreground">
                  <Leaf className="h-4 w-4" />
                  Vegetariano
                </span>
              )}
              {dish.isSpicy && (
                <span className="inline-flex items-center gap-2 rounded-lg bg-destructive/20 px-3 py-2 text-sm font-semibold text-destructive-foreground">
                  <Flame className="h-4 w-4" />
                  Picante
                </span>
              )}
            </div>
          </div>

          {/* Price */}
          <div className="mb-6 rounded-xl bg-primary/10 p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Precio
            </p>
            <p className="font-serif text-3xl font-bold text-primary mt-1">
              {formatPrice(dish.price, dish.currency)}
            </p>
          </div>

          {/* Ingredients */}
          {dish.ingredients.length > 0 && (
            <div className="mb-6">
              <h3 className="mb-3 font-serif text-lg font-semibold text-foreground">
                Ingredientes
              </h3>
              <div className="flex flex-wrap gap-2">
                {dish.ingredients.map((ingredient, i) => (
                  <span
                    key={i}
                    className="rounded-lg border border-border bg-muted/60 px-3 py-1.5 text-sm font-medium text-foreground"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Category */}
          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Categoria:</span> {dish.category}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
