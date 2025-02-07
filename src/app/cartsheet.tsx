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

import { useCart } from "../context/Cartcontext";

export function CartSheet() {
  // useCart hook se cart related functions aur data le rahe hain.
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  console.log("cart items", cart);

  const handleQuantityChange = (productId: string, delta: number) => {
    const item = cart.find((item) => item._id === productId);
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
              {/* Agar close icon chahiye to AiOutlineClose uncomment karen */}
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
            cart.map((product, index) => (
              <div
                key={product._id ? product._id : index} // Unique key prop added
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
                      ${(Number(product.price) || 0).toFixed(2)}
                    </p>
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
            <span className="font-semibold">${cartTotal.toFixed(2)}</span>
          </div>


          <Button className="w-full bg-green-600 hover:bg-green-700">
            <a href="/cart">
            Proceed to Checkout </a>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
