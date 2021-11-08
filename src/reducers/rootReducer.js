import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { modalReducer } from "./modalReducer";
import { taskReducer } from "./taskReducer";
import { saveTaskReducer } from "./saveTaskReducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  task: taskReducer,
  modal: modalReducer,
  saveTask: saveTaskReducer,
});

export default persistReducer(persistConfig, rootReducer);
