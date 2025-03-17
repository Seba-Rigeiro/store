import { Product } from "@/models/product";

export const mockProducts: Product[] = [
  {
    id: "1",
    title: "Laptop",
    price: 10,
    image: "https://example.com/product.jpg",
    description: "Test description",
    rating: { rate: 10, count: 20 },
  },
  {
    id: "2",
    title: "Iphone",
    price: 20,
    image: "https://example.com/product.jpg",
    description: "Test description",
    rating: { rate: 5, count: 30 },
  },
  {
    id: "3",
    title: "Tablet",
    price: 29,
    description: "Test description",
    image: "https://example.com/product.jpg",
    rating: { rate: 9, count: 35 },
  },
];
