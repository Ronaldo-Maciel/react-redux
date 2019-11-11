import { ADD_TODO, TOGGLE_TODO } from "./actions";
import { v4 } from 'uuid';

const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { id: v4(), text }
})

const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id }
})

export { addTodo, toggleTodo };