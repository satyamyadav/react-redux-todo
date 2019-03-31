import React, { Component } from 'react';
import './App.scss';
import './components/TodoList';
import VisibleTodoList from './containers/VisibleTodoList';
import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';


class App extends Component {
  render() {
    return (
      <div className="App">
        <VisibleTodoList />
        <AddTodo />
        <Footer />
      </div>
    );
  }
}

export default App;
