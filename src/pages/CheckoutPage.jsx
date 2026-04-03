import React from "react";

export default function CheckoutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <p>Payment methods (mock) and order confirmation will appear here.</p>
      <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        Confirm Order
      </button>
    </div>
  );
}