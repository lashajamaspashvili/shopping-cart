import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductsType } from "../../types/types";

type currentProductState = {
  value?: ProductsType;
};

const initialState: currentProductState = {
  value: undefined,
};

const currentProductSlice = createSlice({
  name: "currentProduct",
  initialState,
  reducers: {
    fetchCurrentProduct: (state, action: PayloadAction<ProductsType>) => {
      state.value = action?.payload;
    },
  },
});

export const { fetchCurrentProduct } = currentProductSlice?.actions;

export default currentProductSlice?.reducer;
