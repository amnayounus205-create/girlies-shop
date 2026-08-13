import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setError('');
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields!");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      // Get users from localStorage
      const users = JSON.parse(localStorage.getItem('boutique_users')) || [];
      
      // Find matching user
      const foundUser = users.find(
        (user) => user.email === formData.email && user.password === formData.password
      );

      if (!foundUser) {
        setError("Invalid email or password. Please register if you don't have an account.");
        setIsLoading(false);
        return;
      }

      // Save currently active session
      localStorage.setItem('boutique_current_user', JSON.stringify(foundUser));

      setIsLoading(false);
      alert("Logged in successfully! Happy Shopping 🛍️");
      navigate('/shop');
    }, 600);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 bg-[#fff7fb] overflow-hidden">
      {/* BACKGROUND BLOBS */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-pink-200/40 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-[500px] w-[500px] rounded-full bg-rose-200/35 blur-[120px]" />

      <div className="relative z-10 bg-white/75 p-8 sm:p-10 rounded-[32px] shadow-[0_30px_100px_rgba(244,114,182,0.15)] backdrop-blur-xl border border-pink-100 w-full max-w-md space-y-6 transition-all duration-300">
        
        <div className="text-center space-y-2">
          <Link to="/" className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 text-xl shadow-lg shadow-pink-200 mb-2 hover:scale-105 transition-transform">
            🎀
          </Link>
          <h2 className="text-3xl font-black text-gray-950">Welcome Back</h2>
          <p className="text-sm text-gray-500">Sign in to access your pretty cart 💖</p>
        </div>

        {error && (
          <div className="flex items-center gap-3 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-xs font-semibold text-red-600">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-[10px]">!</span>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
              Email Address
            </label>
            <div className="group relative">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">@</span>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-pink-100 bg-pink-50/20 focus:outline-none focus:border-pink-400 focus:bg-white focus:ring-4 focus:ring-pink-100 font-medium text-gray-800 text-sm transition-all" 
                placeholder="Enter your email address" 
                required 
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
              Password
            </label>
            <div className="group relative">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">🔒</span>
              <input 
                type={showPassword ? 'text' : 'password'} 
                name="password" 
                value={formData.password} 
                onChange={handleChange} 
                className="w-full pl-11 pr-12 py-3.5 rounded-2xl border border-pink-100 bg-pink-50/20 focus:outline-none focus:border-pink-400 focus:bg-white focus:ring-4 focus:ring-pink-100 font-medium text-gray-800 text-sm transition-all" 
                placeholder="Enter your password" 
                required 
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

          <div className="text-right">
            <span className="text-xs font-semibold text-pink-500 hover:underline cursor-pointer">
              Forgot password?
            </span>
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-pink-500 via-pink-600 to-rose-500 py-4 text-sm font-bold text-white shadow-lg shadow-pink-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-300 active:translate-y-0 disabled:opacity-70"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {isLoading ? 'Signing In...' : 'Sign In 🎀'}
            </span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 pt-2 border-t border-pink-100">
          Don't have an account?{' '}
          <Link to="/register" className="text-pink-600 font-bold hover:underline">
            Register here
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;