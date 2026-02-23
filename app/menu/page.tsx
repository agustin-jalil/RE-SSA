import type { Metadata } from "next"
import { MenuClient } from "@/components/menu-client"

export const metadata: Metadata = {
  title: "Menú | RE-SSA",
  description: "Explora nuestro catálogo completo de platos deliciosos",
}

export default function MenuPage() {
  return <MenuClient />
}
