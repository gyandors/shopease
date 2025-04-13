"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <div className="group relative p-4 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      <Link href={`/product/${product.id}`} className="flex flex-col h-full">
        <div className="aspect-auto w-full overflow-hidden rounded-t-lg">
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
            className="object-cover object-center group-hover:opacity-75 transition-opacity duration-300"
          />
        </div>
        <div className="p-4 mt-auto">
          <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
            {product.title}
          </h3>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-lg font-semibold text-gray-900">
              ${product.price}
            </p>
            <div className="flex items-center">
              <span className="text-yellow-400">★</span>
              <span className="ml-1 text-sm text-gray-600">
                {product.rating.rate} ({product.rating.count})
              </span>
            </div>
          </div>
        </div>
      </Link>
      <button
        onClick={handleAddToCart}
        className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300"
        aria-label="Add to cart"
      >
        <ShoppingCartIcon className="h-5 w-5 text-gray-700" />
      </button>
    </div>
  );
};

export default ProductCard;
