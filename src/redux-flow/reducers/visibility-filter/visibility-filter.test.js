import visibilityFilter from './index'
import { SET_VISIBILITY_FILTER } from './actions';

it('visibilityFilter', () => {
  expect(typeof visibilityFilter).toBe('function')
})

it('should show all todos', () => {
  const before = '';
  const action = {
    type: SET_VISIBILITY_FILTER,
    payload: {
      filter: 'SHOW_ALL'
    }
  }
  const after = 'SHOW_ALL';
  expect(visibilityFilter(before, action)).toEqual(after)
})

it('should show just completed todos', () => {
  const before = '';
  const action = {
    type: SET_VISIBILITY_FILTER,
    payload: {
      filter: 'SHOW_COMPLETED'
    }
  }
  const after = 'SHOW_COMPLETED';
  expect(visibilityFilter(before, action)).toEqual(after)
})

it('should show just active todos', () => {
  const before = 'SHOW_ALL';
  const action = {
    type: SET_VISIBILITY_FILTER,
    payload: {
      filter: 'SHOW_ACTIVE'
    }
  }
  const after = 'SHOW_ACTIVE';
  expect(visibilityFilter(before, action)).toEqual(after)
})

it('should return latest state when state is unknown  ', () => {
  const before = 'SHOW_COMPLETED';
  const action = {
    type: 'UNKNOWN',
    payload: {
      filter: 'SHOW_ALL'
    }
  }
  const after = 'SHOW_COMPLETED';
  expect(visibilityFilter(before, action)).toEqual(after)
})


