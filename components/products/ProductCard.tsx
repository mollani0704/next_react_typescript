import {Product} from '@/lib/products';
import {Button} from '../ui/button';
import {Heart} from 'lucide-react';
import Link from 'next/link';

type Props = {item: Product};

export type ProductItem = {
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
};

const money = (n: number) => n.toLocaleString('ko-KR');

const discountRate = (list: number, sale: number) =>
  Math.max(0, Math.round((1 - sale / list) * 100));

const calcListPrice = (sale: number, disc?: number) =>
  Math.max(sale, sale + (disc ?? 0));

export default function ProductCard({item}: {item: ProductItem}) {
  const listPrice = calcListPrice(item.salePrice, item.immediateDiscountAmt);
  const rate = discountRate(listPrice, item.salePrice);
  const soldOut = item.isSoldOut || item.saleStatusType === 'SOLDOUT';

  return (
    <Link href={`/products/${item.productNo}`}>
      <div className="relative rounded-md border bg-white p-2">
        {/* 이미지 박스 (정사각형) */}
        <div className="relative overflow-hidden rounded-sm bg-muted">
          {/* 실제 이미지가 아직 없다면 placeholder */}
          <div className="aspect-square w-full grid place-items-center text-xs text-muted-foreground">
            Image
          </div>

          {/* 찜(하트) */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1.5 top-1.5 size-8 rounded-full bg-white/80 backdrop-blur"
            aria-label="찜"
          >
            <Heart className="size-4" />
          </Button>

          {/* 품절 오버레이 */}
          {soldOut && (
            <div className="absolute inset-0 grid place-items-center bg-black/60">
              <span className="text-sm font-semibold tracking-widest text-white">
                SOLD OUT
              </span>
            </div>
          )}
        </div>

        {/* 정보 */}
        <div className="mt-2 space-y-0.5">
          <p className="text-[11px] text-muted-foreground">
            {item.brandNameKo ?? item.brandName}
          </p>
          <p className="line-clamp-2 text-[13px] leading-tight">
            {item.productName}
          </p>

          <div className="mt-1 text-[11px] text-muted-foreground line-through">
            {money(listPrice)}원
          </div>

          <div className="flex items-baseline gap-1">
            <span className="text-[13px] font-bold text-red-600">{rate}%</span>
            <span className="text-[15px] font-bold">
              {money(item.salePrice)}원
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
