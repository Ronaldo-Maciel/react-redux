import React from "react";
import styles from "./List.module.scss";
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from "../../redux-flow/reducers/todos/actions-creators";

function List({todos, handleAddTodo, handleToggleTodo}) {
  return (
    <>
      <form onSubmit={handleAddTodo}>
        <input type="text" name='todo' />
        <button type="submit">Adicionar</button>
      </form>
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
      <div>
        <h3>Exibir</h3>
        <button>Todos</button>
        <button>Finalizados</button>
        <button>A fazer</button>
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch =>({
  handleAddTodo: e => {
    e.preventDefault();
    dispatch(addTodo(e.target.todo.value))
    e.target.todo.value = '';
  },
  handleToggleTodo: id => e => {
    dispatch(toggleTodo(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List);
