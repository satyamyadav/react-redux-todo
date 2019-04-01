import React, { Component } from 'react';
import '../components/TodoList';
import VisibleTodoList from './VisibleTodoList';
import Footer from '../components/Footer';
import AddTodo from './AddTodo';
import Title from '../components/Title';

const meta = {
  title: 'todo',
  git: {
    title: 'Fork on github',
    url: 'https://github.com/satyamyadav/react-redux-todo'
  }
}
class App extends Component {
  render() {
    return (
      <div className="container container--center container--p5">
        <div style={{ width: '50%' }}>
          <Title {...meta} />
          <div className="Card">
            <AddTodo />
            <VisibleTodoList />
            <Footer />
          </div>

        </div>
      </div>
    );
  }
}

export default App;
