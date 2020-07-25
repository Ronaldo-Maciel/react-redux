import { combineReducers } from "redux";
import reducerTodos from './todos/';
import reducerVisibilityFilter from './visibility-filter/';

const reducer = combineReducers({
  todos: reducerTodos,
  visibilityFilter: reducerVisibilityFilter
})

export default reducer;
