import { takeLatest } from "redux-saga/effects";
import { ADD_TASK } from "../actions/types";
import { addTaskSaga } from "./addTaskSaga";

export default function* watcher() {
  yield takeLatest(ADD_TASK, addTaskSaga);
}
