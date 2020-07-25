import { SET_VISIBILITY_FILTER, SHOW_ALL } from "./actions";
import createReducer from "../createReducer";

const initialState = SHOW_ALL;

const reducerVisibilityFilter = createReducer(initialState, {
  [SET_VISIBILITY_FILTER]: (state, action) => action.payload.filter
})

export default reducerVisibilityFilter;