import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';


const PRODUCTS_DATA = [
  {
    id: 1,
    name: "Luxury Pink Tote Handbag",
    price: 95,
    image: "https://tse4.mm.bing.net/th/id/OIP.J3YuhlFTsq28fxf4COXX2QHaJ2?pid=Api&h=220&P=0",
    category: "Bags",
    desc: "An elegant luxury pink tote handbag designed with premium finish and durable compartments. Perfect spacious choice for daily aesthetics, college, or special boutique events."
  },
  {
    id: 2,
    name: "Rose Ring",
    price: 120,
    image: "https://tse3.mm.bing.net/th/id/OIP.tRR0Wiy5LdKRWpCZ3uh2BAHaHa?pid=Api&h=220&P=0",
    category: "Jewelry",
    desc: "A gorgeous rose-inspired delicate ring featuring flawless craftsmanship. Adds a sweet, romantic pink touch and minimalist sparkle to your jewelry collection."
  },
  {
    id: 3,
    name: "Cute Pink Velvet Scrunchies Set",
    price: 15,
    image: "https://tse1.mm.bing.net/th/id/OIP.HuO0s_QXoAKx2VcCXReHjgHaHS?pid=Api&h=220&P=0",
    category: "Hair Styling",
    desc: "Super soft premium pink velvet scrunchies set that treats your hair gently. Comes in multiple lovely shades of pastel pink to perfectly complete your soft-girl hairdo."
  },
  {
    id: 4,
    name: "Pastel Pink Sunglasses",
    price: 29,
    image: "https://tse2.mm.bing.net/th/id/OIP.5HAyta4rmdp_xrcdjvNAtwHaHa?pid=Api&h=220&P=0",
    category: "Accessories",
    desc: "Protect your eyes with style! These aesthetic pastel pink framed sunglasses give a stunning retro vibe while adding a beautiful colorful filter to your sunny days."
  },
  {
    id: 5,
    name: "Elegant Pink Makeup Brushes Set",
    price: 35,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80",
    category: "Cosmetics",
    desc: "An elegant, ultra-soft pink makeup brushes set curated for flawless blending. Comes with beautifully styled pink handles making it a vanity essential."
  },
  {
    id: 6,
    name: "Premium Pink Leather Wallet",
    price: 45,
    image: "https://tse1.mm.bing.net/th/id/OIP.V-2JKaUpb4S_UUYy305pcQHaJQ?pid=Api&h=220&P=0",
    category: "Wallets",
    desc: "Crafted with premium high-quality faux pink leather. This elegant wallet features smooth zippers, card slots, and a sleek compact size to easily fit inside your bag."
  },
  {
    id: 7,
    name: "Minimalist Pink Strap Watch",
    price: 79,
    image: "https://tse4.mm.bing.net/th/id/OIP.wdTyUodJcw2ky5KK1Qj6UgHaJ3?pid=Api&h=220&P=0",
    category: "Watches",
    desc: "Keep track of your precious moments with this gorgeous minimalist watch. Features a comfortable pastel pink leather strap and a clean aesthetic rose-gold dial finish."
  },
  {
    id: 8,
    name: "Crystal Pink Earrings",
    price: 25,
    image: "https://tse2.mm.bing.net/th/id/OIP.tn1ownlLhprKgjqxN7NRTwHaJ4?pid=Api&h=220&P=0",
    category: "Jewelry",
    desc: "Catch everyone's eye with these stunning crystal pink drop earrings. Lightweight design featuring premium glowing pink crystals that add instant charm to any party outfit."
  },
  {
    id: 9,
    name: "Aesthetic Pink Journal Set",
    price: 18,
    image: "https://tse1.mm.bing.net/th/id/OIP.uQRXGWSvyIo9YtdmXgJ_nAHaIf?pid=Api&h=220&P=0",
    category: "Stationery",
    desc: "An adorable aesthetic pink journal notebook paired with matching pretty stationery accessories. Ideal for writing down your sweet memories, ideas, or daily tasks."
  }
];

function Product() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  // URL se id nikal kar product dhoondna
  const product = PRODUCTS_DATA.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Product Not Found!</h2>
        <Link to="/shop" className="bg-pink-500 text-white px-6 py-2 rounded-xl">Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000); 
  };

  return (
    <div className="bg-pink-50/20 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4">
        
        
        <Link to="/shop" className="inline-flex items-center text-pink-600 font-bold text-sm mb-6 hover:underline gap-1">
          ← Back to Shop
        </Link>

       
        <div className="bg-white rounded-3xl shadow-sm border border-pink-100 p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          
          
          <div className="flex items-center justify-center bg-pink-50/10 rounded-2xl p-4 border border-pink-50 overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full max-h-[450px] object-cover rounded-2xl shadow-sm hover:scale-105 transition-transform duration-300" 
            />
          </div>

          
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-pink-500 uppercase tracking-widest bg-pink-50 px-3 py-1 rounded-full">{product.category}</span>
              <h1 className="text-3xl md:text-4xl font-black text-gray-800 leading-tight">{product.name}</h1>
            </div>

            <div className="text-3xl font-black text-pink-600">
              ${product.price}
            </div>

            <hr className="border-pink-50" />

            <div className="space-y-2">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Description</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-medium">
                {product.desc}
              </p>
            </div>

            <hr className="border-pink-50" />

            
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-xl">🎀 Premium Quality</span>
              <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-xl">✨ Aesthetic Vibe</span>
              <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-xl">📦 Fast Delivery</span>
            </div>

           
            <button 
              onClick={handleAddToCart}
              className={`w-full md:w-auto font-bold px-8 py-3.5 rounded-xl shadow-sm transition-all duration-300 transform active:scale-95 text-center text-sm ${
                added 
                  ? 'bg-green-500 text-white' 
                  : 'bg-pink-500 hover:bg-pink-600 text-white'
              }`}
            >
              {added ? 'Added to Cart! ✓' : 'Add to Cart 🛍️'}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Product;