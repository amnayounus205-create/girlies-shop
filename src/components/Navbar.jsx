import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cartCount } = useCart();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-pink-100/80 bg-white/90 shadow-sm backdrop-blur-xl">

      <nav className="mx-auto w-full max-w-7xl px-3 sm:px-6 lg:px-8">

        <div className="flex h-[68px] items-center justify-between gap-3">

          {/* =========================
              LOGO
          ========================== */}
          <Link
            to="/"
            className="group flex shrink-0 items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 via-rose-500 to-fuchsia-500 text-white shadow-md shadow-pink-200 transition duration-300 group-hover:scale-105">
              <span className="text-base">🎀</span>
            </div>

            <div className="leading-none">
              <div className="bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-lg font-black tracking-tight text-transparent sm:text-xl">
                ShopEasy
              </div>

              <span className="hidden text-[8px] font-semibold uppercase tracking-[0.2em] text-gray-400 sm:block">
                Pretty • Premium • You
              </span>
            </div>
          </Link>

          {/* =========================
              NAVIGATION
              NO MOBILE DROPDOWN
          ========================== */}
          <div className="flex min-w-0 flex-1 items-center justify-end gap-0.5 overflow-x-auto scrollbar-hide sm:gap-1">

            <Link
              to="/"
              className={`shrink-0 rounded-lg px-2 py-2 text-[11px] font-bold transition-all sm:rounded-xl sm:px-3 sm:text-sm ${
                isActive("/")
                  ? "bg-pink-100 text-pink-700"
                  : "text-gray-600 hover:bg-pink-50 hover:text-pink-600"
              }`}
            >
              Home
            </Link>

            <Link
              to="/shop"
              className={`shrink-0 rounded-lg px-2 py-2 text-[11px] font-bold transition-all sm:rounded-xl sm:px-3 sm:text-sm ${
                isActive("/shop")
                  ? "bg-pink-100 text-pink-700"
                  : "text-gray-600 hover:bg-pink-50 hover:text-pink-600"
              }`}
            >
              Shop
            </Link>

            <Link
              to="/cart"
              className={`relative flex shrink-0 items-center gap-1 rounded-lg px-2 py-2 text-[11px] font-bold transition-all sm:rounded-xl sm:px-3 sm:text-sm ${
                isActive("/cart")
                  ? "bg-pink-100 text-pink-700"
                  : "text-gray-600 hover:bg-pink-50 hover:text-pink-600"
              }`}
            >
              <FaShoppingBag className="text-[10px] sm:text-xs" />

              <span>Cart</span>

              {cartCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-1 text-[8px] font-black text-white shadow-sm sm:h-5 sm:min-w-5 sm:text-[10px]">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Link>

            <Link
              to="/login"
              className={`shrink-0 rounded-lg px-2 py-2 text-[11px] font-bold transition-all sm:rounded-xl sm:px-3 sm:text-sm ${
                isActive("/login")
                  ? "bg-pink-100 text-pink-700"
                  : "text-gray-600 hover:bg-pink-50 hover:text-pink-600"
              }`}
            >
              Login
            </Link>

            <Link
              to="/register"
              className={`shrink-0 rounded-lg px-2.5 py-2 text-[11px] font-bold text-white shadow-sm transition-all sm:rounded-xl sm:px-4 sm:text-sm ${
                isActive("/register")
                  ? "bg-gradient-to-r from-pink-600 to-rose-600"
                  : "bg-gradient-to-r from-pink-500 to-rose-500 hover:-translate-y-0.5 hover:from-pink-600 hover:to-rose-600 hover:shadow-md"
              }`}
            >
              Register
            </Link>

          </div>

        </div>

      </nav>
    </header>
  );
}

export default Navbar;