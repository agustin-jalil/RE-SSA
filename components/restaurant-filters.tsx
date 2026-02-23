"use client"

import { Search, X, SlidersHorizontal, ChevronDown } from "lucide-react"
import { useCallback, useEffect, useRef, useState } from "react"
import { useIsMobileOrTablet } from "@/hooks/use-mobile"
import { cuisineTypes, restaurantLocations, priceRanges } from "@/lib/restaurants"

interface RestaurantFiltersProps {
  search: string
  onSearchChange: (value: string) => void
  cuisineType: string
  onCuisineTypeChange: (value: string) => void
  location: string
  onLocationChange: (value: string) => void
  maxPrice: number
  onMaxPriceChange: (value: number) => void
  minRating: number
  onMinRatingChange: (value: number) => void
  onClear: () => void
  hasActiveFilters: boolean
}

function activeFilterCount(props: RestaurantFiltersProps) {
  let count = 0
  if (props.cuisineType !== "all") count++
  if (props.location !== "all") count++
  if (props.maxPrice !== 0) count++
  if (props.minRating !== 0) count++
  return count
}

/* ─── Select field with custom styling ─── */
function FilterSelect({
  id,
  label,
  value,
  onChange,
  options,
}: {
  id: string
  label: string
  value: string | number
  onChange: (v: string) => void
  options: { value: string | number; label: string }[]
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-xs font-semibold tracking-wider text-muted-foreground uppercase"
      >
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-12 w-full appearance-none rounded-xl border border-border bg-background px-4 pr-10 text-sm text-foreground transition-colors focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      </div>
    </div>
  )
}

/* ─── Filter form content (shared between mobile & desktop) ─── */
function FilterFormContent(props: RestaurantFiltersProps & { onClose: () => void }) {
  const count = activeFilterCount(props)

  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
        <FilterSelect
          id="filter-cuisine"
          label="Tipo de Cocina"
          value={props.cuisineType}
          onChange={props.onCuisineTypeChange}
          options={cuisineTypes}
        />
        <FilterSelect
          id="filter-location"
          label="Ubicacion"
          value={props.location}
          onChange={props.onLocationChange}
          options={restaurantLocations}
        />
        <FilterSelect
          id="filter-price"
          label="Precio promedio"
          value={props.maxPrice}
          onChange={(v) => props.onMaxPriceChange(Number(v))}
          options={priceRanges}
        />
        <FilterSelect
          id="filter-rating"
          label="Rating minimo"
          value={props.minRating}
          onChange={(v) => props.onMinRatingChange(Number(v))}
          options={[
            { value: 0, label: "Cualquiera" },
            { value: 3.5, label: "3.5+" },
            { value: 4.0, label: "4.0+" },
            { value: 4.5, label: "4.5+" },
          ]}
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        {count > 0 && (
          <button
            onClick={() => {
              props.onClear()
            }}
            className="flex items-center gap-1.5 rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="h-3.5 w-3.5" />
            Limpiar
          </button>
        )}
        <button
          onClick={props.onClose}
          className="ml-auto flex-1 sm:flex-none rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Ver resultados
        </button>
      </div>
    </div>
  )
}

/* ─── Mobile / Tablet Bottom Sheet ─── */
function MobileDrawer({
  open,
  onClose,
  children,
}: {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}) {
  const sheetRef = useRef<HTMLDivElement>(null)
  const backdropRef = useRef<HTMLDivElement>(null)
  const startY = useRef(0)
  const currentY = useRef(0)
  const isDragging = useRef(false)

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    startY.current = e.touches[0].clientY
    isDragging.current = true
  }, [])

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging.current || !sheetRef.current) return
    const diff = e.touches[0].clientY - startY.current
    if (diff > 0) {
      currentY.current = diff
      sheetRef.current.style.transform = `translateY(${diff}px)`
    }
  }, [])

  const handleTouchEnd = useCallback(() => {
    isDragging.current = false
    if (!sheetRef.current) return
    if (currentY.current > 120) {
      onClose()
    }
    sheetRef.current.style.transform = ""
    currentY.current = 0
  }, [onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        ref={backdropRef}
        className="absolute inset-0 bg-foreground/30 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sheet */}
      <div
        ref={sheetRef}
        role="dialog"
        aria-modal="true"
        aria-label="Filtros de restaurantes"
        className="absolute inset-x-0 bottom-0 flex max-h-[85vh] flex-col rounded-t-3xl bg-background shadow-2xl animate-in slide-in-from-bottom duration-300"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Drag handle */}
        <div className="flex justify-center pb-2 pt-4">
          <div className="h-1.5 w-12 rounded-full bg-border" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-6 pb-4">
          <h2 className="font-serif text-xl font-semibold text-foreground">
            Filtros
          </h2>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Cerrar filtros"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Content - scrollable */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {children}
        </div>
      </div>
    </div>
  )
}

/* ─── Desktop Dialog ─── */
function DesktopDialog({
  open,
  onClose,
  children,
}: {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}) {
  // Close on Escape
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handler)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handler)
      document.body.style.overflow = ""
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/20 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Filtros de restaurantes"
        className="relative w-full max-w-lg rounded-2xl border border-glass-border bg-background/95 p-8 shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-serif text-2xl font-semibold text-foreground">
            Filtros
          </h2>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Cerrar filtros"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {children}
      </div>
    </div>
  )
}

/* ─── Main Filters Component ─── */
export function RestaurantFilters(props: RestaurantFiltersProps) {
  const [open, setOpen] = useState(false)
  const isMobileOrTablet = useIsMobileOrTablet()
  const count = activeFilterCount(props)

  const Wrapper = isMobileOrTablet ? MobileDrawer : DesktopDialog

  return (
    <div className="mb-8 flex flex-col gap-4">
      {/* Search bar + filter trigger */}
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={props.search}
            onChange={(e) => props.onSearchChange(e.target.value)}
            placeholder="Buscar por nombre, ubicacion, cocina..."
            className="h-12 w-full rounded-xl border border-glass-border bg-glass pl-11 pr-10 text-sm text-foreground placeholder:text-muted-foreground backdrop-blur-sm transition-colors focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
            aria-label="Buscar restaurantes"
          />
          {props.search && (
            <button
              onClick={() => props.onSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Limpiar busqueda"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <button
          onClick={() => setOpen(true)}
          className={`relative flex h-12 items-center gap-2 rounded-xl border px-4 text-sm font-medium backdrop-blur-sm transition-all ${
            count > 0
              ? "border-accent/30 bg-accent text-accent-foreground"
              : "border-glass-border bg-glass text-foreground hover:bg-card"
          }`}
          aria-label="Abrir filtros"
        >
          <SlidersHorizontal className="h-4 w-4" />
          <span className="hidden sm:inline">Filtros</span>
          {count > 0 && (
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
              {count}
            </span>
          )}
        </button>
      </div>

      {/* Active filter pills (quick visual) */}
      {props.hasActiveFilters && (
        <div className="flex flex-wrap items-center gap-2">
          {props.cuisineType !== "all" && (
            <FilterPill
              label={cuisineTypes.find((c) => c.value === props.cuisineType)?.label || props.cuisineType}
              onRemove={() => props.onCuisineTypeChange("all")}
            />
          )}
          {props.location !== "all" && (
            <FilterPill
              label={props.location}
              onRemove={() => props.onLocationChange("all")}
            />
          )}
          {props.maxPrice > 0 && (
            <FilterPill
              label={`Hasta $${props.maxPrice}`}
              onRemove={() => props.onMaxPriceChange(0)}
            />
          )}
          {props.minRating > 0 && (
            <FilterPill
              label={`Rating ${props.minRating}+`}
              onRemove={() => props.onMinRatingChange(0)}
            />
          )}
          <button
            onClick={props.onClear}
            className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Limpiar todo
          </button>
        </div>
      )}

      {/* Modal */}
      <Wrapper open={open} onClose={() => setOpen(false)}>
        <FilterFormContent {...props} onClose={() => setOpen(false)} />
      </Wrapper>
    </div>
  )
}

/* ─── Filter Pill ─── */
function FilterPill({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-foreground">
      {label}
      <button
        onClick={onRemove}
        className="text-muted-foreground transition-colors hover:text-foreground"
        aria-label={`Quitar filtro ${label}`}
      >
        <X className="h-3 w-3" />
      </button>
    </span>
  )
}
