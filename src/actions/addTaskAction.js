import { ADD_TASK } from "./types";

export const addTaskAction = (id, key, text, time) => {
  return {
    type: ADD_TASK,
    id,
    key,
    text,
    time,
    edited: false,
  };
};
