import { createSlice } from "@reduxjs/toolkit";

const initialTasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskSlice = createSlice({
  name: "tasks",
  initialState: initialTasks,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    removeTask: (state, action) => {
      const updatedState = state.filter((_, index) => index !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(updatedState));
      return updatedState;
    },
  },
});

export const { addTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;
