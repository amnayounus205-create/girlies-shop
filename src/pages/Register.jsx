import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setError('');
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match. Please try again.');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      // Check if user already exists in localStorage
      const existingUsers = JSON.parse(localStorage.getItem('boutique_users')) || [];
      const userExists = existingUsers.some((user) => user.email === formData.email);

      if (userExists) {
        setError('An account with this email already exists.');
        setIsLoading(false);
        return;
      }

      // Save new user profile
      const newUser = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };

      localStorage.setItem('boutique_users', JSON.stringify([...existingUsers, newUser]));

      setIsLoading(false);
      alert('Account created successfully! Welcome to Girls Boutique 💖');
      navigate('/login');
    }, 600);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fff7fb] animate-fade-in">
      {/* BACKGROUND BLURS */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-pink-200/40 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-rose-200/35 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-48 left-[30%] h-[500px] w-[500px] rounded-full bg-pink-100/60 blur-[120px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-[32px] border border-pink-100 bg-white/75 shadow-[0_30px_100px_rgba(244,114,182,0.15)] backdrop-blur-xl lg:grid-cols-[0.85fr_1.15fr] transition-all duration-500 hover:shadow-[0_40px_120px_rgba(244,114,182,0.25)]">
          
          {/* LEFT BRAND PANEL */}
          <div className="relative hidden overflow-hidden bg-gradient-to-br from-pink-500 via-pink-600 to-rose-500 p-10 lg:flex lg:flex-col lg:justify-between">
            <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-white/10 blur-2xl animate-pulse" />
            <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />

            <div className="relative">
              <Link to="/" className="inline-flex items-center gap-3 group transition-transform duration-300 hover:scale-105">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/20 text-xl shadow-lg backdrop-blur">
                  🎀
                </div>
                <div>
                  <p className="text-lg font-black text-white">Girls Boutique</p>
                  <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-pink-100">
                    Think Pink · Shop Pretty
                  </p>
                </div>
              </Link>

              <div className="mt-20">
                <span className="rounded-full bg-white/15 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.25em] text-pink-50 backdrop-blur">
                  Welcome to the family ✨
                </span>
                <h1 className="mt-6 text-4xl font-black leading-tight text-white">
                  Your pretty <br />
                  <span className="text-pink-100">journey starts here.</span>
                </h1>
                <p className="mt-5 max-w-sm text-sm leading-6 text-pink-100">
                  Create your account and discover a curated world of beautiful accessories, jewelry and everyday essentials.
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="relative mt-12 space-y-4">
              <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-white/20">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15">✨</div>
                <div>
                  <p className="text-xs font-bold text-white">Curated Collections</p>
                  <p className="text-[9px] text-pink-100">Pretty pieces, carefully selected</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-white/20">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15">🎁</div>
                <div>
                  <p className="text-xs font-bold text-white">Special Member Perks</p>
                  <p className="text-[9px] text-pink-100">Stay updated with our latest drops</p>
                </div>
              </div>
            </div>
          </div>

          {/* REGISTER FORM */}
          <div className="p-6 sm:p-10 lg:p-12">
            <div className="mb-8 flex justify-center lg:hidden">
              <Link to="/" className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 text-lg shadow-lg shadow-pink-200">
                  🎀
                </div>
                <div>
                  <p className="text-base font-black text-gray-900">Girls Boutique</p>
                  <p className="text-[8px] font-bold uppercase tracking-wider text-pink-500">
                    Think Pink · Shop Pretty
                  </p>
                </div>
              </Link>
            </div>

            <div className="mb-8">
              <span className="inline-flex rounded-full bg-pink-50 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.2em] text-pink-600">
                Create your account
              </span>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
                Join the{' '}
                <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                  pretty side
                </span>
              </h2>
              <p className="mt-2 text-sm leading-5 text-gray-500">
                Create your account and start shopping your favorite pieces.
              </p>
            </div>

            {error && (
              <div className="mb-5 flex items-center gap-3 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-xs font-semibold text-red-600 animate-shake">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-100">!</span>
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.15em] text-gray-500">
                  Full Name
                </label>
                <div className="group relative">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 transition group-focus-within:text-pink-500">
                    ♡
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full rounded-2xl border border-pink-100 bg-pink-50/20 py-3.5 pl-11 pr-4 text-sm font-medium text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-pink-400 focus:bg-white focus:ring-4 focus:ring-pink-100"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.15em] text-gray-500">
                  Email Address
                </label>
                <div className="group relative">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 transition group-focus-within:text-pink-500">
                    @
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-2xl border border-pink-100 bg-pink-50/20 py-3.5 pl-11 pr-4 text-sm font-medium text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-pink-400 focus:bg-white focus:ring-4 focus:ring-pink-100"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="block text-[9px] font-bold uppercase tracking-[0.15em] text-gray-500">
                    Password
                  </label>
                  <span className="text-[8px] font-medium text-gray-400">Minimum 6 characters</span>
                </div>
                <div className="group relative">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 transition group-focus-within:text-pink-500">
                    🔒
                  </span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    required
                    className="w-full rounded-2xl border border-pink-100 bg-pink-50/20 py-3.5 pl-11 pr-12 text-sm font-medium text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-pink-400 focus:bg-white focus:ring-4 focus:ring-pink-100"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-xs text-gray-400 transition hover:bg-pink-50 hover:text-pink-600"
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.15em] text-gray-500">
                  Confirm Password
                </label>
                <div className="group relative">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 transition group-focus-within:text-pink-500">
                    🔐
                  </span>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    required
                    className="w-full rounded-2xl border border-pink-100 bg-pink-50/20 py-3.5 pl-11 pr-12 text-sm font-medium text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-pink-400 focus:bg-white focus:ring-4 focus:ring-pink-100"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-xs text-gray-400 transition hover:bg-pink-50 hover:text-pink-600"
                  >
                    {showConfirmPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-pink-500 via-pink-600 to-rose-500 py-4 text-sm font-bold text-white shadow-lg shadow-pink-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-300 active:translate-y-0 disabled:opacity-70"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isLoading ? 'Creating Account...' : 'Create My Account'}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </button>
            </form>

            {/* Login Link */}
            <div className="mt-7 text-center">
              <p className="text-xs text-gray-500">Already have an account?</p>
              <Link to="/login" className="mt-1 inline-block text-sm font-bold text-pink-600 transition hover:text-rose-500 hover:underline">
                Login to your account →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Register;