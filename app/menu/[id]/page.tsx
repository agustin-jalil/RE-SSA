import { Metadata } from "next"
import Link from "next/link"
import { getDishById } from "@/lib/menu"
import { DishDetail } from "@/components/menu-detail"
import { ChevronLeft } from "lucide-react"
import { notFound } from "next/navigation"

interface DishPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: DishPageProps): Promise<Metadata> {
  const { id } = await params
  const dish = getDishById(id)

  if (!dish) {
    return {
      title: "Plato no encontrado | RE-SSA",
    }
  }

  return {
    title: `${dish.name} | RE-SSA`,
    description: dish.longDescription,
  }
}

export default async function DishPage({ params }: DishPageProps) {
  const { id } = await params
  const dish = getDishById(id)

  if (!dish) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="mb-8">
        <Link
          href="/menu"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          Volver al Menú
        </Link>
      </div>

      <DishDetail dish={dish} />
    </div>
  )
}
