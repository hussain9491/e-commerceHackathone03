// app/components/ProductCard.tsx
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../../context/Cartcontext';
import { useWishlist } from '../../hooks/usewishlist';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

export interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  id: string;
  stockLevel: number;
  description: string;
  category: string;
  isFeaturedProduct: boolean;
  imagePath: string;
  discountPercentage: number;
  image: string;
  brand: string;
  specifications: string[];
  quantity: number;
}

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const isInWishlist = wishlist.some(item => item._id === product._id);

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-transform transform hover:scale-105">
      <div className="relative h-48 w-full">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>
      
      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={() => isInWishlist ? removeFromWishlist(product._id) : addToWishlist(product)}
          className="text-red-500 hover:text-red-700"
        >
          {isInWishlist ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
        </button>

        <button
          onClick={() => addToCart({ 
            ...product, 
            cartItemId: `${product._id}-${Date.now()}`,
            quantity: 1 
          })}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Add to Cart
        </button>

        <Link 
          href={`/product_details/${product._id}`}
          className="text-blue-500 hover:text-blue-700"
        >
          Details
        </Link>
      </div>
    </div>
  );
}


