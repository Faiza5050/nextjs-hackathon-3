"use client";

import { useState } from "react";
import Image from "next/image";
import useCartStore from "@/store/useCartStore";

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCartStore();
  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
  });
  const [orderStatus, setOrderStatus] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit_card");

  const totalPrice = cartItems.reduce(
    (total: number, item: { price: number; quantity: number }) =>
      total + item.price * item.quantity,
    0
  );

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingDetails({ ...shippingDetails, [name]: value });
  };

  const handlePayment = async () => {
    setOrderStatus("Processing order...");

    const orderData = {
      cartItems: cartItems.map(
        (item: {
          id: string;
          title: string;
          quantity: number;
          price: number;
          image: string | { asset: { _ref: string } } | { asset: { _ref: string } }[];
        }) => ({
          title: item.title,
          quantity: item.quantity,
          price: item.price,
          imageUrl: item.image,
        })
      ),
      shippingDetails,
      totalPrice,
    };

    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();
      if (response.ok) {
        setOrderStatus("Order Placed Successfully!");
        clearCart();
      } else {
        setOrderStatus(`Failed to place order: ${data.error}`);
      }
    } catch (error) {
      console.log(error);
      setOrderStatus("An error occurred while placing the order.");
    }
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-[1321px] mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Forms */}
          <div className="lg:col-span-2 space-y-8">
            {/* Shipping Details */}
            <div className="bg-white rounded-xl shadow-[rgba(0,_0,_0,_0.4)_0px_12px_40px] p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Shipping Information
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={shippingDetails.name}
                  onChange={handleShippingChange}
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                />
                <input
                  type="text"
                  name="address"
                  value={shippingDetails.address}
                  onChange={handleShippingChange}
                  placeholder="Street Address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="city"
                    value={shippingDetails.city}
                    onChange={handleShippingChange}
                    placeholder="City"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                  />
                  <input
                    type="text"
                    name="zipCode"
                    value={shippingDetails.zipCode}
                    onChange={handleShippingChange}
                    placeholder="ZIP / Postal Code"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                  />
                </div>
                <input
                  type="text"
                  name="country"
                  value={shippingDetails.country}
                  onChange={handleShippingChange}
                  placeholder="Country"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-700">Payment Method</label>
                <select
                  className="w-full p-2 border rounded-md"
                  required
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <option value="credit_card">Credit/Debit Card</option>
                  <option value="paypal">PayPal</option>
                  <option value="cash_on_delivery">Cash on Delivery</option>
                </select>
              </div>

              {/* Show Bank Details Only for Credit/Debit Card */}
              {paymentMethod === "credit_card" && (
                <div className="bg-gray-100 p-4 rounded-md">
                  <h3 className="text-lg font-semibold mb-2">Bank Details</h3>
                  <div className="space-y-3">
                    {/* Card Number */}
                    <div>
                      <label className="block text-gray-700">Card Number</label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded-md"
                        placeholder="1234 5678 9012 3456"
                        required
                      />
                    </div>

                    {/* Expiry & CVV */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 border rounded-md"
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700">CVV</label>
                        <input
                          type="password"
                          className="w-full p-2 border rounded-md"
                          placeholder="***"
                          required
                        />
                      </div>
                    </div>

                    {/* Card Holder Name */}
                    <div>
                      <label className="block text-gray-700">
                        Card Holder Name
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded-md"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-[rgba(0,_0,_0,_0.4)_0px_12px_40px] p-6 sticky top-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Order Summary
              </h2>
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center py-3 border-b border-gray-100"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-lg bg-gray-100 overflow-hidden">
                        <Image
                          src={typeof item.image === 'string' ? item.image : Array.isArray(item.image) ? item.image[0].asset._ref : item.image.asset._ref}
                          alt={item.title}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-gray-900 font-medium">
                          {item.title}
                        </p>
                        <p className="text-gray-500 text-sm">
                          Qty: {item.quantity}
                        </p>
                      </div>
                    </div>
                    <span className="text-gray-900 font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between text-lg font-semibold text-gray-900 pt-3">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handlePayment}
                className="w-full mt-8 bg-teal-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all duration-200"
              >
                Place Order
              </button>

              {orderStatus && (
                <div className="mt-4 text-center text-sm font-medium text-teal-600">
                  {orderStatus}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
