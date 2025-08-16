'use client';

import {Tabs, TabsList, TabsTrigger, TabsContent} from '@/components/ui/tabs';
import {Button} from '@/components/ui/button';
import type {ProductDetail} from '@/lib/productDetail';
import ExpandableHtml from './ExpandableHtml';

const money = (n: number) => n.toLocaleString('ko-KR');
const html = (s?: string, fallback = '<p>내용이 없습니다.</p>') => ({
  __html: s && s.trim().length ? s : fallback,
});

export default function DetailTabs({detail}: {detail: ProductDetail}) {
  const reviewCnt = detail.counter?.reviewCnt ?? 0;
  const inquiryCnt = detail.counter?.inquiryCnt ?? 0;

  return (
    <section className="rounded-md border bg-white">
      <Tabs defaultValue="detail" className="w-full">
        {/* 탭 헤더 */}
        <div className="border-b bg-white">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="detail">상품상세</TabsTrigger>
            <TabsTrigger value="guide">배송·교환·환불</TabsTrigger>
            <TabsTrigger value="reviews">
              후기
              <span className="ml-1 text-[11px] text-muted-foreground">
                ({reviewCnt})
              </span>
            </TabsTrigger>
            <TabsTrigger value="qna">
              문의
              <span className="ml-1 text-[11px] text-muted-foreground">
                ({inquiryCnt})
              </span>
            </TabsTrigger>
          </TabsList>
        </div>

        {/* 상품상세 */}
        <TabsContent value="detail" className="p-3 space-y-3">
          {/* (선택) 상단 추가 영역 */}
          {detail.baseInfo.contentHeader ? (
            <div
              className="rounded-md border bg-white p-3 text-sm"
              dangerouslySetInnerHTML={{__html: detail.baseInfo.contentHeader}}
            />
          ) : null}

          {/* ⬇️ 핵심: 처음엔 일부만, 더보기 클릭 시 전체 */}
          <ExpandableHtml
            html={detail.baseInfo.content}
            collapsedHeight={380}
          />

          {/* (선택) 하단 추가 영역 */}
          {detail.baseInfo.contentFooter ? (
            <div
              className="rounded-md border bg-white p-3 text-sm"
              dangerouslySetInnerHTML={{__html: detail.baseInfo.contentFooter}}
            />
          ) : null}
        </TabsContent>

        {/* 배송/교환/환불 안내 */}
        <TabsContent value="guide" className="p-3 space-y-3">
          <Section title="배송 안내" htmlStr={detail.deliveryGuide} />
          <Section title="A/S 안내" htmlStr={detail.afterServiceGuide} />
          <Section title="교환 안내" htmlStr={detail.exchangeGuide} />
          <Section title="환불 안내" htmlStr={detail.refundGuide} />
          {/* 필요하면 고시정보(dutyInfo) 파싱해서 표로 노출 */}
        </TabsContent>

        {/* 상품후기 (요약 예시) */}
        <TabsContent value="reviews" className="p-3 space-y-3">
          <div className="rounded-md border p-3">
            <div className="mb-1 text-sm font-medium">상품후기</div>
            <div className="text-[13px] text-muted-foreground">
              평점 {detail.reviewRate?.toFixed?.(1) ?? '0.0'} / 리뷰 {reviewCnt}
              개
            </div>
            <div className="mt-3 grid gap-2">
              {/* 실제 리뷰 리스트가 생기면 여기 map */}
              <PlaceholderCard text="아직 등록된 후기가 없습니다." />
            </div>
            <div className="mt-3 text-right">
              <Button size="sm" variant="outline">
                리뷰 쓰기
              </Button>
            </div>
          </div>
        </TabsContent>

        {/* 상품문의 (요약 예시) */}
        <TabsContent value="qna" className="p-3 space-y-3">
          <div className="rounded-md border p-3">
            <div className="mb-1 text-sm font-medium">상품 문의</div>
            <div className="text-[13px] text-muted-foreground">
              총 {inquiryCnt}건
            </div>
            <div className="mt-3 grid gap-2">
              {/* 실제 문의 리스트가 생기면 여기 map */}
              <PlaceholderCard text="등록된 문의가 없습니다." />
            </div>
            <div className="mt-3 text-right">
              <Button size="sm">문의하기</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}

function Section({title, htmlStr}: {title: string; htmlStr?: string}) {
  return (
    <div className="rounded-md border p-3 text-sm">
      <div className="mb-2 font-medium">{title}</div>
      <div
        className="prose prose-sm max-w-none"
        dangerouslySetInnerHTML={
          htmlStr ? {__html: htmlStr} : {__html: '<p>내용이 없습니다.</p>'}
        }
      />
    </div>
  );
}

function PlaceholderCard({text}: {text: string}) {
  return (
    <div className="rounded-md border bg-muted/30 p-3 text-[13px] text-muted-foreground">
      {text}
    </div>
  );
}
