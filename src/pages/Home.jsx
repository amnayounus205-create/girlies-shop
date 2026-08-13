import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const springTransition = { type: 'spring', stiffness: 100, damping: 15 };

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
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#fff8fb] text-gray-900 selection:bg-pink-500 selection:text-white">

      {/* =====================================================
          BG SHOPPING GIRLIES & GLOWS (MOBILE OPTIMIZED)
      ===================================================== */}
      <motion.div 
        animate={{ scale: [1, 1.25, 1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none fixed -left-20 -top-20 z-0 h-[300px] w-[300px] sm:h-[600px] sm:w-[600px] rounded-full bg-pink-300/30 blur-[100px] sm:blur-[130px]" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none fixed -right-20 top-1/3 z-0 h-[300px] w-[300px] sm:h-[550px] sm:w-[550px] rounded-full bg-rose-300/30 blur-[100px] sm:blur-[140px]" 
      />

      {/* Floating Background "Girlies Shopping" Silhouettes - Mobile Friendly positioning */}
      <motion.div 
        animate={{ y: [-10, 10, -10], rotate: [-2, 2, -2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[2%] top-[12%] z-0 opacity-15 sm:opacity-20 blur-[0.5px]"
      >
        <div className="relative h-32 w-24 sm:h-64 sm:w-44 overflow-hidden rounded-2xl sm:rounded-3xl bg-pink-400/20 shadow-inner flex flex-col items-center justify-center p-2 sm:p-4">
          <span className="text-4xl sm:text-7xl">🛍️</span>
          <span className="mt-1 sm:mt-2 text-[7px] sm:text-[10px] font-bold tracking-widest uppercase text-pink-700">Chic Vibe</span>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [10, -10, 10], rotate: [2, -2, 2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[2%] top-[55%] sm:bottom-[20%] z-0 opacity-15 sm:opacity-20 blur-[0.5px]"
      >
        <div className="relative h-32 w-24 sm:h-60 sm:w-40 overflow-hidden rounded-2xl sm:rounded-3xl bg-rose-400/20 shadow-inner flex flex-col items-center justify-center p-2 sm:p-4">
          <span className="text-4xl sm:text-7xl">👜</span>
          <span className="mt-1 sm:mt-2 text-[7px] sm:text-[10px] font-bold tracking-widest uppercase text-rose-700">Retail Therapy</span>
        </div>
      </motion.div>


      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative z-10 overflow-hidden border-b border-pink-100/70 bg-gradient-to-br from-white/70 via-[#fff9fc]/80 to-pink-50/80 backdrop-blur-md">
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-24">

          {/* LEFT CONTENT */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 max-w-xl text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-4 sm:mb-6 flex items-center justify-center lg:justify-start gap-3"
            >
              <span className="h-[2px] w-9 bg-gradient-to-r from-pink-500 to-rose-400 hidden lg:block" />
              <span className="rounded-full bg-pink-100/80 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-pink-600 shadow-sm">
                🛍️ New Collection 2026
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl font-black leading-[1.1] tracking-[-0.04em] text-gray-950 sm:text-6xl lg:text-7xl"
            >
              Think Pretty.
              <br />
              <span className="bg-gradient-to-r from-pink-500 via-pink-600 to-rose-500 bg-clip-text text-transparent">
                Shop Pretty.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-4 sm:mt-6 max-w-lg text-sm leading-6 text-gray-500 sm:text-lg"
            >
              Discover beautiful bags, elegant jewelry and aesthetic accessories carefully curated to make your everyday style feel a little more special.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-7 sm:mt-9 flex w-full flex-col gap-3 sm:flex-row justify-center lg:justify-start"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link
                  to="/shop"
                  className="group inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-gray-950 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-gray-200 transition-colors hover:bg-pink-600 hover:shadow-pink-200"
                >
                  Explore Collection
                  <motion.span 
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="ml-2"
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link
                  to="/shop"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-pink-100 bg-white/70 px-8 py-4 text-sm font-bold text-gray-800 backdrop-blur transition-colors hover:border-pink-200 hover:bg-pink-50 hover:text-pink-600"
                >
                  Shop Now
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats Counter */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="mt-8 sm:mt-11 flex flex-wrap justify-center lg:justify-start items-center gap-6 border-t border-pink-100 pt-6 sm:pt-7 sm:gap-8 w-full"
            >
              <div>
                <p className="text-lg sm:text-xl font-black text-gray-950">500+</p>
                <p className="mt-1 text-[11px] text-gray-400">Happy Customers</p>
              </div>
              <div className="h-8 w-px bg-pink-100" />
              <div>
                <p className="text-lg sm:text-xl font-black text-gray-950">100+</p>
                <p className="mt-1 text-[11px] text-gray-400">Products</p>
              </div>
              <div className="h-8 w-px bg-pink-100" />
              <div>
                <p className="text-lg sm:text-xl font-black text-gray-950">4.9/5</p>
                <p className="mt-1 text-[11px] text-gray-400">Rating</p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT HERO GRAPHIC WITH SHOPPING GIRLIES ART */}
          <div className="relative flex h-[340px] sm:h-[420px] lg:h-[460px] items-center justify-center">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute h-[260px] w-[260px] sm:h-[390px] sm:w-[390px] rounded-full border border-dashed border-pink-300/60"
            />
            <div className="absolute h-[200px] w-[200px] sm:h-[330px] sm:w-[330px] rounded-full bg-gradient-to-br from-pink-200/40 via-pink-100/20 to-rose-100/40 blur-2xl" />

            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.3 }}
              whileHover={{ scale: 1.06 }}
              className="absolute flex h-[190px] w-[190px] sm:h-[270px] sm:w-[270px] flex-col items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-pink-600 to-rose-500 text-center shadow-2xl shadow-pink-400/50 cursor-pointer overflow-hidden p-4"
            >
              <motion.div 
                animate={{ y: [-4, 4, -4] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="flex items-center gap-1 sm:gap-2 mb-1"
              >
                <span className="text-lg sm:text-2xl">🛍️</span>
                <span className="text-2xl sm:text-4xl text-white">👩‍🦰✨</span>
                <span className="text-lg sm:text-2xl">🛍️</span>
              </motion.div>
              <p className="text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.3em] text-pink-100">Girlies Shop</p>
              <h2 className="mt-0.5 sm:mt-1 text-lg sm:text-2xl font-black text-white">Stay Pretty.</h2>
              <p className="text-[9px] sm:text-[11px] text-pink-100">Curated with love ✨</p>
            </motion.div>

            {/* Floating Card 1 */}
            <motion.div 
              animate={{ y: [-15, 15, -15], rotate: [-2, 2, -2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-1 sm:right-0 top-4 sm:top-12 rounded-2xl border border-white/80 bg-white/90 px-3 py-2 sm:px-5 sm:py-4 shadow-xl backdrop-blur-md"
            >
              <p className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-gray-400">Trending</p>
              <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm font-bold text-gray-900">✨ Bag Haul & Glow</p>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div 
              animate={{ y: [15, -15, 15], rotate: [2, -2, 2] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-2 sm:bottom-10 left-1 rounded-2xl border border-white/80 bg-white/90 px-3 py-2 sm:px-5 sm:py-4 shadow-xl backdrop-blur-md"
            >
              <p className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-pink-500">Retail Therapy</p>
              <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm font-bold text-gray-900">♡ Bestie Approved</p>
            </motion.div>
          </div>

        </div>
      </section>


      {/* =====================================================
          CATEGORIES SECTION
      ===================================================== */}
      <section className="relative z-10 overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#fff9fc]/80 via-white/50 to-[#fff5f9]/80" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 sm:mb-12 flex flex-col sm:flex-row items-center sm:items-end justify-between text-center sm:text-left gap-4"
          >
            <div>
              <div className="mb-2 sm:mb-3 flex items-center justify-center sm:justify-start gap-2">
                <span className="h-[2px] w-8 bg-gradient-to-r from-pink-500 to-rose-400" />
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-pink-500">Shop our collection</p>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-gray-950">Find your favourite</h2>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-500">Pick your favourite style from our collection.</p>
            </div>
            <Link to="/shop" className="group inline-flex items-center text-sm font-bold text-gray-700 transition hover:text-pink-600">
              View all <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
              >
                <Link
                  to="/shop"
                  className="group relative block overflow-hidden rounded-3xl border border-white/90 bg-white/90 shadow-[0_15px_40px_rgba(244,114,182,0.1)] backdrop-blur-md transition-shadow duration-300 hover:shadow-[0_25px_60px_rgba(244,114,182,0.2)]"
                >
                  <div className="relative h-[200px] sm:h-[230px] overflow-hidden bg-gradient-to-br from-pink-50 via-white to-rose-50">
                    <motion.img
                      src={category.image}
                      alt={category.name}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="relative z-10 h-full w-full object-cover"
                    />
                    <span className="absolute right-4 top-4 z-30 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[10px] font-bold text-gray-700 shadow-sm backdrop-blur">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <h3 className="text-base sm:text-lg font-black text-gray-950 transition-colors group-hover:text-pink-600">
                          {category.name}
                        </h3>
                        <p className="mt-1 text-xs leading-5 text-gray-500">{category.description}</p>
                      </div>
                      <motion.span 
                        whileHover={{ rotate: -15, scale: 1.1 }}
                        className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-pink-50 text-sm text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors"
                      >
                        →
                      </motion.span>
                    </div>
                    <div className="mt-4 sm:mt-5 h-[2px] w-0 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 transition-all duration-500 group-hover:w-full" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* =====================================================
          PROMO BANNER
      ===================================================== */}
      <section className="relative z-10 px-4 sm:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-r from-pink-500 via-pink-600 to-rose-500 px-6 py-10 shadow-2xl shadow-pink-300/50 sm:px-12 sm:py-12"
        >
          <motion.div 
            animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -right-10 -top-20 h-56 w-56 rounded-full bg-white/20 blur-xl" 
          />

          <div className="relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-pink-100">✨ Shopping Haul Special</p>
              <h2 className="mt-2 text-xl sm:text-3xl font-black text-white">Something pretty just arrived.</h2>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-pink-100">Explore our latest collection before it's gone.</p>
            </div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/shop"
                className="group inline-flex items-center rounded-full bg-white px-7 py-3.5 text-xs sm:text-sm font-bold text-pink-600 shadow-lg transition-colors hover:bg-gray-950 hover:text-white"
              >
                Shop New Arrivals <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>


      {/* =====================================================
          WHY SHOP SECTION
      ===================================================== */}
      <section className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-8 sm:py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12 text-center"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-pink-500">Shopping made easy</p>
          <h2 className="mt-2 sm:mt-3 text-2xl sm:text-4xl font-black text-gray-950">Why Girlies Shop?</h2>
          <p className="mx-auto mt-2 sm:mt-3 max-w-md text-xs sm:text-sm text-gray-500">Everything you need for a smooth shopping experience.</p>
        </motion.div>

        <div className="grid overflow-hidden rounded-3xl border border-white/90 bg-white/75 shadow-[0_15px_50px_rgba(244,114,182,0.08)] backdrop-blur-md sm:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ backgroundColor: "rgba(252, 231, 243, 0.5)" }}
              className={`px-6 py-8 sm:py-10 text-center transition-colors ${
                index !== 0 ? 'border-t border-pink-100 sm:border-l sm:border-t-0' : ''
              }`}
            >
              <motion.div 
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="mx-auto flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-rose-100 text-xl sm:text-2xl shadow-sm"
              >
                {feature.icon}
              </motion.div>
              <h3 className="mt-3 sm:mt-4 text-sm sm:text-base font-bold text-gray-900">{feature.title}</h3>
              <p className="mx-auto mt-1 sm:mt-2 max-w-xs text-xs leading-5 text-gray-500">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* =====================================================
          NEWSLETTER
      ===================================================== */}
      <section className="relative z-10 overflow-hidden border-y border-pink-100 bg-gradient-to-br from-pink-50/90 via-white to-rose-50/90 py-16 sm:py-20">
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-8">
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={springTransition}
            className="mx-auto flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white text-xl sm:text-2xl shadow-md shadow-pink-100"
          >
            💌
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 sm:mt-5 text-2xl sm:text-4xl font-black text-gray-950"
          >
            Stay in the pretty loop
          </motion.h2>

          <p className="mx-auto mt-2 sm:mt-3 max-w-md text-xs sm:text-sm leading-6 text-gray-500">
            Get updates about new arrivals, special offers and everything pretty.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 sm:mt-8 flex max-w-md flex-col gap-3 sm:flex-row px-2"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="min-w-0 flex-1 rounded-full border border-pink-100 bg-white/90 px-5 py-3.5 text-xs sm:text-sm outline-none transition focus:border-pink-400 focus:ring-4 focus:ring-pink-100"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              className="rounded-full bg-gray-950 px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg transition-colors hover:bg-pink-600"
            >
              Subscribe
            </motion.button>
          </motion.div>
          <p className="mt-3 text-[10px] sm:text-[11px] text-gray-400">No spam. Just pretty things and occasional offers.</p>
        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="relative z-10 overflow-hidden bg-gradient-to-b from-white via-[#fff9fc] to-pink-50/70 py-16 sm:py-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl px-4 text-center sm:px-8"
        >
          <div className="mx-auto flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-rose-100 text-pink-500 shadow-sm">
            ✦
          </div>
          <h2 className="mt-4 sm:mt-5 text-xl sm:text-3xl font-black tracking-tight text-gray-950">
            Find something that feels like you.
          </h2>
          <p className="mx-auto mt-2 sm:mt-3 max-w-md text-xs sm:text-sm leading-6 text-gray-500">Your style. Your mood. Your little moment.</p>

          <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }} className="inline-block mt-6 sm:mt-7">
            <Link
              to="/shop"
              className="group inline-flex items-center rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-7.5 py-3.5 sm:px-8 sm:py-4 text-xs sm:text-sm font-bold text-white shadow-lg shadow-pink-200 transition-all hover:shadow-xl hover:from-pink-600 hover:to-rose-600"
            >
              Start Shopping <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </main>
  );
}

export default Home;