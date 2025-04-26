// ProductListing.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useWishlist, Product } from '../../hooks/usewishlist';

const ProductListing = ({ products }: { products: Product[] }) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  return (
    <div>
      {products.map((product) => {
        // Use product.id as fallback if _id is not available
        const productId = product._id || product.id;
        const isInWishlist = wishlist.some(item => item._id === productId);
        
        return (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-transform transform hover:scale-105 relative"
          >
            <button
              onClick={() => isInWishlist ? removeFromWishlist(productId) : addToWishlist({...product, _id: productId})}
              className="absolute top-2 right-2 cursor-pointer text-red-500 hover:text-red-700"
            >
              {isInWishlist ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
            </button>
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={300}
              height={350}
              className="rounded-lg w-full h-56 object-cover"
            />
            <h3 className="text-lg font-semibold mt-4 text-gray-800 truncate">
              {product.name}
            </h3>
            <p className="text-gray-600 text-sm mt-2">${product.price}</p>

            {/* buttons Link to product details page */}
            <Link href={`/product_details/${product.id}`}>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
                View Details
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProductListing;
