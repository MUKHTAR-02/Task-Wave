import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated")) || false,
  user: null,
  password: null,
};

const userSlice = createSlice({
  name: "user",
  initialState, 
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.name;
      state.password = action.payload.password;
      localStorage.setItem("isAuthenticated", JSON.stringify(true));
      localStorage.setItem("user", JSON.stringify(action.payload.name));
      localStorage.setItem(state.password, JSON.stringify(action.payload.password));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.password = null;
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("user");
      localStorage.removeItem(state.password);
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
