import React, { Component } from 'react'
// import uuid from "uuid";
// why will unused variable cause build failure
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>hello from app</h1>
        <h2>Good day netlify</h2>
        <TodoInput></TodoInput>
        <TodoList></TodoList>
      </div>
    )
  }
}

