import React, { Component } from 'react';
import './App.css';
import './components/TodoList';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

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
        <Footer />
      </div>
    );
  }
}

export default App;
