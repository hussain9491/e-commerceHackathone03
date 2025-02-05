



// import { client } from '@/sanity/sanityClient';
// import { productById } from '@/sanity/lib/query';
// import Image from 'next/image';
// import Header from '@/app/components/Header';
// import { ProductActions } from '../../components/ProductActions';
// import { AddToCartButton } from '@/app/components/AddtoButton';
// interface SanityProduct {
//   _id: string;
//   id: string;
//   name: string;
//   imageUrl: string;
//   price: number;
//   description: string;
//   features: string[];
//   rating: number;
//   specifications: string[];
//   stockLevel: number;
//   category: string;
//   isFeaturedProduct: boolean;
//   isOnSale: boolean;
//   salePrice: number;
//   tags: string[];
//   imagePath: string;
//   discountPercentage: number;
//   image: string;
//   brand: string;
//   quantity: number[];
  // cartItemId: string; // Added cartItemId property
// }

// export default async function ProductDetailPage(
//   {
  
//   params,
// }: {
//   params: { id: string };
// }) {
//   const product: SanityProduct | null = await client.fetch(productById, {
//     id: params.id,
//   });
//   if (!product) {
    
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p className="text-xl text-red-500">Product not found</p>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <Header />
//       <div className="max-w-6xl mx-auto px-4 py-8">
//         <div className="grid md:grid-cols-2 gap-8 bg-white p-6 rounded-xl shadow-lg">
//           <div className="relative aspect-square rounded-xl overflow-hidden">
//             <Image
//               src={product.imageUrl}
//               alt={product.name}
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>

//           <div className="space-y-6">
//             <h1 className="text-3xl font-bold">{product.name}</h1>
//             <p className="text-2xl font-semibold text-primary">
//             ${(Number(product.price) || 0).toFixed(2)}

//             </p>
            
//               {/* Specifications Section */}
//               <div className="space-y-4">
//                 <h3 className="text-md text-gray-400 font-semibold">Size</h3>
//                 <div className="flex items-center space-x-6 ">
                   
//                 <div className='h-8 w-9 text-sm bg-customYellow text-amber-900 rounded-sm text-center font-semibold'>
//                      <button className='pt-1'>L</button>
//                 </div>
//                 <div className='h-8 w-9 text-sm bg-pink-50 text-amber-900 rounded-sm text-center font-semibold'>
//                      <button className='pt-1'>XL</button>
//                 </div>
//                 <div className='h-8 w-9 text-sm bg-pink-50 text-amber-900 rounded-sm text-center font-semibold'>
//                      <button className='pt-1'>XS</button>
//                   </div>
//                 </div>
//               </div>


// {/* <AddToCartButton product={product}/> */}

//             <div className="prose max-w-none">
//               <h2 className="text-xl font-semibold mb-2">Description</h2>
//               <p className="text-gray-600">{product.description}</p>
//             </div>
// {/* Add to cart cart button  */}




// <div className="flex space-x-4 mt-8">
//                 <div className="flex-1 bg-gray-900  text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors mt-12">
//                 <AddToCartButton product={product}/>
//                 </div>
//                 <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors mt-12">
//                   Buy Now
//                 </button>
//               </div>
            






//             {product.features?.length > 0 && (
//               <div className="space-y-2">
//                 <h3 className="text-xl font-semibold">Features</h3>
//                 <ul className="list-disc pl-6 space-y-1">
//                   {product.features.map((feature, index) => (
//                     <li key={index} className="text-gray-600">
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { client } from '@/sanity/sanityClient';
import { productById } from '@/sanity/lib/query';
import Image from 'next/image';
import Header from '@/app/components/Header';
import { AddToCartButton } from '@/app/components/AddtoButton';

interface SanityProduct {
  _id: string;
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  features: string[];
  rating: number;
  specifications: string[];
  stockLevel: number;
  category: string;
  isFeaturedProduct: boolean;
  isOnSale: boolean;
  salePrice: number;
  tags: string[];
  imagePath: string;
  discountPercentage: number;
  image: string;
  brand: string;
  quantity: number[];
  cartItemId: string; 
}

export default async function ProductDetailPage(
  { params: promisedParams }: { params: Promise<{ id: string }> }
) {
  // "params" promise ko await kar ke uska value hasil karega
  const { id } = await promisedParams;

  // Sanity CMS se product fetch kar rahe hain
  const product: SanityProduct | null = await client.fetch(productById, {
    id: id,
  });

  // Agar product nahi milta, to "Product not found" message show karega
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-500">Product not found</p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 bg-white p-6 rounded-xl shadow-lg">
          {/* Product Image Section */}
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Product Details Section */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-2xl font-semibold text-primary">
              ${(Number(product.price) || 0).toFixed(2)}
            </p>

            {/* Specifications Section */}
            <div className="space-y-4">
              <h3 className="text-md text-gray-400 font-semibold">Size</h3>
              <div className="flex items-center space-x-6">
                <div className="h-8 w-9 text-sm bg-customYellow text-amber-900 rounded-sm text-center font-semibold">
                  <button className="pt-1">L</button>
                </div>
                <div className="h-8 w-9 text-sm bg-pink-50 text-amber-900 rounded-sm text-center font-semibold">
                  <button className="pt-1">XL</button>
                </div>
                <div className="h-8 w-9 text-sm bg-pink-50 text-amber-900 rounded-sm text-center font-semibold">
                  <button className="pt-1">XS</button>
                </div>
              </div>
            </div>

            {/* Description Section */}
            <div className="prose max-w-none">
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="text-gray-600">{product.description}</p>
            </div>

            
              
{/* Add to cart cart button  */}




<div className="flex space-x-4 mt-8">
                <div className="flex-1 bg-gray-900  text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors mt-12">
                <AddToCartButton product={{ ...product, cartItemId: product._id }} />

                {/* <AddToCartButton product={product}/> */}
                </div>
                <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors mt-12">
                  Buy Now
                </button>
              </div>
              
                          </div>

            {/* Features Section */}
            {product.features?.length > 0 && (
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Features</h3>
                <ul className="list-disc pl-6 space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-gray-600">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
  );
}
