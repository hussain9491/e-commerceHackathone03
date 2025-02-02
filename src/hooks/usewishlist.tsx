// app/hooks/useWishlist.tsx
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export interface Product {

    _id: string;
  
    name: string;
  
    price: number;
    imageUrl: string; // added imageUrl property

    // Add other properties as needed
  
  }
  
export const useWishlist = () => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
  }, []);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (product: Product) => {
    if (!wishlist.some(item => item._id === product._id)) {
      setWishlist([...wishlist, product]);
      toast.success('Added to wishlist!');
    }
  };

  const removeFromWishlist = (productId: string) => {
    setWishlist(wishlist.filter(item => item._id !== productId));
    toast.error('Removed from wishlist!');
  };

  return { wishlist, addToWishlist, removeFromWishlist };
};