import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadProductById } from "../features/products/productsSlice";

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const product = useSelector(
    (state) => state.products.selectedProduct
  );

  useEffect(() => {
    dispatch(loadProductById(id));
  }, [id, dispatch]);

  if (!product) {
    return (
      <p className="text-center mt-20 text-lg font-medium text-gray-600">
        Loading product...
      </p>
    );
  }

  return (
    <div className="bg-gray-100 py-6 px-4">
      
      {/* 🔙 BACK BUTTON */}
      <div className="max-w-6xl mx-auto mb-4">
        <button
          onClick={() => navigate("/product")}
          className="inline-flex items-center gap-2 bg-red-600 px-3 py-3 text-sm font-medium text-white hover:bg-red-700 transition rounded-md shadow mb-5 cursor-pointer"
        >
          ← Back to Products
        </button>
      </div>

      {/* MAIN CARD */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">
        
        {/* IMAGE */}
        <div className="bg-gray-200 flex items-center justify-center p-4">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-[300px] md:h-[350px] object-contain rounded-xl"
          />
        </div>

        {/* DETAILS */}
        <div className="p-8 flex flex-col justify-center items-center text-center">
          
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            {product.title}
          </h1>

          <p className="text-gray-600 mt-4 leading-relaxed text-base">
            {product.description}
          </p>

          {/* PRICE */}
          <p className="text-2xl font-bold text-green-600 mt-6">
            ${product.price}
          </p>

        </div>
      </div>
    </div>
  );
}