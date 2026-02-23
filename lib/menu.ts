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
  prepTime: number // en minutos
  serves: number
}

export const menu: Dish[] = [
  {
    id: "1",
    name: "Tacos al Pastor",
    description: "Tacos tradicionales de carne al pastor con piña, cilantro y cebolla.",
    longDescription:
      "Auténticos tacos al pastor preparados con carne marinada en una mezcla de chiles secos y especias, cocinada lentamente al pastor. Servidos con piña fresca, cilantro picado, cebolla y salsa roja casera. Un clásico mexicano que no puedes perderte.",
    price: 12.99,
    currency: "USD",
    category: "main",
    image: "/images/dish-1.jpg",
    ingredients: [
      "Carne de cerdo",
      "Piña",
      "Cilantro",
      "Cebolla",
      "Chiles secos",
      "Tortillas de maíz",
    ],
    isVegetarian: false,
    isSpicy: true,
    prepTime: 15,
    serves: 3,
  },
  {
    id: "2",
    name: "Quesadillas de Flor de Calabaza",
    description: "Quesadillas con flor de calabaza, queso Oaxaca y salsa verde.",
    longDescription:
      "Quesadillas rellenas de delicada flor de calabaza con queso Oaxaca derretido, epazote y trocitos de chile serrano. Servidas con salsa verde fresca y crema mexicana. Una opción clásica y deliciosa.",
    price: 10.5,
    currency: "USD",
    category: "main",
    image: "/images/dish-2.jpg",
    ingredients: [
      "Flor de calabaza",
      "Queso Oaxaca",
      "Epazote",
      "Chile serrano",
      "Tortillas de maíz",
      "Salsa verde",
    ],
    isVegetarian: true,
    isSpicy: false,
    prepTime: 12,
    serves: 2,
  },
  {
    id: "3",
    name: "Ceviche",
    description: "Ceviche fresco con pescado blanco, limón, cilantro y tomate.",
    longDescription:
      "Ceviche tradicional preparado con pescado blanco fresco marinado en jugo de limón y lima ácida. Combinado con tomate fresco, cilantro, cebolla roja morada y un toque de ají amarillo peruano. Servido con tostadas y camote.",
    price: 14.99,
    currency: "USD",
    category: "appetizer",
    image: "/images/dish-3.jpg",
    ingredients: [
      "Pescado blanco",
      "Limón",
      "Cilantro",
      "Tomate",
      "Cebolla roja",
      "Ají amarillo",
    ],
    isVegetarian: false,
    isSpicy: false,
    prepTime: 20,
    serves: 2,
  },
  {
    id: "4",
    name: "Fettuccine Alfredo",
    description: "Pasta fresca con salsa Alfredo cremosa y parmesano.",
    longDescription:
      "Fettuccine hecha a mano servida con una salsa Alfredo cremosa preparada con mantequilla, crema fresca y queso parmesano rallado. Una receta clásica italiana que es simple pero increíblemente sabrosa.",
    price: 16.5,
    currency: "USD",
    category: "main",
    image: "/images/dish-4.jpg",
    ingredients: [
      "Fettuccine fresco",
      "Mantequilla",
      "Crema",
      "Queso parmesano",
      "Ajo",
      "Sal y pimienta",
    ],
    isVegetarian: true,
    isSpicy: false,
    prepTime: 18,
    serves: 2,
  },
  {
    id: "5",
    name: "Ossobuco alla Milanese",
    description: "Jarrete de ternera braseado con verduras y vino blanco.",
    longDescription:
      "Ossobuco auténtico: jarrete de ternera braseado lentamente con verduras frescas, vino blanco y caldo de ternera. Se sirve con su propio jugo enriquecido y gremolata (mezcla de ajo, limón y perejil). Una joya de la cocina milanesa.",
    price: 28.99,
    currency: "USD",
    category: "main",
    image: "/images/dish-5.jpg",
    ingredients: [
      "Jarrete de ternera",
      "Zanahoria",
      "Apio",
      "Cebolla",
      "Vino blanco",
      "Caldo de ternera",
      "Perejil",
    ],
    isVegetarian: false,
    isSpicy: false,
    prepTime: 120,
    serves: 2,
  },
  {
    id: "6",
    name: "Panna Cotta con Fresas",
    description: "Postre cremoso italiano con fresas frescas y salsa de frambuesa.",
    longDescription:
      "Panna cotta tradicional italiana hecha con crema de leche, vainilla y gelatina. Se sirve fría coronada con fresas frescas en almíbar y salsa de frambuesa. Un postre elegante y refinado.",
    price: 9.99,
    currency: "USD",
    category: "dessert",
    image: "/images/dish-6.jpg",
    ingredients: [
      "Crema de leche",
      "Vainilla",
      "Gelatina",
      "Fresas",
      "Frambuesas",
      "Azúcar",
    ],
    isVegetarian: true,
    isSpicy: false,
    prepTime: 15,
    serves: 1,
  },
  {
    id: "7",
    name: "Sushi Sampler",
    description: "Variedad de sushi con salmón, atún, aguacate y más.",
    longDescription:
      "Sampler de sushi con una selección variada incluyendo rolls California, Philadelphia, Dragon roll y nigiri de salmón fresco. Todo preparado con arroz de sushi de la mejor calidad y acompañado de wasabi, jengibre encurtido y salsa de soja.",
    price: 22.5,
    currency: "USD",
    category: "main",
    image: "/images/dish-7.jpg",
    ingredients: [
      "Salmón",
      "Atún",
      "Aguacate",
      "Arroz de sushi",
      "Nori",
      "Pepino",
      "Wasabi",
    ],
    isVegetarian: false,
    isSpicy: false,
    prepTime: 25,
    serves: 2,
  },
  {
    id: "8",
    name: "Pad Thai",
    description: "Fideos de arroz salteados con camarones, maní y lima.",
    longDescription:
      "Pad Thai auténtico: fideos de arroz anchos salteados con camarones frescos, huevo, brotes de soja, cebollino y un equilibrio perfecto de salsa de tamarindo agria, pescado y azúcar. Coronado con cacahuates molidos, lima fresca y cilantro.",
    price: 13.99,
    currency: "USD",
    category: "main",
    image: "/images/dish-8.jpg",
    ingredients: [
      "Fideos de arroz",
      "Camarones",
      "Huevo",
      "Brotes de soja",
      "Cebollino",
      "Cacahuates",
      "Salsa de tamarindo",
    ],
    isVegetarian: false,
    isSpicy: true,
    prepTime: 15,
    serves: 1,
  },
  {
    id: "9",
    name: "Spring Rolls",
    description: "Rollos frescos con camarones, verduras y salsa de inmersión.",
    longDescription:
      "Spring rolls frescos hechos con papel de arroz transparente relleno de camarones cocidos, verduras crujientes, fideos vermicelli y hierbas frescas tailandesas. Servidos con salsa de maní casera para dipping.",
    price: 8.99,
    currency: "USD",
    category: "appetizer",
    image: "/images/dish-9.jpg",
    ingredients: [
      "Papel de arroz",
      "Camarones",
      "Lechuga",
      "Zanahoria",
      "Fideos vermicelli",
      "Menta",
      "Cilantro",
    ],
    isVegetarian: false,
    isSpicy: false,
    prepTime: 10,
    serves: 2,
  },
  {
    id: "10",
    name: "Camarones al Ajillo",
    description: "Camarones grandes en salsa de ajo, limón y perejil.",
    longDescription:
      "Camarones jumbo salteados en mantequilla con ajo minuciozamente cortado, chile rojo, limón fresco y perejil italiano. Una preparación simple pero elegante que permite que la calidad del camarón brille. Perfecto con pan tostado.",
    price: 18.99,
    currency: "USD",
    category: "main",
    image: "/images/dish-10.jpg",
    ingredients: [
      "Camarones jumbo",
      "Ajo",
      "Mantequilla",
      "Limón",
      "Chile rojo",
      "Perejil",
      "Vino blanco",
    ],
    isVegetarian: false,
    isSpicy: true,
    prepTime: 12,
    serves: 2,
  },
  {
    id: "11",
    name: "Branzino al Horno",
    description: "Pez entero al horno en costra de sal con hierbas.",
    longDescription:
      "Branzino fresco cocinado entero en una costra de sal con romero, tomillo y limón. La costra mantiene la humedad y los sabores, resultando en un pescado tierno y jugoso. Se sirve con vegetales asados y salsa de limón y hierbas.",
    price: 32.99,
    currency: "USD",
    category: "main",
    image: "/images/dish-11.jpg",
    ingredients: [
      "Branzino fresco",
      "Sal marina",
      "Romero",
      "Tomillo",
      "Limón",
      "Vegetales de temporada",
    ],
    isVegetarian: false,
    isSpicy: false,
    prepTime: 40,
    serves: 2,
  },
  {
    id: "12",
    name: "Toro Tiradito",
    description: "Tira fina de toro con cítricos, ají y aceite de oliva.",
    longDescription:
      "Toro (vientre de atún rojo) cortado finamente en tiradito, marinado ligéramente en cítricos con ají amarillo peruano, comino, cilantro y el mejor aceite de oliva. Un lujo para los amantes del pescado crudo de la más alta calidad.",
    price: 26.99,
    currency: "USD",
    category: "appetizer",
    image: "/images/dish-12.jpg",
    ingredients: [
      "Toro (atún rojo)",
      "Limón",
      "Lima",
      "Ají amarillo",
      "Cilantro",
      "Aceite de oliva",
    ],
    isVegetarian: false,
    isSpicy: false,
    prepTime: 10,
    serves: 1,
  },
  {
    id: "13",
    name: "Prime Ribeye 16oz",
    description: "Carne de res premium a la parrilla con chimichurri.",
    longDescription:
      "Corte Prime de ribeye de 16 onzas envejecido en seco, sellado a fuego alto hasta punto medio rojo. Acompañado con chimichurri argentino casero, vegetales asados a la parrilla y puré cremoso. Una experiencia gastronómica de clase mundial.",
    price: 48.99,
    currency: "USD",
    category: "main",
    image: "/images/dish-13.jpg",
    ingredients: [
      "Ribeye Prime",
      "Ajo",
      "Perejil",
      "Orégano",
      "Vinagre rojo",
      "Aceite de oliva",
      "Vegetales asados",
    ],
    isVegetarian: false,
    isSpicy: false,
    prepTime: 35,
    serves: 1,
  },
  {
    id: "14",
    name: "Filet Mignon con Trufa",
    description: "Filete de ternera con salsa de trufa negra.",
    longDescription:
      "Filet mignon tierno cocinado a punto perfecto, coronado con una lujosa salsa de trufa negra de Perigord. Acompañado con papas paja caseras, espárragos frescos y una reducción de vino tinto. El pico de la elegancia culinaria.",
    price: 52.99,
    currency: "USD",
    category: "main",
    image: "/images/dish-14.jpg",
    ingredients: [
      "Filet mignon",
      "Trufa negra",
      "Caldo de carne",
      "Vino tinto",
      "Papa",
      "Espárrago",
    ],
    isVegetarian: false,
    isSpicy: false,
    prepTime: 30,
    serves: 1,
  },
  {
    id: "15",
    name: "Lava Cake de Chocolate",
    description: "Pastel de chocolate con centro derretido y helado de vainilla.",
    longDescription:
      "Postre decadente: torta de chocolate oscuro con un corazón de chocolate líquido derretido, servida caliente con una bola de helado de vainilla que se derrite sobre el calor. Acompañado con salsa de frambuesa y frutos rojos frescos.",
    price: 11.99,
    currency: "USD",
    category: "dessert",
    image: "/images/dish-15.jpg",
    ingredients: [
      "Chocolate oscuro",
      "Mantequilla",
      "Huevo",
      "Azúcar",
      "Harina",
      "Vainilla",
    ],
    isVegetarian: true,
    isSpicy: false,
    prepTime: 12,
    serves: 1,
  },
  {
    id: "16",
    name: "Hummus de Garbanzos",
    description: "Puré cremoso de garbanzos con tahini, limón y ajo.",
    longDescription:
      "Hummus fresco y cremoso preparado con garbanzos cocidos, pasta de sésamo tahini, ajo fresco, limón y un toque de aceite de oliva extra virgen. Acompañado con pan pita tostado caliente y verduras frescas para dipping.",
    price: 7.99,
    currency: "USD",
    category: "appetizer",
    image: "/images/dish-16.jpg",
    ingredients: [
      "Garbanzos",
      "Tahini",
      "Limón",
      "Ajo",
      "Aceite de oliva",
      "Pan pita",
    ],
    isVegetarian: true,
    isSpicy: false,
    prepTime: 5,
    serves: 2,
  },
  {
    id: "17",
    name: "Ensalada Griega",
    description: "Tomate, pepino, queso feta y aceitunas Kalamata.",
    longDescription:
      "Ensalada griega auténtica con tomates maduros cortados en dados, pepino fresco crujiente, cebolla roja, aceitunas Kalamata frescas y queso feta desmenuzado. Aliñada con aceite de oliva virgen extra, vinagre bálsamico y orégano seco. Refrescante y mediterránea.",
    price: 10.99,
    currency: "USD",
    category: "salad",
    image: "/images/dish-17.jpg",
    ingredients: [
      "Tomate",
      "Pepino",
      "Cebolla roja",
      "Aceitunas Kalamata",
      "Queso feta",
      "Aceite de oliva",
      "Vinagre bálsamico",
    ],
    isVegetarian: true,
    isSpicy: false,
    prepTime: 10,
    serves: 2,
  },
  {
    id: "18",
    name: "Chicken Shawarma",
    description: "Pollo especiado en pan pita con tahini y vegetales.",
    longDescription:
      "Chicken shawarma tradicional: pollo marinado en especias árabes, cocinado en spit y rebanado fino. Servido en pan pita calientecito con hummus, salsa tahini, tomate fresco, pepino, cebolla roja encurtida y cilantro. Acompañado con papas al horno.",
    price: 11.99,
    currency: "USD",
    category: "main",
    image: "/images/dish-18.jpg",
    ingredients: [
      "Pechuga de pollo",
      "Especias árabes",
      "Pan pita",
      "Tahini",
      "Tomate",
      "Pepino",
      "Cebolla",
    ],
    isVegetarian: false,
    isSpicy: false,
    prepTime: 15,
    serves: 1,
  },
]

export function getFilteredMenu({
  search = "",
  category = "all",
  maxPrice = undefined,
  vegetarian = false,
  spicy = false,
}: {
  search?: string
  category?: string
  maxPrice?: number
  vegetarian?: boolean
  spicy?: boolean
}): Dish[] {
  return menu.filter((dish) => {
    const matchesSearch =
      search === "" ||
      dish.name.toLowerCase().includes(search.toLowerCase()) ||
      dish.description.toLowerCase().includes(search.toLowerCase())

    const matchesCategory = category === "all" || dish.category === category

    const matchesPrice = maxPrice === undefined || dish.price <= maxPrice

    const matchesVegetarian = !vegetarian || dish.isVegetarian

    const matchesSpicy = !spicy || dish.isSpicy

    return matchesSearch && matchesCategory && matchesPrice && matchesVegetarian && matchesSpicy
  })
}

export function getDishById(id: string): Dish | undefined {
  return menu.find((dish) => dish.id === id)
}
