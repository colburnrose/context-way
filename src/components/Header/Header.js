import React from "react";
import Context from "../../Context";

export default class Header extends React.Component {
  static contextType = Context;
  render() {
    return (
      <div>
        <h1>Colburn's Todo App</h1>
        <p># of Todos {this.context.todos.length}</p>
      </div>
    );
  }
}
