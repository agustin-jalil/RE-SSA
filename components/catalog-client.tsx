"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { dishes, getFilteredDishes } from "@/lib/menu"
import { CatalogFilters } from "@/components/catalog-filters"
import { DishCard } from "@/components/property-card"

export function CatalogClient() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("all")
  const [isVegetarian, setIsVegetarian] = useState(false)
  const [isSpicy, setIsSpicy] = useState(false)

  const filtered = useMemo(
    () =>
      getFilteredDishes({
        search,
        category,
        isVegetarian: isVegetarian || undefined,
        isSpicy: isSpicy || undefined,
      }),
    [search, category, isVegetarian, isSpicy]
  )

  const clearFilters = () => {
    setSearch("")
    setCategory("all")
    setIsVegetarian(false)
    setIsSpicy(false)
  }

  const hasActiveFilters =
    search !== "" || category !== "all" || isVegetarian || isSpicy

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
            Nuestro Menu
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {filtered.length === dishes.length
              ? `${dishes.length} platillos disponibles`
              : `${filtered.length} de ${dishes.length} platillos`}
          </p>
        </div>
      </div>

      {/* Filters */}
      <CatalogFilters
        search={search}
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
        isVegetarian={isVegetarian}
        onVegetarianChange={setIsVegetarian}
        isSpicy={isSpicy}
        onSpicyChange={setIsSpicy}
        onClear={clearFilters}
        hasActiveFilters={hasActiveFilters}
      />

      {/* Results */}
      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-glass-border bg-glass py-20 text-center backdrop-blur-sm">
          <p className="text-lg font-medium text-foreground">No se encontraron platillos</p>
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
