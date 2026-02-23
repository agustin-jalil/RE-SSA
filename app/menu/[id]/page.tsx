import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getDishById } from "@/lib/menu"
import { DishDetail } from "@/components/dish-detail"

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const dish = getDishById(id)

  if (!dish) {
    return {
      title: "Plato no encontrado",
    }
  }

  return {
    title: `${dish.name} | Menú - RE-SSA`,
    description: dish.description,
  }
}

export default async function DishPage({ params }: PageProps) {
  const { id } = await params
  const dish = getDishById(id)

  if (!dish) {
    notFound()
  }

  return <DishDetail dish={dish} />
}
