import React, { useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../../src/features/cart/cartSlice";
import QuantitySelector from "../../src/component/comman/QuantitySelector";

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleQuantityChange = useCallback((id, qty) => {
    if (qty < 1) return;
    dispatch(updateQuantity({ id, quantity: qty }));
  }, [dispatch]);

  const handleRemove = useCallback((id) => {
    dispatch(removeFromCart(id));
  }, [dispatch]);

  const total = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cartItems]);

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
        <p className="text-gray-500">Looks like you haven't added anything yet.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid gap-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 object-contain"
            />

            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-semibold text-lg line-clamp-2">{item.title}</h3>
              <p className="text-green-600 font-bold text-lg">${item.price}</p>

              <div className="mt-2">
                <QuantitySelector
                  quantity={item.quantity}
                  setQuantity={(qty) => handleQuantityChange(item.id, qty)}
                />
              </div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <p className="font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>

              <button
                onClick={() => handleRemove(item.id)}
                className="text-red-600 font-medium hover:text-red-800 transition"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-between items-center border-t pt-6">
        <h2 className="text-xl font-semibold">Total</h2>
        <p className="text-2xl font-bold text-green-700">
          ${total.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
