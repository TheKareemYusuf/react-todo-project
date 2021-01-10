import React, { Component } from 'react';
import TodoItem from "./TodoItem"

export default class TodoList extends Component {
    render() {
        return (
            <div>
                <h3>hello from todo list</h3>
                <TodoItem></TodoItem>
            </div>
        )
    }
}
