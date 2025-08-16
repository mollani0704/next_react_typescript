'use client';

import {useEffect, useMemo, useRef, useState} from 'react';
import {Button} from '@/components/ui/button';
import {ChevronDown, ChevronUp} from 'lucide-react';

type Props = {
  html?: string;
  collapsedHeight?: number; // 접힌 상태 높이(px). 기본 360
  className?: string;
};

export default function ExpandableHtml({
  html,
  collapsedHeight = 360,
  className,
}: Props) {
  const [expanded, setExpanded] = useState(false);
  const [canCollapse, setCanCollapse] = useState(false);
  const [maxH, setMaxH] = useState<number | undefined>(collapsedHeight);
  const innerRef = useRef<HTMLDivElement>(null);

  // 이미지 지연 로딩 + //url → https://url 보정
  const safeHtml = useMemo(() => {
    const srcFixed = (html ?? '')
      .replace(/src=["']\/\/?/g, 'src="https://') // protocol 추가
      .replace(/<img\s/gi, '<img loading="lazy" decoding="async" '); // lazy load
    return srcFixed.trim().length ? srcFixed : '<p>상세 내용이 없습니다.</p>';
  }, [html]);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;

    const measure = () => {
      const tooTall = el.scrollHeight > collapsedHeight + 8;
      setCanCollapse(tooTall);
      setMaxH(tooTall && !expanded ? collapsedHeight : undefined);
    };

    measure();

    // 이미지 로딩/에러/리사이즈 시 재측정
    const imgs = Array.from(el.querySelectorAll('img'));
    imgs.forEach(img => {
      img.addEventListener('load', measure);
      img.addEventListener('error', measure);
    });
    window.addEventListener('resize', measure);

    return () => {
      imgs.forEach(img => {
        img.removeEventListener('load', measure);
        img.removeEventListener('error', measure);
      });
      window.removeEventListener('resize', measure);
    };
  }, [safeHtml, expanded, collapsedHeight]);

  return (
    <div className={`rounded-md border bg-white ${className ?? ''}`}>
      {/* 콘텐츠 영역 */}
      <div
        className="relative overflow-hidden transition-[max-height] duration-300 ease-in-out"
        style={expanded ? undefined : {maxHeight: `${maxH}px`}}
      >
        <div
          ref={innerRef}
          className="p-3 text-sm leading-6"
          dangerouslySetInnerHTML={{__html: safeHtml}}
        />
        {!expanded && canCollapse && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white" />
        )}
      </div>

      {/* 컨트롤 버튼 */}
      {canCollapse && (
        <div className="border-t p-2">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => setExpanded(s => !s)}
          >
            {expanded ? (
              <>
                <ChevronUp className="mr-1 size-4" />
                상세정보 접기
              </>
            ) : (
              <>
                <ChevronDown className="mr-1 size-4" />
                상세정보 더보기
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
}
