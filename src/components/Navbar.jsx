import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaShoppingBag, FaBars, FaTimes, FaUser } from "react-icons/fa";
import { useCart } from "../context/CartContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-pink-100/70 bg-white/85 shadow-sm backdrop-blur-xl">

      <nav className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex h-[72px] items-center justify-between">

          {/* LOGO */}
          <Link
            to="/"
            onClick={closeMenu}
            className="group flex items-center gap-2.5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 via-rose-500 to-fuchsia-500 text-white shadow-lg shadow-pink-200 transition duration-300 group-hover:scale-105 group-hover:rotate-2">
              <span className="text-lg">🎀</span>
            </div>

            <div className="leading-none">
              <div className="bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-xl font-black tracking-tight text-transparent sm:text-2xl">
                ShopEasy
              </div>

              <span className="hidden text-[9px] font-semibold uppercase tracking-[0.25em] text-gray-400 sm:block">
                Pretty • Premium • You
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden items-center gap-1 md:flex">

            <Link
              to="/"
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                isActive("/")
                  ? "bg-pink-100 text-pink-700"
                  : "text-gray-600 hover:bg-pink-50 hover:text-pink-600"
              }`}
            >
              Home
            </Link>

            <Link
              to="/shop"
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                isActive("/shop")
                  ? "bg-pink-100 text-pink-700"
                  : "text-gray-600 hover:bg-pink-50 hover:text-pink-600"
              }`}
            >
              Shop
            </Link>

            <Link
              to="/cart"
              className={`relative flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                isActive("/cart")
                  ? "bg-pink-100 text-pink-700"
                  : "text-gray-600 hover:bg-pink-50 hover:text-pink-600"
              }`}
            >
              <FaShoppingBag className="text-sm" />
              Cart

              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-1 text-[10px] font-bold text-white shadow-md">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Link>

            <Link
              to="/profile"
              className={`ml-1 flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                isActive("/profile")
                  ? "bg-pink-100 text-pink-700"
                  : "text-gray-600 hover:bg-pink-50 hover:text-pink-600"
              }`}
            >
              <FaUser className="text-xs" />
              Profile
            </Link>

            <div className="mx-2 h-7 w-px bg-pink-100" />

            <Link
              to="/login"
              className="rounded-xl px-4 py-2 text-sm font-semibold text-gray-600 transition hover:bg-pink-50 hover:text-pink-600"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-pink-200 transition-all duration-300 hover:-translate-y-0.5 hover:from-pink-600 hover:to-rose-600 hover:shadow-lg"
            >
              Register
            </Link>

          </div>

          {/* MOBILE ACTIONS */}
          <div className="flex items-center gap-2 md:hidden">

            <Link
              to="/cart"
              className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-pink-50 text-pink-600 transition hover:bg-pink-100"
              aria-label="Cart"
            >
              <FaShoppingBag />

              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-pink-500 px-1 text-[10px] font-bold text-white shadow">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 text-gray-700 transition hover:bg-pink-50 hover:text-pink-600"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            menuOpen
              ? "max-h-[500px] pb-4 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-1 rounded-2xl border border-pink-100 bg-gradient-to-br from-pink-50/80 to-white p-2 shadow-sm">

            <Link
              to="/"
              onClick={closeMenu}
              className={`block rounded-xl px-4 py-3 text-sm font-semibold ${
                isActive("/")
                  ? "bg-white text-pink-600 shadow-sm"
                  : "text-gray-700 hover:bg-white hover:text-pink-600"
              }`}
            >
              🏠 Home
            </Link>

            <Link
              to="/shop"
              onClick={closeMenu}
              className={`block rounded-xl px-4 py-3 text-sm font-semibold ${
                isActive("/shop")
                  ? "bg-white text-pink-600 shadow-sm"
                  : "text-gray-700 hover:bg-white hover:text-pink-600"
              }`}
            >
              🛍️ Shop
            </Link>

            <Link
              to="/cart"
              onClick={closeMenu}
              className={`block rounded-xl px-4 py-3 text-sm font-semibold ${
                isActive("/cart")
                  ? "bg-white text-pink-600 shadow-sm"
                  : "text-gray-700 hover:bg-white hover:text-pink-600"
              }`}
            >
              🛒 Cart {cartCount > 0 && `(${cartCount})`}
            </Link>

            <Link
              to="/profile"
              onClick={closeMenu}
              className={`block rounded-xl px-4 py-3 text-sm font-semibold ${
                isActive("/profile")
                  ? "bg-white text-pink-600 shadow-sm"
                  : "text-gray-700 hover:bg-white hover:text-pink-600"
              }`}
            >
              👤 Profile
            </Link>

            <div className="my-2 h-px bg-pink-100" />

            <div className="grid grid-cols-2 gap-2">

              <Link
                to="/login"
                onClick={closeMenu}
                className="rounded-xl border border-pink-100 bg-white px-4 py-3 text-center text-sm font-bold text-gray-700 transition hover:border-pink-200 hover:text-pink-600"
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={closeMenu}
                className="rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 px-4 py-3 text-center text-sm font-bold text-white shadow-md"
              >
                Register
              </Link>

            </div>

          </div>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;