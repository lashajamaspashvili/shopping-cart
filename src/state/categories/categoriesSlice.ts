import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type categoriesState = {
  value: {
    category: string;
    active: boolean;
  }[];
};

const initialState: categoriesState = {
  value: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    fetchCategories: (
      state,
      action: PayloadAction<categoriesState["value"]>
    ) => {
      state.value = [
        ...action?.payload,
        { category: "fifth", active: false },
        { category: "sixth", active: false },
      ];
    },
    makeActiveCategory: (state, action: PayloadAction<string>) => {
      const index = state.value.findIndex(
        (category) => category?.category === action?.payload
      );
      state.value = [
        ...state.value.slice(0, index),
        { category: action?.payload, active: true },
        ...state.value.slice(index + 1),
      ];
    },
    removeActiveCategory: (state, action: PayloadAction<string>) => {
      const index = state.value.findIndex(
        (category) => category?.category === action?.payload
      );
      state.value = [
        ...state.value.slice(0, index),
        { category: action?.payload, active: false },
        ...state.value.slice(index + 1),
      ];
    },
  },
});

export const { fetchCategories, makeActiveCategory, removeActiveCategory } =
  categoriesSlice?.actions;

export default categoriesSlice?.reducer;
