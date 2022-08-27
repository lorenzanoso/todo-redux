import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionTodo from "../redux/actions/actionTodo";

function TodoHeader() {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const { addTodo } = bindActionCreators(actionTodo, useDispatch());
  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      id: Math.floor(Math.random() * 100000),
      text: input,
    });
    // addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} id="new-task-form">
      <div className="input-group">
        <input
          id="new-task-input"
          ref={inputRef}
          type="text"
          className="form-control todo-input rounder-0"
          placeholder="Add task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-primary  rounded-0" onSubmit={handleSubmit}>
          ADD
        </button>
      </div>
    </form>
  );
}

export default TodoHeader;
