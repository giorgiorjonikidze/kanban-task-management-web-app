import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const taskModel = {
  id: 0,
  title: "",
  description: "",
  subtasks: [],
  status: "",
};

const taskSlice = createSlice({
  name: "task",
  initialState: initialState,
  reducers: {
    createNewTask(state, action) {
      const newItem = action.payload;
      const existingItem = state.tasks.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.tasks.push(newItem);
      }
    },
  },
});

const store = configureStore({
  reducer: taskSlice.reducer,
});

export default store;

export const taskActions = taskSlice.actions;
