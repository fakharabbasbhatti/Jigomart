import React, { useMemo, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../../src/features/cart/cartSlice";

import QuantitySelector from "../../src/component/comman/QuantitySelector";

export default function CartPage() {
  const cartItems = useSelector(
    (state) => state.cart.cartItems || []
  );

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    paymentMethod: "cod",
  });

  const [errors, setErrors] = useState({});
  const [orderPlaced, setOrderPlaced] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleQuantityChange = useCallback(
    (id, qty) => {
      const safeQty = Number(qty);

      if (safeQty <= 0) {
        dispatch(removeFromCart(id));
        return;
      }

      dispatch(updateQuantity({ id, quantity: safeQty }));
    },
    [dispatch]
  );

  const handleRemove = useCallback(
    (id) => {
      dispatch(removeFromCart(id));
    },
    [dispatch]
  );

  const total = useMemo(() => {
    return cartItems.reduce(
      (acc, item) =>
        acc +
        Number(item.price || 0) *
          Number(item.quantity || 0),
      0
    );
  }, [cartItems]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOrder = () => {
    if (!validateForm()) return;

    dispatch(clearCart());
    setOrderPlaced(true);

    setTimeout(() => setOrderPlaced(false), 3000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 overflow-hidden">

      {/* TITLE */}
      <h1
        className="text-3xl font-bold mb-6"
        data-aos="fade-down"
      >
        Checkout Page
      </h1>

      {/* SUCCESS */}
      {orderPlaced && (
        <div
          className="bg-green-100 text-green-700 p-4 rounded mb-4"
          data-aos="fade-in"
        >
          🎉 Order placed successfully!
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8">

        {/* LEFT SIDE */}
        <div>

          <h2
            className="text-xl font-semibold mb-4"
            data-aos="fade-right"
          >
            Cart Items
          </h2>

          {cartItems.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            <div className="space-y-4">

              {cartItems.map((item, index) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 bg-white p-3 rounded shadow"
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                >
                  <img
                    src={item.image}
                    className="w-16 h-16 object-cover rounded"
                  />

                  <div className="flex-1">
                    <h3 className="font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-green-600">
                      ${item.price}
                    </p>

                    <QuantitySelector
                      quantity={Number(item.quantity) || 0}
                      setQuantity={(qty) =>
                        handleQuantityChange(item.id, qty)
                      }
                    />
                  </div>

                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-500"
                  >
                    Remove
                  </button>
                </div>
              ))}

            </div>
          )}

        </div>

        {/* RIGHT SIDE */}
        <div
          className="bg-white p-6 rounded shadow"
          data-aos="fade-left"
        >

          <h2 className="text-xl font-semibold mb-4">
            Customer Details
          </h2>

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className={`w-full mb-1 p-2 border rounded ${
              errors.name ? "border-red-500" : ""
            }`}
          />

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className={`w-full mb-1 p-2 border rounded ${
              errors.phone ? "border-red-500" : ""
            }`}
          />

          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className={`w-full mb-1 p-2 border rounded ${
              errors.address ? "border-red-500" : ""
            }`}
          />

          <input
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className={`w-full mb-1 p-2 border rounded ${
              errors.city ? "border-red-500" : ""
            }`}
          />

          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
          >
            <option value="cod">Cash on Delivery</option>
            <option value="card">Credit Card</option>
            <option value="jazzcash">JazzCash</option>
            <option value="easypaisa">EasyPaisa</option>
          </select>

          <h3 className="text-lg font-bold mb-4">
            Total: ${total.toFixed(2)}
          </h3>

          <button
            onClick={handleOrder}
            className="w-full bg-[#4a90e2] hover:bg-[#3b7cc4] text-white py-2 rounded"
          >
            Place Order
          </button>

        </div>

      </div>
    </div>
  );
}