import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductDetailCard from "../../src/component/comman/ProductDetailCard";

export default function ProductDetailPage() {
  const { id } = useParams();

  const product = useSelector((state) =>
    state.products.items.find((p) => p.id === parseInt(id))
  );

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header / Breadcrumb */}
        <div className="mb-6 text-sm text-gray-500">
          Home / Products / <span className="text-gray-800 font-medium">Details</span>
        </div>

        {/* Content */}
        {product ? (
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 transition hover:shadow-xl">
            <ProductDetailCard product={product} />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center mt-20">
            <div className="text-6xl mb-4">😕</div>
            <h2 className="text-2xl font-semibold text-gray-700">
              Product not found
            </h2>
            <p className="text-gray-500 mt-2">
              The product you are looking for does not exist or was removed.
            </p>

            <button
              onClick={() => window.history.back()}
              className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Go Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}