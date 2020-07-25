const createReducer = (initialState, handleActions) => {
  return (state = initialState, action) => {
    if (handleActions.hasOwnProperty(action.type)) {
      return handleActions[action.type](state, action)
    }
    return state;
  }
}

export default createReducer;