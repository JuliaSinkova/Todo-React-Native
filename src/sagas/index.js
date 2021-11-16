import { all } from "redux-saga/effects";
import watcher from "./watcher";

export default function* index() {
  yield all([watcher()]);
}
