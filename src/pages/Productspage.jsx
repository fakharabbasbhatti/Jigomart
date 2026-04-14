import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../src/component/product/ProductCard";
import { loadProducts } from "../features/products/productsSlice";
import ProductHero from "../component/product/ProductHero";

export default function ProductsPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);

  const [visible, setVisible] = useState(6);

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  const loadMore = () => {
    setVisible((prev) => prev + 3);
  };

  return (
    <div>

      <ProductHero />

      <div className="bg-gray-50 min-h-screen py-15">
        <div className="max-w-7xl mx-auto px-4">

          {/* Header */}
          <div
            className="text-center mb-10"
            data-aos="fade-down"
          >
            <h2 className="text-3xl font-semibold text-gray-800">
              Explore <span className="text-blue-500">Products</span>
            </h2>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {products.slice(0, visible).map((product, index) => (
              <div
                key={product.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <ProductCard product={product} />
              </div>
            ))}

          </div>

          {/* Load More */}
          {visible < products.length && (
            <div
              className="flex justify-center mt-12"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <button
                onClick={loadMore}
                className="px-10 py-3 bg-[#4a90e2] hover:bg-[#3b7cc4] text-white rounded-md font-semibold cursor-pointer transition duration-300 hover:scale-105"
              >
                Load More
              </button>
            </div>
          )}

        </div>
      </div>

    </div>
  );
}