import React, { Component } from "react";
import TodoList from "./TodoList";

class Main extends Component {
  render() {
    return <div>
      <h1>To Do List</h1>
      <TodoList/>
      </div>;
  }
}

export default Main;
