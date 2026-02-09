import React, { useState, useEffect } from 'react';
import { Heart, Star, ShoppingBag, Menu, X, Filter } from 'lucide-react';

// --- Mock Data ---

const CATEGORIES = ["New Arrivals", "Dresses", "Tops", "Denim", "Outerwear", "Accessories"];
const COLORS = [
  { name: "Black", hex: "#000000" },
  { name: "White", hex: "#FFFFFF" },
  { name: "Navy", hex: "#1e3a8a" },
  { name: "Beige", hex: "#f5f5dc" },
  { name: "Red", hex: "#dc2626" },
  { name: "Olive", hex: "#556b2f" },
];

const MOCK_PRODUCTS = [
  { id: 1, name: "Silk Blend Midi Dress", price: 129.00, rating: 4.8, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800", category: "Dresses" },
  { id: 2, name: "Oversized Wool Blazer", price: 185.00, rating: 4.9, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800", category: "Outerwear" },
  { id: 3, name: "Classic Straight Leg Jeans", price: 95.00, rating: 4.5, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=800", category: "Denim" },
  { id: 4, name: "Ribbed Knit Sweater", price: 65.00, rating: 4.7, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800", category: "Tops" },
  { id: 5, name: "Leather Crossbody Bag", price: 145.00, rating: 4.6, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800", category: "Accessories" },
  { id: 6, name: "Linen Button Shirt", price: 55.00, rating: 4.3, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800", category: "Tops" },
  { id: 7, name: "Pleated Maxi Skirt", price: 78.00, rating: 4.4, image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&q=80&w=800", category: "Dresses" },
  { id: 8, name: "Cashmere Scarf", price: 45.00, rating: 4.9, image: "https://images.unsplash.com/photo-1520908695049-2233b00f4729?auto=format&fit=crop&q=80&w=800", category: "Accessories" },
  { id: 9, name: "Denim Jacket", price: 110.00, rating: 4.2, image: "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?auto=format&fit=crop&q=80&w=800", category: "Denim" },
];

// --- Components ---

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center space-x-0.5">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          size={14} 
          className={i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
        />
      ))}
      <span className="text-xs text-gray-500 ml-1">({rating})</span>
    </div>
  );
};

const WishlistButton = () => {
  const [liked, setLiked] = useState(false);
  
  return (
    <button 
      onClick={(e) => { e.preventDefault(); setLiked(!liked); }}
      className={`absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all shadow-sm group z-10
        ${liked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'}`}
      aria-label="Add to wishlist"
    >
      {/* DSL: "Subtle heart icon - don't compete with image, name, price" */}
      <Heart size={18} className={liked ? "fill-current" : ""} />
    </button>
  );
};

const ProductCard = ({ product }) => {
  // DSL: hover_effects: { transform: scale(1.02), transition: "Smooth but quick" }
  return (
    <div className="group relative bg-white rounded-lg cursor-pointer transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl flex flex-col h-full">
      {/* DSL: WishlistButton { position: top-right } */}
      <WishlistButton />
      
      {/* DSL: styling: "Large product images" */}
      <div className="aspect-[3/4] overflow-hidden rounded-t-lg bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover object-center transition-opacity duration-300 group-hover:opacity-95"
          onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800"; }}
        />
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-md font-medium text-gray-900 line-clamp-1">{product.name}</h3>
        </div>
        
        {/* DSL: rating: stars($product.avg_rating) */}
        <div className="mb-2">
          <StarRating rating={product.rating} />
        </div>
        
        <div className="mt-auto flex justify-between items-center">
          <p className="text-lg font-semibold text-gray-900">${product.price.toFixed(2)}</p>
          <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black text-white px-4 py-2 text-xs font-medium uppercase tracking-wider rounded">
            Quick Add
          </button>
        </div>
      </div>
    </div>
  );
};

const SidebarFilters = ({ isOpen, setIsOpen }) => {
  // DSL: layout: "Collapse on mobile but keep key filters visible"
  // This component handles the desktop sidebar and mobile drawer logic
  const [priceRange, setPriceRange] = useState(150);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={`
        fixed lg:sticky lg:top-24 top-0 left-0 z-50 h-full lg:h-[calc(100vh-8rem)] w-72 bg-white lg:bg-transparent p-6 lg:p-0 
        shadow-2xl lg:shadow-none overflow-y-auto transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex justify-between items-center lg:hidden mb-6">
          <h2 className="text-xl font-bold font-serif">Filters</h2>
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="space-y-8 pr-4">
          {/* Categories */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 uppercase text-xs tracking-wider">Categories</h3>
            <ul className="space-y-3">
              {CATEGORIES.map((cat, i) => (
                <li key={i} className="flex items-center">
                  <input type="checkbox" id={`cat-${i}`} className="rounded border-gray-300 text-black focus:ring-black" />
                  <label htmlFor={`cat-${i}`} className="ml-2 text-gray-600 hover:text-black cursor-pointer text-sm">
                    {cat}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 uppercase text-xs tracking-wider">Price Range</h3>
            <input 
              type="range" 
              min="0" 
              max="300" 
              value={priceRange} 
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
            />
            <div className="flex justify-between mt-2 text-sm text-gray-600">
              <span>$0</span>
              <span>${priceRange}+</span>
            </div>
          </div>

          {/* Colors */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 uppercase text-xs tracking-wider">Colors</h3>
            <div className="flex flex-wrap gap-3">
              {COLORS.map((color, i) => (
                <button 
                  key={i}
                  className="w-8 h-8 rounded-full border border-gray-200 shadow-sm transition-transform hover:scale-110 focus:ring-2 focus:ring-offset-2 focus:ring-black"
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default function App() {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [products, setProducts] = useState(MOCK_PRODUCTS);
  const [isLoading, setIsLoading] = useState(false);

  // DSL: pagination: "Infinite scroll - maintain shopping momentum"
  // Simulating infinite scroll by appending products when bottom is reached
  useEffect(() => {
    const handleScroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500 && !isLoading) {
        loadMore();
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  const loadMore = () => {
    setIsLoading(true);
    // Simulate network delay
    setTimeout(() => {
      const newProducts = MOCK_PRODUCTS.map(p => ({
        ...p, 
        id: Math.random(), // simple random ID for demo
        name: p.name + " (Restock)" // Differentiate visually
      }));
      setProducts(prev => [...prev, ...newProducts]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      
      {/* Header */}
      <nav className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-4">
              <button className="p-2 -ml-2 hover:bg-gray-100 rounded-full lg:hidden" onClick={() => setIsMobileFilterOpen(true)}>
                <Menu size={24} />
              </button>
              <h1 className="text-2xl font-bold tracking-tight font-serif">LUXE.</h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <ShoppingBag size={20} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Mobile Filter Toggle Bar */}
        <div className="lg:hidden mb-6 flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
          <span className="font-medium text-gray-900">{products.length} Items</span>
          <button 
            onClick={() => setIsMobileFilterOpen(true)}
            className="flex items-center gap-2 text-sm font-medium text-gray-700"
          >
            <Filter size={16} /> Filters
          </button>
        </div>

        <div className="flex gap-8 items-start">
          
          {/* Sidebar */}
          <SidebarFilters isOpen={isMobileFilterOpen} setIsOpen={setIsMobileFilterOpen} />

          {/* Product Grid Area */}
          <div className="flex-1 w-full">
            <div className="mb-6 hidden lg:flex justify-between items-center">
              <h2 className="text-2xl font-light text-gray-900">New Arrivals</h2>
              <span className="text-gray-500 text-sm">{products.length} products found</span>
            </div>

            {/* DSL: container: flexbox(wrap: true, gap: 16px) */}
            {/* Implemented as a grid for better responsiveness, but flex-like behavior */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* DSL: ProductCard foreach $products */}
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Infinite Scroll Loader */}
            <div className="py-12 flex justify-center w-full">
              {isLoading && (
                <div className="flex flex-col items-center gap-2">
                  <div className="w-8 h-8 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div>
                  <span className="text-xs text-gray-500 uppercase tracking-widest">Loading more styles...</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}