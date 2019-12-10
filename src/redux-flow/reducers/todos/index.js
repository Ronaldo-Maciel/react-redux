import { ADD_TODO, TOGGLE_TODO } from "./actions"

const initialState = [];

const createReducer = (initialState, handleActions) => {
  return (state = initialState, action) => {
    if (handleActions.hasOwnProperty(action.type)) {
      return handleActions[action.type](state, action)
    }
    return state;
  }
}

const todos = createReducer(initialState, {
  [ADD_TODO]: (state, action) => state.concat({
    id: action.payload.id,
    text: action.payload.text,
    completed: false
  }),
  [TOGGLE_TODO]: (state, action) => state.map(todo => {
    if (todo.id !== action.payload.id) {
      return todo;
    }
    return {
      ...todo,
      completed: !todo.completed
    }
  }),
})

export default todos;