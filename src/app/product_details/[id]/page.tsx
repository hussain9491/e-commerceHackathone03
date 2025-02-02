
import { client } from '@/sanity/sanityClient';
import { productById } from '@/sanity/lib/query';
import Image from 'next/image';
import { Star } from 'lucide-react';
import Header from '@/app/components/Header';
import { FaStar } from 'react-icons/fa';

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  features: string[]; // Add this to your schema
  rating: number;     // Add this to your schema
  specifications: string;
}

const ProductDetailPage = async ({ params }: { params: { id: string } }) => {

  const product: Product | null = await client.fetch(productById, {
    id: params.id,
  });
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-500">Product not found</p>
      </div>
    );
  }

  const renderRating = () => {
    return Array.from({ length: 5 }, (_, i) => (
      
      <Star
      key={i}
      className={`w-5 h-5 ${i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
     
    ));    
  };

  return (
    <div>
      <Header />
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Product Image Section */}
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={product.imageUrl || '/placeholder-sofa.jpg'}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Product Details Section */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                <div className="flex items-center space-x-2">
                  <FaStar className="text-yellow-400 h-4 w-5" />
                  <FaStar className="text-yellow-400 h-4 w-5" />
                  <FaStar className="text-yellow-400 h-4 w-5" />
                  <FaStar className="text-yellow-400 h-4 w-5" />
                  <span className='text-gray-400'>(reviews)</span>                </div>
              </div>

              {/* Price Section */}
              <div className="text-2xl font-bold text-gray-900">
      
              ${Number(product.price).toFixed(2)}    
                </div>

              {/* Description Section */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Description</h2>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
{/* Features Section */}
{product.features && product.features.length > 0 && (
  <div className="space-y-4">
    <h3 className="text-xl font-semibold">Additional Information</h3>
    <ul className="list-disc pl-6 space-y-2">
      {product.features.map((feature, index) => (
        <li key={index} className="text-gray-600">
          {feature}
        </li>
      ))}
    </ul>
  </div>
)}

              {/* Specifications Section */}
              <div className="space-y-4">
                <h3 className="text-md text-gray-400 font-semibold">Size</h3>
                <div className="flex items-center space-x-6 ">
                   
                <div className='h-8 w-9 text-sm bg-customYellow text-amber-900 rounded-sm text-center font-semibold'>
                     <button className='pt-1'>L</button>
                </div>
                <div className='h-8 w-9 text-sm bg-pink-50 text-amber-900 rounded-sm text-center font-semibold'>
                     <button className='pt-1'>XL</button>
                </div>
                <div className='h-8 w-9 text-sm bg-pink-50 text-amber-900 rounded-sm text-center font-semibold'>
                     <button className='pt-1'>XS</button>
                </div>



                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 mt-8">
                <button className="flex-1 bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors mt-12">
                  Add to Cart
                </button>
                <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors mt-12">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
};

export default ProductDetailPage;