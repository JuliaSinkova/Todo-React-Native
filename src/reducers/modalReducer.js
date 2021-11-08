import { OPEN_MODAL } from "../actions/types";

export const modalReducer = (
  state = { overlayStatus: "overlay__hidden", modalStatus: "model__hidden" },
  { type, overlayStatus, modalStatus }
) => {
  switch (type) {
    case OPEN_MODAL:
      return {
        ...state,
        overlayStatus: overlayStatus,
        modalStatus: modalStatus,
      };
    default:
      return state;
  }
};
