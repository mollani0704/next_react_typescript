import BenefitSection from '@/components/products/detail/BenenfitSection';
import CTABar from '@/components/products/detail/CTABar';
import LikeToast from '@/components/products/detail/LikeToast';
import {Coupon} from '@/lib/coupon';

type productDetail = import('@/lib/productDetail').ProductDetail;
type PageProps = {
  params: Promise<{productNo: string}>; // ✅ Promise 타입
  searchParams?: Promise<Record<string, string | string[]>>; // (옵션) 이것도 Promise
};

const money = (n: number) => n.toLocaleString('ko-KR');
const normalizeImg = (u?: string) =>
  u ? (u.startsWith('//') ? `https:${u}` : u) : '';

export default async function ProductDetailPage({params}: PageProps) {
  const {productNo} = await params;
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'
    }/api/products/${productNo}`,
    {cache: 'no-store'},
  );
  if (!res.ok) throw new Error('상세 조회 실패');
  const detail: productDetail = await res.json();

  const img = normalizeImg(
    detail.baseInfo.imageUrls?.[0] || detail.baseInfo.imageUrlInfo?.[0]?.url,
  );
  const brand =
    detail.baseInfo?.productNameEn ||
    detail.baseInfo?.productManagementCd ||
    '브랜드';
  const name = detail.baseInfo.productName;
  const sale = detail.price.salePrice;
  const listPrice = Math.max(
    sale,
    sale +
      (detail.price.immediateDiscountAmt ?? 0) +
      (detail.price.additionDiscountAmt ?? 0),
  );
  const discountRate = Math.max(0, Math.round((1 - sale / listPrice) * 100));

  const likeCnt = detail.counter.likeCnt ?? 0;
  const buyCnt = detail.stock.saleCnt ?? 0;
  const reviewCnt = detail.counter.reviewCnt ?? 0;

  const shipLabel =
    detail.deliveryFee.defaultDeliveryConditionLabel ||
    (detail.deliveryFee.deliveryAmt === 0
      ? '무료배송'
      : `배송비 ${money(detail.deliveryFee.deliveryAmt)}원`);

  const coupons: Coupon[] = [
    // 예시: 퍼센트 쿠폰(최대 5천원)
    {
      id: 'c-8pct',
      title: '8% 할인 쿠폰',
      unitType: 'PERCENT',
      discountAmt: 8,
      maxDiscountAmt: detail.price.maxCouponAmt || 5000,
      minOrderAmt: 20000,
      expiresAt: '2025-12-31',
    },
    // 예시: 정액 쿠폰
    {
      id: 'c-2k',
      title: '2,000원 즉시할인',
      unitType: 'WON',
      discountAmt: 2000,
      minOrderAmt: 10000,
      expiresAt: '2025-12-31',
    },
  ];
  return (
    <>
      <section className="p-4 space-y-4">
        {/* 상단 이미지 */}
        <div className="relative overflow-hidden rounded-md bg-muted">
          <div className="aspect-square w-full">
            {img ? (
              // next/image를 아직 설정 안 했을 수 있으니 img로 렌더
              <img
                src={img}
                alt={name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="grid h-full w-full place-items-center text-sm text-muted-foreground">
                image
              </div>
            )}
          </div>
          {/* 상단 우측 액션들(검색/장바구니 아이콘은 헤더에 있으니 생략) */}
        </div>

        {/* 브랜드/상품명 */}
        <div className="space-y-1">
          <p className="text-[12px] text-muted-foreground">{brand}</p>
          <h1 className="text-base font-semibold leading-tight">{name}</h1>
        </div>

        {/* 가격 블록 */}
        <div className="space-y-1">
          <div className="text-[12px] text-muted-foreground">
            정상가 <span className="line-through">{money(listPrice)}원</span>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-[15px] font-extrabold text-red-600">
              {discountRate}%
            </span>
            <span className="text-[18px] font-extrabold">{money(sale)}원</span>
          </div>
          <div className="text-[12px] text-muted-foreground">{shipLabel}</div>
        </div>

        {/* 추가정보(SNS/프로모션 등) – 필요시 교체 */}
        <BenefitSection
          price={{
            salePrice: detail.price.salePrice,
            immediateDiscountAmt: detail.price.immediateDiscountAmt,
            immediateDiscountUnitType: detail.price.immediateDiscountUnitType, // "WON" | "PERCENT"
            additionDiscountAmt: detail.price.additionDiscountAmt,
            additionDiscountUnitType: detail.price.additionDiscountUnitType, // "WON" | "PERCENT"
            couponUseYn: detail.baseInfo.couponUseYn as 'Y' | 'N',
            couponDiscountAmt: detail.price.couponDiscountAmt,
            maxCouponAmt: detail.price.maxCouponAmt,
            accumulationAmtWhenBuyConfirm:
              detail.price.accumulationAmtWhenBuyConfirm,
            accumulationRate: detail.price.accumulationRate,
            accumulationRateOfMember: detail.price.accumulationRateOfMember,
          }}
          coupons={coupons}
        />
        {/* {detail.baseInfo.promotionText ? (
          <div className="rounded-md border bg-white p-3 text-[12px]">
            {detail.baseInfo.promotionText}
          </div>
        ) : null} */}

        {/* 상세 컨텐츠(요약 탭 헤더 느낌) */}
        <div className="space-y-2">
          <a
            href="#detail"
            className="block rounded-md border bg-white p-3 text-sm"
          >
            상세정보 펼쳐보기
          </a>
          <div className="rounded-md border bg-white p-3 text-sm">
            <div className="mb-2 font-medium">상품후기</div>
            <div className="text-[12px] text-muted-foreground">
              평점 {detail.reviewRate?.toFixed?.(1) ?? '0.0'} / 리뷰 {reviewCnt}
              개
            </div>
          </div>
        </div>

        {/* 상세 HTML */}
        <div id="detail" className="space-y-3">
          {/* 상단 추가영역 */}
          {detail.baseInfo.contentHeader && (
            <div
              className="rounded-md border bg-white p-3 text-sm"
              dangerouslySetInnerHTML={{__html: detail.baseInfo.contentHeader}}
            />
          )}

          {/* 실제 상세 */}
          <div
            className="rounded-md border bg-white p-3 text-sm leading-6"
            dangerouslySetInnerHTML={{
              __html: detail.baseInfo.content || '<p>상세 내용이 없습니다.</p>',
            }}
          />

          {/* 고시/가이드 섹션 (간단 details로 구현) */}
          <details className="rounded-md border bg-white p-3 text-sm">
            <summary className="cursor-pointer select-none font-medium">
              배송 안내
            </summary>
            <div
              className="mt-2 text-[13px]"
              dangerouslySetInnerHTML={{
                __html: detail.deliveryGuide || '<p>배송 안내가 없습니다.</p>',
              }}
            />
          </details>

          <details className="rounded-md border bg-white p-3 text-sm">
            <summary className="cursor-pointer select-none font-medium">
              A/S 안내
            </summary>
            <div
              className="mt-2 text-[13px]"
              dangerouslySetInnerHTML={{
                __html:
                  detail.afterServiceGuide || '<p>A/S 안내가 없습니다.</p>',
              }}
            />
          </details>

          <details className="rounded-md border bg-white p-3 text-sm">
            <summary className="cursor-pointer select-none font-medium">
              교환/환불 안내
            </summary>
            <div
              className="mt-2 text-[13px]"
              dangerouslySetInnerHTML={{
                __html:
                  (detail.exchangeGuide || '') + (detail.refundGuide || ''),
              }}
            />
          </details>
        </div>

        {/* 페이지 하단 여백 (고정 CTA와 겹치지 않게) */}
        <div className="h-20" />
      </section>
      <LikeToast likeCnt={likeCnt} productNo={detail.baseInfo.productNo} />
      <CTABar />
    </>
  );
}
