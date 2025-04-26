
'use client';

import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
// hooks/useCart.ts
interface CartProduct {
  _id: string;       // Product ID from Sanity
  cartItemId: string; // Unique ID for each cart entry
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}
export const useCart = () => {
  const [cart, setCart] = useState<CartProduct[]>([]);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: CartProduct) => {
    const existingItem = cart.find(item => item._id === product._id);
    
    if (existingItem) {
      setCart(cart.map(item =>
        item._id === product._id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    toast.success('Added to cart! 🛒');
  };

  const removeFromCart = (productId: string) => {
    setCart(cart.filter(item => item._id !== productId));
    toast.error('Removed from cart ❌');
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) return;
    setCart(cart.map(item =>
      item._id === productId ? { ...item, quantity } : item
    ));
  };

  const cartTotal = cart.reduce(
    (total, item) => total + (item.price * item.quantity),
    0
  );

  return { cart, addToCart, removeFromCart, updateQuantity, cartTotal };
};

