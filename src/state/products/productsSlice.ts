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
  },
});

export const { fetchProducts } = productsSlice?.actions;

export default productsSlice?.reducer;
