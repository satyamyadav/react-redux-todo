import React, { Component } from 'react';
import '../components/TodoList';
import VisibleTodoList from './VisibleTodoList';
import Footer from '../components/Footer';
import AddTodo from './AddTodo';


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
