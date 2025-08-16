'use client';

import {useMemo, useState} from 'react';
import {money, computeBenefits, type PriceDetail} from '@/lib/benefit';
import {ChevronUp, ChevronDown, TicketPercent, Check} from 'lucide-react';
import {Button} from '@/components/ui/button';
import CouponDialog from './CouponDialog';
import type {Coupon} from '@/lib/coupon';

export default function BenefitSection({
  price,
  coupons = [],
}: {
  price: PriceDetail;
  coupons?: Coupon[];
}) {
  const [open, setOpen] = useState(true);
  const [couponDialogOpen, setCouponDialogOpen] = useState(false);
  const [couponIssued, setCouponIssued] = useState(false);
  const [appliedCouponAmt, setAppliedCouponAmt] = useState(0);

  // 쿠폰 미적용 상태의 결제예상가 (선택 쿠폰 금액 계산 기준)
  const pre = useMemo(
    () =>
      computeBenefits({...price, couponDiscountAmt: 0}, {applyCoupon: false}),
    [price],
  );

  // 실제 표시 값(발급/적용 상태 반영)
  const result = useMemo(
    () =>
      computeBenefits(
        {...price, couponDiscountAmt: appliedCouponAmt},
        {applyCoupon: couponIssued},
      ),
    [price, appliedCouponAmt, couponIssued],
  );

  const onIssued = (amt: number) => {
    setAppliedCouponAmt(amt); // 선택 쿠폰 금액 저장
    setCouponIssued(true); // 발급완료/적용
  };

  return (
    <section className="rounded-md border bg-white">
      {/* 헤더 */}
      <button
        type="button"
        onClick={() => setOpen(s => !s)}
        className="flex w-full items-center justify-between px-3 py-2"
      >
        <div className="text-sm font-semibold">회원님만의 혜택가</div>
        <div className="flex items-center gap-2">
          <div className="text-base font-extrabold">
            {money(result.finalPayable)}원
          </div>
          {open ? (
            <ChevronUp className="size-4" />
          ) : (
            <ChevronDown className="size-4" />
          )}
        </div>
      </button>

      {/* 내용 */}
      {open && (
        <div className="space-y-2 border-t px-3 py-2 text-[13px]">
          <Row label="상품금액" value={result.listPrice} />
          <Row
            label="상품할인"
            value={-result.productDiscount}
            subLabel={percentLabel(
              price.immediateDiscountUnitType,
              price.immediateDiscountAmt,
            )}
          />
          <Row
            label="추가할인"
            value={-result.additionalDiscount}
            subLabel={percentLabel(
              price.additionDiscountUnitType,
              price.additionDiscountAmt,
            )}
          />

          {/* 쿠폰 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">쿠폰</span>
              {coupons.length > 0 && !couponIssued && (
                <Button
                  size="sm"
                  variant="secondary"
                  className="h-7 gap-1"
                  onClick={() => setCouponDialogOpen(true)}
                >
                  <TicketPercent className="size-4" />
                  쿠폰받기
                </Button>
              )}
              {couponIssued && (
                <span className="inline-flex items-center gap-1 text-emerald-600 text-[12px]">
                  <Check className="size-4" /> 발급완료
                </span>
              )}
            </div>
            <div
              className={`tabular-nums ${
                couponIssued ? 'text-red-600' : 'text-muted-foreground'
              }`}
            >
              {couponIssued
                ? `- ${money(appliedCouponAmt)}원`
                : coupons.length
                ? '미적용'
                : '없음'}
            </div>
          </div>

          {/* 적립 혜택(+표기) */}
          <Row label="적립혜택" value={result.accrual} positive />

          {/* 총 할인 혜택 */}
          <div className="mt-2 flex items-center justify-between border-t pt-2">
            <div className="font-medium">총 할인 혜택</div>
            <div className="tabular-nums font-bold text-red-600">
              - {money(result.totalDiscount)}원
            </div>
          </div>

          <div className="text-right text-[12px] text-muted-foreground">
            총 {result.discountRate}% 할인 적용
          </div>
        </div>
      )}

      {/* 쿠폰 다이얼로그 */}
      <CouponDialog
        open={couponDialogOpen}
        onOpenChange={setCouponDialogOpen}
        coupons={coupons}
        preCouponPayable={pre.finalPayable}
        onIssued={amt => onIssued(amt)}
      />
    </section>
  );
}

function Row({
  label,
  value,
  subLabel,
  positive,
}: {
  label: string;
  value: number;
  subLabel?: string;
  positive?: boolean;
}) {
  const sign = value < 0 ? '- ' : positive ? '+ ' : '';
  const abs = Math.abs(value);
  const cls =
    value < 0
      ? 'text-red-600'
      : positive
      ? 'text-emerald-600'
      : 'text-foreground';
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-muted-foreground">{label}</span>
        {subLabel ? (
          <span className="text-[12px] text-muted-foreground">
            ({subLabel})
          </span>
        ) : null}
      </div>
      <div className={`tabular-nums ${cls}`}>
        {sign}
        {money(abs)}원
      </div>
    </div>
  );
}

function percentLabel(unit?: 'WON' | 'PERCENT', amt?: number) {
  if (unit === 'PERCENT' && typeof amt === 'number') return `${amt}%`;
  return undefined;
}
