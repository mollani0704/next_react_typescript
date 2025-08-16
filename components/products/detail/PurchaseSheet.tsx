'use client';

import {useMemo, useState} from 'react';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group';
import {Label} from '@/components/ui/label';
import {Button} from '@/components/ui/button';
import {toast} from 'sonner';

const money = (n: number) => n.toLocaleString('ko-KR');

export type OptionValue = {
  id: string;
  label: string;
  stock?: number;
  disabled?: boolean;
};
export type OptionGroup = {
  id: string;
  name: string;
  required?: boolean;
  values: OptionValue[];
};

export default function PurchaseSheet({
  open,
  onOpenChange,
  basePrice, // 판매가(단가)
  optionGroups, // 옵션 그룹들(색상/사이즈 등)
  maxQty = 99,
  onAddToCart,
  onBuyNow,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  basePrice: number;
  optionGroups: OptionGroup[];
  maxQty?: number;
  onAddToCart?: (payload: {
    selections: Record<string, string>;
    qty: number;
    total: number;
  }) => void;
  onBuyNow?: (payload: {
    selections: Record<string, string>;
    qty: number;
    total: number;
  }) => void;
}) {
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [qty, setQty] = useState(1);

  const allSelected = optionGroups.every(g => !g.required || selections[g.id]);
  const selectedLabels = optionGroups
    .map(g => {
      const v = g.values.find(v => v.id === selections[g.id]);
      return v ? `${g.name}: ${v.label}` : null;
    })
    .filter(Boolean)
    .join(' / ');

  // 선택된 값들의 재고가 있다면 그 중 최소값을 상한으로 사용
  const selectedStocks = optionGroups
    .map(g => g.values.find(v => v.id === selections[g.id])?.stock)
    .filter((n): n is number => typeof n === 'number');
  const qtyMax = Math.max(
    1,
    Math.min(
      maxQty,
      selectedStocks.length ? Math.min(...selectedStocks) : maxQty,
    ),
  );

  const total = useMemo(() => Math.max(0, basePrice * qty), [basePrice, qty]);

  const change = (gid: string, vid: string) =>
    setSelections(s => ({...s, [gid]: vid}));

  const add = () => {
    if (!allSelected) return toast.error('필수 옵션을 선택해 주세요.');
    onAddToCart?.({selections, qty, total});
    toast.success('장바구니에 담겼습니다.');
    onOpenChange(false);
  };

  const buy = () => {
    if (!allSelected) return toast.error('필수 옵션을 선택해 주세요.');
    onBuyNow?.({selections, qty, total});
    toast.success('주문서로 이동합니다.');
    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="max-h-[85vh] overflow-y-auto p-0">
        <SheetHeader className="p-4 pb-2">
          <SheetTitle>옵션 선택</SheetTitle>
          {selectedLabels && (
            <div className="text-[12px] text-muted-foreground">
              {selectedLabels}
            </div>
          )}
        </SheetHeader>

        <div className="space-y-4 p-4 pt-0">
          {optionGroups.map(group => (
            <div key={group.id} className="rounded-md border p-3">
              <div className="mb-2 text-sm font-medium">
                {group.name}{' '}
                {group.required && <span className="text-red-500">*</span>}
              </div>
              <RadioGroup
                value={selections[group.id] ?? ''}
                onValueChange={val => change(group.id, val)}
                className="grid grid-cols-3 gap-2"
              >
                {group.values.map(v => {
                  const disabled = v.disabled || v.stock === 0;
                  return (
                    <div key={v.id} className={`relative`}>
                      <RadioGroupItem
                        value={v.id}
                        id={`${group.id}-${v.id}`}
                        className="peer sr-only"
                        disabled={disabled}
                      />
                      <Label
                        htmlFor={`${group.id}-${v.id}`}
                        className={`block cursor-pointer rounded-md border px-3 py-2 text-center text-sm peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 peer-disabled:cursor-not-allowed peer-disabled:opacity-50`}
                      >
                        {v.label}
                        {typeof v.stock === 'number' &&
                          v.stock <= 5 &&
                          v.stock > 0 && (
                            <span className="ml-1 text-[11px] text-amber-600">
                              ({v.stock}개 남음)
                            </span>
                          )}
                        {v.stock === 0 && (
                          <span className="ml-1 text-[11px] text-muted-foreground">
                            (품절)
                          </span>
                        )}
                      </Label>
                    </div>
                  );
                })}
              </RadioGroup>
            </div>
          ))}

          {/* 수량 */}
          <div className="flex items-center justify-between rounded-md border p-3">
            <div className="text-sm font-medium">수량</div>
            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setQty(q => Math.max(1, q - 1))}
              >
                -
              </Button>
              <input
                className="w-12 rounded-md border px-2 py-1 text-center text-sm"
                type="number"
                min={1}
                max={qtyMax}
                value={qty}
                onChange={e =>
                  setQty(() => {
                    const n = Number(e.target.value || 1);
                    return Math.max(1, Math.min(qtyMax, n));
                  })
                }
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setQty(q => Math.min(qtyMax, q + 1))}
              >
                +
              </Button>
            </div>
          </div>

          {/* 금액 요약 */}
          <div className="flex items-center justify-between rounded-md border bg-muted/40 p-3">
            <div className="text-sm">결제예상가</div>
            <div className="text-lg font-extrabold">{money(total)}원</div>
          </div>
        </div>

        <SheetFooter className="gap-2 p-4 pt-0">
          <Button
            variant="outline"
            className="w-full"
            onClick={add}
            disabled={!allSelected}
          >
            장바구니
          </Button>
          <Button className="w-full" onClick={buy} disabled={!allSelected}>
            바로구매
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
