export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export const dummyProducts: Product[] = Array.from({length: 50}, (_, i) => ({
  id: i + 1,
  name: `상품 ${i + 1}`,
  price: 10000,
  image: `https://picsum.photos/seed/product${i + 1}/200/200`,
}));
