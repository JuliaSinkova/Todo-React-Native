import { DELETE_TASK } from "./types";

export const deleteTaskAction = (tasks) => {
  return {
    type: DELETE_TASK,
    tasks,
  };
};
