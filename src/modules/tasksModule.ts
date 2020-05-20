import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Task = {
  id: number;
  title: string;
  done: boolean;
};

type State = {
  count: number;
  tasks: Task[];
};

const initialState: State = {
  count: 2,
  tasks: [
    {
      id: 2,
      title: "次のTodo",
      done: false,
    },
    {
      id: 1,
      title: "最初のTodo",
      done: true,
    },
  ],
};

const tasksModule = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state: State, action: PayloadAction<string>) {
      console.log("action.payload");
      console.log(action.payload);
      console.log("action.payload");
    },
    doneTask(state: State, action: PayloadAction<Task>) {
      console.log("doneTask");
    },
    deleteTask(state: State, action: PayloadAction<Task>) {
      console.log("deleteTask");
    },
  },
});

export const { addTask, doneTask, deleteTask } = tasksModule.actions;

export default tasksModule;
