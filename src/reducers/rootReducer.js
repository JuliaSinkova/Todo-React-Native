import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { taskReducer } from "./taskReducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  task: taskReducer,
});

export default persistReducer(persistConfig, rootReducer);
