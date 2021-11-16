import { put, call } from "redux-saga/effects";
import { ADD_TASK, ADD_TASK_SUCCESS } from "../actions/types";

const getTime = function () {
  let url = "http://worldtimeapi.org/api/ip";
  return fetch(url);
};
export function* addTaskSaga({ id, text }) {
  try {
    const time = yield call(getTime);
    yield put({ type: ADD_TASK_SUCCESS, time, id, text });
  } catch (error) {
    yield put({ error });
  }
}
