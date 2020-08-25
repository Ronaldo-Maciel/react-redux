import { combineReducers } from "redux";
import todos from './todos/';
import visibilityFilter from './visibility-filter/';
import address from "./address";

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  address,
})

export default rootReducer;
