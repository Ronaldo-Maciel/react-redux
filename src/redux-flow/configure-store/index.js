import { createStore } from "redux"
import rootReducer from "../reducers"
import { applyMiddleware, compose } from "redux"
import thunk from 'redux-thunk'

export default ({ initialState } = {}) => {
  const enhancer = compose(applyMiddleware(thunk), reduxDevtools())
  const store = createStore(rootReducer, initialState, enhancer)

  return store
}

const reduxDevtools = () => window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
