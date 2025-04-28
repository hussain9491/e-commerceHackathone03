import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { CartProvider } from '../context/Cartcontext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';
import { WishlistProvider } from "../context/WishlistContext";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Your Store',
  description: 'E-commerce Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WishlistProvider>
          <CartProvider>
            {children} 
            <ToastContainer position="bottom-right" />
          </CartProvider>
        </WishlistProvider>
        <Footer/>
      </body>
    </html>
  );
}