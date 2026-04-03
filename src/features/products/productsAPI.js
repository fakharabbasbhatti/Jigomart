import axios from "axios";

export const fetchProducts = async (limit = 9, skip = 0) => {
  try {
    const response = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
    return response.data.products;
  } catch (error) {
    console.error("Failed to fetch products", error);
    return [];
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch product details", error);
    return null;
  }
};