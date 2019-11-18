import React from 'react';
import styles from './index.module.scss';
import { connect } from 'react-redux';
import { toggleTodo } from '../../redux-flow/reducers/todos/actions-creators';

const TodosList = ({todos, handleToggleTodo}) => (
  <ul>
    {todos.map(item => (
      <li 
        key={item.id}
        className={item.completed ? styles['completed'] : ''}
        onClick={handleToggleTodo(item.id)}
      >
        {item.text}
      </li>
    ))}
  </ul>
);

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch =>({
  handleToggleTodo: id => e => {
    dispatch(toggleTodo(id))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);