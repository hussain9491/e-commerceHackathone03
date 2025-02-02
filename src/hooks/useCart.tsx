import { useState, useEffect } from 'react';
import products from "../sanity/schemaTypes/products"
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
export const useCart = () => {
  const [cart, setCart] = useState<products[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: products) => {
    setCart([...cart, product]);
    toast.success('Added to cart!');
  };

  const removeFromCart = (productId: string) => {
    setCart(cart.filter(item => item._id !== productId));
    toast.error('Removed from cart!');
  };

  return { cart, addToCart, removeFromCart };
};