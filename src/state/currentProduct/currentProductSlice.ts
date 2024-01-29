import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductsType } from "../../types/types";

type currentProductState = {
  value: ProductsType;
};

const initialState: currentProductState = {
  value: {
    category: "",
    description: "",
    id: 0,
    image: "",
    price: 0,
    rating: {
      count: 0,
      rate: 0,
    },
    title: "",
    favourite: false,
  },
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
