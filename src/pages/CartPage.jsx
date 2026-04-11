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

  // 🟢 FORM STATE
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    paymentMethod: "cod",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  // 🟢 QUANTITY UPDATE
  const handleQuantityChange = useCallback(
    (id, qty) => {
      if (qty < 1) return;
      dispatch(updateQuantity({ id, quantity: qty }));
    },
    [dispatch]
  );

  // 🟢 REMOVE ITEM
  const handleRemove = useCallback(
    (id) => {
      dispatch(removeFromCart(id));
    },
    [dispatch]
  );

  // 🟢 TOTAL
  const total = useMemo(() => {
    return cartItems.reduce(
      (acc, item) =>
        acc +
        Number(item.price || 0) * Number(item.quantity || 1),
      0
    );
  }, [cartItems]);

  // 🟢 FORM CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🟢 ORDER PLACE
  const handleOrder = () => {
    if (!formData.name || !formData.phone || !formData.address || !formData.city) {
      alert("Please fill all fields");
      return;
    }

    console.log("ORDER DATA:", {
      customer: formData,
      items: cartItems,
      total,
    });

    dispatch(clearCart());
    setOrderPlaced(true);

    setTimeout(() => {
      setOrderPlaced(false);
    }, 3000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">

      <h1 className="text-3xl font-bold mb-6">
        Checkout Page
      </h1>

      {/* 🟢 SUCCESS MESSAGE */}
      {orderPlaced && (
        <div className="bg-green-100 text-green-700 p-4 rounded mb-4">
          🎉 Order placed successfully!
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8">

        {/* 🟢 LEFT SIDE - CART ITEMS */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Cart Items
          </h2>

          {cartItems.length === 0 ? (
            <p className="text-gray-500">
              No items in cart
            </p>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 bg-white p-3 rounded shadow"
                >
                  <img
                    src={
                      item.image ||
                      item.thumbnail ||
                      (item.images
                        ? item.images[0]
                        : "")
                    }
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
                      quantity={item.quantity}
                      setQuantity={(qty) =>
                        handleQuantityChange(item.id, qty)
                      }
                    />
                  </div>

                  <button
                    onClick={() =>
                      handleRemove(item.id)
                    }
                    className="text-red-500"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 🟢 RIGHT SIDE - FORM (ALWAYS VISIBLE) */}
        <div className="bg-white p-6 rounded shadow">

          <h2 className="text-xl font-semibold mb-4">
            Customer Details
          </h2>

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full mb-3 p-2 border rounded"
          />

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full mb-3 p-2 border rounded"
          />

          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="w-full mb-3 p-2 border rounded"
          />

          <input
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className="w-full mb-3 p-2 border rounded"
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

          {/* TOTAL */}
          <h3 className="text-lg font-bold mb-4">
            Total: ${total.toFixed(2)}
          </h3>

          {/* PLACE ORDER */}
          <button
            onClick={handleOrder}
            className="w-full bg-blue-600 text-white py-2 rounded"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}