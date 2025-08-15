'use client';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import ProductList from '@/components/products/ProductList';
import {type Product} from '@/mocks/products';
import axios from 'axios';
import React, {useEffect, useRef, useState} from 'react';

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const loadProducts = async (newOffset: number, limit: number) => {
    if (loading || isEnd) return;
    setLoading(true);
    try {
      const res = await axios.get('/api/products', {
        params: {offset: newOffset, limit},
      });
      console.log('res ==>', res);
      setProducts(prev => {
        const next =
          newOffset === 0 ? res.data.products : [...prev, ...res.data.products];
        console.log(
          'products id 목록',
          next.map(p => p.id),
        );
        return next;
        // newOffset === 0 ? res.data.products : [...prev, ...res.data.products],
      });
      setOffset(newOffset + res.data.products.length);
      setIsEnd(res.data.isEnd);
    } finally {
      setLoading(false);
    }
  };

  //최초 20개 로딩
  useEffect(() => {
    console.log('최초 loadProducts 실행');
    loadProducts(0, 20);
  }, []);

  // 스크롤 감지
  useEffect(() => {
    if (!observerRef.current || isEnd || loading || products.length < 20)
      return;
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !loading) {
          loadProducts(offset, 10); // 이후 10개씩 추가
        }
      },
      {threshold: 0.8},
    );
    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [offset, isEnd, loading, products.length]);

  return (
    <main>
      <h2 className="text-xl font-bold mb-4">상품 리스트</h2>
      <ProductList products={products} />
      {/* 스크롤 트리거 타겟 */}
      <div ref={observerRef} className="h-8" />
      {loading && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <LoadingSpinner />
        </div>
      )}
      {isEnd && (
        <div className="text-center py-4 text-gray-400">
          모든 상품을 불러왔습니다.
        </div>
      )}
    </main>
  );
}
