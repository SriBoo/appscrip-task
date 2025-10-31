type ProductCardProps = {
  product: any;
  cartItem?: any;
  onAddToCart: (product: any) => void;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
};

export default function ProductCard({
  product,
  cartItem,
  onAddToCart,
  onIncrease,
  onDecrease,
}: ProductCardProps) {
  const quantity = cartItem?.quantity || 0;

  return (
    <div className="border rounded-lg shadow-sm hover:shadow-md transition p-4 flex flex-col justify-between">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-contain mb-3"
      />
      <h3 className="text-md font-medium text-gray-800 mb-2 line-clamp-2">
        {product.title}
      </h3>
      <p className="font-semibold text-gray-700 mb-3">${product.price}</p>

      {quantity === 0 ? (
        <button
          onClick={() => onAddToCart(product)}
          className="bg-blue-600 text-white py-1 rounded-md hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
      ) : (
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => onDecrease(product.id)}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            −
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => onIncrease(product.id)}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}
