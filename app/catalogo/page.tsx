import type { Metadata } from "next"
import { CatalogClient } from "@/components/catalog-client"

export const metadata: Metadata = {
  title: "Menu | La Casa del Sabor",
  description: "Explora nuestro menu completo. Filtra por categoria, tipo de cocina y mas.",
}

export default function CatalogPage() {
  return (
    <main className="relative min-h-screen">
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage: "url(/images/hero-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.08,
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none fixed inset-0 z-0 bg-background/70" aria-hidden="true" />

      <div className="relative z-10">
        <CatalogClient />
      </div>
    </main>
  )
}
