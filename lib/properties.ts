export type Property = {
  id: string
  title: string
  description: string
  longDescription: string
  price: number
  currency: string
  type: "apartment" | "house" | "penthouse" | "villa" | "loft" | "townhouse"
  status: "for-sale" | "for-rent"
  bedrooms: number
  bathrooms: number
  area: number
  location: string
  address: string
  image: string
  features: string[]
  year: number
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Apartamento Moderno en Zona Centro",
    description: "Amplio apartamento con acabados de lujo y vista panoramica.",
    longDescription:
      "Este elegante apartamento de 120m2 ofrece un espacio de vida excepcional en el corazon de la ciudad. Con acabados de primera calidad, pisos de marmol importado, cocina integral equipada con electrodomesticos de ultima generacion y un balcon con vista panoramica a la ciudad. El edificio cuenta con seguridad 24/7, gimnasio, piscina y estacionamiento subterraneo. Ubicacion privilegiada cerca de centros comerciales, restaurantes y transporte publico.",
    price: 285000,
    currency: "USD",
    type: "apartment",
    status: "for-sale",
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    location: "Centro",
    address: "Av. Principal 450, Zona Centro",
    image: "/images/property-1.jpg",
    features: [
      "Vista panoramica",
      "Cocina integral",
      "Pisos de marmol",
      "Seguridad 24/7",
      "Gimnasio",
      "Piscina",
      "Estacionamiento",
      "Balcon",
    ],
    year: 2023,
  },
  {
    id: "2",
    title: "Penthouse con Terraza Privada",
    description: "Exclusivo penthouse con terraza, jacuzzi y vista al skyline.",
    longDescription:
      "Penthouse de enseno ubicado en la cima de una de las torres mas exclusivas de la ciudad. Con 200m2 de espacio habitable y 80m2 de terraza privada equipada con jacuzzi y area de BBQ. Doble altura en sala, acabados premium con marmol carrara, iluminacion LED inteligente y sistema de domotica completo. Tres habitaciones con bano privado, walk-in closets y pisos de madera importada.",
    price: 520000,
    currency: "USD",
    type: "penthouse",
    status: "for-sale",
    bedrooms: 3,
    bathrooms: 3,
    area: 200,
    location: "Norte",
    address: "Torre Elite, Piso 25, Zona Norte",
    image: "/images/property-2.jpg",
    features: [
      "Terraza privada",
      "Jacuzzi",
      "Domotica",
      "Doble altura",
      "Walk-in closet",
      "Vista al skyline",
      "Area BBQ",
      "Pisos de madera",
    ],
    year: 2024,
  },
  {
    id: "3",
    title: "Casa Familiar en Residencial Privado",
    description: "Hermosa casa con jardin amplio en zona residencial exclusiva.",
    longDescription:
      "Casa de 250m2 en terreno de 400m2 dentro de fraccionamiento privado con caseta de vigilancia. Diseno moderno con amplios espacios, sala con doble altura, cocina abierta con isla central, 4 recamaras (principal con vestidor y bano completo), cuarto de servicio, estudio, garage para 2 autos y jardin con alberca. Acabados de primera calidad y sistema de energia solar instalado.",
    price: 380000,
    currency: "USD",
    type: "house",
    status: "for-sale",
    bedrooms: 4,
    bathrooms: 3,
    area: 250,
    location: "Poniente",
    address: "Residencial Los Alamos 122, Zona Poniente",
    image: "/images/property-3.jpg",
    features: [
      "Jardin amplio",
      "Alberca",
      "Garage 2 autos",
      "Energia solar",
      "Fraccionamiento privado",
      "Estudio",
      "Cuarto de servicio",
      "Doble altura",
    ],
    year: 2022,
  },
  {
    id: "4",
    title: "Villa Frente al Mar",
    description: "Espectacular villa con acceso directo a la playa y piscina infinity.",
    longDescription:
      "Villa de lujo frente al mar con 350m2 de construccion sobre un terreno de 600m2. Arquitectura contemporanea que integra los espacios interiores con el exterior. Amplia sala con ventanales de piso a techo, cocina gourmet, 5 recamaras con bano, sala de cine, bodega de vinos, piscina infinity con vista al oceano y acceso directo a la playa. Totalmente amueblada con diseno de interiores de autor.",
    price: 890000,
    currency: "USD",
    type: "villa",
    status: "for-sale",
    bedrooms: 5,
    bathrooms: 5,
    area: 350,
    location: "Costa",
    address: "Blvd. Costero 88, Zona Playa",
    image: "/images/property-4.jpg",
    features: [
      "Frente al mar",
      "Piscina infinity",
      "Sala de cine",
      "Bodega de vinos",
      "Amueblada",
      "Acceso a playa",
      "Cocina gourmet",
      "Ventanales piso a techo",
    ],
    year: 2024,
  },
  {
    id: "5",
    title: "Loft Industrial en Zona de Arte",
    description: "Loft con techos altos y diseno industrial en distrito creativo.",
    longDescription:
      "Loft de 90m2 con techos de 4.5 metros de altura en edificio restaurado del distrito de arte. Diseno industrial con muros de ladrillo expuesto, ductos aparentes, pisos de concreto pulido y amplios ventanales que inundan el espacio de luz natural. Cocina abierta con barra, un dormitorio en mezzanine, bano completo con acabados artesanales. Edificio con rooftop compartido, coworking y estacionamiento para bicicletas.",
    price: 1200,
    currency: "USD",
    type: "loft",
    status: "for-rent",
    bedrooms: 1,
    bathrooms: 1,
    area: 90,
    location: "Centro",
    address: "Calle de las Artes 33, Distrito Creativo",
    image: "/images/property-5.jpg",
    features: [
      "Techos altos",
      "Ladrillo expuesto",
      "Mezzanine",
      "Luz natural",
      "Rooftop",
      "Coworking",
      "Concreto pulido",
      "Edificio restaurado",
    ],
    year: 2021,
  },
  {
    id: "6",
    title: "Townhouse Contemporaneo",
    description: "Townhouse de diseno con jardin vertical y terraza en azotea.",
    longDescription:
      "Townhouse de 180m2 distribuidos en 3 niveles con diseno contemporaneo. Planta baja con sala, comedor, cocina abierta y medio bano. Segundo nivel con 3 recamaras, 2 banos completos y area de lavado. Tercer nivel con roof garden privado equipado con pergola, plantas y parrilla. Fachada con jardin vertical, acabados minimalistas, pisos de porcelanato y canceleria de aluminio negro.",
    price: 2800,
    currency: "USD",
    type: "townhouse",
    status: "for-rent",
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    location: "Sur",
    address: "Privada Los Cedros 15, Zona Sur",
    image: "/images/property-6.jpg",
    features: [
      "3 niveles",
      "Roof garden",
      "Jardin vertical",
      "Pergola",
      "Minimalista",
      "Porcelanato",
      "Canceleria de aluminio",
      "Area de lavado",
    ],
    year: 2023,
  },
]

export function getPropertyById(id: string): Property | undefined {
  return properties.find((p) => p.id === id)
}

export function getFilteredProperties(filters: {
  search?: string
  type?: string
  status?: string
  minPrice?: number
  maxPrice?: number
  bedrooms?: number
  location?: string
}): Property[] {
  return properties.filter((p) => {
    if (filters.search) {
      const q = filters.search.toLowerCase()
      const matches =
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        p.type.toLowerCase().includes(q)
      if (!matches) return false
    }
    if (filters.type && filters.type !== "all" && p.type !== filters.type) return false
    if (filters.status && filters.status !== "all" && p.status !== filters.status) return false
    if (filters.minPrice && p.price < filters.minPrice) return false
    if (filters.maxPrice && p.price > filters.maxPrice) return false
    if (filters.bedrooms && p.bedrooms < filters.bedrooms) return false
    if (filters.location && filters.location !== "all" && p.location !== filters.location) return false
    return true
  })
}

export const propertyTypes = [
  { value: "all", label: "Todos" },
  { value: "apartment", label: "Apartamento" },
  { value: "house", label: "Casa" },
  { value: "penthouse", label: "Penthouse" },
  { value: "villa", label: "Villa" },
  { value: "loft", label: "Loft" },
  { value: "townhouse", label: "Townhouse" },
]

export const propertyStatuses = [
  { value: "all", label: "Todos" },
  { value: "for-sale", label: "En Venta" },
  { value: "for-rent", label: "En Renta" },
]

export const propertyLocations = [
  { value: "all", label: "Todas" },
  { value: "Centro", label: "Centro" },
  { value: "Norte", label: "Norte" },
  { value: "Sur", label: "Sur" },
  { value: "Poniente", label: "Poniente" },
  { value: "Costa", label: "Costa" },
]

export function formatPrice(price: number, currency: string, status: string): string {
  const formatted = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price)
  return status === "for-rent" ? `${formatted}/mes` : formatted
}
