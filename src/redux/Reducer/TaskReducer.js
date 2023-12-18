import { ADDTASK, DONETASK } from "../constants/actionTypes";

const initialState = {
  tasks: [
    {
      id: 1,
      Title: "Wrokshop Redux",
      Done: false,
    },
  ],
};
export const taskReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADDTASK:
      return {
        ...state,
        tasks: [...state.tasks, payload],
      };
    case DONETASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === payload.id ? { ...task, Done: !task.Done } : task
        ),
      };
    default:
      return state;
  }
};
