// app/api/products/[productNo]/route.ts
import {productDetailMock} from '@/lib/productDetail';
import {NextResponse} from 'next/server';

type Ctx = {params: Promise<{productNo: string}>}; // ✅ 프로미스 타입

export async function GET(_req: Request, {params}: Ctx) {
  const {productNo} = await params;
  const no = Number(productNo);

  // 실제로는 DB/외부 API에서 no로 조회.
  // 지금은 목데이터에 productNo만 주입해서 반환.
  const data = {
    ...productDetailMock,
    baseInfo: {...productDetailMock.baseInfo, productNo: no},
  };

  // 살짝 지연(로딩 확인용)
  await new Promise(r => setTimeout(r, 120));

  return NextResponse.json(data);
}
