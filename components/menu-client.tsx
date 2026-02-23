"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { menu, getFilteredMenu } from "@/lib/menu"
import { MenuFilters } from "@/components/menu-filters"
import { DishCard } from "@/components/menu-card"

export function MenuClient() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("all")
  const [maxPrice, setMaxPrice] = useState(0)
  const [vegetarian, setVegetarian] = useState(false)
  const [spicy, setSpicy] = useState(false)

  const filtered = useMemo(
    () =>
      getFilteredMenu({
        search,
        category,
        maxPrice: maxPrice || undefined,
        vegetarian,
        spicy,
      }),
    [search, category, maxPrice, vegetarian, spicy]
  )

  const clearFilters = () => {
    setSearch("")
    setCategory("all")
    setMaxPrice(0)
    setVegetarian(false)
    setSpicy(false)
  }

  const hasActiveFilters =
    search !== "" || category !== "all" || maxPrice !== 0 || vegetarian || spicy

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
            Menú
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {filtered.length === menu.length
              ? `${menu.length} platos disponibles`
              : `${filtered.length} de ${menu.length} platos`}
          </p>
        </div>
      </div>

      {/* Filters */}
      <MenuFilters
        search={search}
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
        maxPrice={maxPrice}
        onMaxPriceChange={setMaxPrice}
        vegetarian={vegetarian}
        onVegetarianChange={setVegetarian}
        spicy={spicy}
        onSpicyChange={setSpicy}
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
          <p className="text-lg font-medium text-foreground">No se encontraron platos</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Intenta ajustar los filtros de búsqueda
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
