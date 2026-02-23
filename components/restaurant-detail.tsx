"use client"

import { useState } from "react"
import Image from "next/image"
import { Clock, MapPin, Phone, Star, Utensils } from "lucide-react"
import type { Restaurant, Dish } from "@/lib/restaurants"
import { DishCard } from "@/components/dish-card"
import { DishDetail } from "@/components/dish-detail"

export function RestaurantDetail({ restaurant }: { restaurant: Restaurant }) {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null)

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Hero Image */}
        <div className="relative mb-8 aspect-video overflow-hidden rounded-2xl">
          <Image
            src={restaurant.image}
            alt={restaurant.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-foreground/20" />
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex-1">
              <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
                {restaurant.name}
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">
                {restaurant.description}
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-accent/10 px-4 py-3">
              <Star className="h-5 w-5 fill-accent text-accent" />
              <span className="text-lg font-semibold text-foreground">{restaurant.rating}</span>
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid gap-4 rounded-2xl border border-glass-border bg-glass/50 p-6 backdrop-blur-sm sm:grid-cols-2 md:grid-cols-4">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Tipo de Cocina
              </span>
              <span className="text-sm font-semibold text-foreground capitalize">
                {restaurant.cuisineType}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Ubicacion
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                <MapPin className="h-4 w-4" />
                {restaurant.location}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Horario
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                <Clock className="h-4 w-4" />
                {restaurant.hours.open} - {restaurant.hours.close}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Contacto
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                <Phone className="h-4 w-4" />
                {restaurant.phone}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-8 rounded-2xl border border-glass-border bg-glass/50 p-6 backdrop-blur-sm">
          <p className="leading-relaxed text-foreground">{restaurant.longDescription}</p>
        </div>

        {/* Features */}
        {restaurant.features.length > 0 && (
          <div className="mb-8">
            <h3 className="mb-4 font-serif text-lg font-semibold text-foreground">Caracteristicas</h3>
            <div className="flex flex-wrap gap-2">
              {restaurant.features.map((feature) => (
                <span
                  key={feature}
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted/60 px-3 py-1.5 text-sm font-medium text-foreground"
                >
                  <Utensils className="h-3.5 w-3.5" />
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Dishes Grid */}
        <div>
          <h2 className="mb-6 font-serif text-2xl font-bold text-foreground">Menu</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {restaurant.dishes.map((dish) => (
              <DishCard
                key={dish.id}
                dish={dish}
                onClick={() => setSelectedDish(dish)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Dish Detail Modal */}
      {selectedDish && (
        <DishDetail
          dish={selectedDish}
          onClose={() => setSelectedDish(null)}
        />
      )}
    </>
  )
}
