import React from "react";
import "./index.css";

export default class App extends React.Component {
  state = {
    newTodo: "",
    todos: [],
  };

  toggleCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (id === todo.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  createTodo = (e) => {
    e.preventDefault();
    if (this.state.newTodo !== "") {
      const newTodo = {
        userId: 1,
        id: this.state.todos.length + 1,
        title: this.state.newTodo,
        completed: false,
      };
      this.setState({
        todos: [...this.state.todos, newTodo],
        newTodo: "",
      });
    }
  };

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((res) => res.json())
      .then((data) => this.setState({ todos: data }));
  }

  render() {
    return (
      <main>
        <div className="App">
          <h1>Colburn's Todo App</h1>
          <p># of Todos {this.state.todos.length}</p>
          <form onSubmit={(e) => this.createTodo(e)}>
            <input
              type="text"
              value={this.state.newTodo}
              aria-label="New Todo"
              placeholder="New Todo"
              onChange={(e) => this.setState({ newTodo: e.target.value })}
            />

            <input type="submit" value="Add" aria-label="Add" />
          </form>
          <ul>
            {this.state.todos
              .sort((a, b) => b.id - a.id)
              .map((todo, i) => (
                <li
                  key={i}
                  className={`completed-${todo.completed}`}
                  onClick={(e) => this.toggleCompleted(todo.id)}
                >
                  {todo.title}
                </li>
              ))}
          </ul>
        </div>
      </main>
    );
  }
}
