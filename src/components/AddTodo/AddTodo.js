import React from "react";
import Context from "../../Context";

export default class AddTodo extends React.Component {
  static contextType = Context;
  render() {
    return (
      <form onSubmit={(e) => this.createTodo(e)}>
        <input
          type="text"
          value={this.context.newTodo}
          aria-label="New Todo"
          placeholder="New Todo"
          onChange={(e) => this.context.setNewTodo(e)}
        />

        <input type="submit" value="Add" aria-label="Add" />
      </form>
    );
  }
}
