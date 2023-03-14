import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  boards: [],
};

const taskModel = {
  id: 0,
  title: "",
  description: "",
  subtasks: [],
  status: "",
};

const boardss = [
  {
    title: "board_1",
    columns: [
      {
        status: "todo",
        tasks: [],
      },
      {
        status: "doing",
        tasks: [],
      },
    ],
  },
];



const taskSlice = createSlice({
  name: "task",
  initialState: initialState,
  reducers: {
    createNewTask(state, action) {
      console.log(action.payload, "tasks in redux");
      const newItem = action.payload;
      const existingItem = state.tasks.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.tasks.push(newItem);
      }
    },
    createNewBoard(state, action) {
      const item = action.payload;
      const columns = [];
      for (let key in item.data) {
        if (key.startsWith("column")) {
          columns.push({ status: item.data[key] });
        }
    }
      state.boards.push({ title: item.boardName, columns });
    },
  },
});

const store = configureStore({
  reducer: taskSlice.reducer,
});

export default store;

export const taskActions = taskSlice.actions;
