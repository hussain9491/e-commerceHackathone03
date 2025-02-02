// ProductListing.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
}

const ProductListing = ({ products }: { products: Product[] }) => {
  return (
    <div >
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-transform transform hover:scale-105"
        >
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


          {/* // buttons Link  to product details page */}
          <Link href={`/product_details/${product.id}`}>
          <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
            View Details
          </button></Link>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
