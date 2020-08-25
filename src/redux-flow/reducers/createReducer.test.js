import createReducer from './createReducer'

describe('createReducer', () => {
  const initialState = 0
  const reducer = createReducer(0, {
    'INCREMENT': (state, action) => state + 1,
    'DECREMENT': (state, action) => state - 1
  })

  it('should be a function', () => {
    expect(typeof createReducer).toBe('function')
  })
  
  it('should create a reducer', () => {
    const before = 0
    const action = { type: 'INCREMENT' }
    const after = 1
  
    expect(reducer(before, action)).toEqual(after)
  })
  
  it('reducer should return lastest iinitialState if action is unknown', () => {
    const before = 4
    const action = { type: 'UNKNOWN' }
    const after = 4
  
    expect(reducer(before, action)).toEqual(after)
  })
  
  it('reducer should return iinitialState when lastest state is undefined', () => {
    const before = undefined
    const action = {}
    const after = initialState
  
    expect(reducer(before, action)).toEqual(after)
  })

  it('initialState should not be undefined', () => {
    try {
      createReducer()
    } catch (e) {
      expect(e.message).toEqual('initialState should not be undefined')
    }
  })

  it('handleActions should not be different from object', () => {
    try {
      createReducer([])
    } catch (e) {
      expect(e.message).toEqual('createReducer expects the second argument as an object representing reducer')
    }
  })  
})