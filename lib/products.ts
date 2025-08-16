export type Product = {
  id: number;
  brand: string;
  name: string;
  imageUrl?: string;
  listPrice: number; // 정상가
  salePrice: number; // 판매가
  isSoldOut?: boolean;
};

export const products: Product[] = [
  {
    id: 1,
    brand: '브랜드명',
    name: '상품명 텍스트',
    listPrice: 69000,
    salePrice: 49000,
  },
  {
    id: 2,
    brand: '브랜드명',
    name: '상품명 텍스트',
    listPrice: 99000,
    salePrice: 79000,
  },
  {
    id: 3,
    brand: '브랜드명',
    name: '상품명 텍스트',
    listPrice: 129000,
    salePrice: 89000,
  },
  {
    id: 4,
    brand: '브랜드명',
    name: '상품명 텍스트',
    listPrice: 59000,
    salePrice: 39000,
    isSoldOut: true,
  },
  {
    id: 5,
    brand: '브랜드명',
    name: '상품명 텍스트',
    listPrice: 32000,
    salePrice: 29000,
  },
  {
    id: 6,
    brand: '브랜드명',
    name: '상품명 텍스트',
    listPrice: 45000,
    salePrice: 35000,
  },
  {
    id: 7,
    brand: '브랜드명',
    name: '상품명 텍스트',
    listPrice: 55000,
    salePrice: 42000,
  }, // 더 있어도 slice로 6개만
];
