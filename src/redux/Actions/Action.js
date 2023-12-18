import { ADDTASK, DONETASK } from "../constants/actionTypes";

export const add_task = (payload) => {
  return {
    type: ADDTASK,
    payload: payload,
  };
};
export const done_task = (payload) => {
  return {
    type: DONETASK,
    payload: payload,
  };
};
