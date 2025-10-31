type HeaderProps = {
  cartCount: number;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  toggleCart: () => void;
  showCart: boolean;
};

export default function Header({
  cartCount,
  searchQuery,
  setSearchQuery,
  toggleCart,
  showCart,
}: HeaderProps) {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
      <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
        🛍️ My Store
      </h1>

      <div className="flex items-center gap-4">
        {!showCart && (
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border rounded-md px-3 py-1 w-48"
          />
        )}
        <button
          onClick={toggleCart}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-3 py-1 text-sm font-medium transition"
        >
          Cart: {cartCount}
        </button>
      </div>
    </header>
  );
}
