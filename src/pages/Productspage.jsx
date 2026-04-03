import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../../src/component/product/ProductCard";
import { useState } from "react";

export default function ProductsPage() {
  const products = useSelector((state) => state.products.items);
  const [visible, setVisible] = useState(6);

  const loadMore = () => {
    setVisible((prev) => prev + 3);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.slice(0, visible).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {visible < products.length && (
        <button onClick={loadMore} className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Load More
        </button>
      )}
    </div>
  );
}