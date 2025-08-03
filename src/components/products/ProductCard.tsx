'use client';

import {Heart, Star} from 'lucide-react';
import Image from 'next/image';
import React, {useEffect, useState} from 'react';
import LoadingSpinner from '../common/LoadingSpinner';

interface Product {
  id: number;
  tag?: string;
  imageUrl: string;
  brand: string;
  name: string;
  price: string;
  rating?: number;
  reviewCount?: number;
  liked?: boolean;
}

export default function ProductCard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/products/product.json')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <section className="w-full max-w-3xl mx-auto">
      {/* 섹션 타이틀 */}
      <div className="text-sm font-bold text-gray-700 mb-2 px-1">
        $닉네임$님을 위한 추천 상품
      </div>
      {/* 상품 카드 리스트 */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {products.slice(0, 15).map(product => (
          <div
            key={product.id}
            className="relative flex-shrink-0 w-44 rounded-xl border bg-white shadow-sm p-3"
          >
            {/* 상단 태그 + 하트 */}
            <div className="flex items-center justify-between mb-2">
              {product.tag ? (
                <span className="inline-block bg-gray-800 text-xs text-white font-bold px-2 py-0.5 rounded">
                  {product.tag}
                </span>
              ) : (
                <div />
              )}
              {/* 하트 아이콘 (찜하기) */}
              <button className="p-1 rounded-full hover:bg-gray-100 transition">
                <Heart
                  size={18}
                  className={
                    product.liked
                      ? 'fill-red-400 text-red-400'
                      : 'text-gray-400'
                  }
                  strokeWidth={1.8}
                />
              </button>
            </div>
            {/* 상품 이미지 (고정 비율) */}
            <div className="relative w-full aspect-[1/1] rounded-md overflow-hidden bg-gray-100 flex items-center justify-center mb-2">
              {product.imageUrl ? (
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="176px"
                />
              ) : (
                <span className="text-gray-400 text-xs">Image</span>
              )}
            </div>
            {/* 브랜드명/상품명 */}
            <div className="text-xs text-gray-500 font-medium truncate">
              {product.brand}
            </div>
            <div className="text-sm text-gray-800 font-bold truncate mb-1">
              {product.name}
            </div>
            {/* 가격 */}
            <div className="text-base font-bold text-gray-900 mb-1">
              {product.price}
            </div>
            {/* 평점/리뷰 */}
            {product.rating && (
              <div className="flex items-center gap-1 text-xs text-gray-700">
                <Star
                  size={14}
                  className="text-yellow-400 fill-yellow-300 mr-0.5"
                />
                {product.rating}
                <span className="text-gray-400">({product.reviewCount})</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
