"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { restaurants, getFilteredRestaurants } from "@/lib/restaurants"
import { RestaurantFilters } from "@/components/restaurant-filters"
import { RestaurantCard } from "@/components/restaurant-card"

export function RestaurantClient() {
  const [search, setSearch] = useState("")
  const [cuisineType, setCuisineType] = useState("all")
  const [location, setLocation] = useState("all")
  const [maxPrice, setMaxPrice] = useState(0)
  const [minRating, setMinRating] = useState(0)

  const filtered = useMemo(
    () =>
      getFilteredRestaurants({
        search,
        cuisineType,
        location,
        maxPrice: maxPrice || undefined,
        minRating: minRating || undefined,
      }),
    [search, cuisineType, location, maxPrice, minRating]
  )

  const clearFilters = () => {
    setSearch("")
    setCuisineType("all")
    setLocation("all")
    setMaxPrice(0)
    setMinRating(0)
  }

  const hasActiveFilters =
    search !== "" || cuisineType !== "all" || location !== "all" || maxPrice !== 0 || minRating !== 0

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4">
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver
        </Link>
        <div>
          <h1 className="font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl text-balance">
            Catalogo de Restaurantes
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {filtered.length === restaurants.length
              ? `${restaurants.length} restaurantes disponibles`
              : `${filtered.length} de ${restaurants.length} restaurantes`}
          </p>
        </div>
      </div>

      {/* Filters */}
      <RestaurantFilters
        search={search}
        onSearchChange={setSearch}
        cuisineType={cuisineType}
        onCuisineTypeChange={setCuisineType}
        location={location}
        onLocationChange={setLocation}
        maxPrice={maxPrice}
        onMaxPriceChange={setMaxPrice}
        minRating={minRating}
        onMinRatingChange={setMinRating}
        onClear={clearFilters}
        hasActiveFilters={hasActiveFilters}
      />

      {/* Results */}
      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-glass-border bg-glass py-20 text-center backdrop-blur-sm">
          <p className="text-lg font-medium text-foreground">No se encontraron restaurantes</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Intenta ajustar los filtros de busqueda
          </p>
          <button
            onClick={clearFilters}
            className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Limpiar filtros
          </button>
        </div>
      )}
    </div>
  )
}
