import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
// why will unused variable cause build failure
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default class App extends Component {
  state = {
    items: [
      {id: 1, title:"wake up"}, 
      {id:2, title:"break lunch"}
    ],
    id: uuid(),
    item: "",
    editItem: false
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-centre">todo input</h3>
            <TodoInput></TodoInput>
            <TodoList></TodoList>
          </div>
        </div>
      </div>
    )
  }
}

