import { SET_VISIBILITY_FILTER } from "./actions";

const initialState = 'SHOW_ALL';

const reducerVisibilityFilter = (state = initialState, action) => {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload.filter;
    default:
      return state;
  }
};

export default reducerVisibilityFilter;