import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteTaskAction } from "../../actions/deleteTaskAction";
import { finishTaskAction } from "../../actions/finishTaskAction";
import { modalAction } from "../../actions/modalAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./TodoItem.css";
import { useState } from "react";
import { saveTaskAction } from "../../actions/saveTaskAction";

function TodoItem({ text, id, time, finished }) {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task);
  const deleteTask = function (e) {
    let filtered = tasks.filter((item) => item.id != e.target.parentNode.id);
    dispatch(deleteTaskAction(filtered));
  };

  const editTask = function (e) {
    dispatch(modalAction("overlay__active", "modal__active"));
    let item = tasks.filter((item) => item.id == e.target.parentNode.id);
    dispatch(saveTaskAction(item));
  };

  const finishTask = function (e) {
    let item = tasks.filter((item) => item.id == e.target.parentNode.id);
    item[0].finished = "finished";
    console.log(item);
    let filtered = tasks.filter((item) => item.id != e.target.parentNode.id);
    filtered.push(item[0]);
    console.log(filtered);
    dispatch(finishTaskAction(filtered));
  };

  return (
    <div className="TodoItem" id={id}>
      <div className="TodoItem__text" id={finished}>
        {text}
        <div className="TodoItem__time">
          {new Date(time).toLocaleDateString()}{" "}
          {new Date(time).toLocaleTimeString()}
        </div>
      </div>
      <button
        onClick={(e) => finishTask(e)}
        className="TodoItem__btn TodoItem__btn_finish"
      >
        ✅
      </button>
      <button
        onClick={(e) => editTask(e)}
        className="TodoItem__btn TodoItem__btn_edit"
      >
        ✏️
      </button>
      <button
        onClick={(e) => deleteTask(e)}
        className="TodoItem__btn TodoItem__btn_delete"
      >
        🗑
      </button>
    </div>
  );
}

export default TodoItem;
