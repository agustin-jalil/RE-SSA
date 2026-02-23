"use client"

import { useState, useMemo } from "react"
import { getFilteredDishes } from "@/lib/menu"
import { MenuCard } from "@/components/menu-card"
import { MenuFilters } from "@/components/menu-filters"

export function MenuClient() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("all")
  const [maxPrice, setMaxPrice] = useState(100)
  const [vegetarianOnly, setVegetarianOnly] = useState(false)
  const [spicyOnly, setSpicyOnly] = useState(false)

  const filteredDishes = useMemo(() => {
    return getFilteredDishes({
      search,
      category,
      maxPrice,
      vegetarianOnly,
      spicyOnly,
    })
  }, [search, category, maxPrice, vegetarianOnly, spicyOnly])

  return (
    <div className="grid gap-6 lg:grid-cols-4">
      <aside className="lg:col-span-1">
        <div className="sticky top-24 rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
          <MenuFilters
            search={search}
            onSearchChange={setSearch}
            category={category}
            onCategoryChange={setCategory}
            maxPrice={maxPrice}
            onMaxPriceChange={setMaxPrice}
            vegetarianOnly={vegetarianOnly}
            onVegetarianChange={setVegetarianOnly}
            spicyOnly={spicyOnly}
            onSpicyChange={setSpicyOnly}
          />
        </div>
      </aside>

      <div className="lg:col-span-3">
        {filteredDishes.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-lg border border-white/10 bg-white/5 py-12 text-center backdrop-blur-sm">
            <div className="text-white/50 mb-2">No se encontraron platos</div>
            <p className="text-sm text-white/40">
              Intenta ajustar los filtros para encontrar lo que buscas
            </p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDishes.map((dish) => (
              <MenuCard key={dish.id} dish={dish} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
