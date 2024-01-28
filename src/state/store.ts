import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/productsSlice";
import categoriesReducer from "./categories/categoriesSlice";
import currentProductReducer from "./currentProduct/currentProductSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    currentProduct: currentProductReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
