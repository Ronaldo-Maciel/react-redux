import createReducer from "../createReducer"
import { UPDATE_ADDRESS } from './actions'

const initialState = {
  cep: '',
  logradouro: '',
  bairro: '',
  localidade: '',
  uf: ''
};

const address = createReducer(initialState, {
  [UPDATE_ADDRESS]: (state, action) => action.payload
})

export default address
