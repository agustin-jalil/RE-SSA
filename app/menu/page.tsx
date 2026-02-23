import { Metadata } from "next"
import { MenuClient } from "@/components/menu-client"

export const metadata: Metadata = {
  title: "Menú | RE-SSA",
  description: "Explora nuestro delicioso catálogo de platos de diferentes cuisinas del mundo.",
}

export default function MenuPage() {
  return (
    <div className="min-h-screen space-y-8 pt-24 pb-16">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold text-white sm:text-5xl">Nuestro Menú</h1>
        <p className="text-lg text-white/60">
          Descubre una variedad de platos deliciosos de diferentes cuisinas del mundo
        </p>
      </div>

      <MenuClient />
    </div>
  )
}
