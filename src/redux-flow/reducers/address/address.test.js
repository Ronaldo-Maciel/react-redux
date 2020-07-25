import address from './index'
import { UPDATE_ADDRESS } from './actions'

it('address should be a function', () => {
  expect(typeof address).toBe('function')
})

it('should action UPDATE_ADDRESS update address ', () => {
  const before = {
    cep: '',
    logradouro: '',
    bairro: '',
    localidade: '',
    uf: ''
  }
  const action = {
    type: UPDATE_ADDRESS,
    payload: {
      cep: '03908111',
      logradouro: 'rua foo',
      bairro: 'jd fooo',
      localidade: 'Foo',
      uf: 'SP'
    }
  }

  const after = {
    cep: '03908111',
    logradouro: 'rua foo',
    bairro: 'jd fooo',
    localidade: 'Foo',
    uf: 'SP'
  }

  expect(address(before, action)).toEqual(after)
})