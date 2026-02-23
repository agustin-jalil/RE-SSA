"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { properties, getFilteredProperties } from "@/lib/properties"
import { CatalogFilters } from "@/components/catalog-filters"
import { PropertyCard } from "@/components/property-card"

export function CatalogClient() {
  const [search, setSearch] = useState("")
  const [type, setType] = useState("all")
  const [status, setStatus] = useState("all")
  const [location, setLocation] = useState("all")
  const [bedrooms, setBedrooms] = useState(0)

  const filtered = useMemo(
    () =>
      getFilteredProperties({
        search,
        type,
        status,
        location,
        bedrooms: bedrooms || undefined,
      }),
    [search, type, status, location, bedrooms]
  )

  const clearFilters = () => {
    setSearch("")
    setType("all")
    setStatus("all")
    setLocation("all")
    setBedrooms(0)
  }

  const hasActiveFilters =
    search !== "" || type !== "all" || status !== "all" || location !== "all" || bedrooms !== 0

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
            Catalogo de Propiedades
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {filtered.length === properties.length
              ? `${properties.length} propiedades disponibles`
              : `${filtered.length} de ${properties.length} propiedades`}
          </p>
        </div>
      </div>

      {/* Filters */}
      <CatalogFilters
        search={search}
        onSearchChange={setSearch}
        type={type}
        onTypeChange={setType}
        status={status}
        onStatusChange={setStatus}
        location={location}
        onLocationChange={setLocation}
        bedrooms={bedrooms}
        onBedroomsChange={setBedrooms}
        onClear={clearFilters}
        hasActiveFilters={hasActiveFilters}
      />

      {/* Results */}
      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-glass-border bg-glass py-20 text-center backdrop-blur-sm">
          <p className="text-lg font-medium text-foreground">No se encontraron propiedades</p>
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
