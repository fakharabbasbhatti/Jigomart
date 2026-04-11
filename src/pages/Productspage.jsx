
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../src/component/product/ProductCard";
import { loadProducts } from "../features/products/productsSlice";

export default function ProductsPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);

  const [visible, setVisible] = useState(6);

  useEffect(() => {
    dispatch(loadProducts()); // 🔥 API CALL
  }, [dispatch]);

  const loadMore = () => {
    setVisible((prev) => prev + 3);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Explore Products
          </h2>
          <p className="text-gray-500 mt-2">
            Discover our latest collection
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, visible).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More */}
        {visible < products.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={loadMore}
              className="px-10 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md font-semibold"
            >
              Load More
            </button>
          </div>
        )}

      </div>
    </div>
  );
}