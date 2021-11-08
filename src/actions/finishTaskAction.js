import { FINISH_TASK } from "./types";

export const finishTaskAction = (tasks) => {
  return {
    type: FINISH_TASK,
    tasks,
  };
};
