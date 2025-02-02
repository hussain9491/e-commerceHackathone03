// app/wishlist/page.tsx
import { useWishlist } from '../../hooks/usewishlist';
import Header from '../components/Header';
import Image from 'next/image';
import Link from "next/link";
export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">Your Wishlist</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div key={item._id} className="bg-white rounded-lg shadow-lg p-6">
              <div className="relative h-48 w-full">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4">{item.name}</h3>
              <p className="text-lg font-bold mt-2">${item.price}</p>
              <div className="mt-4 flex justify-between items-center">
                <button
                  onClick={() => removeFromWishlist(item._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
                <Link 
                  href={`/product_details/${item._id}`}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  View Product
                </Link>
              </div>
            </div>
          ))}
          
          {wishlist.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">Your wishlist is empty</p>
              <Link href="/shop" className="mt-4 inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800">
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}