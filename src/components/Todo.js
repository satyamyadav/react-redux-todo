/**
  * Todo is a single todo item.
    text: string is the text to show.
    completed: boolean is whether the todo should appear crossed out.
    onClick() is a callback to invoke when the todo is clicked.
 */

import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ text, completed, onClick }) => (
  <li
    className={completed ? 'Todo-item Todo-item--done' : 'Todo-item' }
  >
    <span
      className={completed ? 'Todo-check Todo-check--done' : 'Todo-check'}
      type="checkbox"
      onClick={onClick}
    >
    </span>
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
}

export default Todo