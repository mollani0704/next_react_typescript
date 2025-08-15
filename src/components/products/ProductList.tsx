import React from 'react';
import ProductItem from './ProductItem';
import {Product} from '@/type/products';

interface ProductListProps {
  products: Product[];
}

export default function ProductList({products}: ProductListProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
