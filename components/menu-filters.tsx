"use client"

import { ChevronDown, X } from "lucide-react"

interface MenuFiltersProps {
  search: string
  onSearchChange: (value: string) => void
  category: string
  onCategoryChange: (value: string) => void
  maxPrice: number
  onMaxPriceChange: (value: number) => void
  vegetarian: boolean
  onVegetarianChange: (value: boolean) => void
  spicy: boolean
  onSpicyChange: (value: boolean) => void
  onClear: () => void
  hasActiveFilters: boolean
}

const categories = [
  { value: "all", label: "Todas las categorías" },
  { value: "appetizer", label: "Entradas" },
  { value: "main", label: "Platos principales" },
  { value: "soup", label: "Sopas" },
  { value: "salad", label: "Ensaladas" },
  { value: "dessert", label: "Postres" },
  { value: "drink", label: "Bebidas" },
]

export function MenuFilters({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  maxPrice,
  onMaxPriceChange,
  vegetarian,
  onVegetarianChange,
  spicy,
  onSpicyChange,
  onClear,
  hasActiveFilters,
}: MenuFiltersProps) {
  return (
    <div className="mb-8 space-y-4">
      {/* Search bar */}
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Buscar platos..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="flex-1 rounded-lg border border-input bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-0"
        />
        {hasActiveFilters && (
          <button
            onClick={onClear}
            className="inline-flex items-center gap-2 rounded-lg border border-input px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="h-4 w-4" />
            Limpiar
          </button>
        )}
      </div>

      {/* Filters grid */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {/* Category */}
        <div className="relative">
          <select
            value={category}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full appearance-none rounded-lg border border-input bg-background px-4 py-2.5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-0"
          >
            {categories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground pointer-events-none" />
        </div>

        {/* Max Price */}
        <div>
          <label className="text-xs font-medium text-muted-foreground">
            Precio máximo: ${maxPrice === 0 ? "Sin límite" : maxPrice}
          </label>
          <input
            type="range"
            min="0"
            max="60"
            step="5"
            value={maxPrice}
            onChange={(e) => onMaxPriceChange(Number(e.target.value))}
            className="mt-2 w-full"
          />
        </div>

        {/* Vegetarian */}
        <label className="flex items-center gap-2 rounded-lg border border-input bg-background px-4 py-2.5 text-sm cursor-pointer hover:bg-muted transition-colors">
          <input
            type="checkbox"
            checked={vegetarian}
            onChange={(e) => onVegetarianChange(e.target.checked)}
            className="h-4 w-4 rounded"
          />
          <span className="text-foreground">Vegetariano</span>
        </label>

        {/* Spicy */}
        <label className="flex items-center gap-2 rounded-lg border border-input bg-background px-4 py-2.5 text-sm cursor-pointer hover:bg-muted transition-colors">
          <input
            type="checkbox"
            checked={spicy}
            onChange={(e) => onSpicyChange(e.target.checked)}
            className="h-4 w-4 rounded"
          />
          <span className="text-foreground">Picante</span>
        </label>
      </div>
    </div>
  )
}
