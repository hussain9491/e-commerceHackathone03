
// app/components/Header.tsx (updated)
"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaUser, FaSearch, FaHeart, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useCart } from '../../hooks/useCart';
import { useWishlist } from '../../hooks/usewishlist';


export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { cart } = useCart();
  const { wishlist } = useWishlist();


  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/shop?query=${encodeURIComponent(searchTerm.trim())}`);
      setShowSearch(false);
      setSearchTerm('');
    }
  };
  
  return (
    <header className="p-4 h-20 items-center relative">
      <div className="container mx-auto flex justify-between pt-3 items-center">
        {/* Hamburger Menu (Mobile Only) */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black hover:text-gray-700"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-16 justify-center pl-[40%]">
        <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          {/* ... existing nav links ... */}
        </nav>

        {/* Icons */}
        <div className="flex space-x-8 pr-2 text-black items-center">
          <Link href="/account"><FaUser className="hover:text-gray-700 cursor-pointer" size={20} /></Link>
          {showSearch ? (
            <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
              <input
                type="text"
                value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
                className=" p-1 border rounded text-black"
                autoFocus
                onBlur={() => setShowSearch(false)}
                placeholder="Search product..."
              />
            </form>
          ) : (
            <button onClick={() => setShowSearch(true)} title="Search">
              <FaSearch className="hover:text-gray-700 cursor-pointer" size={20} />
            </button>
          )}
          <Link href="/wishlist" className="relative">
          
            {/* ... wishlist icon ... */}

            <FaHeart className="hover:text-gray-700 cursor-pointer" size={20} />
             {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {wishlist.length}
              </span>
            )}
          </Link>
          <Link href="/cart" className="relative">
            {/* ... cart icon ... */}
            <FaShoppingCart className="hover:text-gray-700 cursor-pointer" size={20} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* ... existing mobile menu ... */}
      <div className={`md:hidden absolute top-20 left-0 w-full bg-white shadow-lg transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <nav className="flex flex-col space-y-4 p-4">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-black hover:text-gray-700 hover:underline">Home</Link>
          <Link href="/shop" onClick={() => setIsMenuOpen(false)} className="text-black hover:text-gray-700 hover:underline">Shop</Link>
          <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="text-black hover:text-gray-700 hover:underline">Blog</Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-black hover:text-gray-700 hover:underline">Contact</Link>
        </nav>
      </div>
    </header>
  );
}