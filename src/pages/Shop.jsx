import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const PRODUCTS = [
  {
    id: 1,
    name: 'Luxury Pink Tote Handbag',
    price: 95,
    image:
      'https://tse4.mm.bing.net/th/id/OIP.J3YuhlFTsq28fxf4COXX2QHaJ2?pid=Api&h=220&P=0',
    category: 'Bags',
  },
  {
    id: 2,
    name: 'Rose Ring',
    price: 120,
    image:
      'https://tse3.mm.bing.net/th/id/OIP.tRR0Wiy5LdKRWpCZ3uh2BAHaHa?pid=Api&h=220&P=0',
    category: 'Jewelry',
  },
  {
    id: 3,
    name: 'Cute Pink Velvet Scrunchies Set',
    price: 15,
    image:
      'https://tse1.mm.bing.net/th/id/OIP.HuO0s_QXoAKx2VcCXReHjgHaHS?pid=Api&h=220&P=0',
    category: 'Hair Styling',
  },
  {
    id: 4,
    name: 'Pastel Pink Sunglasses',
    price: 29,
    image:
      'https://tse2.mm.bing.net/th/id/OIP.5HAyta4rmdp_xrcdjvNAtwHaHa?pid=Api&h=220&P=0',
    category: 'Accessories',
  },
  {
    id: 5,
    name: 'Elegant Pink Makeup Brushes Set',
    price: 35,
    image:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80',
    category: 'Cosmetics',
  },
  {
    id: 6,
    name: 'Premium Pink Leather Wallet',
    price: 45,
    image:
      'https://tse1.mm.bing.net/th/id/OIP.V-2JKaUpb4S_UUYy305pcQHaJQ?pid=Api&h=220&P=0',
    category: 'Wallets',
  },
  {
    id: 7,
    name: 'Minimalist Pink Strap Watch',
    price: 79,
    image:
      'https://tse4.mm.bing.net/th/id/OIP.wdTyUodJcw2ky5KK1Qj6UgHaJ3?pid=Api&h=220&P=0',
    category: 'Watches',
  },
  {
    id: 8,
    name: 'Crystal Pink Earrings',
    price: 25,
    image:
      'https://tse2.mm.bing.net/th/id/OIP.tn1ownlLhprKgjqxN7NRTwHaJ4?pid=Api&h=220&P=0',
    category: 'Jewelry',
  },
  {
    id: 9,
    name: 'Aesthetic Pink Journal Set',
    price: 18,
    image:
      'https://tse1.mm.bing.net/th/id/OIP.uQRXGWSvyIo9YtdmXgJ_nAHaIf?pid=Api&h=220&P=0',
    category: 'Stationery',
  },
];

const CATEGORIES = [
  'All',
  'Bags',
  'Jewelry',
  'Accessories',
  'Hair Styling',
  'Cosmetics',
  'Wallets',
  'Watches',
  'Stationery',
];

function Shop() {
  const { addToCart } = useCart();

  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleAddToCart = (product) => {
    addToCart(product);

    setPopupMessage(product.name);
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 2200);
  };

  const filteredProducts =
    activeCategory === 'All'
      ? PRODUCTS
      : PRODUCTS.filter(
          (product) => product.category === activeCategory
        );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') {
      return a.price - b.price;
    }

    if (sortBy === 'price-high') {
      return b.price - a.price;
    }

    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }

    return a.id - b.id;
  });

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fff9fc]">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none fixed -left-48 -top-48 h-[520px] w-[520px] rounded-full bg-pink-200/25 blur-[110px]" />

      <div className="pointer-events-none fixed -right-48 top-[15%] h-[520px] w-[520px] rounded-full bg-rose-200/25 blur-[110px]" />

      <div className="pointer-events-none fixed -bottom-56 left-[30%] h-[520px] w-[520px] rounded-full bg-pink-100/50 blur-[110px]" />

      {/* Decorative dots */}
      <div className="pointer-events-none fixed left-[8%] top-[32%] h-2 w-2 rounded-full bg-pink-400/40" />
      <div className="pointer-events-none fixed right-[10%] top-[42%] h-3 w-3 rounded-full bg-rose-400/30" />
      <div className="pointer-events-none fixed bottom-[20%] left-[18%] h-2 w-2 rounded-full bg-pink-300/50" />


      {/* =====================================================
          CART SUCCESS MESSAGE
      ===================================================== */}

      {showPopup && (
        <div className="fixed bottom-6 left-1/2 z-[100] w-[calc(100%-32px)] max-w-sm -translate-x-1/2 animate-[popupIn_0.3s_ease-out]">

          <div className="flex items-center gap-3 rounded-2xl border border-pink-100 bg-white/95 px-4 py-3.5 shadow-2xl shadow-pink-200/40 backdrop-blur-xl">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-rose-500 text-sm font-bold text-white shadow-md shadow-pink-200">
              ✓
            </div>

            <div className="min-w-0">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-pink-500">
                Added to cart
              </p>

              <p className="truncate text-xs font-semibold text-gray-800">
                {popupMessage}
              </p>
            </div>

            <span className="ml-auto text-lg">
              💗
            </span>

          </div>
        </div>
      )}


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">


        {/* ===================================================
            HERO
        =================================================== */}

        <section className="relative mb-12 overflow-hidden rounded-[30px] border border-pink-100 bg-gradient-to-br from-white via-pink-50/70 to-rose-50/80 px-6 py-12 text-center shadow-[0_12px_45px_rgba(244,114,182,0.07)] sm:px-10">

          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-pink-200/30 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-rose-200/25 blur-3xl" />

          <div className="relative">

            <span className="inline-flex items-center gap-2 rounded-full border border-pink-100 bg-white/80 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.25em] text-pink-600 shadow-sm">
              ✨ The Pink Edit
            </span>

            <h1 className="mt-5 text-4xl font-black tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
              Shop the{' '}
              <span className="bg-gradient-to-r from-pink-500 via-pink-600 to-rose-500 bg-clip-text text-transparent">
                Pretty
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
              Discover beautiful accessories, jewelry and everyday essentials
              carefully selected to make your everyday style a little prettier.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-2.5">

              <span className="rounded-full bg-white/90 px-4 py-2 text-[9px] font-semibold text-gray-500 shadow-sm">
                ♡ 500+ Happy Customers
              </span>

              <span className="rounded-full bg-white/90 px-4 py-2 text-[9px] font-semibold text-gray-500 shadow-sm">
                ✦ Carefully Curated
              </span>

              <span className="rounded-full bg-white/90 px-4 py-2 text-[9px] font-semibold text-gray-500 shadow-sm">
                🚚 Fast Shipping
              </span>

            </div>

          </div>
        </section>


        {/* ===================================================
            CATEGORY SECTION
        =================================================== */}

        <section className="mb-9">

          <div className="mb-4 flex items-end justify-between">

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-pink-500">
                Explore our collection
              </p>

              <h2 className="mt-1 text-xl font-black text-gray-950 sm:text-2xl">
                Shop by Category
              </h2>
            </div>

            <p className="hidden text-xs text-gray-400 sm:block">
              {sortedProducts.length} products
            </p>

          </div>


          <div className="scrollbar-hide flex gap-2 overflow-x-auto pb-2">

            {CATEGORIES.map((category) => (

              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap rounded-full px-4 py-2.5 text-[10px] font-bold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-200'
                    : 'border border-pink-100 bg-white/80 text-gray-600 hover:-translate-y-0.5 hover:border-pink-200 hover:bg-pink-50 hover:text-pink-600'
                }`}
              >
                {category}
              </button>

            ))}

          </div>
        </section>


        {/* ===================================================
            SORT BAR
        =================================================== */}

        <div className="mb-7 flex items-center justify-between">

          <p className="text-xs text-gray-400">
            Showing{' '}
            <span className="font-bold text-gray-800">
              {sortedProducts.length}
            </span>{' '}
            {sortedProducts.length === 1 ? 'item' : 'items'}
          </p>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-full border border-pink-100 bg-white px-4 py-2 text-[10px] font-bold text-gray-600 shadow-sm outline-none transition focus:border-pink-400 focus:ring-4 focus:ring-pink-100"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name A-Z</option>
          </select>

        </div>


        {/* ===================================================
            PRODUCT GRID
        =================================================== */}

        {sortedProducts.length > 0 ? (

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">

            {sortedProducts.map((product, index) => (

              <article
                key={product.id}
                className="group flex flex-col overflow-hidden rounded-[22px] border border-pink-100/80 bg-white shadow-[0_8px_30px_rgba(244,114,182,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-pink-200 hover:shadow-[0_20px_45px_rgba(244,114,182,0.14)]"
                style={{
                  animation: `cardEnter 0.5s ease-out ${index * 70}ms both`,
                }}
              >

                {/* =========================================
                    PRODUCT IMAGE
                ========================================= */}

                <Link
                  to={`/product/${product.id}`}
                  className="relative block h-[195px] overflow-hidden bg-gradient-to-br from-pink-50 via-white to-rose-50 sm:h-[215px] md:h-[225px]"
                >

                  {/* Background glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,207,232,0.38),transparent_68%)]" />

                  {/* Decorative circle */}
                  <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-100/30 blur-2xl transition-all duration-500 group-hover:scale-125" />

                  {/* Product image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="relative z-10 h-full w-full object-contain p-2.5 transition-transform duration-700 ease-out group-hover:scale-110 sm:p-3"
                  />

                  {/* Category */}
                  <span className="absolute left-3 top-3 z-30 max-w-[70%] truncate rounded-full border border-white/80 bg-white/90 px-3 py-1.5 text-[8px] font-bold uppercase tracking-wider text-pink-600 shadow-sm backdrop-blur-md">
                    {product.category}
                  </span>

                  {/* Wishlist */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    className="absolute right-3 top-3 z-30 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-sm text-gray-400 shadow-sm backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-pink-500 hover:text-white"
                    aria-label="Add to wishlist"
                  >
                    ♡
                  </button>

                  {/* View product */}
                  <div className="absolute bottom-4 left-1/2 z-30 -translate-x-1/2 translate-y-3 whitespace-nowrap rounded-full bg-white/95 px-4 py-2 text-[9px] font-bold text-gray-800 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    View Product →
                  </div>

                </Link>


                {/* =========================================
                    PRODUCT INFORMATION
                ========================================= */}

                <div className="flex flex-grow flex-col p-4 sm:p-5">

                  {/* Rating */}
                  <div className="mb-2 flex items-center gap-1.5">

                    <span className="text-[9px] tracking-tight text-pink-500">
                      ★★★★★
                    </span>

                    <span className="text-[9px] text-gray-400">
                      4.9
                    </span>

                  </div>


                  {/* Product Name */}
                  <Link
                    to={`/product/${product.id}`}
                    className="block"
                  >

                    <h3 className="line-clamp-2 min-h-[42px] text-sm font-extrabold leading-5 text-gray-900 transition-colors duration-300 group-hover:text-pink-600 sm:text-[15px]">
                      {product.name}
                    </h3>

                  </Link>


                  {/* Divider */}
                  <div className="mt-4 h-px bg-gradient-to-r from-pink-100 via-rose-100 to-transparent" />


                  {/* Price + Cart */}
                  <div className="mt-4 flex items-center justify-between gap-3">

                    <div>

                      <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-gray-400">
                        Price
                      </p>

                      <p className="text-xl font-black text-gray-950">
                        ${product.price}
                      </p>

                    </div>


                    <button
                      type="button"
                      onClick={() => handleAddToCart(product)}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-base font-bold text-white shadow-md shadow-pink-200 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-pink-200 active:scale-90"
                      aria-label={`Add ${product.name} to cart`}
                    >
                      +
                    </button>

                  </div>

                </div>

              </article>

            ))}

          </div>

        ) : (

          /* ===============================================
             EMPTY STATE
          =============================================== */

          <div className="rounded-3xl border border-pink-100 bg-white/80 px-6 py-20 text-center shadow-sm">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-pink-50 text-2xl">
              ♡
            </div>

            <h3 className="mt-5 text-xl font-black text-gray-900">
              Nothing here yet
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Try another category to discover something pretty.
            </p>

            <button
              type="button"
              onClick={() => setActiveCategory('All')}
              className="mt-6 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-3 text-xs font-bold text-white shadow-md shadow-pink-200 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              View All Products
            </button>

          </div>

        )}


        {/* ===================================================
            BOTTOM CTA
        =================================================== */}

        <section className="relative mt-16 overflow-hidden rounded-[30px] bg-gradient-to-r from-pink-500 via-pink-600 to-rose-500 px-6 py-11 text-center shadow-xl shadow-pink-200/30 sm:px-10">

          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-white/10" />

          <div className="pointer-events-none absolute -bottom-28 left-1/4 h-64 w-64 rounded-full bg-white/10" />

          <div className="relative">

            <span className="text-xl">
              ✨
            </span>

            <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
              Keep your everyday pretty.
            </h2>

            <p className="mx-auto mt-2 max-w-lg text-xs leading-5 text-pink-100">
              Find more beautiful pieces and create a collection that feels
              completely yours.
            </p>

            <Link
              to="/shop"
              className="mt-6 inline-flex rounded-full bg-white px-7 py-3.5 text-xs font-bold text-pink-600 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-gray-950 hover:text-white"
            >
              Explore More →
            </Link>

          </div>

        </section>

      </div>


      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style>
        {`
          @keyframes cardEnter {
            from {
              opacity: 0;
              transform: translateY(22px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes popupIn {
            from {
              opacity: 0;
              transform: translate(-50%, 15px) scale(0.95);
            }

            to {
              opacity: 1;
              transform: translate(-50%, 0) scale(1);
            }
          }

          .scrollbar-hide {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }

          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>

    </main>
  );
}

export default Shop;
