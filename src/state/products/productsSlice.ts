import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductsType } from "../../types/types";

type productsState = {
  value: ProductsType[];
};

const initialState: productsState = {
  value: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts: (state, action: PayloadAction<ProductsType[]>) => {
      state.value = action?.payload;
    },
    addToFavourites: (state, action: PayloadAction<number>) => {
      state.value.find(
        (product) => product?.id === action?.payload
      )!.favourite = true;
    },
    removeFromFavourites: (state, action: PayloadAction<number>) => {
      state.value.find(
        (product) => product?.id === action?.payload
      )!.favourite = false;
    },
  },
});

export const { fetchProducts, addToFavourites, removeFromFavourites } =
  productsSlice?.actions;

export default productsSlice?.reducer;
