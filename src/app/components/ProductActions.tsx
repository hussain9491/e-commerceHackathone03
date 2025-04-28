'use client';

import { useCart } from '../../context/Cartcontext';
import { Button } from '@/components/ui/button';

interface ProductActionsProps {
  product: {
    _id: string;
    name: string;
    price: number;
    imageUrl: string;
  };
}

export const ProductActions = ({ product }: ProductActionsProps) => {
  const { addToCart } = useCart();

  return (
    <div className="flex gap-4">
      <Button
        onClick={() => addToCart({
          ...product,
          cartItemId: `${product._id}-${Date.now()}`,
          quantity: 1
        })}
        className="flex-1 bg-primary hover:bg-primary-dark"
      >
        Add to Cart
      </Button>
      <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
        Buy Now
      </Button>
    </div>
  );
};
