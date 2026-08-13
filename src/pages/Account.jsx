import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Account() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check karein ke kaun sa user currently logged in hai
    const activeUser = JSON.parse(localStorage.getItem('boutique_current_user'));
    
    if (!activeUser) {
      // Agar login nahi hai, toh login page par bhej dein
      navigate('/login');
    } else {
      setUser(activeUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('boutique_current_user');
    navigate('/login');
  };

  return (
    <main className="min-h-screen bg-[#fff8fb] py-20 px-5 sm:px-8 text-gray-900">
      <div className="max-w-3xl mx-auto">
        
        {/* Profile Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-[0_15px_40px_rgba(244,114,182,0.1)] border border-pink-100"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-pink-100">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white text-2xl font-black shadow-md shadow-pink-200">
                {user?.name ? user.name.charAt(0).toUpperCase() : '👤'}
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-pink-500">Welcome Back</p>
                <h1 className="text-2xl font-black text-gray-950">{user?.name || 'Girlie'} ✨</h1>
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="px-5 py-2.5 bg-pink-50 text-pink-600 font-bold rounded-full text-xs hover:bg-pink-100 transition-colors"
            >
              Logout 🚪
            </motion.button>
          </div>

          {/* User Details Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-pink-50/50 border border-pink-100/50">
              <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Email Address</p>
              <p className="mt-1 text-sm font-bold text-gray-800">{user?.email || 'No email found'}</p>
            </div>

            <div className="p-5 rounded-2xl bg-pink-50/50 border border-pink-100/50">
              <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Account Status</p>
              <p className="mt-1 text-sm font-bold text-emerald-600">● Active & Verified</p>
            </div>
          </div>

          {/* Activity Section */}
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-pink-500 via-pink-600 to-rose-500 text-white shadow-lg shadow-pink-200">
            <h3 className="font-black text-lg">Your Shopping Bag is empty 🛍️</h3>
            <p className="text-xs text-pink-100 mt-1">Explore our aesthetic collections and start your haul today!</p>
          </div>

        </motion.div>

      </div>
    </main>
  );
}

export default Account;