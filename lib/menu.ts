export type Dish = {
  id: string
  name: string
  description: string
  longDescription: string
  price: number
  currency: string
  category: "appetizer" | "main" | "dessert" | "drink" | "soup" | "salad"
  image: string
  ingredients: string[]
  isVegetarian: boolean
  isSpicy: boolean
  rating: number
  preparationTime: number // en minutos
  calories?: number
  allergens: string[]
}

export const menuItems: Dish[] = [
  {
    id: "1",
    name: "Tacos al Pastor",
    description: "Tacos de carne marinada en achiote con piña",
    longDescription:
      "Deliciosos tacos de carne marinada en una mezcla de achiote, con piña caramelizada, cebolla fresca y cilantro. Una receta tradicional mexicana que combina sabores únicos. Servidos con tortillas caseras.",
    price: 8,
    currency: "USD",
    category: "main",
    image: "/images/dish-1.jpg",
    ingredients: ["Carne de cerdo", "Achiote", "Piña", "Cebolla", "Cilantro", "Tortillas de maíz"],
    isVegetarian: false,
    isSpicy: true,
    rating: 4.8,
    preparationTime: 15,
    calories: 350,
    allergens: ["Gluten"],
  },
  {
    id: "2",
    name: "Quesadillas de Flor de Calabaza",
    description: "Quesadillas rellenas de flor de calabaza con queso Oaxaca",
    longDescription:
      "Quesadillas tradicionales mexicanas rellenas de flores de calabaza frescas, queso Oaxaca y epazote. Una combinación clásica que es completamente vegetariana. Servidas calientes con salsa mexicana casera.",
    price: 6,
    currency: "USD",
    category: "main",
    image: "/images/dish-2.jpg",
    ingredients: ["Flor de calabaza", "Queso Oaxaca", "Tortillas de maíz", "Epazote", "Salsa verde"],
    isVegetarian: true,
    isSpicy: false,
    rating: 4.6,
    preparationTime: 12,
    calories: 280,
    allergens: ["Lácteos"],
  },
  {
    id: "3",
    name: "Ceviche Mexicano",
    description: "Filete de pescado marinado con limón, cilantro y chile",
    longDescription:
      "Fresco ceviche peruano-mexicano con filete de pescado blanco marinado en jugo de limón fresco. Combinado con cilantro, tomate, chile habanero, cebolla roja y aguacate. Un plato ligero y refrescante perfecto para días calurosos.",
    price: 10,
    currency: "USD",
    category: "appetizer",
    image: "/images/dish-3.jpg",
    ingredients: ["Pescado blanco fresco", "Limón", "Cilantro", "Chile habanero", "Tomate", "Cebolla roja", "Aguacate"],
    isVegetarian: false,
    isSpicy: true,
    rating: 4.7,
    preparationTime: 20,
    calories: 220,
    allergens: ["Pescado", "Moluscos"],
  },
  {
    id: "4",
    name: "Fettuccine Alfredo",
    description: "Fettuccine con salsa de crema, parmesano y mantequilla",
    longDescription:
      "Clásico italiano auténtico con fettuccine al dente bañado en una salsa cremosa de mantequilla y crema con parmesano rallado fresco. Un plato simple pero elegante que derrite en la boca. Perfecto para comidas especiales.",
    price: 16,
    currency: "USD",
    category: "main",
    image: "/images/dish-4.jpg",
    ingredients: ["Fettuccine fresco", "Crema de leche", "Parmesano", "Mantequilla", "Nuez moscada", "Pimienta negra"],
    isVegetarian: true,
    isSpicy: false,
    rating: 4.9,
    preparationTime: 18,
    calories: 520,
    allergens: ["Gluten", "Lácteos", "Huevo"],
  },
  {
    id: "5",
    name: "Ossobuco a la Milanese",
    description: "Chamorro de ternera guisado con vino blanco y vegetales",
    longDescription:
      "Plato tradicional de la Lombardía italiana. Chamorro de ternera guisado lentamente en vino blanco con zanahoria, apio y cebolla. Se sirve con risotto al azafrán que absorbe todos los sabores. Un plato sofisticado y contundente.",
    price: 28,
    currency: "USD",
    category: "main",
    image: "/images/dish-5.jpg",
    ingredients: ["Chamorro de ternera", "Vino blanco", "Zanahoria", "Apio", "Cebolla", "Caldo de ternera", "Risotto"],
    isVegetarian: false,
    isSpicy: false,
    rating: 4.9,
    preparationTime: 45,
    calories: 620,
    allergens: ["Gluten", "Lácteos"],
  },
  {
    id: "6",
    name: "Panna Cotta de Fresa",
    description: "Postre cremoso italiano con fresas frescas",
    longDescription:
      "Postre italiano por excelencia: crema suave y sedosa hecha con crema de leche, leche y un toque de gelatina. Coronado con fresas frescas de temporada marinadas en azúcar. Un final elegante y delicioso para cualquier comida.",
    price: 8,
    currency: "USD",
    category: "dessert",
    image: "/images/dish-6.jpg",
    ingredients: ["Crema de leche", "Leche", "Gelatina sin sabor", "Fresas frescas", "Azúcar", "Vainilla"],
    isVegetarian: true,
    isSpicy: false,
    rating: 4.8,
    preparationTime: 10,
    calories: 280,
    allergens: ["Lácteos"],
  },
  {
    id: "7",
    name: "Sushi Sampler",
    description: "Variedad de sushi: nigiri, rolls y temaki",
    longDescription:
      "Una selección exquisita de sushi preparada por nuestros chefs certificados. Incluye nigiri de salmón y atún, rolls variados con pepino y aguacate, y temaki fresco. Servido con wasabi, salsa de soya y jengibre encurtido.",
    price: 22,
    currency: "USD",
    category: "main",
    image: "/images/dish-7.jpg",
    ingredients: ["Arroz para sushi", "Salmón", "Atún", "Camarón", "Pepino", "Aguacate", "Alga nori", "Wasabi"],
    isVegetarian: false,
    isSpicy: false,
    rating: 4.7,
    preparationTime: 20,
    calories: 380,
    allergens: ["Pescado", "Moluscos", "Soya", "Sésamo"],
  },
  {
    id: "8",
    name: "Pad Thai",
    description: "Fideos tailandeses salteados con cacahuate y limón",
    longDescription:
      "Fideos de arroz salteados al wok con camarón, huevo, brotes de soja y cacahuate molido. Un equilibrio perfecto entre salado, dulce y ácido, con el toque de limón fresco. Un clásico de la cocina tailandesa auténtica.",
    price: 12,
    currency: "USD",
    category: "main",
    image: "/images/dish-8.jpg",
    ingredients: ["Fideos de arroz", "Camarón", "Huevo", "Brotes de soja", "Cacahuate molido", "Limón", "Salsa de soya", "Chile"],
    isVegetarian: false,
    isSpicy: true,
    rating: 4.6,
    preparationTime: 12,
    calories: 420,
    allergens: ["Cacahuate", "Soya", "Mariscos"],
  },
  {
    id: "9",
    name: "Rollo Primavera",
    description: "Rollo crujiente relleno de vegetales y camarones",
    longDescription:
      "Rollitos crujientes rellenos de camarones, vegetales frescos, zanahoria, repollo y cilantro. Servidos con salsa dulce de chile casera. Una entrada perfecta para compartir o comenzar tu comida asiática.",
    price: 8,
    currency: "USD",
    category: "appetizer",
    image: "/images/dish-9.jpg",
    ingredients: ["Envoltura de wonton", "Camarón", "Zanahoria", "Repollo", "Cilantro", "Salsa de chile dulce"],
    isVegetarian: false,
    isSpicy: false,
    rating: 4.5,
    preparationTime: 8,
    calories: 180,
    allergens: ["Gluten", "Mariscos"],
  },
  {
    id: "10",
    name: "Camarón a la Mantequilla",
    description: "Camarones jumbo salteados en mantequilla de ajo",
    longDescription:
      "Camarones jumbo frescos del día, salteados en mantequilla de ajo de calidad. Se cocinan rápidamente para mantener su ternura. Servidos con un toque de vino blanco, perejil fresco y limón. Un plato elegante y delicioso.",
    price: 32,
    currency: "USD",
    category: "main",
    image: "/images/dish-10.jpg",
    ingredients: ["Camarón jumbo fresco", "Mantequilla", "Ajo", "Perejil", "Vino blanco", "Limón"],
    isVegetarian: false,
    isSpicy: false,
    rating: 4.8,
    preparationTime: 10,
    calories: 350,
    allergens: ["Mariscos", "Lácteos"],
  },
  {
    id: "11",
    name: "Branzino a la Sal",
    description: "Branzino entero horneado en costra de sal marina",
    longDescription:
      "Branzino entero fresco del día, envuelto en una costra de sal marina que lo mantiene jugoso y lleno de sabor. Se hornea lentamente. Se sirve entero, permitiendo que el cliente lo filé en la mesa. Una presentación espectacular.",
    price: 38,
    currency: "USD",
    category: "main",
    image: "/images/dish-11.jpg",
    ingredients: ["Branzino fresco", "Sal marina", "Limón", "Tomillo", "Romero", "Hinojo"],
    isVegetarian: false,
    isSpicy: false,
    rating: 4.9,
    preparationTime: 35,
    calories: 280,
    allergens: ["Pescado"],
  },
  {
    id: "12",
    name: "Tiradito de Atún",
    description: "Atún rojo cortado fino, marinado en aceite y cítricos",
    longDescription:
      "Atún rojo sashimi-grade cortado fino en tajadas delgadas, marinado en una mezcla de aceite de oliva, limón, ají amarillo y ají rocoto. Un plato peruano sofisticado que resalta la calidad del pescado fresco. Servido con camote fresco.",
    price: 18,
    currency: "USD",
    category: "appetizer",
    image: "/images/dish-12.jpg",
    ingredients: ["Atún rojo sashimi-grade", "Aceite de oliva virgen", "Limón", "Ají amarillo", "Ají rocoto", "Camote"],
    isVegetarian: false,
    isSpicy: true,
    rating: 4.7,
    preparationTime: 8,
    calories: 250,
    allergens: ["Pescado"],
  },
  {
    id: "13",
    name: "Ribeye Prime 16oz",
    description: "Corte Prime envejecido 45 días con chimichurri",
    longDescription:
      "Corte de Ribeye Prime importado, envejecido en seco por 45 días para máxima terneza y sabor. Cocinado a la parrilla a la temperatura perfecta. Servido con chimichurri fresco, sal marina y pimienta negra. Para verdaderos amantes de la carne.",
    price: 68,
    currency: "USD",
    category: "main",
    image: "/images/dish-13.jpg",
    ingredients: ["Ribeye Prime 16oz", "Chimichurri casero", "Pimienta negra", "Sal marina"],
    isVegetarian: false,
    isSpicy: false,
    rating: 4.9,
    preparationTime: 18,
    calories: 720,
    allergens: [],
  },
  {
    id: "14",
    name: "Filete Mignon con Salsa de Trufa",
    description: "Filete mignon cubierto con salsa de trufa negra",
    longDescription:
      "Filete mignon Prime, el corte más tierno, cocinado perfectamente. Cubierto con una salsa demi-glace enriquecida con trufa negra fresca y cebolleta. Acompañado con puré de papas cremoso y espárragos frescos. Un plato verdaderamente lujoso.",
    price: 72,
    currency: "USD",
    category: "main",
    image: "/images/dish-14.jpg",
    ingredients: ["Filete mignon Prime", "Trufa negra", "Demi-glace", "Cebolleta", "Puré de papas", "Espárragos"],
    isVegetarian: false,
    isSpicy: false,
    rating: 4.9,
    preparationTime: 20,
    calories: 680,
    allergens: ["Lácteos"],
  },
  {
    id: "15",
    name: "Chocolate Decadente",
    description: "Postre de chocolate con centro líquido y helado de vainilla",
    longDescription:
      "Postre de chocolate belga con un centro líquido y cremoso que fluye al cortar. Servido con una bola de helado de vainilla artesanal, fresas frescas y salsa de chocolate oscuro. Un final decadente para cualquier celebración.",
    price: 14,
    currency: "USD",
    category: "dessert",
    image: "/images/dish-15.jpg",
    ingredients: ["Chocolate belga 70%", "Huevo", "Azúcar", "Helado de vainilla", "Fresas frescas"],
    isVegetarian: true,
    isSpicy: false,
    rating: 4.8,
    preparationTime: 12,
    calories: 420,
    allergens: ["Huevo", "Lácteos", "Gluten"],
  },
  {
    id: "16",
    name: "Hummus con Pan Pita",
    description: "Hummus casero hecho diariamente con garbanzos frescos",
    longDescription:
      "Hummus preparado diariamente con garbanzos frescos cocidos, tahina de calidad, limón fresco y ajo. Servido caliente con pan pita recién horneado y un chorrito de aceite de oliva virgen extra. Un acompañamiento perfecto o entrada ligera.",
    price: 7,
    currency: "USD",
    category: "appetizer",
    image: "/images/dish-16.jpg",
    ingredients: ["Garbanzos", "Tahina", "Limón", "Ajo", "Aceite de oliva", "Pan pita"],
    isVegetarian: true,
    isSpicy: false,
    rating: 4.7,
    preparationTime: 5,
    calories: 220,
    allergens: ["Sésamo", "Gluten"],
  },
  {
    id: "17",
    name: "Ensalada Griega",
    description: "Tomate, pepino, feta y aceitunas con orégano",
    longDescription:
      "Ensalada clásica griega con tomates maduros, pepino fresco, cebolla roja, queso feta añejo y aceitunas kalamata. Aderezada con aceite de oliva virgen extra y orégano seco. Un plato ligero, fresco y autántico que es perfecto en cualquier momento.",
    price: 11,
    currency: "USD",
    category: "salad",
    image: "/images/dish-17.jpg",
    ingredients: ["Tomate fresco", "Pepino", "Cebolla roja", "Queso feta", "Aceitunas kalamata", "Aceite de oliva", "Orégano"],
    isVegetarian: true,
    isSpicy: false,
    rating: 4.6,
    preparationTime: 5,
    calories: 180,
    allergens: ["Lácteos"],
  },
  {
    id: "18",
    name: "Shawarma de Pollo",
    description: "Pollo marinado en especias árabes, con tahina y verduras",
    longDescription:
      "Pechuga de pollo marinada en una mezcla tradicional de especias árabes, cocinada lentamente en el trompo. Se sirve en pan de pita caliente con salsa de tahina, tomate, pepino y cebolla roja. Un clásico del Medio Oriente que es a la vez delicioso y satisfactorio.",
    price: 14,
    currency: "USD",
    category: "main",
    image: "/images/dish-18.jpg",
    ingredients: ["Pechuga de pollo", "Especias árabes", "Tahina", "Pan de pita", "Tomate", "Pepino", "Cebolla roja"],
    isVegetarian: false,
    isSpicy: true,
    rating: 4.7,
    preparationTime: 10,
    calories: 420,
    allergens: ["Gluten", "Sésamo"],
  },
]

export function getDishById(id: string): Dish | undefined {
  return menuItems.find((d) => d.id === id)
}

export function getFilteredDishes(filters: {
  search?: string
  category?: string
  minRating?: number
  maxPrice?: number
  vegetarianOnly?: boolean
  spicyOnly?: boolean
}): Dish[] {
  return menuItems.filter((dish) => {
    if (filters.search) {
      const q = filters.search.toLowerCase()
      const matches =
        dish.name.toLowerCase().includes(q) ||
        dish.description.toLowerCase().includes(q) ||
        dish.ingredients.some((ing) => ing.toLowerCase().includes(q))
      if (!matches) return false
    }
    if (filters.category && filters.category !== "all" && dish.category !== filters.category) return false
    if (filters.minRating && dish.rating < filters.minRating) return false
    if (filters.maxPrice && dish.price > filters.maxPrice) return false
    if (filters.vegetarianOnly && !dish.isVegetarian) return false
    if (filters.spicyOnly && !dish.isSpicy) return false
    return true
  })
}

export const dishCategories = [
  { value: "all", label: "Todos" },
  { value: "appetizer", label: "Entrada" },
  { value: "soup", label: "Sopa" },
  { value: "salad", label: "Ensalada" },
  { value: "main", label: "Plato Fuerte" },
  { value: "dessert", label: "Postre" },
  { value: "drink", label: "Bebida" },
]

export const priceRanges = [
  { value: 15, label: "Hasta $15" },
  { value: 25, label: "Hasta $25" },
  { value: 40, label: "Hasta $40" },
  { value: 60, label: "Más de $60" },
]

export function formatPrice(price: number, currency: string): string {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price)
}
