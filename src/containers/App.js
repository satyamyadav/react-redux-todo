import React, { Component } from 'react';
import '../components/TodoList';
import VisibleTodoList from './VisibleTodoList';
import Footer from '../components/Footer';
import AddTodo from './AddTodo';


class App extends Component {
  render() {
    return (
      <div className="container container--center container--p5">
        <div className="Card">
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
