import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getDishById, dishes } from "@/lib/menu"
import { DishDetail } from "@/components/property-detail"

export function generateStaticParams() {
  return dishes.map((d) => ({ id: d.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const dish = getDishById(id)
  if (!dish) return { title: "Platillo no encontrado" }
  return {
    title: `${dish.name} | La Casa del Sabor`,
    description: dish.description,
  }
}

export default async function DishPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const dish = getDishById(id)

  if (!dish) {
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
        <DishDetail dish={dish} />
      </div>
    </main>
  )
}
