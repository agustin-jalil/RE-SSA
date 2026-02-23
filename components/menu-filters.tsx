"use client"

import { Input } from "@/components/ui/input"
import { dishCategories } from "@/lib/menu"
import { Search, Filter } from "lucide-react"

interface MenuFiltersProps {
  search: string
  onSearchChange: (value: string) => void
  category: string
  onCategoryChange: (value: string) => void
  maxPrice: number
  onMaxPriceChange: (value: number) => void
  vegetarianOnly: boolean
  onVegetarianChange: (value: boolean) => void
  spicyOnly: boolean
  onSpicyChange: (value: boolean) => void
}

export function MenuFilters({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  maxPrice,
  onMaxPriceChange,
  vegetarianOnly,
  onVegetarianChange,
  spicyOnly,
  onSpicyChange,
}: MenuFiltersProps) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-white/80 mb-2">
          <Search className="inline h-4 w-4 mr-1" />
          Buscar platos
        </label>
        <Input
          type="text"
          placeholder="Tacos, pasta, sushi..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-white/80 mb-2">
          <Filter className="inline h-4 w-4 mr-1" />
          Categoría
        </label>
        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white transition-colors focus:border-white/20 focus:outline-none"
        >
          {dishCategories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-white/80 mb-2">
          Precio máximo: ${maxPrice}
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={maxPrice}
          onChange={(e) => onMaxPriceChange(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="space-y-2 pt-2 border-t border-white/10">
        <label className="flex items-center gap-3 cursor-pointer p-2 rounded hover:bg-white/5 transition-colors">
          <input
            type="checkbox"
            checked={vegetarianOnly}
            onChange={(e) => onVegetarianChange(e.target.checked)}
            className="rounded"
          />
          <span className="text-sm text-white/80">Solo vegetarianos</span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer p-2 rounded hover:bg-white/5 transition-colors">
          <input
            type="checkbox"
            checked={spicyOnly}
            onChange={(e) => onSpicyChange(e.target.checked)}
            className="rounded"
          />
          <span className="text-sm text-white/80">Solo picantes</span>
        </label>
      </div>
    </div>
  )
}
