import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux-flow/reducers/todos/actions-creators';

const Form = () => {
  const dispatch = useDispatch()
  const handleAddTodo = e => {
    e.preventDefault()
    console.log(e.target.todo.value)
    dispatch(addTodo(e.target.todo.value))
    e.target.todo.value = ''
  }

  return (
    <form onSubmit={handleAddTodo}>
      <input type="text" name='todo' />
      <button type="submit">Adicionar</button>
    </form>
)};

export default Form;
