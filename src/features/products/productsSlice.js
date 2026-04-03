import { createSlice } from "@reduxjs/toolkit";
import productsData from "../../data/products.json";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: productsData,
    skip: 0
  },
  reducers: {}
});

export default productsSlice.reducer;