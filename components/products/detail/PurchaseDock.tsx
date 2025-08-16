'use client';

import {useState} from 'react';
import CTABar from '@/components/products/detail/CTABar';
import PurchaseSheet, {type OptionGroup} from './PurchaseSheet';

export default function PurchaseDock({
  basePrice,
  optionGroups,
}: {
  basePrice: number;
  optionGroups: OptionGroup[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <CTABar onCart={() => setOpen(true)} onBuy={() => setOpen(true)} />
      <PurchaseSheet
        open={open}
        onOpenChange={setOpen}
        basePrice={basePrice}
        optionGroups={optionGroups}
        onAddToCart={p => {
          // TODO: 여기에 장바구니 API 연동
          console.log('add-to-cart', p);
        }}
        onBuyNow={p => {
          // TODO: 주문서 이동/상세 로직
          console.log('buy-now', p);
        }}
      />
    </>
  );
}
