// lib/benefit.ts
export type PriceDetail = {
  salePrice: number; // 현재 판매가(즉시/추가할인 적용 전후 상관없이 사용)
  immediateDiscountAmt?: number;
  immediateDiscountUnitType?: 'WON' | 'PERCENT';
  additionDiscountAmt?: number;
  additionDiscountUnitType?: 'WON' | 'PERCENT';
  couponUseYn?: 'Y' | 'N';
  couponDiscountAmt?: number; // 적용된 쿠폰 할인액(없으면 0)
  maxCouponAmt?: number; // 받을 수 있는 최대 쿠폰 할인액(예상)
  accumulationAmtWhenBuyConfirm?: number; // 확정 적립액(있으면 우선)
  accumulationRate?: number; // 기본 적립률(%) - 없을 수 있음
  accumulationRateOfMember?: number; // 회원 적립률(%) - 없을 수 있음
};

export type ComputedBenefits = {
  listPrice: number; // 기준가(정상가)
  productDiscount: number; // 상품할인(즉시)
  additionalDiscount: number; // 추가할인
  couponDiscount: number; // 쿠폰
  totalDiscount: number; // 총 할인 (적립 제외)
  accrual: number; // 적립 혜택(+)
  finalPayable: number; // 혜택가(결제예상가)
  discountRate: number; // 총 할인율(%)
};

const toWon = (n?: number) => Math.max(0, Math.floor(n ?? 0));
const percentOf = (base: number, p?: number) =>
  Math.max(0, Math.floor(base * ((p ?? 0) / 100)));

function resolveDiscount(base: number, amt?: number, unit?: 'WON' | 'PERCENT') {
  if (!amt) return 0;
  return unit === 'PERCENT' ? percentOf(base, amt) : toWon(amt);
}

/**
 * 규칙
 * - 정상가(listPrice) = salePrice + 즉시할인 + 추가할인 (숫자 기준으로 역산)
 *   (실제 백엔드 정의와 다르면 여기만 바꾸면 됨)
 * - 쿠폰은 사용자가 "쿠폰받기" 누르면 적용된다고 가정
 * - 적립은 확정액 있으면 우선, 없으면 회원 적립률 → 기본 적립률 순
 */
export function computeBenefits(
  price: PriceDetail,
  opts?: {applyCoupon?: boolean},
): ComputedBenefits {
  const immediate = resolveDiscount(
    // 정상가 기준 %인 경우를 대비해 일단 salePrice를 기준으로 계산 후 보정
    price.salePrice,
    price.immediateDiscountAmt,
    price.immediateDiscountUnitType,
  );
  const addition = resolveDiscount(
    price.salePrice,
    price.additionDiscountAmt,
    price.additionDiscountUnitType,
  );

  // 정상가 역산(가장 단순/일관된 방식)
  const listPrice = Math.max(
    price.salePrice + immediate + addition,
    price.salePrice,
  );

  // 즉시/추가할인은 숫자 그대로 잡는다(퍼센트였다면 위에서 금액으로 변환)
  const productDiscount = toWon(
    price.immediateDiscountUnitType === 'PERCENT'
      ? resolveDiscount(listPrice, price.immediateDiscountAmt, 'PERCENT')
      : price.immediateDiscountAmt ?? immediate,
  );
  const additionalDiscount = toWon(
    price.additionDiscountUnitType === 'PERCENT'
      ? resolveDiscount(listPrice, price.additionDiscountAmt, 'PERCENT')
      : price.additionDiscountAmt ?? addition,
  );

  // 쿠폰: 적용 시 실제 할인액 사용, 없으면 최대 예상 할인액
  const couponDiscount = opts?.applyCoupon
    ? toWon(price.couponDiscountAmt ?? price.maxCouponAmt ?? 0)
    : 0;

  const totalDiscount = Math.min(
    listPrice,
    productDiscount + additionalDiscount + couponDiscount,
  );
  const finalPayable = Math.max(0, listPrice - totalDiscount);

  // 적립: 확정액 > 회원률 > 기본률
  const accrual =
    toWon(price.accumulationAmtWhenBuyConfirm) ||
    percentOf(
      finalPayable,
      price.accumulationRateOfMember || price.accumulationRate || 0,
    );

  const discountRate = listPrice
    ? Math.round((totalDiscount / listPrice) * 100)
    : 0;

  return {
    listPrice,
    productDiscount: toWon(productDiscount),
    additionalDiscount: toWon(additionalDiscount),
    couponDiscount: toWon(couponDiscount),
    totalDiscount,
    accrual,
    finalPayable,
    discountRate,
  };
}

export const money = (n: number) => n.toLocaleString('ko-KR');
