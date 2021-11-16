import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import index from "../sagas";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
export const persist = persistStore(store);
sagaMiddleware.run(index);
