export type Coupon = {
  id: string;
  title: string; // 노출 이름
  unitType: 'WON' | 'PERCENT'; // 원 or %
  discountAmt: number; // 금액 or 퍼센트 값
  maxDiscountAmt?: number; // % 쿠폰 상한
  minOrderAmt?: number; // 최소 결제금액
  expiresAt?: string; // 만료일 표시용
};

/** 결제예상가(payable)를 기준으로 쿠폰 적용 금액 계산 */
export function calcCouponValue(c: Coupon, payable: number) {
  if (c.unitType === 'WON') return Math.max(0, Math.floor(c.discountAmt));
  const byPct = Math.floor(payable * (c.discountAmt / 100));
  return Math.min(byPct, c.maxDiscountAmt ?? byPct);
}
