'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from 'react-toastify';


export interface CartProduct {

  _id: string;

  name: string;

  price: number;

  imageUrl: string;

  quantity: number;

  cartItemId: string; // Add cartItemId property

}

interface CartContextType {
  cart: CartProduct[];
  addToCart: (product: CartProduct) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  cartTotal: number;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartProduct[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    setIsMounted(true);
    const savedCart = localStorage.getItem('cart');
    setCart(savedCart ? JSON.parse(savedCart) : []);
  }, []);

  // Save to localStorage whenever cart changes
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart, isMounted]);

  const addToCart = (product: CartProduct) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.cartItemId === product.cartItemId);
      if (existingItem) {
        return prev.map(item =>
          item.cartItemId === product.cartItemId
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prev, product];
    });
    toast.success('Added to cart! 🛒');
  };

  const removeFromCart = (cartItemId: string) => {
    setCart(prev => prev.filter(item => item.cartItemId !== cartItemId));
    toast.error('Removed from cart ❌');
  };

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity < 1) return;
    setCart(prev =>
      prev.map(item =>
        item.cartItemId === cartItemId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  const cartTotal = cart.reduce(
    (total, item) => total + (Number(item.price) * item.quantity),
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartTotal,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};