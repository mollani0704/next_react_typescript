'use client';

import {useEffect} from 'react';
import {toast} from 'sonner';
import {Heart} from 'lucide-react';

export default function LikeToast({
  likeCnt,
  productNo,
}: {
  likeCnt: number;
  productNo: number;
}) {
  useEffect(() => {
    // 같은 페이지에서 중복 방지용 고유 id
    const id = `like-${productNo}`;
    toast.custom(
      () => (
        <div className="flex items-center gap-2">
          <Heart className="size-4" />
          <span className="text-sm">{`지금까지 ${likeCnt.toLocaleString(
            'ko-KR',
          )}명이 좋아했어요`}</span>
        </div>
      ),
      {id, duration: 2500},
    );
  }, [likeCnt, productNo]);

  return null;
}
