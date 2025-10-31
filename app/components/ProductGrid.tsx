import ProductCard from './ProductCard';

export default function ProductGrid({
  products,
  onAddToCart,
  cart,
  onIncrease,
  onDecrease,
}: any) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p: any) => {
          const cartItem = cart.find((item: any) => item.id === p.id);
          return (
            <ProductCard
              key={p.id}
              product={p}
              cartItem={cartItem}
              onAddToCart={onAddToCart}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
            />
          );
        })}
      </div>
    </div>
  );
}
