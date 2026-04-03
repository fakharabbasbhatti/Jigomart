import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../../src/features/cart/cartSlice";
import QuantitySelector from "../../src/component/comman/QuantitySelector";

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, qty) => dispatch(updateQuantity({ id, quantity: qty }));
  const handleRemove = (id) => dispatch(removeFromCart(id));

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded shadow">
              <img src={item.image} alt={item.title} className="w-20 h-20 object-contain" />
              <div className="flex-1">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-green-600 font-bold">${item.price}</p>
                <QuantitySelector quantity={item.quantity} setQuantity={(qty) => handleQuantityChange(item.id, qty)} />
              </div>
              <button onClick={() => handleRemove(item.id)} className="text-red-600 font-bold hover:underline">Remove</button>
            </div>
          ))}
          <div className="text-right font-bold text-xl">Total: ${total.toFixed(2)}</div>
        </div>
      )}
    </div>
  );
}