import React from "react";

const QuantitySelector = ({ quantity, setQuantity }) => {
  const increment = () => {
    setQuantity(Number(quantity) + 1);
  };

  const decrement = () => {
    setQuantity(Number(quantity) - 1);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={decrement}
        className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
      >
        -
      </button>

      <span className="px-2">
        {Number(quantity) || 0}
      </span>

      <button
        onClick={increment}
        className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;