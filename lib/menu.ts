export type Dish = {
  id: string
  name: string
  description: string
  longDescription: string
  price: number
  category: "entrada" | "plato-fuerte" | "pasta" | "ensalada" | "postre" | "sopa" | "mariscos"
  image: string
  ingredients: string[]
  allergens: string[]
  calories: number
  prepTime: number
  isVegetarian: boolean
  isSpicy: boolean
  isPopular: boolean
  rating: number
}

export const dishes: Dish[] = [
  {
    id: "1",
    name: "Tacos al Pastor",
    description: "Cerdo marinado en achiote con pina asada, cilantro y cebolla.",
    longDescription:
      "Nuestros tacos al pastor son preparados con cerdo marinado durante 24 horas en una mezcla de chiles secos, achiote y especias. La carne se cocina lentamente en trompo vertical y se sirve en tortillas de maiz hechas a mano, coronados con pina caramelizada a la plancha, cilantro fresco, cebolla picada y nuestra salsa verde de la casa. Un clasico de la cocina mexicana llevado al siguiente nivel.",
    price: 185,
    category: "plato-fuerte",
    image: "/images/dish-tacos.jpg",
    ingredients: ["Cerdo", "Achiote", "Pina", "Cilantro", "Cebolla", "Tortilla de maiz", "Chile guajillo"],
    allergens: ["Gluten"],
    calories: 420,
    prepTime: 20,
    isVegetarian: false,
    isSpicy: true,
    isPopular: true,
    rating: 4.8,
  },
  {
    id: "2",
    name: "Risotto de Hongos",
    description: "Arroz arborio cremoso con hongos silvestres, parmesano y trufa.",
    longDescription:
      "Un risotto clasico italiano preparado con arroz arborio de primera calidad, cocido lentamente en caldo de hongos casero. Mezclamos hongos silvestres de temporada (shiitake, portobello y oyster) salteados en mantequilla con ajo y tomillo. Terminado con generosas lascas de parmesano reggiano añejado 24 meses y un toque de aceite de trufa negra que eleva cada bocado.",
    price: 265,
    category: "plato-fuerte",
    image: "/images/dish-risotto.jpg",
    ingredients: ["Arroz arborio", "Hongos silvestres", "Parmesano", "Trufa negra", "Caldo de hongos", "Mantequilla", "Vino blanco"],
    allergens: ["Lacteos"],
    calories: 520,
    prepTime: 30,
    isVegetarian: true,
    isSpicy: false,
    isPopular: true,
    rating: 4.7,
  },
  {
    id: "3",
    name: "Salmon a la Plancha",
    description: "Filete de salmon con costra crujiente, esparragos y salsa de limon.",
    longDescription:
      "Filete de salmon atlantico fresco, sellado a la plancha con piel crujiente y interior rosado y jugoso. Se acompana con esparragos verdes al grill, pure de coliflor sedoso y nuestra salsa de mantequilla con limon, alcaparras y eneldo fresco. Una opcion saludable y sofisticada que resalta la frescura de nuestros ingredientes del mar.",
    price: 320,
    category: "mariscos",
    image: "/images/dish-salmon.jpg",
    ingredients: ["Salmon", "Esparragos", "Limon", "Mantequilla", "Alcaparras", "Eneldo", "Coliflor"],
    allergens: ["Pescado", "Lacteos"],
    calories: 380,
    prepTime: 18,
    isVegetarian: false,
    isSpicy: false,
    isPopular: true,
    rating: 4.9,
  },
  {
    id: "4",
    name: "Ensalada Caesar",
    description: "Lechuga romana, crutones artesanales, parmesano y aderezo clasico.",
    longDescription:
      "Nuestra version de la clasica ensalada Caesar utiliza lechuga romana fresca cortada a mano, crutones artesanales horneados con aceite de oliva y hierbas, generosas lascas de parmesano y nuestro aderezo Caesar preparado diariamente con anchoas, ajo, limon, mostaza Dijon y aceite de oliva extra virgen. Opcion de anadir pollo a la parrilla o camarones.",
    price: 165,
    category: "ensalada",
    image: "/images/dish-ensalada.jpg",
    ingredients: ["Lechuga romana", "Parmesano", "Crutones", "Anchoas", "Ajo", "Limon", "Mostaza Dijon"],
    allergens: ["Gluten", "Lacteos", "Pescado"],
    calories: 280,
    prepTime: 10,
    isVegetarian: false,
    isSpicy: false,
    isPopular: false,
    rating: 4.3,
  },
  {
    id: "5",
    name: "Fettuccine Bolognese",
    description: "Pasta fresca al huevo con ragu de carne cocinado por 6 horas.",
    longDescription:
      "Nuestra pasta fettuccine es hecha en casa diariamente con harina italiana tipo 00 y huevos de granja. El ragu bolognese se cocina lentamente durante 6 horas con una mezcla de carne de res y cerdo, tomate San Marzano, sofrito clasico de zanahoria, apio y cebolla, vino tinto y un toque de leche para suavizar. Se termina con albahaca fresca y parmesano rallado.",
    price: 230,
    category: "pasta",
    image: "/images/dish-pasta.jpg",
    ingredients: ["Pasta fresca", "Carne de res", "Cerdo", "Tomate San Marzano", "Vino tinto", "Zanahoria", "Parmesano"],
    allergens: ["Gluten", "Lacteos", "Huevo"],
    calories: 580,
    prepTime: 15,
    isVegetarian: false,
    isSpicy: false,
    isPopular: true,
    rating: 4.6,
  },
  {
    id: "6",
    name: "Costillas BBQ",
    description: "Costillas de res glaseadas con salsa BBQ ahumada y coleslaw.",
    longDescription:
      "Costillas de res de primera calidad, cocinadas a baja temperatura durante 8 horas hasta lograr una textura que se deshace al tacto. Se glasean con nuestra salsa BBQ casera hecha con chipotle ahumado, miel de abeja, vinagre de manzana y especias secretas. Se acompanan con coleslaw cremoso de col morada y zanahoria, y mazorca de maiz asada con mantequilla de hierbas.",
    price: 345,
    category: "plato-fuerte",
    image: "/images/dish-costillas.jpg",
    ingredients: ["Costillas de res", "Chipotle", "Miel", "Vinagre de manzana", "Col morada", "Mazorca", "Mantequilla"],
    allergens: ["Lacteos"],
    calories: 720,
    prepTime: 25,
    isVegetarian: false,
    isSpicy: true,
    isPopular: true,
    rating: 4.8,
  },
  {
    id: "7",
    name: "Ceviche de Camaron",
    description: "Camarones frescos marinados en limon con aguacate y tostadas.",
    longDescription:
      "Camarones frescos del Pacifico marinados en jugo de limon recien exprimido, mezclados con cebolla morada, tomate, pepino, chile serrano, cilantro fresco y aguacate cremoso. Servido en una copa de cristal con tostadas crujientes de maiz y nuestra salsa negra de la casa. Un plato refrescante perfecto para cualquier momento.",
    price: 210,
    category: "mariscos",
    image: "/images/dish-ceviche.jpg",
    ingredients: ["Camaron", "Limon", "Aguacate", "Cebolla morada", "Tomate", "Chile serrano", "Cilantro"],
    allergens: ["Mariscos"],
    calories: 195,
    prepTime: 15,
    isVegetarian: false,
    isSpicy: true,
    isPopular: true,
    rating: 4.7,
  },
  {
    id: "8",
    name: "Tiramisu",
    description: "Clasico postre italiano con mascarpone, cafe y cacao.",
    longDescription:
      "Nuestro tiramisu es preparado artesanalmente cada manana siguiendo la receta tradicional italiana. Capas de soletas empapadas en espresso recien hecho y licor Marsala, alternadas con crema de mascarpone batida con yemas de huevo y azucar. Se deja reposar 24 horas para que los sabores se fusionen perfectamente. Se termina con un espolvoreado generoso de cacao amargo en polvo.",
    price: 145,
    category: "postre",
    image: "/images/dish-tiramisu.jpg",
    ingredients: ["Mascarpone", "Cafe espresso", "Soletas", "Cacao", "Huevo", "Azucar", "Marsala"],
    allergens: ["Gluten", "Lacteos", "Huevo"],
    calories: 380,
    prepTime: 5,
    isVegetarian: true,
    isSpicy: false,
    isPopular: true,
    rating: 4.9,
  },
  {
    id: "9",
    name: "Sopa de Tomate Rostizado",
    description: "Crema de tomate asado con albahaca, aceite de oliva y pan artesanal.",
    longDescription:
      "Tomates maduros rostizados lentamente en el horno con ajo, cebolla y hierbas mediterraneas, luego procesados hasta lograr una textura aterciopelada. Se enriquece con un toque de crema y se sirve con un swirl de aceite de albahaca fresca, pimienta negra recien molida y rebanadas de pan artesanal tostado con aceite de oliva. Reconfortante y llena de sabor en cada cucharada.",
    price: 125,
    category: "sopa",
    image: "/images/dish-sopa.jpg",
    ingredients: ["Tomate", "Ajo", "Cebolla", "Albahaca", "Crema", "Aceite de oliva", "Pan artesanal"],
    allergens: ["Gluten", "Lacteos"],
    calories: 220,
    prepTime: 10,
    isVegetarian: true,
    isSpicy: false,
    isPopular: false,
    rating: 4.4,
  },
  {
    id: "10",
    name: "Hamburguesa Gourmet",
    description: "Carne wagyu, cheddar anejado, cebolla caramelizada y trufa.",
    longDescription:
      "Hamburguesa premium con 200g de carne wagyu molida a mano, cocinada a la perfeccion en plancha de hierro fundido. Servida en pan brioche artesanal tostado con mantequilla, queso cheddar anejado 18 meses, cebolla caramelizada en vino tinto, rucula fresca y aioli de trufa negra. Se acompana con papas fritas cortadas a mano con sal de mar y romero.",
    price: 275,
    category: "plato-fuerte",
    image: "/images/dish-hamburguesa.jpg",
    ingredients: ["Carne wagyu", "Pan brioche", "Cheddar anejado", "Cebolla", "Vino tinto", "Trufa", "Rucula"],
    allergens: ["Gluten", "Lacteos", "Huevo"],
    calories: 680,
    prepTime: 20,
    isVegetarian: false,
    isSpicy: false,
    isPopular: true,
    rating: 4.8,
  },
  {
    id: "11",
    name: "Pulpo a la Parrilla",
    description: "Tentaculos de pulpo con paprika, aceite de oliva y papas rostizadas.",
    longDescription:
      "Pulpo fresco cocido lentamente hasta lograr una textura tierna, luego marcado a la parrilla a fuego alto para obtener un exterior crujiente y ahumado. Se sazona con paprika espanola, aceite de oliva virgen extra, ajo confitado y perejil. Servido sobre una cama de papas cambray rostizadas con romero y tomates cherry confitados. Un plato que celebra los sabores del Mediterraneo.",
    price: 355,
    category: "mariscos",
    image: "/images/dish-pulpo.jpg",
    ingredients: ["Pulpo", "Paprika", "Aceite de oliva", "Papas cambray", "Tomate cherry", "Romero", "Ajo"],
    allergens: ["Moluscos"],
    calories: 340,
    prepTime: 22,
    isVegetarian: false,
    isSpicy: false,
    isPopular: false,
    rating: 4.6,
  },
  {
    id: "12",
    name: "Churros con Chocolate",
    description: "Churros crujientes con azucar y canela, salsa de chocolate belga.",
    longDescription:
      "Churros fritos al momento, crujientes por fuera y suaves por dentro, espolvoreados generosamente con azucar y canela de Ceilan. Se acompanan con una salsa caliente de chocolate belga 70% cacao, preparada con leche entera y un toque de vainilla de Madagascar. Perfectos para compartir o para consentirte con un final dulce memorable. Tambien disponibles con salsa de cajeta o dulce de leche.",
    price: 120,
    category: "postre",
    image: "/images/dish-churros.jpg",
    ingredients: ["Harina", "Azucar", "Canela", "Chocolate belga", "Leche", "Vainilla", "Mantequilla"],
    allergens: ["Gluten", "Lacteos"],
    calories: 450,
    prepTime: 12,
    isVegetarian: true,
    isSpicy: false,
    isPopular: true,
    rating: 4.5,
  },
]

export function getDishById(id: string): Dish | undefined {
  return dishes.find((d) => d.id === id)
}

export function getFilteredDishes(filters: {
  search?: string
  category?: string
  minPrice?: number
  maxPrice?: number
  isVegetarian?: boolean
  isSpicy?: boolean
}): Dish[] {
  return dishes.filter((d) => {
    if (filters.search) {
      const q = filters.search.toLowerCase()
      const matches =
        d.name.toLowerCase().includes(q) ||
        d.description.toLowerCase().includes(q) ||
        d.category.toLowerCase().includes(q) ||
        d.ingredients.some((i) => i.toLowerCase().includes(q))
      if (!matches) return false
    }
    if (filters.category && filters.category !== "all" && d.category !== filters.category) return false
    if (filters.minPrice && d.price < filters.minPrice) return false
    if (filters.maxPrice && d.price > filters.maxPrice) return false
    if (filters.isVegetarian && !d.isVegetarian) return false
    if (filters.isSpicy && !d.isSpicy) return false
    return true
  })
}

export const dishCategories = [
  { value: "all", label: "Todos" },
  { value: "entrada", label: "Entradas" },
  { value: "plato-fuerte", label: "Platos Fuertes" },
  { value: "pasta", label: "Pastas" },
  { value: "ensalada", label: "Ensaladas" },
  { value: "mariscos", label: "Mariscos" },
  { value: "sopa", label: "Sopas" },
  { value: "postre", label: "Postres" },
]

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(price)
}
