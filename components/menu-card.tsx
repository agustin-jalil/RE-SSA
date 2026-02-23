"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, Clock, Flame, Leaf } from "lucide-react"
import { Dish } from "@/lib/menu"

interface DishCardProps {
  dish: Dish
}

export function DishCard({ dish }: DishCardProps) {
  return (
    <Link href={`/menu/${dish.id}`}>
      <div className="group relative overflow-hidden rounded-2xl border border-glass-border bg-glass transition-all duration-300 hover:shadow-lg backdrop-blur-sm hover:scale-105">
        {/* Image container */}
        <div className="relative h-48 w-full overflow-hidden bg-muted">
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {/* Category badge */}
          <div className="absolute right-3 top-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground backdrop-blur-sm">
            {dish.category === "main" && "Principal"}
            {dish.category === "appetizer" && "Entrada"}
            {dish.category === "dessert" && "Postre"}
            {dish.category === "drink" && "Bebida"}
            {dish.category === "soup" && "Sopa"}
            {dish.category === "salad" && "Ensalada"}
          </div>

          {/* Tags */}
          <div className="absolute left-3 top-3 flex gap-2">
            {dish.isVegetarian && (
              <div className="flex items-center gap-1 rounded-full bg-green-500/90 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                <Leaf className="h-3 w-3" />
              </div>
            )}
            {dish.isSpicy && (
              <div className="flex items-center gap-1 rounded-full bg-red-500/90 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                <Flame className="h-3 w-3" />
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Name */}
          <h3 className="line-clamp-2 font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {dish.name}
          </h3>

          {/* Description */}
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
            {dish.description}
          </p>

          {/* Info row */}
          <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>{dish.prepTime}m</span>
            </div>
            <span>•</span>
            <span>{dish.serves} {dish.serves === 1 ? "persona" : "personas"}</span>
          </div>

          {/* Price */}
          <div className="mt-4 flex items-center justify-between">
            <span className="font-serif text-2xl font-bold text-foreground">
              {dish.currency === "USD" && "$"}
              {dish.price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
