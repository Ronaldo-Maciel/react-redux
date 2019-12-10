import React from 'react';
import styles from './index.module.scss';
import { connect } from 'react-redux';
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

const TodosList = ({ todos, handleToggleTodo, activeFilter }) => {

  return (
    <ul>
      {getVisibleTodos(todos, activeFilter).map(item => (
        <li 
          key={item.id}
          className={item.completed ? styles['completed'] : ''}
          onClick={handleToggleTodo(item.id)}
        >
          {item.text}
        </li>
      ))}
    </ul>
  )
}
;

const mapStateToProps = state => ({
  todos: state.todos,
  activeFilter: state.visibilityFilter
});

const mapDispatchToProps = dispatch =>({
  handleToggleTodo: id => e => {
    dispatch(toggleTodo(id))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);