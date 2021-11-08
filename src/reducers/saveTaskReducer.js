import { SAVE_TASK, CLEAR_TASK } from "../actions/types";

export const saveTaskReducer = (state = {}, { savedTask, type }) => {
  switch (type) {
    case SAVE_TASK:
      return { ...state, savedTask };
    case CLEAR_TASK:
      return { savedTask: null };
    default:
      return state;
  }
};
