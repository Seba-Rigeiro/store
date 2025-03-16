interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
  rating: Rating;
  quantity?: number;
}
