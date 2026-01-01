export interface Product {
  id: string
  name: string
  nameArabic: string
  description: string
  descriptionArabic: string
  price: number
  image: string
  category: "bukhoor" | "perfume" | "incense"
  inStock: boolean
}

export const products: Product[] = [
  {
    id: "1",
    name: "Luxury Bukhoor Collection",
    nameArabic: "مجموعة البخور الفاخرة",
    description: "Premium Arabian incense with authentic fragrances",
    descriptionArabic: "بخور عربي فاخر مع روائح أصيلة ومميزة",
    price: 250,
    image: "/images/img-20251223-165149-753.jpg",
    category: "bukhoor",
    inStock: true,
  },
  {
    id: "2",
    name: "Golden Perfume Scent",
    nameArabic: "عطر زغدان الذهبي",
    description: "Scent beyond luxury - exclusive perfume concentrate",
    descriptionArabic: "عطر فاخر - تركيز عطري حصري وفريد",
    price: 350,
    image: "/images/img-20251223-165212-119.jpg",
    category: "perfume",
    inStock: true,
  },
  {
    id: "3",
    name: "Premium Rose Incense",
    nameArabic: "بخور الورد الملكي",
    description: "Natural rose fragrance incense from Zoghdan",
    descriptionArabic: "بخور برائحة الورد الطبيعي من زغدان",
    price: 180,
    image: "/images/img-20251223-165157-540.jpg",
    category: "incense",
    inStock: true,
  },
  {
    id: "4",
    name: "Signature Bukhoor Set",
    nameArabic: "طقم بخور زغدان المميز",
    description: "Complete set with traditional incense burner",
    descriptionArabic: "طقم كامل مع مبخرة تقليدية فاخرة",
    price: 420,
    image: "/images/img-20251223-165202-862.jpg",
    category: "bukhoor",
    inStock: true,
  },
  {
    id: "5",
    name: "Arabian Nights Collection",
    nameArabic: "مجموعة ليالي عربية",
    description: "Exotic blend of traditional Arabic fragrances",
    descriptionArabic: "مزيج رائع من العطور العربية التقليدية",
    price: 280,
    image: "/images/img-20251223-165149-753.jpg",
    category: "bukhoor",
    inStock: true,
  },
  {
    id: "6",
    name: "Oud Essence Perfume",
    nameArabic: "عطر خلاصة العود",
    description: "Pure oud extract in elegant presentation",
    descriptionArabic: "خلاصة عود نقية في عبوة أنيقة",
    price: 450,
    image: "/images/img-20251223-165212-119.jpg",
    category: "perfume",
    inStock: true,
  },
]
