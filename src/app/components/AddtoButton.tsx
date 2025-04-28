// // app/components/AddToCartButton.tsx
// 'use client';

// import { useCart } from '../../context/Cartcontext';

// export interface Product {

//     _id: string;
    
//     name: string;
  
//     price: number;
  
//     imageUrl: string;
  
//     id: string;
  
//     stockLevel: number;
  
//     description: string;
  
//     category: string;
  
//     isFeaturedProduct: boolean;
  
//     imagePath: string;
  
//     discountPercentage: number;
  
//     image: string;
  
//     brand: string;
  
//     specifications: string[];
  
//     quantity: number[];
//     cartItemId: string;
//   }
// export const AddToCartButton = ({ product }: { product: Product }) => {
//   const { addToCart } = useCart(); // <-- HERE

//   return (
//     <button
//   onClick={() =>
//     addToCart({
//       _id: product._id,
//       name: product.name,
//       price: product.price,
//       imageUrl: product.imageUrl,
//       quantity: 1,
//       cartItemId: product._id, // Ensure cartItemId is passed
//     })
//   }
//   className="ml-12"
// >
//   Add to Cart
// </button>

//   );
// };
'use client';

import { useCart } from '../../context/Cartcontext';
import { v4 as uuidv4 } from 'uuid';

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
  cartItemId: string;
}

export const AddToCartButton = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() =>
        addToCart({
          _id: product._id,
          name: product.name,
          price: product.price,
          imageUrl: product.imageUrl,
          quantity: 1,
          cartItemId: uuidv4() // Generate a unique cartItemId
        })
      }
      className="ml-12"
    >
      Add to Cart
    </button>
  );
};
