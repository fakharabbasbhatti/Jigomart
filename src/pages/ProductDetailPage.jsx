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
    <div className="max-w-7xl mx-auto px-4 py-6">
      {product ? <ProductDetailCard product={product} /> : <p>Product not found</p>}
    </div>
  );
}