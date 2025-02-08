"use client"; // Ye line zaroori hai taaki ye component client-side par run ho

import React from "react";
import useCartStore from "@/store/useCartStore"; // Zustand Cart Store import karein

// Define the Products type directly in this file if it doesn't exist
interface Products {
  _id: string;
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  quantity: number; 
}

interface AddToCartButtonProps {
  product: Products;
  className?: string;
}

const AddToCartButton = ({ product, className }: AddToCartButtonProps) => {
  const { cartItems, addToCart } = useCartStore(); // Zustand ka use kar ke addToCart function le rahe hain

  const handleAddToCart = () => {
    addToCart({
      id: product._id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
