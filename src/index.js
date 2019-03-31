import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';
import { Provider } from 'react-redux';

// import {
//   addTodo,
//   toggleTodo,
//   setVisibilityFilter,
//   VisibilityFilters,
// } from './store/actions';

// // Test store

// // initial state

// console.log(store.getState());

// // subscribe store for watching changes

// // subscribe() returns a function for unregistering the listener
// const unsubscribe = store.subscribe(() => console.log(store.getState()))

// // dispatch actions

// store.dispatch(addTodo('this is first task added'));
// store.dispatch(addTodo('second one'));
// store.dispatch(addTodo('third added'));

// store.dispatch(toggleTodo(1));
// store.dispatch(toggleTodo(0));
// store.dispatch(toggleTodo(1));

// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

// // unsubscribe
// unsubscribe();


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
