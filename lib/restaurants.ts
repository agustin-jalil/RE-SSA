export type Dish = {
  id: string
  name: string
  description: string
  price: number
  currency: string
  category: "appetizer" | "main" | "dessert" | "drink" | "soup" | "salad"
  image: string
  ingredients: string[]
  isVegetarian: boolean
  isSpicy: boolean
}

export type Restaurant = {
  id: string
  name: string
  description: string
  longDescription: string
  cuisineType: "mexican" | "italian" | "asian" | "seafood" | "fusion" | "steakhouse" | "mediterranean"
  location: string
  address: string
  phone: string
  image: string
  rating: number
  averagePrice: number
  currency: string
  features: string[]
  hours: {
    open: string
    close: string
  }
  dishes: Dish[]
}

export const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "La Taqueria Del Barrio",
    description: "Autenticos tacos y antojitos mexicanos preparados al momento.",
    longDescription:
      "Restaurante tradicional mexicano con mas de 15 años de historia. Especializados en tacos al pastor, carne asada y antojitos preparados con ingredientes frescos. Ambiente acogedor con musica tradicional mexicana. Ideal para familias y grupos.",
    cuisineType: "mexican",
    location: "Centro",
    address: "Calle Hidalgo 123, Centro",
    phone: "+1-555-0101",
    image: "/images/restaurant-1.jpg",
    rating: 4.7,
    averagePrice: 15,
    currency: "USD",
    features: ["Terraza", "Estacionamiento", "Wifi", "Grupos"],
    hours: { open: "11:00", close: "23:00" },
    dishes: [
      {
        id: "d1",
        name: "Tacos al Pastor",
        description: "Tacos de carne marinada en achiote con pina",
        price: 8,
        currency: "USD",
        category: "main",
        image: "/images/dish-1.jpg",
        ingredients: ["Carne de cerdo", "Achiote", "Pina", "Cebolla", "Cilantro"],
        isVegetarian: false,
        isSpicy: true,
      },
      {
        id: "d2",
        name: "Quesadillas de Flor de Calabaza",
        description: "Quesadillas rellenas de flor de calabaza con queso Oaxaca",
        price: 6,
        currency: "USD",
        category: "main",
        image: "/images/dish-2.jpg",
        ingredients: ["Flor de calabaza", "Queso Oaxaca", "Tortillas", "Epazote"],
        isVegetarian: true,
        isSpicy: false,
      },
      {
        id: "d3",
        name: "Ceviche Mexicano",
        description: "Filete de pescado marinado con limon, cilantro y chile",
        price: 10,
        currency: "USD",
        category: "appetizer",
        image: "/images/dish-3.jpg",
        ingredients: ["Pescado blanco", "Limon", "Cilantro", "Chile habanero", "Tomate"],
        isVegetarian: false,
        isSpicy: true,
      },
    ],
  },
  {
    id: "2",
    name: "Bella Italia Ristorante",
    description: "Cocina italiana autentica en ambiente elegante.",
    longDescription:
      "Restaurante italiano de alta cocina con recetas familiares traidas directamente de Italia. Pastas frescas preparadas diariamente, salsas artesanales y vinos italianos selectos. Ambiente romantico perfecto para cenas especiales.",
    cuisineType: "italian",
    location: "Norte",
    address: "Av. Paseo de los Alamos 456, Zona Norte",
    phone: "+1-555-0102",
    image: "/images/restaurant-2.jpg",
    rating: 4.9,
    averagePrice: 35,
    currency: "USD",
    features: ["Terraza", "Bodega de vinos", "Estacionamiento", "Reservaciones"],
    hours: { open: "12:00", close: "23:30" },
    dishes: [
      {
        id: "d4",
        name: "Fettuccine Alfredo",
        description: "Fettuccine con salsa de crema, parmesano y mantequilla",
        price: 16,
        currency: "USD",
        category: "main",
        image: "/images/dish-4.jpg",
        ingredients: ["Fettuccine", "Crema", "Parmesano", "Mantequilla", "Nuez moscada"],
        isVegetarian: true,
        isSpicy: false,
      },
      {
        id: "d5",
        name: "Ossobuco a la Milanese",
        description: "Chamorro de ternera guisado con vino blanco y vegetales",
        price: 28,
        currency: "USD",
        category: "main",
        image: "/images/dish-5.jpg",
        ingredients: ["Chamorro de ternera", "Vino blanco", "Zanahoria", "Apio", "Cebolla"],
        isVegetarian: false,
        isSpicy: false,
      },
      {
        id: "d6",
        name: "Panna Cotta de Fresa",
        description: "Postre cremoso italiano con fresas frescas",
        price: 8,
        currency: "USD",
        category: "dessert",
        image: "/images/dish-6.jpg",
        ingredients: ["Crema", "Leche", "Gelatina", "Fresas", "Azucar"],
        isVegetarian: true,
        isSpicy: false,
      },
    ],
  },
  {
    id: "3",
    name: "Dragon de Oro",
    description: "Autentica cocina asiatica con tecnicas milenarias.",
    longDescription:
      "Restaurante asiatico especializado en fusion de cuisinas de China, Tailandia y Japon. Wok en vivo, sushi preparado por chefs certificados y platos tradicionales con ingredientes importados. Decoracion oriental elegante y servicio atento.",
    cuisineType: "asian",
    location: "Poniente",
    address: "Plaza Comercial Oriente, Piso 2, Zona Poniente",
    phone: "+1-555-0103",
    image: "/images/restaurant-3.jpg",
    rating: 4.6,
    averagePrice: 25,
    currency: "USD",
    features: ["Estacionamiento", "Delivery", "Wok en vivo", "Sake bar"],
    hours: { open: "11:30", close: "22:30" },
    dishes: [
      {
        id: "d7",
        name: "Sushi Sampler",
        description: "Variedad de sushi incluye nigiri, rolls y temaki",
        price: 22,
        currency: "USD",
        category: "main",
        image: "/images/dish-7.jpg",
        ingredients: ["Arroz para sushi", "Salmon", "Atun", "Camaron", "Pepino"],
        isVegetarian: false,
        isSpicy: false,
      },
      {
        id: "d8",
        name: "Pad Thai",
        description: "Fideos tailandeses salteados con cacahuate y limon",
        price: 12,
        currency: "USD",
        category: "main",
        image: "/images/dish-8.jpg",
        ingredients: ["Fideos de arroz", "Camaron", "Cacahuate", "Limon", "Salsa de soya"],
        isVegetarian: false,
        isSpicy: true,
      },
      {
        id: "d9",
        name: "Rollo Primavera",
        description: "Rollo crujiente relleno de vegetales y camarones",
        price: 8,
        currency: "USD",
        category: "appetizer",
        image: "/images/dish-9.jpg",
        ingredients: ["Wonton", "Camaron", "Zanahoria", "Repollo", "Cilantro"],
        isVegetarian: false,
        isSpicy: false,
      },
    ],
  },
  {
    id: "4",
    name: "Mariscos Del Puerto",
    description: "Fresco pescado y mariscos directos del mercado.",
    longDescription:
      "Especialista en mariscos frescos traidos diariamente del puerto. Menu variado con preparaciones clasicas y creativas. Ambiente fresco con vistas al jardin, ideal para disfrutar de comidas ligeras y saludables. Champagne y vinos blancos selectos.",
    cuisineType: "seafood",
    location: "Costa",
    address: "Blvd. Costero 789, Zona Playa",
    phone: "+1-555-0104",
    image: "/images/restaurant-4.jpg",
    rating: 4.8,
    averagePrice: 40,
    currency: "USD",
    features: ["Terraza con vistas", "Estacionamiento VIP", "Delivery", "Private events"],
    hours: { open: "12:00", close: "23:00" },
    dishes: [
      {
        id: "d10",
        name: "Camaron a la Mantequilla",
        description: "Camarones jumbo salteados en mantequilla de ajo",
        price: 32,
        currency: "USD",
        category: "main",
        image: "/images/dish-10.jpg",
        ingredients: ["Camaron jumbo", "Mantequilla", "Ajo", "Perejil", "Vino blanco"],
        isVegetarian: false,
        isSpicy: false,
      },
      {
        id: "d11",
        name: "Branzino a la Sal",
        description: "Branzino entero horneado en costra de sal marina",
        price: 38,
        currency: "USD",
        category: "main",
        image: "/images/dish-11.jpg",
        ingredients: ["Branzino fresco", "Sal marina", "Limon", "Hierbas aromaticas"],
        isVegetarian: false,
        isSpicy: false,
      },
      {
        id: "d12",
        name: "Tiradito de Atun",
        description: "Atun rojo cortado fino, marinado en aceite y citricos",
        price: 18,
        currency: "USD",
        category: "appetizer",
        image: "/images/dish-12.jpg",
        ingredients: ["Atun rojo", "Aceite de oliva", "Limon", "Ajino", "Rocoto"],
        isVegetarian: false,
        isSpicy: true,
      },
    ],
  },
  {
    id: "5",
    name: "The Steakhouse Prime",
    description: "Cortes premium de carne envejecida en seco.",
    longDescription:
      "Restaurante especializado en carnes Prime importadas envejecidas en seco por 45 dias. Cocina a la parrilla con tecnicas de alto nivel. Cave de vinos con mas de 500 etiquetas. Ambiente sofisticado con piano en vivo.",
    cuisineType: "steakhouse",
    location: "Centro",
    address: "Torre de Lujo, Piso 23, Centro",
    phone: "+1-555-0105",
    image: "/images/restaurant-5.jpg",
    rating: 4.9,
    averagePrice: 60,
    currency: "USD",
    features: ["Bodega de vinos", "Terraza privada", "Chef de temporada", "Piano en vivo"],
    hours: { open: "18:00", close: "23:30" },
    dishes: [
      {
        id: "d13",
        name: "Ribeye Prime 16oz",
        description: "Corte Prime envejecido 45 dias con chimichurri",
        price: 68,
        currency: "USD",
        category: "main",
        image: "/images/dish-13.jpg",
        ingredients: ["Ribeye Prime", "Chimichurri", "Pimienta negra", "Sal marina"],
        isVegetarian: false,
        isSpicy: false,
      },
      {
        id: "d14",
        name: "Filete Mignon con Sauce de Trufa",
        description: "Filete mignon cubierto con salsa de trufa negra",
        price: 72,
        currency: "USD",
        category: "main",
        image: "/images/dish-14.jpg",
        ingredients: ["Filete mignon", "Trufa negra", "Demi-glace", "Cebolleta"],
        isVegetarian: false,
        isSpicy: false,
      },
      {
        id: "d15",
        name: "Chocolate Decadente",
        description: "Postre de chocolate con centro liquido y helado de vainilla",
        price: 14,
        currency: "USD",
        category: "dessert",
        image: "/images/dish-15.jpg",
        ingredients: ["Chocolate belga", "Huevo", "Azucar", "Helado de vainilla"],
        isVegetarian: true,
        isSpicy: false,
      },
    ],
  },
  {
    id: "6",
    name: "Oasis Mediterraneo",
    description: "Cocina mediterranea fresca y saludable.",
    longDescription:
      "Restaurante mediterraneo con platos inspirados en las costas del Mediterrani y Oriente Medio. Ingredientes frescos, aceite de oliva virgen extra y especias aromaticas. Ambiente tranquilo y relajado, perfecto para almuerzos negocios o cenas romanticas.",
    cuisineType: "mediterranean",
    location: "Sur",
    address: "Paseo de la Riviera 321, Zona Sur",
    phone: "+1-555-0106",
    image: "/images/restaurant-6.jpg",
    rating: 4.5,
    averagePrice: 22,
    currency: "USD",
    features: ["Terraza", "Wifi", "Opciones vegetarianas", "Delivery"],
    hours: { open: "11:00", close: "22:00" },
    dishes: [
      {
        id: "d16",
        name: "Hummus con Pan Pita",
        description: "Hummus casero hecho diariamente con garbanzos frescos",
        price: 7,
        currency: "USD",
        category: "appetizer",
        image: "/images/dish-16.jpg",
        ingredients: ["Garbanzos", "Sesamo", "Limon", "Ajo", "Pan pita"],
        isVegetarian: true,
        isSpicy: false,
      },
      {
        id: "d17",
        name: "Ensalada Griega",
        description: "Tomate, pepino, feta y aceitunas con oregano",
        price: 11,
        currency: "USD",
        category: "salad",
        image: "/images/dish-17.jpg",
        ingredients: ["Tomate", "Pepino", "Queso feta", "Aceitunas", "Oregano"],
        isVegetarian: true,
        isSpicy: false,
      },
      {
        id: "d18",
        name: "Shawarma de Pollo",
        description: "Pollo marinado especias arabe, con tahina y verduras",
        price: 14,
        currency: "USD",
        category: "main",
        image: "/images/dish-18.jpg",
        ingredients: ["Pechuga de pollo", "Especias arabes", "Tahina", "Tomate", "Pepino"],
        isVegetarian: false,
        isSpicy: true,
      },
    ],
  },
]

export function getRestaurantById(id: string): Restaurant | undefined {
  return restaurants.find((r) => r.id === id)
}

export function getDishById(restaurantId: string, dishId: string): Dish | undefined {
  const restaurant = getRestaurantById(restaurantId)
  return restaurant?.dishes.find((d) => d.id === dishId)
}

export function getFilteredRestaurants(filters: {
  search?: string
  cuisineType?: string
  minRating?: number
  maxPrice?: number
  location?: string
}): Restaurant[] {
  return restaurants.filter((r) => {
    if (filters.search) {
      const q = filters.search.toLowerCase()
      const matches =
        r.name.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.location.toLowerCase().includes(q) ||
        r.cuisineType.toLowerCase().includes(q)
      if (!matches) return false
    }
    if (filters.cuisineType && filters.cuisineType !== "all" && r.cuisineType !== filters.cuisineType)
      return false
    if (filters.minRating && r.rating < filters.minRating) return false
    if (filters.maxPrice && r.averagePrice > filters.maxPrice) return false
    if (filters.location && filters.location !== "all" && r.location !== filters.location) return false
    return true
  })
}

export const cuisineTypes = [
  { value: "all", label: "Todas" },
  { value: "mexican", label: "Mexicana" },
  { value: "italian", label: "Italiana" },
  { value: "asian", label: "Asiatica" },
  { value: "seafood", label: "Mariscos" },
  { value: "steakhouse", label: "Carnes" },
  { value: "mediterranean", label: "Mediterranea" },
  { value: "fusion", label: "Fusion" },
]

export const dishCategories = [
  { value: "all", label: "Todos" },
  { value: "appetizer", label: "Entrada" },
  { value: "soup", label: "Sopa" },
  { value: "salad", label: "Ensalada" },
  { value: "main", label: "Plato Fuerte" },
  { value: "dessert", label: "Postre" },
  { value: "drink", label: "Bebida" },
]

export const restaurantLocations = [
  { value: "all", label: "Todos" },
  { value: "Centro", label: "Centro" },
  { value: "Norte", label: "Norte" },
  { value: "Sur", label: "Sur" },
  { value: "Poniente", label: "Poniente" },
  { value: "Costa", label: "Costa" },
]

export const priceRanges = [
  { value: 15, label: "Hasta $15" },
  { value: 25, label: "Hasta $25" },
  { value: 40, label: "Hasta $40" },
  { value: 60, label: "Mas de $60" },
]

export function formatPrice(price: number, currency: string): string {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price)
}
