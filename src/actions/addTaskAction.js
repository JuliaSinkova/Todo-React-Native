import { ADD_TASK } from "./types";

export const addTaskAction = (id, text, time) => {
  return {
    type: ADD_TASK,
    time,
    id,
    text,
  };
};
