import {Product} from '@/type/products';
import React from 'react';

interface ProductItemProps {
  product: Product;
}

export default function ProductItem({product}: ProductItemProps) {
  return (
    <div className="flex flex-col items-center border rounded-xl shadow-sm bg-white overflow-hidden hover:shadow-md transition">
      {/* 상품 이미지 */}
      <img src={product.imageUrl} alt={product.name} />
      {/* 상품 이름과 가격 */}
      <div className="w-full flex flex-col items-center p-3">
        <span className="font-medium text-sm text-gray-800 text-center mb-1">
          {product.name}
        </span>
        <span className="text-blue-600 font-bold text-base">
          {product.price.toLocaleString()}원
        </span>
      </div>
    </div>
  );
}
