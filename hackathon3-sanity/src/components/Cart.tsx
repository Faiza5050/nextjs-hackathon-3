import React, { useEffect } from "react";
import Image from "next/image";
import useCartStore from "@/store/useCartStore";
import { useRouter } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";

type UrlFor = {
  width: (width: number) => UrlFor;
  height: (height: number) => UrlFor;
  url: () => string;
};

const urlForWrapper = (source: string): UrlFor => {
  return urlFor(source) as unknown as UrlFor;
};

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    toastMessage,
    resetToast,
  } = useCartStore();
  const router = useRouter();

  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(resetToast, 3000);
    return () => clearTimeout(timer);
  }, [toastMessage, resetToast]);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cartItems.map((item) => {
              console.log("Item Data:", item);

              let imageUrl = "/placeholder.jpg";

              if (typeof item.image === "string" && item.image.startsWith("http")) {
                imageUrl = item.image;
              }
              else if (item.image && typeof item.image === "object" && "asset" in item.image) {
                imageUrl = urlForWrapper(item.image.asset._ref).width(200).height(200).url();
              }
              else if (Array.isArray(item.image) && item.image.length > 0) {
                if (typeof item.image[0] === "object" && "asset" in item.image[0]) {
                  imageUrl = urlForWrapper(item.image[0].asset._ref).width(200).height(200).url();
                }
              }

              console.log("Final Image URL:", imageUrl);

              return (
                <li
                  key={item.id}
                  className="border p-4 rounded-lg flex justify-between items-center"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 relative">
                      <Image
                        src={imageUrl}
                        alt={item.title || "Product Image"}
                        fill
                        className="rounded-lg object-cover"
                        priority
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-gray-600">${item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, Math.max(1, item.quantity - 1))
                      }
                      className="bg-gray-300 px-3 py-1 rounded-md hover:bg-gray-400 transition"
                    >
                      -
                    </button>
                    <span className="text-sm font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-300 px-3 py-1 rounded-md hover:bg-gray-400 transition"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 font-bold hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="mt-6 flex justify-between items-center">
            <p className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</p>
            <button
              onClick={clearCart}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Clear Cart
            </button>
          </div>
          <button
            onClick={() => router.push("/checkout")}
            className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg w-full hover:bg-blue-700 transition"
          >
            Proceed to Checkout
          </button>
        </div>
      )}

      {toastMessage && (
        <div className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg">
          {toastMessage}
        </div>
      )}
    </div>
  );
};

export default Cart;
