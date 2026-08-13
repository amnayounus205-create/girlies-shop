import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const springTransition = { type: 'spring', stiffness: 100, damping: 15 };

function Home() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address ✨');
      return;
    }
    setError('');
    setIsSubscribed(true);
    // Yahan aap apna backend API call ya Firebase logic laga sakte hain baad mein
  };

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
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#fff5f9] text-gray-900 selection:bg-pink-500 selection:text-white">

      {/* =====================================================
          BACKGROUND GLOWS & AMBIENCE (Rich Vibrant Pink Tone)
      ===================================================== */}
      <motion.div 
        animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.45, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none fixed -left-32 -top-32 z-0 h-[350px] w-[350px] sm:h-[500px] sm:w-[500px] rounded-full bg-pink-400/35 blur-[130px]" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.45, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none fixed -right-32 top-1/4 z-0 h-[350px] w-[350px] sm:h-[450px] sm:w-[450px] rounded-full bg-rose-400/35 blur-[140px]" 
      />

      {/* Floating Art Elements */}
      <motion.div 
        animate={{ y: [-10, 10, -10], rotate: [-2, 2, -2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[3%] top-[14%] z-0 opacity-20 sm:opacity-25 blur-[0.5px]"
      >
        <div className="relative h-28 w-20 sm:h-48 sm:w-32 overflow-hidden rounded-2xl bg-pink-500/15 shadow-inner flex flex-col items-center justify-center p-2 border border-pink-200/50">
          <span className="text-3xl sm:text-5xl">🛍️</span>
          <span className="mt-1 text-[7px] sm:text-[9px] font-bold tracking-widest uppercase text-pink-700">Chic Vibe</span>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [10, -10, 10], rotate: [2, -2, 2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[3%] top-[48%] sm:bottom-[15%] z-0 opacity-20 sm:opacity-25 blur-[0.5px]"
      >
        <div className="relative h-28 w-20 sm:h-44 sm:w-28 overflow-hidden rounded-2xl bg-rose-500/15 shadow-inner flex flex-col items-center justify-center p-2 border border-rose-200/50">
          <span className="text-3xl sm:text-5xl">👜</span>
          <span className="mt-1 text-[7px] sm:text-[9px] font-bold tracking-widest uppercase text-rose-700">Retail Therapy</span>
        </div>
      </motion.div>


      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative z-10 overflow-hidden border-b border-pink-200/60 bg-gradient-to-br from-white/90 via-[#fff0f6]/80 to-pink-100/70 backdrop-blur-md">
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 py-10 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-16">

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
              className="mb-3.5 flex items-center justify-center lg:justify-start gap-3"
            >
              <span className="h-[2px] w-8 bg-gradient-to-r from-pink-600 to-rose-500 hidden lg:block" />
              <span className="rounded-full bg-pink-200/80 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-pink-700 shadow-sm">
                🛍️ New Collection 2026
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl font-black leading-[1.08] tracking-[-0.03em] text-gray-950 sm:text-5xl lg:text-6xl"
            >
              Think Pretty.
              <br />
              <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-pink-500 bg-clip-text text-transparent">
                Shop Pretty.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-4 max-w-lg text-sm leading-relaxed text-gray-600 sm:text-base"
            >
              Discover beautiful bags, elegant jewelry and aesthetic accessories carefully curated to make your everyday style feel a little more special.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-6 flex w-full flex-col gap-3 sm:flex-row justify-center lg:justify-start"
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                <Link
                  to="/shop"
                  className="group inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-gradient-to-r from-pink-600 to-rose-600 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-pink-300/50 transition-all hover:from-pink-700 hover:to-rose-700 hover:shadow-pink-400/60"
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

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                <Link
                  to="/shop"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-pink-300 bg-white/90 px-7 py-3.5 text-sm font-bold text-pink-700 backdrop-blur transition-all hover:border-pink-400 hover:bg-pink-50 shadow-sm"
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
              className="mt-7 flex flex-wrap justify-center lg:justify-start items-center gap-6 border-t border-pink-200/80 pt-5 sm:gap-8 w-full"
            >
              <div>
                <p className="text-lg font-black text-gray-950">500+</p>
                <p className="mt-0.5 text-[11px] text-gray-500">Happy Customers</p>
              </div>
              <div className="h-6 w-px bg-pink-200" />
              <div>
                <p className="text-lg font-black text-gray-950">100+</p>
                <p className="mt-0.5 text-[11px] text-gray-500">Products</p>
              </div>
              <div className="h-6 w-px bg-pink-200" />
              <div>
                <p className="text-lg font-black text-gray-950">4.9/5</p>
                <p className="mt-0.5 text-[11px] text-gray-500">Rating</p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT HERO GRAPHIC */}
          <div className="relative flex h-[320px] sm:h-[380px] lg:h-[420px] items-center justify-center">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="absolute h-[250px] w-[250px] sm:h-[330px] sm:w-[330px] rounded-full border border-dashed border-pink-400/70"
            />
            <div className="absolute h-[190px] w-[190px] sm:h-[270px] sm:w-[270px] rounded-full bg-gradient-to-br from-pink-300/40 via-pink-200/30 to-rose-300/40 blur-2xl" />

            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="absolute flex h-[175px] w-[175px] sm:h-[235px] sm:w-[235px] flex-col items-center justify-center rounded-full bg-gradient-to-br from-pink-600 via-rose-500 to-pink-500 text-center shadow-2xl shadow-pink-500/45 cursor-pointer overflow-hidden p-4 border border-pink-300/40"
            >
              <motion.div 
                animate={{ y: [-4, 4, -4] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="flex items-center gap-2 mb-1"
              >
                <span className="text-lg sm:text-xl">🛍️</span>
                <span className="text-2xl sm:text-3xl text-white">👩‍🦰✨</span>
                <span className="text-lg sm:text-xl">🛍️</span>
              </motion.div>
              <p className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.3em] text-pink-100">Girlies Shop</p>
              <h2 className="mt-0.5 text-lg sm:text-xl font-black text-white">Stay Pretty.</h2>
              <p className="text-[9px] sm:text-[10px] text-pink-100">Curated with love ✨</p>
            </motion.div>

            {/* Floating Card 1 */}
            <motion.div 
              animate={{ y: [-10, 10, -10], rotate: [-2, 2, -2] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-2 top-4 sm:top-8 rounded-2xl border border-pink-200 bg-white/95 px-3 py-2.5 shadow-xl backdrop-blur-md"
            >
              <p className="text-[8px] font-bold uppercase tracking-widest text-pink-600">Trending</p>
              <p className="mt-0.5 text-xs font-bold text-gray-900">✨ Bag Haul & Glow</p>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div 
              animate={{ y: [10, -10, 10], rotate: [2, -2, 2] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-2 left-2 rounded-2xl border border-pink-200 bg-white/95 px-3 py-2.5 shadow-xl backdrop-blur-md"
            >
              <p className="text-[8px] font-bold uppercase tracking-widest text-pink-600">Retail Therapy</p>
              <p className="mt-0.5 text-xs font-bold text-gray-900">♡ Bestie Approved</p>
            </motion.div>
          </div>

        </div>
      </section>


      {/* =====================================================
          CATEGORIES SECTION
      ===================================================== */}
      <section className="relative z-10 overflow-hidden py-12 sm:py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-[#fff2f7]/90 via-white/50 to-[#ffedf4]/90" />

        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 sm:mb-8 flex flex-col sm:flex-row items-center sm:items-end justify-between text-center sm:text-left gap-4"
          >
            <div>
              <div className="mb-2 flex items-center justify-center sm:justify-start gap-2">
                <span className="h-[2px] w-7 bg-gradient-to-r from-pink-600 to-rose-500" />
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-pink-600">Shop our collection</p>
              </div>
              <h2 className="text-2xl font-black tracking-tight text-gray-950 sm:text-3xl">Find your favourite</h2>
              <p className="mt-1 text-xs sm:text-sm text-gray-600">Pick your favourite style from our collection.</p>
            </div>
            <Link to="/shop" className="group inline-flex items-center text-sm font-bold text-pink-700 transition hover:text-pink-600">
              View all <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-7">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
              >
                <Link
                  to="/shop"
                  className="group relative block overflow-hidden rounded-3xl border border-pink-200/80 bg-white/95 shadow-[0_15px_40px_rgba(236,72,153,0.1)] backdrop-blur-md transition-all duration-300 hover:shadow-[0_25px_50px_rgba(236,72,153,0.22)]"
                >
                  <div className="relative h-[200px] sm:h-[220px] overflow-hidden bg-gradient-to-br from-pink-100 via-white to-rose-100">
                    <motion.img
                      src={category.image}
                      alt={category.name}
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="relative z-10 h-full w-full object-cover"
                    />
                    <span className="absolute right-4 top-4 z-30 flex h-7 w-7 items-center justify-center rounded-full bg-white/95 text-[10px] font-bold text-pink-700 shadow-sm backdrop-blur border border-pink-200">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <h3 className="text-base sm:text-lg font-black text-gray-950 transition-colors group-hover:text-pink-600">
                          {category.name}
                        </h3>
                        <p className="mt-1 text-xs leading-relaxed text-gray-600">{category.description}</p>
                      </div>
                      <motion.span 
                        whileHover={{ rotate: -15, scale: 1.1 }}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pink-100 text-xs text-pink-700 group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-rose-600 group-hover:text-white transition-colors shadow-sm"
                      >
                        →
                      </motion.span>
                    </div>
                    <div className="mt-4 h-[2px] w-0 rounded-full bg-gradient-to-r from-pink-600 to-rose-500 transition-all duration-500 group-hover:w-full" />
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
      <section className="relative z-10 px-5 sm:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-r from-pink-600 via-rose-500 to-pink-500 px-6 py-8 shadow-2xl shadow-pink-400/40 sm:px-10 sm:py-10 border border-pink-300/40"
        >
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.25, 0.4, 0.25] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -right-10 -top-20 h-56 w-56 rounded-full bg-white/25 blur-xl" 
          />

          <div className="relative flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-pink-100">✨ Shopping Haul Special</p>
              <h2 className="mt-1.5 text-xl sm:text-2xl font-black text-white">Something pretty just arrived.</h2>
              <p className="mt-1 text-xs sm:text-sm text-pink-100">Explore our latest collection before it's gone.</p>
            </div>
            
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                to="/shop"
                className="group inline-flex items-center rounded-full bg-white px-7 py-3 text-xs sm:text-sm font-bold text-pink-700 shadow-lg transition-all hover:bg-gray-950 hover:text-white"
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
      <section className="relative z-10 mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-pink-600">Shopping made easy</p>
          <h2 className="mt-2 text-2xl font-black text-gray-950 sm:text-3xl">Why Girlies Shop?</h2>
          <p className="mx-auto mt-1.5 max-w-md text-xs sm:text-sm text-gray-600">Everything you need for a smooth shopping experience.</p>
        </motion.div>

        <div className="grid overflow-hidden rounded-3xl border border-pink-200 bg-white/90 shadow-[0_15px_50px_rgba(236,72,153,0.07)] backdrop-blur-md sm:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ backgroundColor: "rgba(252, 231, 243, 0.5)" }}
              className={`px-6 py-7 text-center transition-colors ${
                index !== 0 ? 'border-t border-pink-200 sm:border-l sm:border-t-0' : ''
              }`}
            >
              <motion.div 
                whileHover={{ scale: 1.15, rotate: 8 }}
                className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-200 to-rose-200 text-xl shadow-sm border border-pink-300/50"
              >
                {feature.icon}
              </motion.div>
              <h3 className="mt-3 text-sm sm:text-base font-bold text-gray-900">{feature.title}</h3>
              <p className="mx-auto mt-1 max-w-xs text-xs leading-relaxed text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* =====================================================
          NEWSLETTER (FUNCTIONAL SUBSCRIBE)
      ===================================================== */}
      <section className="relative z-10 overflow-hidden border-y border-pink-200 bg-gradient-to-br from-pink-100/90 via-white to-rose-100/90 py-12 sm:py-14">
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={springTransition}
            className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl shadow-md shadow-pink-200/60 border border-pink-200"
          >
            💌
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-3 text-2xl font-black text-gray-950 sm:text-3xl"
          >
            Stay in the pretty loop
          </motion.h2>

          <p className="mx-auto mt-1.5 max-w-md text-xs sm:text-sm leading-relaxed text-gray-600">
            Get updates about new arrivals, special offers and everything pretty.
          </p>

          <AnimatePresence mode="wait">
            {!isSubscribed ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                onSubmit={handleSubscribe}
                className="mx-auto mt-5 flex max-w-md flex-col gap-2.5 sm:flex-row px-2"
              >
                <div className="flex-1 flex flex-col">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="Enter your email"
                    className="w-full rounded-full border border-pink-300 bg-white/95 px-5 py-3 text-xs sm:text-sm outline-none transition focus:border-pink-500 focus:ring-4 focus:ring-pink-200"
                  />
                  {error && (
                    <span className="mt-1.5 text-left text-[11px] font-semibold text-rose-600 pl-4">{error}</span>
                  )}
                </div>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  type="submit"
                  className="h-[46px] rounded-full bg-gradient-to-r from-pink-600 to-rose-600 px-7 text-xs sm:text-sm font-bold text-white shadow-lg shadow-pink-300/40 transition-colors hover:from-pink-700 hover:to-rose-700 shrink-0"
                >
                  Subscribe
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mx-auto mt-6 max-w-md rounded-2xl bg-white/90 border border-pink-200 p-4 shadow-lg shadow-pink-200/50 backdrop-blur-md text-center"
              >
                <p className="text-sm font-bold text-gray-900">💖 You're officially on the list!</p>
                <p className="mt-0.5 text-xs text-gray-600">Thank you for subscribing, gorgeous. Check your inbox soon!</p>
              </motion.div>
            )}
          </AnimatePresence>

          <p className="mt-2.5 text-[10px] text-gray-500">No spam. Just pretty things and occasional offers.</p>
        </div>
      </section>


      {/* =====================================================
          COMPACT FOOTER / FINAL CTA
      ===================================================== */}
      <footer className="relative z-10 overflow-hidden bg-white py-10 sm:py-12 border-t border-pink-200/60">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 flex flex-col items-center text-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-pink-600 shadow-sm mb-3 border border-pink-200">
            ✦
          </div>
          <h2 className="text-xl font-black tracking-tight text-gray-950 sm:text-2xl">
            Find something that feels like you.
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-gray-600">Your style. Your mood. Your little moment.</p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block mt-5">
            <Link
              to="/shop"
              className="group inline-flex items-center rounded-full bg-gradient-to-r from-pink-600 to-rose-600 px-7 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-pink-300/50 transition-all hover:shadow-xl hover:from-pink-700 hover:to-rose-700"
            >
              Start Shopping <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>

          <div className="mt-8 pt-6 border-t border-pink-100 w-full flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-3">
            <p>© 2026 Girlies Shop. All rights reserved.</p>
            <div className="flex gap-4">
              <Link to="/shop" className="hover:text-pink-600 transition-colors">Privacy Policy</Link>
              <Link to="/shop" className="hover:text-pink-600 transition-colors">Terms of Service</Link>
              <Link to="/shop" className="hover:text-pink-600 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}

export default Home;