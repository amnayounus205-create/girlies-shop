import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function Checkout() {
  const { cart } = useCart();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    phone: '',
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [error, setError] = useState('');

  const totalSub = cart.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0
  );

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleInputChange = (e) => {
    setError('');

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.address ||
      !formData.phone ||
      !formData.city
    ) {
      setError('Please fill in all required fields.');
      return;
    }

    setOrderPlaced(true);
  };

  /*
   * =========================================================
   * SUCCESS SCREEN
   * =========================================================
   */

  if (orderPlaced) {
    return (
      <main className="relative min-h-screen overflow-hidden bg-[#fff7fb]">

        {/* Background gradients */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-pink-200/40 blur-[120px]" />

        <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-rose-200/40 blur-[120px]" />

        <div className="pointer-events-none absolute bottom-[-200px] left-[35%] h-[500px] w-[500px] rounded-full bg-pink-100/70 blur-[120px]" />

        <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12">

          <div className="relative w-full max-w-2xl overflow-hidden rounded-[32px] border border-pink-100 bg-white/80 p-8 text-center shadow-[0_30px_100px_rgba(244,114,182,0.18)] backdrop-blur-xl sm:p-12">

            {/* Decorative circles */}
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-pink-100/70" />
            <div className="absolute -bottom-20 -left-16 h-44 w-44 rounded-full bg-rose-100/70" />

            <div className="relative z-10">

              {/* Success icon */}
              <div className="mx-auto flex h-24 w-24 animate-bounce items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-rose-500 text-4xl shadow-xl shadow-pink-200">
                🎀
              </div>

              <span className="mt-7 inline-flex rounded-full bg-green-50 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-green-600">
                Order Confirmed ✓
              </span>

              <h1 className="mt-5 text-4xl font-black tracking-tight text-gray-950 sm:text-5xl">
                Thank You,
                <span className="block bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                  {formData.name}! 💗
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-gray-500">
                Your order has been successfully placed. Your pretty pink
                treats will be carefully packed and delivered to your
                doorstep.
              </p>

              {/* Order details */}
              <div className="mx-auto mt-8 max-w-md rounded-2xl border border-pink-100 bg-gradient-to-br from-pink-50/80 to-rose-50/60 p-5">

                <div className="flex items-center justify-between border-b border-pink-100 pb-4">
                  <span className="text-xs font-semibold text-gray-500">
                    Items
                  </span>

                  <span className="text-sm font-black text-gray-800">
                    {totalItems}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <span className="text-xs font-semibold text-gray-500">
                    Total Paid
                  </span>

                  <span className="text-xl font-black text-pink-600">
                    ${totalSub}
                  </span>
                </div>

              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">

                <Link
                  to="/"
                  className="rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-pink-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-300"
                >
                  Back to Home
                </Link>

                <Link
                  to="/shop"
                  className="rounded-2xl border border-pink-200 bg-white px-8 py-3.5 text-sm font-bold text-pink-600 transition-all duration-300 hover:-translate-y-1 hover:bg-pink-50"
                >
                  Continue Shopping
                </Link>

              </div>

            </div>

          </div>

        </div>
      </main>
    );
  }


  /*
   * =========================================================
   * EMPTY CART
   * =========================================================
   */

  if (cart.length === 0) {
    return (
      <main className="relative min-h-screen overflow-hidden bg-[#fff7fb]">

        <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-pink-200/40 blur-[120px]" />

        <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-rose-200/40 blur-[120px]" />

        <div className="relative z-10 flex min-h-screen items-center justify-center px-4">

          <div className="w-full max-w-lg rounded-[32px] border border-pink-100 bg-white/80 p-10 text-center shadow-[0_30px_100px_rgba(244,114,182,0.15)] backdrop-blur-xl">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-pink-50 text-3xl">
              🛍️
            </div>

            <h1 className="mt-6 text-3xl font-black text-gray-900">
              Nothing to checkout
            </h1>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Your shopping bag is currently empty. Let's find something
              pretty for you.
            </p>

            <Link
              to="/shop"
              className="mt-7 inline-flex rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-pink-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Explore Boutique 🛍️
            </Link>

          </div>

        </div>
      </main>
    );
  }


  /*
   * =========================================================
   * CHECKOUT PAGE
   * =========================================================
   */

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fff7fb]">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute -left-48 -top-40 h-[550px] w-[550px] rounded-full bg-pink-200/40 blur-[130px]" />

      <div className="pointer-events-none absolute -right-48 top-20 h-[550px] w-[550px] rounded-full bg-rose-200/35 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[-250px] left-[35%] h-[550px] w-[550px] rounded-full bg-pink-100/60 blur-[130px]" />

      {/* Floating decorative dots */}
      <div className="pointer-events-none absolute left-[8%] top-[25%] h-3 w-3 animate-pulse rounded-full bg-pink-400/40" />

      <div className="pointer-events-none absolute right-[10%] top-[40%] h-2 w-2 animate-ping rounded-full bg-rose-400/40" />

      <div className="pointer-events-none absolute bottom-[20%] left-[15%] h-2 w-2 animate-pulse rounded-full bg-pink-300/50" />


      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">


        {/* =================================================
            HEADER
        ================================================= */}

        <div className="mb-10 text-center">

          <span className="inline-flex rounded-full bg-pink-50 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.25em] text-pink-600">
            Secure Checkout ✨
          </span>

          <h1 className="mt-4 text-4xl font-black tracking-tight text-gray-950 sm:text-5xl">
            Complete Your
            <span className="block bg-gradient-to-r from-pink-500 via-pink-600 to-rose-500 bg-clip-text text-transparent">
              Pretty Order
            </span>
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-500">
            Almost there! Enter your delivery details and we'll take care
            of the rest. 🎀
          </p>

        </div>


        {/* =================================================
            CHECKOUT PROGRESS
        ================================================= */}

        <div className="mx-auto mb-10 flex max-w-2xl items-center justify-center">

          <div className="flex items-center">

            <div className="flex flex-col items-center">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-rose-500 text-xs font-bold text-white shadow-lg shadow-pink-200">
                ✓
              </div>

              <span className="mt-2 text-[9px] font-bold text-pink-600">
                Cart
              </span>
            </div>

            <div className="mx-3 h-px w-14 bg-gradient-to-r from-pink-400 to-pink-200 sm:w-24" />

            <div className="flex flex-col items-center">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-rose-500 text-xs font-bold text-white shadow-lg shadow-pink-200">
                2
              </div>

              <span className="mt-2 text-[9px] font-bold text-pink-600">
                Checkout
              </span>
            </div>

            <div className="mx-3 h-px w-14 bg-pink-100 sm:w-24" />

            <div className="flex flex-col items-center">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-50 text-xs font-bold text-pink-300">
                3
              </div>

              <span className="mt-2 text-[9px] font-bold text-gray-400">
                Complete
              </span>
            </div>

          </div>

        </div>


        {/* =================================================
            MAIN GRID
        ================================================= */}

        <div className="grid items-start gap-7 lg:grid-cols-[1.35fr_0.75fr]">


          {/* =================================================
              SHIPPING FORM
          ================================================= */}

          <div className="overflow-hidden rounded-[28px] border border-pink-100 bg-white/80 shadow-[0_25px_80px_rgba(244,114,182,0.10)] backdrop-blur-xl">

            {/* Card Header */}
            <div className="border-b border-pink-100 bg-gradient-to-r from-pink-50/80 to-rose-50/50 px-6 py-6 sm:px-8">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 text-xl text-white shadow-lg shadow-pink-200">
                  📦
                </div>

                <div>
                  <h2 className="text-xl font-black text-gray-900">
                    Shipping Details
                  </h2>

                  <p className="mt-1 text-xs text-gray-500">
                    Where should we deliver your order?
                  </p>
                </div>

              </div>

            </div>


            <div className="p-6 sm:p-8">

              {/* Error */}
              {error && (
                <div className="mb-6 flex items-center gap-3 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-xs font-semibold text-red-600">

                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-100">
                    !
                  </span>

                  {error}

                </div>
              )}


              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* Name + Email */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>

                    <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.15em] text-gray-500">
                      Full Name *
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="w-full rounded-2xl border border-pink-100 bg-pink-50/20 px-4 py-3.5 text-sm font-medium text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-pink-400 focus:bg-white focus:ring-4 focus:ring-pink-100"
                    />

                  </div>


                  <div>

                    <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.15em] text-gray-500">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@example.com"
                      className="w-full rounded-2xl border border-pink-100 bg-pink-50/20 px-4 py-3.5 text-sm font-medium text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-pink-400 focus:bg-white focus:ring-4 focus:ring-pink-100"
                    />

                  </div>

                </div>


                {/* Phone */}
                <div>

                  <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.15em] text-gray-500">
                    Phone Number *
                  </label>

                  <div className="relative">

                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                      +92
                    </span>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="300 1234567"
                      required
                      className="w-full rounded-2xl border border-pink-100 bg-pink-50/20 py-3.5 pl-14 pr-4 text-sm font-medium text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-pink-400 focus:bg-white focus:ring-4 focus:ring-pink-100"
                    />

                  </div>

                </div>


                {/* Address */}
                <div>

                  <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.15em] text-gray-500">
                    Shipping Address *
                  </label>

                  <textarea
                    name="address"
                    rows="4"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="House number, street, area..."
                    required
                    className="w-full resize-none rounded-2xl border border-pink-100 bg-pink-50/20 px-4 py-3.5 text-sm font-medium text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-pink-400 focus:bg-white focus:ring-4 focus:ring-pink-100"
                  />

                </div>


                {/* City */}
                <div>

                  <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.15em] text-gray-500">
                    City *
                  </label>

                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Your city"
                    required
                    className="w-full rounded-2xl border border-pink-100 bg-pink-50/20 px-4 py-3.5 text-sm font-medium text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-pink-400 focus:bg-white focus:ring-4 focus:ring-pink-100"
                  />

                </div>


                {/* Payment method */}
                <div className="rounded-2xl border border-pink-100 bg-gradient-to-br from-pink-50/70 to-rose-50/40 p-4">

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
                        💵
                      </div>

                      <div>
                        <p className="text-xs font-black text-gray-800">
                          Cash on Delivery
                        </p>

                        <p className="mt-1 text-[9px] text-gray-500">
                          Pay when your pretty package arrives.
                        </p>
                      </div>

                    </div>

                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-pink-500 text-[9px] text-white">
                      ✓
                    </div>

                  </div>

                </div>


                {/* Submit */}
                <button
                  type="submit"
                  className="group relative mt-2 w-full overflow-hidden rounded-2xl bg-gradient-to-r from-pink-500 via-pink-600 to-rose-500 py-4 text-sm font-bold text-white shadow-lg shadow-pink-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-300 active:translate-y-0"
                >

                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Place Order
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>

                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                </button>

              </form>


              {/* Security */}
              <div className="mt-6 flex items-center justify-center gap-2 text-[9px] font-medium text-gray-400">
                <span>🔒</span>
                Your information is kept private and secure.
              </div>

            </div>

          </div>


          {/* =================================================
              ORDER SUMMARY
          ================================================= */}

          <div className="sticky top-6 overflow-hidden rounded-[28px] border border-pink-100 bg-white/80 shadow-[0_25px_80px_rgba(244,114,182,0.12)] backdrop-blur-xl">

            {/* Summary header */}
            <div className="bg-gradient-to-br from-pink-500 via-pink-600 to-rose-500 p-6 text-white">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-pink-100">
                    Your Order
                  </p>

                  <h2 className="mt-1 text-xl font-black">
                    Order Summary
                  </h2>

                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-xl backdrop-blur">
                  🛍️
                </div>

              </div>

              <div className="mt-5 inline-flex rounded-full bg-white/15 px-3 py-1.5 text-[9px] font-bold backdrop-blur">
                {totalItems} {totalItems === 1 ? 'item' : 'items'}
              </div>

            </div>


            {/* Products */}
            <div className="max-h-[350px] space-y-4 overflow-y-auto p-5">

              {cart.map((item) => (

                <div
                  key={item.id}
                  className="group flex items-center justify-between gap-3 rounded-2xl p-2 transition-all duration-300 hover:bg-pink-50/60"
                >

                  <div className="flex min-w-0 items-center gap-3">

                    <div className="relative shrink-0">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-16 w-16 rounded-2xl border border-pink-100 object-cover shadow-sm transition-transform duration-300 group-hover:scale-105"
                      />

                      <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-pink-500 px-1 text-[8px] font-bold text-white shadow-sm">
                        {item.quantity}
                      </span>

                    </div>

                    <div className="min-w-0">

                      <h4 className="line-clamp-2 text-xs font-bold text-gray-800">
                        {item.name}
                      </h4>

                      <p className="mt-1 text-[9px] font-medium text-gray-400">
                        ${item.price} each
                      </p>

                    </div>

                  </div>

                  <span className="shrink-0 text-sm font-black text-gray-800">
                    ${Number(item.price) * item.quantity}
                  </span>

                </div>

              ))}

            </div>


            {/* Totals */}
            <div className="border-t border-pink-100 bg-gradient-to-br from-pink-50/70 to-rose-50/40 p-6">

              <div className="space-y-3">

                <div className="flex justify-between text-xs">

                  <span className="font-medium text-gray-500">
                    Subtotal
                  </span>

                  <span className="font-bold text-gray-800">
                    ${totalSub}
                  </span>

                </div>


                <div className="flex justify-between text-xs">

                  <span className="font-medium text-gray-500">
                    Shipping
                  </span>

                  <span className="font-black text-green-500">
                    FREE
                  </span>

                </div>

              </div>


              <div className="my-5 h-px bg-pink-200/70" />


              <div className="flex items-end justify-between">

                <div>

                  <p className="text-[9px] font-bold uppercase tracking-wider text-gray-400">
                    Total Amount
                  </p>

                  <p className="mt-1 text-xs font-medium text-gray-500">
                    Cash on Delivery
                  </p>

                </div>

                <span className="text-3xl font-black text-pink-600">
                  ${totalSub}
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* =================================================
            TRUST FEATURES
        ================================================= */}

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">

          <div className="rounded-2xl border border-pink-100 bg-white/60 p-4 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-100">

            <div className="text-xl">🔒</div>

            <p className="mt-2 text-xs font-bold text-gray-800">
              Secure Checkout
            </p>

            <p className="mt-1 text-[9px] text-gray-400">
              Your details stay protected
            </p>

          </div>


          <div className="rounded-2xl border border-pink-100 bg-white/60 p-4 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-100">

            <div className="text-xl">📦</div>

            <p className="mt-2 text-xs font-bold text-gray-800">
              Carefully Packed
            </p>

            <p className="mt-1 text-[9px] text-gray-400">
              Pretty packaging with love
            </p>

          </div>


          <div className="rounded-2xl border border-pink-100 bg-white/60 p-4 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-100">

            <div className="text-xl">💗</div>

            <p className="mt-2 text-xs font-bold text-gray-800">
              Boutique Care
            </p>

            <p className="mt-1 text-[9px] text-gray-400">
              Made for your aesthetic
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}

export default Checkout;
