import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ModifiedCartItem } from "../../types/types";

type cartState = {
  value: ModifiedCartItem[];
};

const initialState: cartState = {
  value: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    createCart: (state, action: PayloadAction<ModifiedCartItem>) => {
      state.value = [action?.payload];
    },
    addToCart: (state, action: PayloadAction<ModifiedCartItem>) => {
      state.value = [...state?.value, action?.payload];
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const index = state?.value?.findIndex(
        (item) => item?.product?.id === action?.payload
      );
      state.value = [
        ...state?.value?.slice(0, index),
        ...state?.value?.slice(index + 1),
      ];
    },
    updateCart: (
      state,
      action: PayloadAction<{ productId: number; qty: number }>
    ) => {
      const index = state?.value?.findIndex(
        (item) => item?.product?.id === action?.payload?.productId
      );
      state.value = [
        ...state?.value?.slice(0, index),
        { product: state?.value?.[index]?.product, qty: action?.payload?.qty },
        ...state?.value?.slice(index + 1),
      ];
    },
  },
});

export const { addToCart, createCart, updateCart, removeFromCart } =
  cartSlice?.actions;

export default cartSlice?.reducer;
