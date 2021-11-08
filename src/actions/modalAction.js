import { OPEN_MODAL } from "./types";

export const modalAction = (overlayStatus, modalStatus) => {
  return {
    type: OPEN_MODAL,
    overlayStatus,
    modalStatus,
  };
};
