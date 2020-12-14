import React from "react";

export default class App extends React.Component {
  // todos
  state = {
    todos: [
      {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
      },
      {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false,
      },
      {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: false,
      },
      {
        userId: 1,
        id: 4,
        title: "et porro tempora",
        completed: true,
      },
    ],
  };
  render() {
    return (
      <main>
        <div className="App">
          <h1>Colburn's Todo App</h1>
          <p># of Todos {this.state.todos.length}</p>
        </div>
        <ul>
          {this.state.todos.map((todo) => (
            <li>{todo.title}</li>
          ))}
        </ul>
      </main>
    );
  }
}
