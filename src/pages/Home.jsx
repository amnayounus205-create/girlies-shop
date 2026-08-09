import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const categories = [
    {
      name: 'Bags',
      description: 'Premium totes & everyday bags',
      image:
        'https://tse4.mm.bing.net/th/id/OIP.J3YuhlFTsq28fxf4COXX2QHaJ2?pid=Api&h=220&P=0',
    },
    {
      name: 'Jewelry',
      description: 'Rings, earrings & elegant pieces',
      image:
        'https://tse3.mm.bing.net/th/id/OIP.tRR0Wiy5LdKRWpCZ3uh2BAHaHa?pid=Api&h=220&P=0',
    },
    {
      name: 'Accessories',
      description: 'Trending pieces for your style',
      image:
        'https://tse2.mm.bing.net/th/id/OIP.5HAyta4rmdp_xrcdjvNAtwHaHa?pid=Api&h=220&P=0',
    },
  ];

  const features = [
    {
      icon: '📦',
      title: 'Fast Shipping',
      description: 'Quick and reliable delivery right to your doorstep.',
    },
    {
      icon: '🎀',
      title: 'Aesthetic Packaging',
      description: 'Every order is wrapped beautifully with love.',
    },
    {
      icon: '🔒',
      title: 'Secure Checkout',
      description: 'Safe payments and protected customer information.',
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fff8fb] text-gray-900">

      {/* =====================================================
          GLOBAL BACKGROUND
      ===================================================== */}

      {/* Large soft pink glow - top left */}
      <div className="pointer-events-none fixed -left-72 -top-72 z-0 h-[650px] w-[650px] rounded-full bg-pink-200/30 blur-[110px]" />

      {/* Large rose glow - top right */}
      <div className="pointer-events-none fixed -right-72 top-20 z-0 h-[600px] w-[600px] rounded-full bg-rose-200/30 blur-[120px]" />

      {/* Bottom glow */}
      <div className="pointer-events-none fixed -bottom-80 left-1/3 z-0 h-[650px] w-[650px] rounded-full bg-pink-100/40 blur-[130px]" />

      {/* Tiny decorative dots */}
      <div className="pointer-events-none fixed left-[8%] top-[28%] z-0 h-2 w-2 rounded-full bg-pink-300/60" />
      <div className="pointer-events-none fixed right-[12%] top-[42%] z-0 h-3 w-3 rounded-full bg-rose-300/50" />
      <div className="pointer-events-none fixed left-[18%] bottom-[25%] z-0 h-2 w-2 rounded-full bg-pink-400/40" />
      <div className="pointer-events-none fixed right-[22%] bottom-[15%] z-0 h-2 w-2 rounded-full bg-rose-400/40" />


      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative z-10 overflow-hidden border-b border-pink-100/70 bg-gradient-to-br from-white/70 via-[#fff9fc]/80 to-pink-50/80 backdrop-blur-[2px]">

        {/* Hero glow */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gradient-to-br from-pink-300/30 to-rose-200/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-pink-200/20 blur-3xl" />

        <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-24">

          {/* LEFT */}
          <div className="relative z-10 max-w-xl">

            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-gradient-to-r from-pink-500 to-rose-400" />

              <span className="rounded-full bg-pink-100/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-pink-600">
                New Collection 2026
              </span>
            </div>

            <h1 className="text-5xl font-black leading-[1.02] tracking-[-0.04em] text-gray-950 sm:text-6xl lg:text-7xl">
              Think Pretty.
              <br />

              <span className="bg-gradient-to-r from-pink-500 via-pink-600 to-rose-500 bg-clip-text text-transparent">
                Shop Pretty.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-gray-500 sm:text-lg">
              Discover beautiful bags, elegant jewelry and aesthetic
              accessories carefully curated to make your everyday style
              feel a little more special.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <Link
                to="/shop"
                className="group inline-flex items-center justify-center rounded-full bg-gray-950 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-gray-200 transition-all duration-300 hover:-translate-y-1 hover:bg-pink-600 hover:shadow-pink-200"
              >
                Explore Collection

                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                to="/shop"
                className="inline-flex items-center justify-center rounded-full border border-pink-100 bg-white/70 px-8 py-4 text-sm font-bold text-gray-800 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-pink-200 hover:bg-pink-50 hover:text-pink-600"
              >
                Shop Now
              </Link>

            </div>

            {/* Stats */}
            <div className="mt-11 flex flex-wrap items-center gap-6 border-t border-pink-100 pt-7 sm:gap-8">

              <div>
                <p className="text-xl font-black text-gray-950">500+</p>
                <p className="mt-1 text-[11px] text-gray-400">
                  Happy Customers
                </p>
              </div>

              <div className="h-8 w-px bg-pink-100" />

              <div>
                <p className="text-xl font-black text-gray-950">100+</p>
                <p className="mt-1 text-[11px] text-gray-400">
                  Products
                </p>
              </div>

              <div className="h-8 w-px bg-pink-100" />

              <div>
                <p className="text-xl font-black text-gray-950">4.9/5</p>
                <p className="mt-1 text-[11px] text-gray-400">
                  Rating
                </p>
              </div>

            </div>
          </div>


          {/* RIGHT HERO */}
          <div className="relative hidden h-[460px] lg:block">

            <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-pink-200/50 via-pink-100/30 to-rose-100/50 blur-xl" />

            <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-pink-200/70" />

            <div className="absolute left-1/2 top-1/2 flex h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-pink-600 to-rose-500 text-center shadow-2xl shadow-pink-300/50 transition duration-700 hover:scale-105">

              <span className="text-5xl text-white">
                ♡
              </span>

              <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.3em] text-pink-100">
                Girlies Shop
              </p>

              <h2 className="mt-2 text-3xl font-black text-white">
                Stay Pretty.
              </h2>

              <p className="mt-2 text-xs text-pink-100">
                Curated with love ✨
              </p>

            </div>

            {/* Floating card */}
            <div className="absolute right-0 top-12 animate-[float_4s_ease-in-out_infinite] rounded-2xl border border-white/80 bg-white/85 px-5 py-4 shadow-xl backdrop-blur-md">

              <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
                Trending
              </p>

              <p className="mt-1 text-sm font-bold text-gray-900">
                ✨ New Arrivals
              </p>

            </div>

            {/* Floating card */}
            <div className="absolute bottom-10 left-2 animate-[float_5s_ease-in-out_infinite] rounded-2xl border border-white/80 bg-white/85 px-5 py-4 shadow-xl backdrop-blur-md">

              <p className="text-[9px] font-bold uppercase tracking-widest text-pink-500">
                Customer Love
              </p>

              <p className="mt-1 text-sm font-bold text-gray-900">
                ♡ 4.9/5 Rating
              </p>

            </div>

            <span className="absolute left-16 top-20 h-3 w-3 animate-pulse rounded-full bg-pink-400" />

            <span className="absolute bottom-24 right-16 h-2 w-2 animate-pulse rounded-full bg-rose-400" />

            <span className="absolute right-4 top-44 h-2 w-2 rounded-full bg-pink-500" />

          </div>
        </div>
      </section>


      {/* =====================================================
          CATEGORIES
      ===================================================== */}
      <section className="relative z-10 overflow-hidden py-20 sm:py-24">

        {/* Section background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fff9fc]/80 via-white/40 to-[#fff5f9]/80" />

        {/* Decorative glow */}
        <div className="pointer-events-none absolute -left-48 top-10 h-[400px] w-[400px] rounded-full bg-pink-200/25 blur-[100px]" />

        <div className="pointer-events-none absolute -right-48 bottom-0 h-[450px] w-[450px] rounded-full bg-rose-200/25 blur-[110px]" />

        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">

          <div className="mb-10 flex items-end justify-between">

            <div>

              <div className="mb-3 flex items-center gap-2">

                <span className="h-[2px] w-8 bg-gradient-to-r from-pink-500 to-rose-400" />

                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-pink-500">
                  Shop our collection
                </p>

              </div>

              <h2 className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
                Find your favourite
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Pick your favourite style from our collection.
              </p>

            </div>

            <Link
              to="/shop"
              className="group hidden items-center text-sm font-bold text-gray-700 transition hover:text-pink-600 sm:flex"
            >
              View all

              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

          </div>


          {/* Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">

            {categories.map((category, index) => (
              <Link
                to="/shop"
                key={category.name}
                className="group relative overflow-hidden rounded-3xl border border-white/80 bg-white/80 shadow-[0_10px_40px_rgba(244,114,182,0.08)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-pink-200 hover:shadow-[0_20px_50px_rgba(244,114,182,0.16)]"
              >

                {/* Image */}
                <div className="relative h-[215px] overflow-hidden bg-gradient-to-br from-pink-50 via-white to-rose-50">

                  <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 via-transparent to-rose-100/40" />

                  <img
                    src={category.image}
                    alt={category.name}
                    className="relative z-10 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Image gradient */}
                  <div className="absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-gray-900/20 to-transparent" />

                  {/* Number */}
                  <span className="absolute right-4 top-4 z-30 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[10px] font-bold text-gray-700 shadow-sm backdrop-blur transition duration-300 group-hover:scale-110 group-hover:bg-pink-500 group-hover:text-white">
                    0{index + 1}
                  </span>

                </div>


                {/* Content */}
                <div className="p-5">

                  <div className="flex items-center justify-between gap-3">

                    <div>
                      <h3 className="text-lg font-black text-gray-950 transition-colors duration-300 group-hover:text-pink-600">
                        {category.name}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-gray-500">
                        {category.description}
                      </p>
                    </div>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink-50 text-sm text-pink-600 transition-all duration-300 group-hover:rotate-[-8deg] group-hover:bg-pink-600 group-hover:text-white">
                      →
                    </span>

                  </div>

                  {/* Animated line */}
                  <div className="mt-5 h-[2px] w-0 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 transition-all duration-500 group-hover:w-full" />

                </div>

              </Link>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          PROMO BANNER
      ===================================================== */}
      <section className="relative z-10 px-5 sm:px-8">

        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-r from-pink-500 via-pink-600 to-rose-500 px-7 py-11 shadow-2xl shadow-pink-200/40 sm:px-10">

          {/* Decorative gradient circles */}
          <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-white/10 blur-sm" />

          <div className="absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-white/10" />

          <div className="absolute right-1/3 top-10 h-20 w-20 rounded-full bg-white/5 blur-xl" />

          <div className="relative flex flex-col items-center justify-between gap-7 text-center md:flex-row md:text-left">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-pink-100">
                New arrivals
              </p>

              <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                Something pretty just arrived.
              </h2>

              <p className="mt-2 text-sm text-pink-100">
                Explore our latest collection before it's gone.
              </p>

            </div>

            <Link
              to="/shop"
              className="group shrink-0 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-pink-600 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-gray-950 hover:text-white"
            >
              Shop New Arrivals

              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

          </div>

        </div>
      </section>


      {/* =====================================================
          WHY SHOP
      ===================================================== */}
      <section className="relative z-10 mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">

        <div className="mb-10 text-center">

          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-pink-500">
            Shopping made easy
          </p>

          <h2 className="mt-3 text-3xl font-black text-gray-950 sm:text-4xl">
            Why Girlies Shop?
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm text-gray-500">
            Everything you need for a smooth shopping experience.
          </p>

        </div>


        <div className="grid overflow-hidden rounded-3xl border border-white/80 bg-white/70 shadow-[0_15px_50px_rgba(244,114,182,0.08)] backdrop-blur-sm sm:grid-cols-3">

          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group px-6 py-9 text-center transition-all duration-300 hover:bg-pink-50/60 ${
                index !== 0
                  ? 'border-t border-pink-100 sm:border-l sm:border-t-0'
                  : ''
              }`}
            >

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-rose-100 text-xl shadow-sm transition duration-300 group-hover:scale-110 group-hover:rotate-3">
                {feature.icon}
              </div>

              <h3 className="mt-4 font-bold text-gray-900">
                {feature.title}
              </h3>

              <p className="mx-auto mt-2 max-w-xs text-xs leading-5 text-gray-500">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </section>


      {/* =====================================================
          NEWSLETTER
      ===================================================== */}
      <section className="relative z-10 overflow-hidden border-y border-pink-100 bg-gradient-to-br from-pink-50/90 via-white to-rose-50/90">

        <div className="pointer-events-none absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-pink-200/30 blur-3xl" />

        <div className="pointer-events-none absolute -right-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-rose-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-5 py-20 text-center sm:px-8">

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl shadow-md shadow-pink-100">
            💌
          </div>

          <h2 className="mt-5 text-3xl font-black text-gray-950 sm:text-4xl">
            Stay in the pretty loop
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
            Get updates about new arrivals, special offers and everything pretty.
          </p>

          <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">

            <input
              type="email"
              placeholder="Enter your email"
              className="min-w-0 flex-1 rounded-full border border-pink-100 bg-white/90 px-5 py-3.5 text-sm outline-none transition focus:border-pink-400 focus:ring-4 focus:ring-pink-100"
            />

            <button
              type="button"
              className="rounded-full bg-gray-950 px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-pink-600"
            >
              Subscribe
            </button>

          </div>

          <p className="mt-3 text-[11px] text-gray-400">
            No spam. Just pretty things and occasional offers.
          </p>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="relative z-10 overflow-hidden bg-gradient-to-b from-white via-[#fff9fc] to-pink-50/70">

        <div className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-8">

          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-rose-100 text-pink-500 shadow-sm">
            ✦
          </div>

          <h2 className="mt-5 text-2xl font-black tracking-tight text-gray-950 sm:text-3xl">
            Find something that feels like you.
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
            Your style. Your mood. Your little moment.
          </p>

          <Link
            to="/shop"
            className="group mt-7 inline-flex items-center rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-pink-200 transition-all duration-300 hover:-translate-y-1 hover:from-pink-600 hover:to-rose-600 hover:shadow-xl"
          >
            Start Shopping

            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

        </div>
      </section>


      {/* =====================================================
          FLOAT ANIMATION
      ===================================================== */}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }

            50% {
              transform: translateY(-9px);
            }
          }
        `}
      </style>

    </main>
  );
}

export default Home;
