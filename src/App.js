import React from "react";
import Context from "./Context";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";

import "./index.css";

export default class App extends React.Component {
  state = {
    newTodo: "",
    todos: [],
    setNewTodo: (e) => this.setState({ newTodo: e.target.value }),
    toggleCompleted: (id) => {
      this.setState({
        todos: this.state.todos.map((todo) => {
          if (id === todo.id) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      });
    },
    createTodo: (e) => {
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
    },
  };

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((res) => res.json())
      .then((data) => this.setState({ todos: data }));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        <main>
          <div className="App">
            <Header />
            <AddTodo />
            <TodoList />
          </div>
        </main>
      </Context.Provider>
    );
  }
}
