import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  FINISH_TASK,
} from "../actions/types";
import { TASKS } from "../tasks/tasks";

export const taskReducer = (state = TASKS, { id, text, time, type, tasks }) => {
  switch (type) {
    case ADD_TASK:
      return [...state, { text: text, time: time, id: id }];
    case DELETE_TASK:
      return [...tasks];
    case EDIT_TASK:
      return [...tasks];
    case FINISH_TASK:
      return [...tasks];
    default:
      return state;
  }
};
