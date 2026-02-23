import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  Clock,
  Flame,
  Leaf,
  Star,
  AlertTriangle,
  MessageCircle,
  Phone,
  Check,
  UtensilsCrossed,
} from "lucide-react"
import type { Dish } from "@/lib/menu"
import { formatPrice, dishCategories } from "@/lib/menu"

export function DishDetail({ dish }: { dish: Dish }) {
  const categoryLabel = dishCategories.find((c) => c.value === dish.category)?.label ?? dish.category

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      {/* Navigation */}
      <Link
        href="/catalogo"
        className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver al menu
      </Link>

      {/* Hero image */}
      <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-2xl shadow-lg md:aspect-[2/1]">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 1024px"
        />
        <div className="absolute inset-0 bg-foreground/10" />

        {/* Badge overlay */}
        <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-lg bg-accent/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground backdrop-blur-md">
            {categoryLabel}
          </span>
          {dish.isPopular && (
            <span className="rounded-lg bg-primary/90 px-3 py-1.5 text-xs font-medium text-primary-foreground backdrop-blur-md">
              Popular
            </span>
          )}
        </div>

        {/* Diet indicators */}
        <div className="absolute right-4 top-4 flex gap-2">
          {dish.isVegetarian && (
            <span className="flex items-center gap-1.5 rounded-lg bg-emerald-600/90 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
              <Leaf className="h-3.5 w-3.5" />
              Vegetariano
            </span>
          )}
          {dish.isSpicy && (
            <span className="flex items-center gap-1.5 rounded-lg bg-red-600/90 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
              <Flame className="h-3.5 w-3.5" />
              Picante
            </span>
          )}
        </div>

        {/* Price overlay */}
        <div className="absolute bottom-4 right-4 rounded-xl bg-background/80 px-4 py-2 backdrop-blur-md">
          <p className="font-serif text-xl font-bold text-foreground md:text-2xl">
            {formatPrice(dish.price)}
          </p>
        </div>
      </div>

      {/* Content grid */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main content */}
        <div className="flex flex-col gap-6 lg:col-span-2">
          {/* Title */}
          <div>
            <h1 className="font-serif text-2xl font-semibold tracking-tight text-foreground md:text-3xl text-balance">
              {dish.name}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {dish.description}
            </p>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <StatCard
              icon={<Star className="h-5 w-5 fill-amber-500 text-amber-500" />}
              value={`${dish.rating}`}
              label="Rating"
            />
            <StatCard
              icon={<Clock className="h-5 w-5" />}
              value={`${dish.prepTime} min`}
              label="Preparacion"
            />
            <StatCard
              icon={<Flame className="h-5 w-5" />}
              value={`${dish.calories}`}
              label="Calorias"
            />
            <StatCard
              icon={<UtensilsCrossed className="h-5 w-5" />}
              value={categoryLabel}
              label="Categoria"
            />
          </div>

          {/* Description */}
          <div className="rounded-2xl border border-glass-border bg-glass p-6 backdrop-blur-sm">
            <h2 className="mb-3 font-serif text-lg font-semibold text-foreground">
              Descripcion
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {dish.longDescription}
            </p>
          </div>

          {/* Ingredients */}
          <div className="rounded-2xl border border-glass-border bg-glass p-6 backdrop-blur-sm">
            <h2 className="mb-4 font-serif text-lg font-semibold text-foreground">
              Ingredientes
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {dish.ingredients.map((ingredient) => (
                <div key={ingredient} className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="h-4 w-4 shrink-0 text-accent" />
                  {ingredient}
                </div>
              ))}
            </div>
          </div>

          {/* Allergens */}
          {dish.allergens.length > 0 && (
            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6 backdrop-blur-sm">
              <h2 className="mb-4 flex items-center gap-2 font-serif text-lg font-semibold text-foreground">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                Alergenos
              </h2>
              <div className="flex flex-wrap gap-2">
                {dish.allergens.map((allergen) => (
                  <span
                    key={allergen}
                    className="rounded-lg border border-amber-500/20 bg-amber-500/10 px-3 py-1.5 text-xs font-medium text-foreground"
                  >
                    {allergen}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-4 lg:sticky lg:top-8 lg:self-start">
          {/* Price card */}
          <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6 text-center backdrop-blur-sm">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Precio</p>
            <p className="mt-1 font-serif text-2xl font-bold text-foreground">
              {formatPrice(dish.price)}
            </p>
          </div>

          {/* Contact buttons */}
          <a
            href={`https://wa.me/5215512345678?text=Hola, me gustaria ordenar: ${dish.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3.5 text-sm font-medium text-accent-foreground shadow-md transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageCircle className="h-4 w-4" />
            Ordenar por WhatsApp
          </a>
          <a
            href="tel:+5215512345678"
            className="flex items-center justify-center gap-2 rounded-xl border border-glass-border bg-glass px-5 py-3.5 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:bg-card hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            <Phone className="h-4 w-4" />
            Llamar para Reservar
          </a>
        </div>
      </div>
    </div>
  )
}

function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode
  value: string
  label: string
}) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-xl border border-glass-border bg-glass p-4 text-center backdrop-blur-sm">
      <div className="text-accent">{icon}</div>
      <p className="text-lg font-semibold text-foreground">{value}</p>
      <p className="text-[11px] text-muted-foreground">{label}</p>
    </div>
  )
}
