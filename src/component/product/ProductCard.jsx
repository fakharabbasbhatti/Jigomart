import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
      data-aos="fade-up"
    >
      
      {/* IMAGE */}
      <div className="relative">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-64 object-cover"
          />
        </Link>

        {/* ⭐ Rating */}
        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full flex items-center gap-1 text-sm shadow">
          <FaStar className="text-yellow-400" />
          {product.rating || 4.5}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4">

        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-gray-800">
            {product.title}
          </h3>
        </Link>

        <p className="text-sm text-gray-500 mt-1">
          {product.brand || "Unknown Seller"}
        </p>

        <div className="flex items-center gap-1 text-sm text-gray-400 mt-1">
          <FiMapPin />
          {product.category || "No Location"}
        </div>

        <p className="text-purple-600 font-semibold mt-3">
          ${product.price}
        </p>

        {/* BUTTONS */}
        <div className="flex gap-3 mt-4">

          <button
            onClick={() =>
              dispatch(addToCart({ ...product, quantity: 1 }))
            }
            className="flex-1 border border-purple-500 text-purple-500 py-2 rounded-lg hover:bg-purple-50 transition cursor-pointer"
          >
            Add to Cart
          </button>

          <Link
            to={`/product/${product.id}`}
            className="flex-1 text-center border border-purple-500 text-purple-500 py-2 rounded-lg hover:bg-purple-50 transition cursor-pointer"
          >
            View Details
          </Link>

        </div>

      </div>
    </div>
  );
}