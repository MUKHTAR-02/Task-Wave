import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated")) || false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      localStorage.setItem("isAuthenticated", JSON.stringify(true));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.removeItem("isAuthenticated");
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
