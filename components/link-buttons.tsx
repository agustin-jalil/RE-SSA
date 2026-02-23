import Link from "next/link"
import {
  UtensilsCrossed,
  Phone,
  Instagram,
  MessageCircle,
  Mail,
  MapPin,
} from "lucide-react"

const links = [
  {
    label: "Ver Nuestro Menu",
    href: "/catalogo",
    icon: UtensilsCrossed,
    highlight: true,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5215512345678",
    icon: MessageCircle,
    external: true,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: Instagram,
    external: true,
  },
  {
    label: "Llamar Ahora",
    href: "tel:+5215512345678",
    icon: Phone,
    external: true,
  },
  {
    label: "Enviar Correo",
    href: "mailto:contacto@lacasadelsabor.com",
    icon: Mail,
    external: true,
  },
  {
    label: "Como Llegar",
    href: "https://maps.google.com",
    icon: MapPin,
    external: true,
  },
]

export function LinkButtons() {
  return (
    <nav className="flex w-full flex-col gap-2.5" aria-label="Enlaces principales">
      {links.map((link) => {
        const Icon = link.icon
        const isInternal = !link.external

        const base =
          "group relative flex w-full items-center gap-3.5 rounded-xl px-5 py-3.5 transition-all duration-200 active:scale-[0.98]"

        const className = link.highlight
          ? `${base} border border-white/15 bg-white/[0.12] text-white backdrop-blur-xl shadow-lg shadow-black/10 hover:bg-white/[0.18] hover:shadow-xl hover:shadow-black/15`
          : `${base} border border-white/[0.07] bg-white/[0.05] text-white/80 backdrop-blur-xl hover:bg-white/[0.10] hover:text-white/95`

        const content = (
          <>
            <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${link.highlight ? "bg-white/15" : "bg-white/[0.06]"} transition-colors group-hover:bg-white/20`}>
              <Icon className="h-[18px] w-[18px]" />
            </span>
            <span className="flex-1 text-[13px] font-medium tracking-wide sm:text-sm">
              {link.label}
            </span>
            <svg
              className="h-4 w-4 shrink-0 opacity-25 transition-all group-hover:translate-x-0.5 group-hover:opacity-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </>
        )

        if (isInternal) {
          return (
            <Link key={link.label} href={link.href} className={className}>
              {content}
            </Link>
          )
        }

        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
          >
            {content}
          </a>
        )
      })}
    </nav>
  )
}
