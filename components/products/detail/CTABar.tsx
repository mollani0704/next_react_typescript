'use client';

import {Button} from '@/components/ui/button';

export default function CTABar({
  onCart,
  onBuy,
}: {
  onCart?: () => void;
  onBuy?: () => void;
}) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 mx-auto max-w-[420px] border-t bg-white/95 p-3 backdrop-blur">
      <div className="grid grid-cols-3 gap-2">
        <Button variant="outline" className="col-span-1" onClick={onCart}>
          장바구니
        </Button>
        <Button className="col-span-2" onClick={onBuy}>
          바로구매
        </Button>
      </div>
    </div>
  );
}
