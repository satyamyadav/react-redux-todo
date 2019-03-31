import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/TodoList';
import TodoList from './components/TodoList';

// static todo list
const staticTodos = [
  { 
    id: 0,
    "text": "this is first task added",
    "completed": true
  },
  { 
    id: 1,
    "text": "second one",
    "completed": false
  },
  {
    id: 2,
    "text": "third added",
    "completed": false
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList todos={staticTodos} onTodoClick={() => { console.log('todo clicked') }} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
