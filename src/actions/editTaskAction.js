import { EDIT_TASK } from "./types";

export const editTaskAction = (tasks) => {
  return {
    type: EDIT_TASK,
    tasks,
  };
};
