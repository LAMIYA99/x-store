import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
}

const storedCart = localStorage.getItem("cart");
const initialState: CartState = {
  cart: storedCart ? JSON.parse(storedCart) : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{
        id: number;
        title: string;
        price: number;
        image?: string;
      }>
    ) => {
      const existing = state.cart.find((item) => item.id === action.payload.id);
      if (existing) {
        existing.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    increase: (state, action: PayloadAction<number>) => {
      const item = state.cart.find((i) => i.id === action.payload);
      if (item) item.quantity++;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    decrease: (state, action: PayloadAction<number>) => {
      const item = state.cart.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity--;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((i) => i.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const { addToCart, increase, decrease, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;