import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getPropertyById, properties } from "@/lib/properties"
import { PropertyDetail } from "@/components/property-detail"

export function generateStaticParams() {
  return properties.map((p) => ({ id: p.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const property = getPropertyById(id)
  if (!property) return { title: "Propiedad no encontrada" }
  return {
    title: `${property.title} | Real Estate`,
    description: property.description,
  }
}

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const property = getPropertyById(id)

  if (!property) {
    notFound()
  }

  return (
    <main className="relative min-h-screen">
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage: "url(/images/hero-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.06,
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none fixed inset-0 z-0 bg-background/80" aria-hidden="true" />

      <div className="relative z-10">
        <PropertyDetail property={property} />
      </div>
    </main>
  )
}
