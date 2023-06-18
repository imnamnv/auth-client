import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  authenticated: localStorage.getItem("token"),
  errorMessage: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authUser: (state, action) => {
      state.authenticated = action.payload;
    },
    authError: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export const { authUser, authError } = authSlice.actions;

export default authSlice.reducer;
