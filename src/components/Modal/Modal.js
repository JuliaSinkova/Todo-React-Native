import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { modalAction } from "../../actions/modalAction";
import { clearTaskAction } from "../../actions/clearTaskAction";
import { editTaskAction } from "../../actions/editTaskAction";

import "./Modal.css";

function Modal() {
  const dispatch = useDispatch();
  const overlayStatus = useSelector((state) => state.modal.overlayStatus);
  const modalStatus = useSelector((state) => state.modal.modalStatus);
  const tasks = useSelector((state) => state.task);
  const savedTask = useSelector((state) => state.saveTask?.savedTask);
  const editTask = function (e) {
    e.preventDefault();
    let filtered = tasks.filter((item) => item.id != savedTask[0].id);
    let item = savedTask[0];
    if (e.target[0].value !== "") {
      item.text = e.target[0].value;
    }
    filtered.push(item);
    dispatch(editTaskAction(filtered));
    dispatch(modalAction("overlay__hidden", "modal__hidden"));
  };
  return (
    <div className={overlayStatus}>
      <div className={modalStatus}>
        <div className="modal__header">
          <span
            onClick={() => {
              dispatch(modalAction("overlay__hidden", "modal__hidden"));
              dispatch(clearTaskAction());
            }}
            className="modal__close"
          >
            &times;
          </span>
          <h1>Edit your task</h1>
        </div>

        <form onSubmit={(e) => editTask(e)}>
          <input
            placeholder={savedTask ? savedTask[0]?.text : ""}
            className="modal__input"
          ></input>
          <button className="modal__btn">Save </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
