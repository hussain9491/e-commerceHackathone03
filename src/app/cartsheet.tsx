// // app/components/CartSheet.tsx
// "use client";

// import { Button } from "@/components/ui/button";
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import Link from "next/link";
// import { useCart } from "../../src/hooks/useCart";
// import { AiOutlineClose } from "react-icons/ai";
// import { FaShoppingCart } from "react-icons/fa";
// import Image from "next/image";
// export function CartSheet() {
//   const { cart, removeFromCart, updateQuantity } = useCart();

//   const handleDecrement = (item: any) => {
//     if (item.quantity > 1) {
//       updateQuantity(item._id, item.quantity - 1);
//     }
//   };

//   const handleIncrement = (item: any) => {
//     updateQuantity(item._id, item.quantity + 1);
//   };

//   return (
//     <Sheet>
//       {/* Cart Open Button */}
//       <SheetTrigger asChild>
//         <button ><FaShoppingCart className="relative" size={20}/></button>
//       </SheetTrigger>

//       {/* Cart Sidebar */}
//       <SheetContent className="w-[350px]">
//         {/* Cart Header with Close Button */}
//         <SheetHeader className="flex flex-row justify-between items-center">
//           <SheetTitle className="text-lg font-semibold">Your Cart</SheetTitle>
//           <SheetClose asChild>
//             <button className="p-2 text-gray-600 hover:text-black">
//               <AiOutlineClose size={20} />
//             </button>
//           </SheetClose>
//         </SheetHeader>

//         {/* Cart Items */}
//         <div className="py-4 space-y-4 max-h-[400px] overflow-y-auto">
//           {cart.length === 0 ? (
//             <div className="text-center text-gray-500">Your cart is empty</div>
//           ) : (
//             cart.map((product: any) => (
//               <div key={product._id} className="border-b pb-2">
//                 <div className="flex justify-between items-center">
//                   {/* Product Image & Details */}
//                   <div className="flex items-center space-x-3">
//                     <Image
//                       src={product.imageUrl}
//                       alt={product.name}
//                       className="w-16 h-16 object-cover rounded"
//                     />
//                     <div>
//                       <h3 className="font-semibold text-sm">{product.name}</h3>
//                       <p className="text-xs text-gray-600">${product.price}</p>
//                     </div>
//                   </div>

//                   {/* Remove Button */}
//                   <button
//                     onClick={() => removeFromCart(product._id)}
//                     className="text-red-500 text-sm"
//                   >
//                     Remove
//                   </button>
//                 </div>

//                 {/* Quantity Controls */}
//                 <div className="flex items-center justify-center mt-2 space-x-2">
//                   <button
//                     onClick={() => handleDecrement(product)}
//                     className="px-2 py-1 border rounded disabled:opacity-50"
//                     disabled={product.quantity <= 1}
//                   >
//                     -
//                   </button>
//                   <span className="px-2">{product.quantity}</span>
//                   <button
//                     onClick={() => handleIncrement(product)}
//                     className="px-2 py-1 border rounded"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         {/* Checkout Button */}
//         <div className="px-4 py-2 border-t">
//           <Link href="/cart">
//           <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
//             CHECK OUT
//           </Button>
//           </Link>
//         </div>
//       </SheetContent>
//     </Sheet>
//   );
// }
'use client';

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
// import { useCart } from "../../src/hooks/useCart";
import { AiOutlineClose } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";

import { useCart } from '../context/Cartcontext';
export function CartSheet() {
    // const { addToCart } = useCart(); // <-- HERE
    
    const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
      console.log('cart items' ,cart);

  const handleQuantityChange = (productId: string, delta: number) => {
    const item = cart.find(item => item._id === productId);
    if (!item) return;
    
    const newQuantity = item.quantity + delta;
    if (newQuantity > 0) {
      updateQuantity(productId, newQuantity);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative">
          <FaShoppingCart size={20} />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </button>
      </SheetTrigger>

      <SheetContent className="w-[350px] sm:w-[400px]">
      <SheetHeader className="flex flex-row justify-between items-center mb-4">
          <SheetTitle className="text-xl">Shopping Cart</SheetTitle>
          <SheetClose asChild>
            <Button variant="ghost" size="icon">
              {/* <AiOutlineClose size={18} /> */}
            </Button>
          </SheetClose>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto pr-2 pb-4">
  {cart.length === 0 ? (
    <div className="text-center text-gray-500 mt-8">
      Your cart is empty
    </div>
  ) : (
    cart.map((product) => (
      <div 
        key={product._id} // 🔑 Unique key here
        className="border-b py-4"
      >
        <div className="flex justify-between items-start gap-4">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={80}
            height={80}
            className="rounded-lg object-cover"
          />


                  <div className="flex-1">
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-sm text-gray-600">
                    ${(Number(product.price) || 0).toFixed(2)}                    </p>
                    
                    <div className="flex items-center gap-3 mt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuantityChange(product._id, -1)}
                        disabled={product.quantity <= 1}
                      >
                        -
                      </Button>
                      <span className="w-8 text-center">
                        {product.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuantityChange(product._id, 1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFromCart(product._id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>

        
  <div className="border-t pt-4 mt-auto">
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Total:</span>
            <span className="font-semibold">
              ${cartTotal.toFixed(2)}
            </span>
          </div>
          
            <Button className="w-full bg-green-600 hover:bg-green-700">
              Proceed to Checkout
            </Button>
          
        </div>
      </SheetContent>
    </Sheet>
  );
}