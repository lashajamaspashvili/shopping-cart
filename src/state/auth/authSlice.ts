import { createSlice } from "@reduxjs/toolkit";

type authState = {
  value?: boolean;
};

const initialState: authState = {
  value: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.value = true;
    },
  },
});

export const { login } = authSlice?.actions;

export default authSlice?.reducer;
