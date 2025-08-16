import ProductList from '@/components/products/ProductList';
import {products} from '@/lib/products';

type ApiResponse = {
  items: {
    productNo: number;
    productName: string;
    brandName: string;
    brandNameKo?: string;
    salePrice: number;
    immediateDiscountAmt?: number;
    imageUrls?: string[];
    listImageUrls?: string[];
    isSoldOut?: boolean;
    saleStatusType?: 'ONSALE' | 'SOLDOUT' | 'PAUSE';
  }[];
};

export default async function Home() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products?limit=6`,
    {
      cache: 'no-store',
    },
  );
  if (!res.ok) throw new Error('상품을 불러오지 못했습니다');
  const data: ApiResponse = await res.json();
  return (
    <section className="p-4 space-y-3">
      <h2 className="text-base font-semibold">상품 리스트</h2>
      <ProductList items={data.items} />
    </section>
  );
}
