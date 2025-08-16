import ProductCard, {type ProductItem} from './ProductCard';

export default function ProductList({items}: {items: ProductItem[]}) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {items.slice(0, 6).map(p => (
        <ProductCard key={p.productNo} item={p} />
      ))}
    </div>
  );
}
