/**
   * Sometimes it's hard to tell if some component should be a presentational component or a container. For example, sometimes form and function are really coupled together, such as in the case of this tiny component:

  AddTodo is an input field with an “Add” button
  https://redux.js.org/basics/usage-with-react#designing-other-components
 */

import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../store/actions';

let AddTodo = ({dispatch}) => {
  let input;

  return (
    <div className="AddTodo">
      <form
        onSubmit={
          e => {
            e.preventDefault();
            if(!input.value.trim()) {
              return
            }
            dispatch(addTodo(input.value))
            input.value = ''
          }
        } 
      >
        <input
          placeholder="What needs to be done?   "
          ref={node => input = node}
        />
        <button type="suubmit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo