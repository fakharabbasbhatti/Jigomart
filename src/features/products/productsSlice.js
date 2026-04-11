
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts, fetchProductById } from "../../features/products/productsAPI";

// 🔥 GET ALL PRODUCTS
export const loadProducts = createAsyncThunk(
  "products/loadProducts",
  async () => {
    const data = await fetchProducts();
    return data;
  }
);

// 🔥 GET SINGLE PRODUCT
export const loadProductById = createAsyncThunk(
  "products/loadProductById",
  async (id) => {
    const data = await fetchProductById(id);
    return data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    selectedProduct: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(loadProductById.fulfilled, (state, action) => {
        state.selectedProduct = action.payload;
      });
  },
});

export default productsSlice.reducer;