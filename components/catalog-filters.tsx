"use client"

import { Search, X, SlidersHorizontal, ChevronDown } from "lucide-react"
import { useCallback, useEffect, useRef, useState } from "react"
import { useIsMobileOrTablet } from "@/hooks/use-mobile"
import { dishCategories } from "@/lib/menu"

interface CatalogFiltersProps {
  search: string
  onSearchChange: (value: string) => void
  category: string
  onCategoryChange: (value: string) => void
  isVegetarian: boolean
  onVegetarianChange: (value: boolean) => void
  isSpicy: boolean
  onSpicyChange: (value: boolean) => void
  onClear: () => void
  hasActiveFilters: boolean
}

function activeFilterCount(props: CatalogFiltersProps) {
  let count = 0
  if (props.category !== "all") count++
  if (props.isVegetarian) count++
  if (props.isSpicy) count++
  return count
}

/* --- Select field --- */
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

/* --- Toggle field --- */
function FilterToggle({
  id,
  label,
  checked,
  onChange,
}: {
  id: string
  label: string
  checked: boolean
  onChange: (v: boolean) => void
}) {
  return (
    <div className="flex items-center gap-3">
      <button
        id={id}
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative h-6 w-11 shrink-0 rounded-full border transition-colors ${
          checked ? "border-accent bg-accent" : "border-border bg-muted"
        }`}
      >
        <span
          className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
      <label htmlFor={id} className="text-sm text-foreground cursor-pointer">
        {label}
      </label>
    </div>
  )
}

/* --- Filter form content --- */
function FilterFormContent(props: CatalogFiltersProps & { onClose: () => void }) {
  const count = activeFilterCount(props)

  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
        <FilterSelect
          id="filter-category"
          label="Categoria"
          value={props.category}
          onChange={props.onCategoryChange}
          options={dishCategories}
        />
        <div className="flex flex-col gap-4 justify-end">
          <FilterToggle
            id="filter-vegetarian"
            label="Solo vegetarianos"
            checked={props.isVegetarian}
            onChange={props.onVegetarianChange}
          />
          <FilterToggle
            id="filter-spicy"
            label="Solo picantes"
            checked={props.isSpicy}
            onChange={props.onSpicyChange}
          />
        </div>
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

/* --- Mobile Bottom Sheet --- */
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
      <div
        ref={backdropRef}
        className="absolute inset-0 bg-foreground/30 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={sheetRef}
        role="dialog"
        aria-modal="true"
        aria-label="Filtros del menu"
        className="absolute inset-x-0 bottom-0 flex max-h-[85vh] flex-col rounded-t-3xl bg-background shadow-2xl animate-in slide-in-from-bottom duration-300"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex justify-center pb-2 pt-4">
          <div className="h-1.5 w-12 rounded-full bg-border" />
        </div>

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

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {children}
        </div>
      </div>
    </div>
  )
}

/* --- Desktop Dialog --- */
function DesktopDialog({
  open,
  onClose,
  children,
}: {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}) {
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
      <div
        className="absolute inset-0 bg-foreground/20 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Filtros del menu"
        className="relative w-full max-w-lg rounded-2xl border border-glass-border bg-background/95 p-8 shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-200"
      >
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

/* --- Main Filters Component --- */
export function CatalogFilters(props: CatalogFiltersProps) {
  const [open, setOpen] = useState(false)
  const isMobileOrTablet = useIsMobileOrTablet()
  const count = activeFilterCount(props)

  const Wrapper = isMobileOrTablet ? MobileDrawer : DesktopDialog

  return (
    <div className="mb-8 flex flex-col gap-4">
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={props.search}
            onChange={(e) => props.onSearchChange(e.target.value)}
            placeholder="Buscar por nombre, ingrediente, categoria..."
            className="h-12 w-full rounded-xl border border-glass-border bg-glass pl-11 pr-10 text-sm text-foreground placeholder:text-muted-foreground backdrop-blur-sm transition-colors focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
            aria-label="Buscar platillos"
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

      {/* Active filter pills */}
      {props.hasActiveFilters && (
        <div className="flex flex-wrap items-center gap-2">
          {props.category !== "all" && (
            <FilterPill
              label={dishCategories.find((c) => c.value === props.category)?.label || props.category}
              onRemove={() => props.onCategoryChange("all")}
            />
          )}
          {props.isVegetarian && (
            <FilterPill
              label="Vegetariano"
              onRemove={() => props.onVegetarianChange(false)}
            />
          )}
          {props.isSpicy && (
            <FilterPill
              label="Picante"
              onRemove={() => props.onSpicyChange(false)}
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

/* --- Filter Pill --- */
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
