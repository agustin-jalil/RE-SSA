import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { getRestaurantById } from "@/lib/restaurants"
import { RestaurantDetail } from "@/components/restaurant-detail"

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const restaurant = getRestaurantById(id)
  
  if (!restaurant) {
    return {
      title: "Restaurante no encontrado",
    }
  }

  return {
    title: `${restaurant.name} | RE-SSA`,
    description: restaurant.description,
  }
}

export default async function RestaurantPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const restaurant = getRestaurantById(id)

  if (!restaurant) {
    notFound()
  }

  return (
    <>
      <div className="fixed top-4 left-4 z-40">
        <Link
          href="/restaurantes"
          className="inline-flex items-center gap-2 rounded-lg bg-background/80 px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-background backdrop-blur-sm border border-border"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver
        </Link>
      </div>
      <RestaurantDetail restaurant={restaurant} />
    </>
  )
}
