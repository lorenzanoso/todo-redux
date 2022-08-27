import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faSave } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import * as actionTodo from "../redux/actions/actionTodo";
import { bindActionCreators } from "redux";
import * as updateTodo from "../redux/actions/updateTodo";
import { useState } from "react";

function TodoBody() {
  const todoList = useSelector((state) => state.todos);
  const updateEntry = useSelector((state) => state.update);
  const [editInput, setEditInput] = useState(
    updateEntry ? updateEntry.text : ""
  );

  const { removeTodo } = bindActionCreators(actionTodo, useDispatch());
  const { setUpdateTodo, saveUpdateTodo } = bindActionCreators(
    updateTodo,
    useDispatch()
  );

  const setUpdate = (data) => {
    setUpdateTodo(data);
    setEditInput(updateEntry.text);
  };

  const saveUpdate = (id) => {
    const updatedTodo = { id, text: editInput };
    saveUpdateTodo(updatedTodo);
  };

  return todoList.map((data, index) => (
    <div
      id="task"
      className="task-container d-flex flex-row justify-content-between align-items-center mt-3 position-relative"
      key={index}
    >
      <div className="task-name ">
        <input
          type="text"
          className="input-text"
          value={updateEntry.id !== data.id ? data.text : editInput}
          readOnly={updateEntry.id !== data.id}
          onChange={(e) => setEditInput(e.target.value)}
        />
      </div>
      <div className="action-btns">
        {updateEntry.id !== data.id ? (
          <button onClick={() => setUpdate(data)}>
            <FontAwesomeIcon icon={faEdit} className="edit-btn me-2" />
          </button>
        ) : (
          <button onClick={() => saveUpdate(data.id)}>
            <FontAwesomeIcon icon={faSave} className="edit-btn me-2" />
          </button>
        )}
        {updateEntry.id !== data.id && (
          <button onClick={() => removeTodo(data.id)}>
            <FontAwesomeIcon icon={faTrash} className="delete-btn" />
          </button>
        )}
      </div>
    </div>
  ));
}

export default TodoBody;
