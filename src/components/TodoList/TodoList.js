import React from "react";
import Context from "../../Context";

export default class TodoList extends React.Component {
  static contextType = Context;
  render() {
    return (
      <ul>
        {this.context.todos
          .sort((a, b) => b.id - a.id)
          .map((todo, i) => (
            <li
              key={i}
              className={`completed-${todo.completed}`}
              onClick={(e) => this.context.toggleCompleted(todo.id)}
            >
              {todo.title}
            </li>
          ))}
      </ul>
    );
  }
}
