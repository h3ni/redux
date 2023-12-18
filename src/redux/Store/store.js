import { createStore } from "redux";
import { taskReducer } from "../Reducer/TaskReducer";
export const store = createStore(taskReducer);
