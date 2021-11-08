import { useEffect } from "react";
import { useSelector } from "react-redux";
import Modal from "../Modal/Modal";

import TodoForm from "../TodoForm/TodoForm";
import TodoItem from "../TodoItem/TodoItem";
import "./Todo.css";

function TodoList() {
  const tasks = useSelector((state) => state.task);

  return (
    <div className="Todo">
      <Modal />
      <h1 className="Todo__header">MY Todo List 📝</h1>
      <TodoForm />
      {tasks.map((item) => {
        return (
          <TodoItem
            id={item.id}
            key={Math.random()}
            text={item.text}
            time={item.time}
            finished={item.finished}
          />
        );
      })}
    </div>
  );
}

export default TodoList;
