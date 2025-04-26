'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from 'react-toastify';

export interface WishlistProduct {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
}

interface WishlistContextType {
  wishlist: WishlistProduct[];
  addToWishlist: (product: WishlistProduct) => void;
  removeFromWishlist: (productId: string) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<WishlistProduct[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  // Load wishlist from localStorage on mount
  useEffect(() => {
    setIsMounted(true);
    const savedWishlist = localStorage.getItem('wishlist');
    setWishlist(savedWishlist ? JSON.parse(savedWishlist) : []);
  }, []);

  // Save to localStorage whenever wishlist changes
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }
  }, [wishlist, isMounted]);

  const addToWishlist = (product: WishlistProduct) => {
    setWishlist(prev => {
      const existingItem = prev.find(item => item._id === product._id);
      if (existingItem) {
        return prev;
      }
      return [...prev, product];
    });
    toast.success('Added to wishlist! ❤️');
  };

  const removeFromWishlist = (productId: string) => {
    setWishlist(prev => prev.filter(item => item._id !== productId));
    toast.error('Removed from wishlist ❌');
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}; 