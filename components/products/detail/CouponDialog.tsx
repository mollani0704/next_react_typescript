'use client';

import {useState} from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import {Button} from '@/components/ui/button';
import {Badge} from '@/components/ui/badge';
import {Separator} from '@/components/ui/separator';
import {calcCouponValue, type Coupon} from '@/lib/coupon';

const money = (n: number) => n.toLocaleString('ko-KR');

export default function CouponDialog({
  open,
  onOpenChange,
  coupons,
  preCouponPayable, // 쿠폰 적용 전 결제예상가
  onIssued, // (금액) 선택/다운로드 완료 콜백
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  coupons: Coupon[];
  preCouponPayable: number;
  onIssued: (appliedAmt: number, couponId: string) => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const [doneOpen, setDoneOpen] = useState(false);

  const selectedCoupon = coupons.find(c => c.id === selected) || null;
  const appliedAmt = selectedCoupon
    ? calcCouponValue(selectedCoupon, preCouponPayable)
    : 0;

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>쿠폰 받기</DialogTitle>
            <DialogDescription>
              사용 가능한 쿠폰을 선택해 다운로드하세요.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3">
            {coupons.map(c => {
              const value = calcCouponValue(c, preCouponPayable);
              return (
                <div
                  key={c.id}
                  className={`rounded-md border p-3 ${
                    selected === c.id ? 'ring-2 ring-primary' : ''
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="font-medium">{c.title}</div>
                      <div className="text-[12px] text-muted-foreground">
                        {c.unitType === 'WON'
                          ? `${money(c.discountAmt)}원`
                          : `${c.discountAmt}%`}
                        {c.unitType === 'PERCENT' && c.maxDiscountAmt
                          ? ` (최대 ${money(c.maxDiscountAmt)}원)`
                          : ''}
                        {c.minOrderAmt
                          ? ` · ${money(c.minOrderAmt)}원 이상`
                          : ''}
                        {c.expiresAt ? ` · ~${c.expiresAt}` : ''}
                      </div>
                      <Badge variant="secondary" className="mt-1">
                        적용 시 -{money(value)}원
                      </Badge>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <Button
                        size="sm"
                        variant={selected === c.id ? 'default' : 'outline'}
                        onClick={() => setSelected(c.id)}
                      >
                        {selected === c.id ? '선택됨' : '선택'}
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => {
                          setSelected(c.id);
                          setDoneOpen(true);
                        }}
                      >
                        다운로드
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
            {coupons.length === 0 && (
              <div className="text-center text-sm text-muted-foreground py-6">
                사용 가능한 쿠폰이 없습니다.
              </div>
            )}
          </div>

          <Separator />

          <DialogFooter>
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              닫기
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* 다운로드 완료 알림 */}
      <AlertDialog open={doneOpen} onOpenChange={setDoneOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>쿠폰받기 완료</AlertDialogTitle>
          </AlertDialogHeader>
          <div className="text-sm">
            {selectedCoupon
              ? `"${
                  selectedCoupon.title
                }" 쿠폰이 발급되었습니다. 적용 시 -${money(appliedAmt)}원`
              : '쿠폰이 발급되었습니다.'}
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>닫기</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                if (selectedCoupon) onIssued(appliedAmt, selectedCoupon.id);
                onOpenChange(false);
              }}
            >
              확인
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
