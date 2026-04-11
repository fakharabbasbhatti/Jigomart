import React, { useState } from "react";

export default function CheckoutPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    paymentMethod: "card",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order submitted:", form);
    alert("Order confirmed! 🎉");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Customer Info */}
        <div className="bg-white shadow-md rounded-2xl p-5 space-y-4">
          <h2 className="text-xl font-semibold">Customer Information</h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <textarea
            name="address"
            placeholder="Shipping Address"
            value={form.address}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
            required
          />
        </div>

        {/* Payment Method */}
        <div className="bg-white shadow-md rounded-2xl p-5 space-y-4">
          <h2 className="text-xl font-semibold">Payment Method</h2>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="paymentMethod"
              value="card"
              checked={form.paymentMethod === "card"}
              onChange={handleChange}
            />
            Credit / Debit Card
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="paymentMethod"
              value="cod"
              checked={form.paymentMethod === "cod"}
              onChange={handleChange}
            />
            Cash on Delivery
          </label>
        </div>

        {/* Order Summary */}
        <div className="bg-white shadow-md rounded-2xl p-5">
          <h2 className="text-xl font-semibold mb-3">Order Summary</h2>
          <p className="flex justify-between">
            <span>Items Total</span>
            <span>$100</span>
          </p>
          <p className="flex justify-between">
            <span>Shipping</span>
            <span>$10</span>
          </p>
          <p className="flex justify-between font-bold text-lg mt-2">
            <span>Total</span>
            <span>$110</span>
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
        >
          Confirm Order
        </button>
      </form>
    </div>
  );
}