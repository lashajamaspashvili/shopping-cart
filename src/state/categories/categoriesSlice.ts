import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type categoriesState = {
  value: string[];
};

const initialState: categoriesState = {
  value: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    fetchCategories: (state, action: PayloadAction<string[]>) => {
      state.value = action?.payload;
    },
  },
});

export const { fetchCategories } = categoriesSlice?.actions;

export default categoriesSlice?.reducer;
