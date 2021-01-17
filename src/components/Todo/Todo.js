import React from "react";
import Context from "../../Context";

export default class Todo extends React.Component {
  static contextType = Context;
  render() {
    return (
      <div>
        <p>Here is the Todo Component</p>
      </div>
    );
  }
}
