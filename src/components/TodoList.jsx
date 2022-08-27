import React from "react";
import { Button } from "react-bootstrap";
import TodoHeader from "./TodoHeader";
import TodoBody from "./TodoBody";
import { bindActionCreators } from "redux";
import * as actionLogin from "../redux/actions/actionLogin";
import { useDispatch } from "react-redux";

function TodoList() {
  const { logoutUser } = bindActionCreators(actionLogin, useDispatch());
  return (
    <header>
      <h3>Task List for year 2022</h3>
      <br />
      <TodoHeader />
      <br />
      <hr />
      <br />
      <TodoBody />
      <br />
      <br />
      <Button onClick={() => logoutUser()}>LOGOUT</Button>
    </header>
  );
}

export default TodoList;
