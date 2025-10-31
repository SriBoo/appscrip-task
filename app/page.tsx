'use client';

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Filters from './components/Filters';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceLimit, setPriceLimit] = useState<number>(1000);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [cart, setCart] = useState<any[]>([]);
  const [showCart, setShowCart] = useState(false);

  // 🧠 Load cart from localStorage when app starts
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) setCart(JSON.parse(storedCart));
  }, []);

  // 💾 Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // 🛍️ Fetch products
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  // 🔍 Filter logic
  useEffect(() => {
    let filtered = products.filter(
      (p) =>
        p.price <= priceLimit &&
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((p) =>
        selectedCategories.includes(p.category)
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategories, priceLimit, searchQuery, products]);

  // ➕ Add to cart
  const handleAddToCart = (product: any) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // ➕ Increase quantity
  const increaseQty = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  //  Decrease quantity
  const decreaseQty = (id: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  //  Remove item
  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  //  Totals
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const total = cart
    .reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)
    .toFixed(2);

  //  UI
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header
        cartCount={totalItems}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        toggleCart={() => setShowCart(!showCart)}
        showCart={showCart}
      />

      <div className="flex flex-1 flex-col md:flex-row gap-6 p-6">
        {/* Sidebar filters */}
        <aside className="md:w-1/4">
          <Filters
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            priceLimit={priceLimit}
            setPriceLimit={setPriceLimit}
          />
        </aside>

        {/* Main content area */}
        <section className="flex-1">
          {showCart ? (
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Your Cart ({cart.length})
              </h2>

              {cart.length > 0 ? (
                <div>
                  {/* Cart Items */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="border p-4 rounded-md shadow-sm flex flex-col"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-32 object-contain mb-3"
                        />
                        <p className="font-medium mb-1">{item.title}</p>
                        <p className="font-semibold mb-2">${item.price}</p>

                        {/* Quantity controls */}
                        <div className="flex items-center gap-2 mb-3">
                          <button
                            onClick={() => decreaseQty(item.id)}
                            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                          >
                            −
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => increaseQty(item.id)}
                            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="bg-red-600 text-white py-1 rounded-md hover:bg-red-700 transition"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Total */}
                  <div className="flex flex-col items-center mt-4">
                    <p className="text-lg font-semibold mb-3">
                      Total: ${total}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center mt-12">
                  <p className="text-gray-500 text-lg mb-4">
                     Your cart is empty.
                  </p>
                </div>
              )}

              {/* Back to products — always visible */}
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => setShowCart(false)}
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  ← Back to Products
                </button>
              </div>
            </div>
          ) : (
            <ProductGrid
              products={filteredProducts}
              onAddToCart={handleAddToCart}
              cart={cart}
              onIncrease={increaseQty}
              onDecrease={decreaseQty}
            />
          )}
        </section>
      </div>

      <Footer />
    </div>
  );
}
