import { SAVE_TASK } from "./types";

export const saveTaskAction = (savedTask) => {
  return {
    type: SAVE_TASK,
    savedTask,
  };
};
