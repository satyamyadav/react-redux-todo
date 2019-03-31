import React, { Component } from 'react';
import './App.css';
import './components/TodoList';
import VisibleTodoList from './containers/VisibleTodoList';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
