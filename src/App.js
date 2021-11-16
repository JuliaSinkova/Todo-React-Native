import React from "react";
import { Provider } from "react-redux";
import Todo from "./components/Todo/Todo";
import { store } from "./store/strore";
import { NativeBaseProvider } from "native-base";

const App = () => {
  return (
    <Provider store={store}>
      <Todo></Todo>
    </Provider>
  );
};

export default App;
