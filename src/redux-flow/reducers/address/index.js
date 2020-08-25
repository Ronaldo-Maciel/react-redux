import createReducer from "../createReducer"
import { FETCHING, SUCCESS, ERROR } from './actions'

const initialState = {
  cep: '',
  logradouro: '',
  bairro: '',
  localidade: '',
  uf: '',
  isFetching: false,
  error: ''
};

const address = createReducer(initialState, {
  [FETCHING]: (state, action) => ({
    ...state,
    isFetching: true
  }),
  [SUCCESS]: (state, action) => ({
    ...action.payload,
    isFetching: false
  }),
  [ERROR]: (state, action) => ({
    ...action.payload,
    isFetching: false
  })
})

export default address
