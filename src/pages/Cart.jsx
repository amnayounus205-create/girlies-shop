import React from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

function Cart() {
  // Added clearCart to ensure the cart empties when an order is finalized
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();

  const totalSub = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Handle checkout simulation & clearing cart items
  const handleCheckout = () => {
    // Perform checkout logic or navigate to checkout page
    // If checkout completes here, call clearCart():
    // clearCart();
    navigate('/checkout');
  };

  /* =====================================================
     EMPTY CART
  ===================================================== */

  if (cart.length === 0) {
    return (
      <main className="relative min-h-screen overflow-hidden bg-[#fff7fb] font-sans">
        {/* Background gradients */}
        <div className="pointer-events-none fixed -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-pink-200/35 blur-[120px] transition-all duration-700" />
        <div className="pointer-events-none fixed -right-40 top-20 h-[500px] w-[500px] rounded-full bg-rose-200/30 blur-[120px] transition-all duration-700" />
        <div className="pointer-events-none fixed -bottom-48 left-1/3 h-[500px] w-[500px] rounded-full bg-pink-100/50 blur-[110px]" />

        {/* Empty cart container */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-4xl items-center justify-center px-5 py-16">
          <div className="relative w-full overflow-hidden rounded-[35px] border border-pink-100 bg-white/80 px-6 py-16 text-center shadow-[0_25px_80px_rgba(244,114,182,0.12)] backdrop-blur-xl sm:px-12 transition-all duration-500 hover:shadow-[0_30px_90px_rgba(244,114,182,0.18)]">
            
            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-pink-200/30 blur-3xl animate-pulse" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-rose-200/30 blur-3xl animate-pulse" />

            <div className="relative">
              {/* Animated Icon */}
              <div className="mx-auto flex h-24 w-24 animate-[float_3s_ease-in-out_infinite] items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-rose-100 text-4xl shadow-inner">
                🛍️
              </div>

              <span className="mt-7 inline-flex rounded-full bg-pink-50 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-pink-600">
                Your little collection
              </span>

              <h1 className="mt-5 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
                Your cart is empty
              </h1>

              <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-500">
                Looks like you haven't added any sweet pink treats to your cart yet. Let's find something beautiful for you.
              </p>

              <Link
                to="/shop"
                className="group mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-pink-600 to-rose-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-pink-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-300 active:scale-95"
              >
                Start Shopping
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  🛍️
                </span>
              </Link>
            </div>
          </div>
        </div>

        <style>
          {`
            @keyframes float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-8px); }
            }
          `}
        </style>
      </main>
    );
  }

  /* =====================================================
     FILLED CART
  ===================================================== */

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fff7fb] font-sans">
      {/* Background gradients */}
      <div className="pointer-events-none fixed -left-48 -top-48 h-[550px] w-[550px] rounded-full bg-pink-200/30 blur-[120px]" />
      <div className="pointer-events-none fixed -right-48 top-[10%] h-[550px] w-[550px] rounded-full bg-rose-200/25 blur-[120px]" />
      <div className="pointer-events-none fixed -bottom-64 left-[30%] h-[600px] w-[600px] rounded-full bg-pink-100/50 blur-[130px]" />

      {/* Decorative floating dots */}
      <div className="pointer-events-none fixed left-[8%] top-[30%] h-2 w-2 rounded-full bg-pink-400/40 animate-ping" />
      <div className="pointer-events-none fixed right-[12%] top-[40%] h-3 w-3 rounded-full bg-rose-400/30 animate-pulse" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        
        {/* HEADER */}
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-pink-100 bg-white/80 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-pink-600 shadow-sm backdrop-blur">
            💗 Your Collection
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-gray-950 sm:text-5xl">
            Your{' '}
            <span className="bg-gradient-to-r from-pink-500 via-pink-600 to-rose-500 bg-clip-text text-transparent">
              Shopping Cart
            </span>
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-gray-500">
            Almost yours! Review your pretty picks before checking out.
          </p>
        </div>

        {/* CART LAYOUT */}
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-[1fr_360px]">
          
          {/* CART ITEMS SECTION */}
          <section className="relative overflow-hidden rounded-[28px] border border-pink-100 bg-white/85 p-4 shadow-[0_15px_50px_rgba(244,114,182,0.08)] backdrop-blur-xl sm:p-6 transition-all">
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-pink-100/40 blur-3xl" />

            <div className="relative">
              <div className="mb-6 flex items-center justify-between border-b border-pink-100 pb-5">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-pink-500">
                    Selected items
                  </p>
                  <h2 className="mt-1 text-xl font-black text-gray-950">
                    Your Picks
                  </h2>
                </div>
                <div className="rounded-full bg-gradient-to-r from-pink-50 to-rose-50 px-4 py-2 text-xs font-bold text-pink-600 shadow-sm">
                  {totalItems} {totalItems === 1 ? 'Item' : 'Items'}
                </div>
              </div>

              {/* Product List */}
              <div className="space-y-4">
                {cart.map((item, index) => (
                  <div
                    key={item.id}
                    className="group relative overflow-hidden rounded-2xl border border-pink-100/80 bg-gradient-to-r from-white to-pink-50/30 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-lg hover:shadow-pink-100/60 sm:p-4"
                    style={{
                      animation: `itemEnter 0.45s ease-out ${index * 80}ms both`,
                    }}
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                      
                      {/* Image Link */}
                      <Link
                        to={`/product/${item.id}`}
                        className="relative flex h-28 w-full shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-pink-50 via-white to-rose-50 sm:h-28 sm:w-28"
                      >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,207,232,0.4),transparent_65%)]" />
                        <img
                          src={item.image}
                          alt={item.name}
                          className="relative z-10 h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-110"
                        />
                      </Link>

                      {/* Product Details */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <span className="inline-block rounded-full bg-pink-50 px-2.5 py-1 text-[8px] font-bold uppercase tracking-wider text-pink-600">
                              Pretty Pick
                            </span>
                            <Link to={`/product/${item.id}`} className="block">
                              <h3 className="mt-2 line-clamp-2 text-sm font-extrabold leading-5 text-gray-900 transition-colors hover:text-pink-600 sm:text-base">
                                {item.name}
                              </h3>
                            </Link>
                            <p className="mt-1 text-sm font-bold text-pink-600">
                              ${item.price}
                              <span className="ml-1 text-[10px] font-normal text-gray-400">each</span>
                            </p>
                          </div>

                          {/* Remove Button */}
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-50 text-gray-400 transition-all duration-300 hover:scale-110 hover:bg-red-50 hover:text-red-500 active:scale-90"
                            aria-label={`Remove ${item.name}`}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>

                        {/* Quantity Controls & Item Total */}
                        <div className="mt-4 flex items-center justify-between gap-3">
                          <div className="flex items-center rounded-full border border-pink-100 bg-white shadow-sm">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-pink-600 transition hover:bg-pink-50 active:scale-95"
                            >
                              −
                            </button>
                            <span className="w-7 text-center text-xs font-black text-gray-800">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-pink-600 transition hover:bg-pink-50 active:scale-95"
                            >
                              +
                            </button>
                          </div>

                          <div className="text-right">
                            <p className="text-[8px] font-bold uppercase tracking-wider text-gray-400">Total</p>
                            <p className="text-lg font-black text-gray-950">${item.price * item.quantity}</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ORDER SUMMARY SIDEBAR */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="relative overflow-hidden rounded-[28px] border border-pink-100 bg-gradient-to-br from-white via-pink-50/70 to-rose-50/80 p-6 shadow-[0_20px_60px_rgba(244,114,182,0.12)] backdrop-blur-xl">
              <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-pink-200/30 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-rose-200/30 blur-3xl" />

              <div className="relative">
                <div className="mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-pink-500">
                    Almost there
                  </span>
                  <h2 className="mt-1 text-2xl font-black text-gray-950">
                    Order Summary
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Items</span>
                    <span className="font-bold text-gray-800">{totalItems}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Subtotal</span>
                    <span className="font-bold text-gray-800">${totalSub}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Shipping</span>
                    <span className="font-bold text-emerald-500">FREE</span>
                  </div>
                </div>

                <div className="my-6 h-px bg-gradient-to-r from-pink-100 via-rose-200 to-transparent" />

                <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">Grand Total</p>
                      <p className="mt-1 text-3xl font-black text-transparent bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text">
                        ${totalSub}
                      </p>
                    </div>
                    <span className="text-2xl">💗</span>
                  </div>
                </div>

                {/* Checkout Action Button */}
                <button
                  type="button"
                  onClick={handleCheckout}
                  className="mt-5 flex w-full items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-pink-600 to-rose-500 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-pink-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-300 active:scale-95"
                >
                  Proceed to Checkout
                  <span className="ml-2">→</span>
                </button>

                <Link
                  to="/shop"
                  className="mt-3 flex w-full items-center justify-center rounded-full border border-pink-100 bg-white/70 px-6 py-3 text-xs font-bold text-pink-600 transition-all duration-300 hover:bg-pink-50"
                >
                  ← Continue Shopping
                </Link>

                {/* Trust Badges */}
                <div className="mt-6 grid grid-cols-3 gap-2 border-t border-pink-100 pt-5 text-center">
                  <div>
                    <div className="text-sm">🔒</div>
                    <p className="mt-1 text-[8px] font-semibold text-gray-400">Secure</p>
                  </div>
                  <div>
                    <div className="text-sm">🚚</div>
                    <p className="mt-1 text-[8px] font-semibold text-gray-400">Fast Delivery</p>
                  </div>
                  <div>
                    <div className="text-sm">💗</div>
                    <p className="mt-1 text-[8px] font-semibold text-gray-400">Lovely Care</p>
                  </div>
                </div>

              </div>
            </div>
          </aside>

        </div>

        {/* BOTTOM FOOTER MESSAGE */}
        <div className="mt-10 text-center">
          <p className="text-xs text-gray-400">
            ✨ Every order is packed with a little extra love.
          </p>
        </div>

      </div>

      <style>
        {`
          @keyframes itemEnter {
            from {
              opacity: 0;
              transform: translateY(18px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </main>
  );
}

export default Cart;