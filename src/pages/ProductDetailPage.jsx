import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadProductById } from "../features/products/productsSlice";

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate(); // 👈 add this
  const dispatch = useDispatch();

  const product = useSelector(
    (state) => state.products.selectedProduct
  );

  useEffect(() => {
    dispatch(loadProductById(id));
  }, [id, dispatch]);

  if (!product) {
    return <p className="text-center mt-10 text-lg">Loading...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">

      {/* 🔙 BACK BUTTON */}
      <button
        onClick={() => navigate("/product")} // 👈 apna ProductCard page ka route yahan likho
        className="mb-4 inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black transition"
      >
        ← Back to Products
      </button>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2 gap-6">
        
        {/* IMAGE */}
        <div className="w-full h-[400px] md:h-full">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* DETAILS */}
        <div className="p-6 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800">
            {product.title}
          </h1>

          <p className="text-gray-600 mt-4 leading-relaxed">
            {product.description}
          </p>

          <p className="text-2xl font-semibold text-green-600 mt-6">
            ${product.price}
          </p>
        </div>
      </div>
    </div>
  );
}