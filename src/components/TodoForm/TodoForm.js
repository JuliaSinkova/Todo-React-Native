import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addTaskAction } from "../../actions/addTaskAction";
import { deleteTaskAction } from "../../actions/deleteTaskAction";
import "./TodoForm.css";
function TodoForm() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const tasks = useSelector((state) => state.task);

  const add = function () {
    if (text == "") {
      alert("You cannot add an empty task");
    }
    if (text != "") {
      let filtered = tasks.filter((item) => item.text == text);
      if (filtered.length > 0) {
        alert("The task already exists, try something else");
      } else {
        dispatch(addTaskAction(Math.random(), Math.random(), text, Date.now()));
      }
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        add();
        e.target[0].value = "";
      }}
    >
      <input
        onChange={(e) => setText(e.target.value)}
        className="TodoForm__input"
        placeholder="Write your task"
      ></input>
      <button className="TodoForm__btn">Create</button>
    </form>
  );
}

export default TodoForm;
