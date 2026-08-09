import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (!formData.email || !formData.password) {
      alert("Please fill in all fields!");
      return;
    }
    
    alert("Logged in successfully! Happy Shopping 🛍️");
    navigate('/shop');
  };

  return (
    <div className="bg-pink-50/20 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-pink-100 w-full max-w-md space-y-6">
        
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-black text-pink-600">Welcome Back</h2>
          <p className="text-sm text-gray-400">Sign in to access your pretty cart 💖</p>
        </div>

        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Email Address</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full px-4 py-3 rounded-xl border border-pink-100 bg-pink-50/10 focus:outline-none focus:border-pink-400 font-medium text-gray-800 text-sm" 
              placeholder="Enter your email address" 
              required 
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Password</label>
            <input 
              type="password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange} 
              className="w-full px-4 py-3 rounded-xl border border-pink-100 bg-pink-50/10 focus:outline-none focus:border-pink-400 font-medium text-gray-800 text-sm" 
              placeholder="Enter your password" 
              required 
            />
          </div>

          <div className="text-right">
            <span className="text-xs font-semibold text-pink-500 hover:underline cursor-pointer">
              Forgot password?
            </span>
          </div>

         
          <button 
            type="submit" 
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-xl shadow-sm transition-colors duration-200 text-center text-sm"
          >
            Sign In 🎀
          </button>
        </form>

       
        <p className="text-center text-sm text-gray-500">
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