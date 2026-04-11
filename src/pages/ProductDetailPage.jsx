import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadProductById } from "../features/products/productsSlice";
import { addToCart } from "../features/cart/cartSlice";

export default function ProductDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector(
    (state) => state.products.selectedProduct
  );

  useEffect(() => {
    dispatch(loadProductById(id));
  }, [id, dispatch]);

  if (!product) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-xl shadow">

      {/* 🟢 IMAGE SECTION (FIXED) */}
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-96 object-cover rounded-lg"
      />

      {/* 🟢 DETAILS */}
      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <p className="text-xl font-bold mt-2">${product.price}</p>

      {/* 🟢 ADD TO CART */}
      <button
        onClick={() =>
          dispatch(addToCart({ ...product, quantity: 1 }))
        }
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg"
      >
        Add to Cart
      </button>
    </div>
  );
}