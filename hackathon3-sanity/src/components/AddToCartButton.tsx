"use client";

import React from "react";
import useCartStore from "@/store/useCartStore";

interface Product {
  _id: string;
  title: string;
  description: string;
  image: { asset: { _ref: string } } | { asset: { _ref: string } }[] | string;
  price: number;
}

interface AddToCartButtonProps {
  product: Product;
  className?: string;
}

const AddToCartButton = ({ product, className }: AddToCartButtonProps) => {
  const { addToCart, toastMessage, resetToast } = useCartStore();

  const handleAddToCart = () => {
    addToCart({
      id: product._id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
    });

    setTimeout(() => {
      resetToast(); // Hide message after 3 seconds
    }, 3000);
  };

  return (
    <div>
      <button
        onClick={handleAddToCart}
        className={`bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all ${className}`}
      >
        Add to Cart
      </button>
      {toastMessage && (
        <div className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg">
          {toastMessage}
        </div>
      )}
    </div>
  );
};

export default AddToCartButton;
