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
import { AiOutlineClose } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import { useWishlist } from "../context/WishlistContext";

export function WishlistSheet() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative">
          <FaHeart size={20} />
          {wishlist.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
              {wishlist.length}
            </span>
          )}
        </button>
      </SheetTrigger>

      <SheetContent className="w-[350px] sm:w-[400px]">
        <SheetHeader className="flex flex-row justify-between items-center mb-4">
          <SheetTitle className="text-xl">Wishlist</SheetTitle>
          <SheetClose asChild>
            <Button variant="ghost" size="icon">
              <AiOutlineClose size={18} />
            </Button>
          </SheetClose>
        </SheetHeader>

        <div className="flex flex-col gap-4">
          {wishlist.length === 0 ? (
            <div className="text-center text-gray-500 mt-8">
              Your wishlist is empty
            </div>
          ) : (
            wishlist.map((product) => (
              <div
                key={product._id}
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
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFromWishlist(product._id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
} 