import React, { useState } from "react";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import QuantitySelector from "./QuantitySelector";

const ProductDetailCard = ({ product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-2xl shadow-md">
      <div className="flex-1 flex items-center justify-center">
        <img
          src={product?.image || "https://via.placeholder.com/250"}
          alt={product?.title}
          className="h-80 object-contain"
        />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-2xl font-bold">{product?.title}</h2>
        <p className="text-gray-600">{product?.description}</p>
        <div className="flex items-center gap-2 text-yellow-500">
          <FaStar /> <span>{product?.rating?.rate || 4.5}</span>
        </div>
        <p className="text-xl font-bold text-green-600">${product?.price}</p>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        <button
          onClick={handleAddToCart}
          className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition mt-2 w-full md:w-auto"
        >
          <FaShoppingCart className="inline mr-2" /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailCard;