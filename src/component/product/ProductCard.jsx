import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover rounded" />
      <h3 className="mt-2 font-semibold text-lg">{product.title}</h3>
      <p className="text-gray-600 text-sm">{product.description}</p>
      <p className="mt-1 font-bold">${product.price}</p>
      <button
        onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}
        className="mt-2 w-full bg-blue-600 text-white py-1.5 rounded-md hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}