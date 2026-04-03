import React from "react";

const PaginationButton = ({ onClick, text = "Load More" }) => {
  return (
    <div className="flex justify-center mt-6">
      <button
        onClick={onClick}
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
      >
        {text}
      </button>
    </div>
  );
};

export default PaginationButton;