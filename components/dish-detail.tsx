"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Clock, Users, Flame, Leaf } from "lucide-react"
import type { Dish } from "@/lib/menu"

interface DishDetailProps {
  dish: Dish
}

export function DishDetail({ dish }: DishDetailProps) {
  const categoryLabels: Record<string, string> = {
    appetizer: "Entrada",
    main: "Plato Principal",
    soup: "Sopa",
    salad: "Ensalada",
    dessert: "Postre",
    drink: "Bebida",
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* Back button */}
      <Link
        href="/menu"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver al menú
      </Link>

      {/* Main content */}
      <div className="grid gap-8 md:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden rounded-2xl border border-glass-border bg-muted">
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Info */}
        <div className="flex flex-col justify-between">
          {/* Header */}
          <div>
            {/* Category */}
            <p className="text-sm font-medium text-primary uppercase tracking-wider">
              {categoryLabels[dish.category]}
            </p>

            {/* Title */}
            <h1 className="mt-2 font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
              {dish.name}
            </h1>

            {/* Description */}
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {dish.description}
            </p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-3">
              {dish.isVegetarian && (
                <div className="inline-flex items-center gap-2 rounded-full bg-green-500/15 px-3.5 py-2 text-sm font-medium text-green-700 dark:text-green-400">
                  <Leaf className="h-4 w-4" />
                  Vegetariano
                </div>
              )}
              {dish.isSpicy && (
                <div className="inline-flex items-center gap-2 rounded-full bg-red-500/15 px-3.5 py-2 text-sm font-medium text-red-700 dark:text-red-400">
                  <Flame className="h-4 w-4" />
                  Picante
                </div>
              )}
            </div>
          </div>

          {/* Bottom section */}
          <div className="space-y-6">
            {/* Info grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-glass-border bg-glass p-4 backdrop-blur-sm">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Tiempo de preparación
                </p>
                <p className="mt-2 flex items-center gap-2 font-serif text-2xl font-bold text-foreground">
                  <Clock className="h-5 w-5" />
                  {dish.prepTime}m
                </p>
              </div>
              <div className="rounded-xl border border-glass-border bg-glass p-4 backdrop-blur-sm">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Porciones
                </p>
                <p className="mt-2 flex items-center gap-2 font-serif text-2xl font-bold text-foreground">
                  <Users className="h-5 w-5" />
                  {dish.serves}
                </p>
              </div>
            </div>

            {/* Price */}
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Precio
              </p>
              <p className="mt-2 font-serif text-5xl font-bold text-primary">
                {dish.currency === "USD" && "$"}
                {dish.price.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Long description */}
      <div className="mt-12 border-t border-border pt-8">
        <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
          Descripción completa
        </h2>
        <p className="text-lg leading-relaxed text-muted-foreground">
          {dish.longDescription}
        </p>
      </div>

      {/* Ingredients */}
      {dish.ingredients.length > 0 && (
        <div className="mt-8 border-t border-border pt-8">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
            Ingredientes
          </h2>
          <div className="grid gap-2 sm:grid-cols-2">
            {dish.ingredients.map((ingredient, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-lg border border-glass-border bg-glass p-3 backdrop-blur-sm"
              >
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="font-medium text-foreground">{ingredient}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Back to menu */}
      <div className="mt-12 flex gap-4">
        <Link
          href="/menu"
          className="flex-1 rounded-lg bg-primary px-6 py-3 text-center font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Volver al menú
        </Link>
      </div>
    </div>
  )
}
