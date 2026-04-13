
import { createSlice } from "@reduxjs/toolkit";

const getCartFromStorage = () => {
  try {
    const data = localStorage.getItem("cartItems");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const saveToStorage = (cartItems) => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

const initialState = {
  cartItems: getCartFromStorage(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const newItem = {
        ...item,
        quantity: Number(item.quantity) || 1,
        image:
          item.thumbnail ||
          item.image ||
          (item.images ? item.images[0] : ""),
      };

      const existing = state.cartItems.find((i) => i.id === newItem.id);

      if (existing) {
        existing.quantity += newItem.quantity;
      } else {
        state.cartItems.push(newItem);
      }

      saveToStorage(state.cartItems);
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (i) => i.id !== action.payload
      );

      saveToStorage(state.cartItems);
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      const item = state.cartItems.find((i) => i.id === id);

      if (item) {
        item.quantity = Number(quantity) || 0;
      }

      saveToStorage(state.cartItems);
    },

    clearCart: (state) => {
      state.cartItems = [];
      saveToStorage([]);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;