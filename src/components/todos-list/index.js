import React from 'react';
import styles from './index.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo } from '../../redux-flow/reducers/todos/actions-creators';
import * as filterActions from '../../redux-flow/reducers/visibility-filter/actions';

const getVisibleTodos = (todos, activeFilter) => {
  const actions = {
    [filterActions.SHOW_ALL]: todos,
    [filterActions.SHOW_COMPLETED]: todos.filter(todo => todo.completed),
    [filterActions.SHOW_ACTIVE]: todos.filter(todo => !todo.completed)
  }
  return actions[activeFilter];
}

const TodosList = () => {
  const todos = useSelector(state => state.todos)
  const activeFilter = useSelector(state => state.visibilityFilter)
  const dispatch = useDispatch()

  return (
    <ul>
      {getVisibleTodos(todos, activeFilter).map(item => (
        <li 
          key={item.id}
          className={item.completed ? styles['completed'] : ''}
          onClick={() => dispatch(toggleTodo(item.id))}
        >
          {item.text}
        </li>
      ))}
    </ul>
  )
}

export default TodosList;
