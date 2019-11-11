  import todos from './index'
  import { ADD_TODO, TOGGLE_TODO } from './actions';

  it('should todos be a function', () => {
    expect(typeof todos).toBe('function')
  })

  it('should add a todo item', () => {
    const before = []
    const action = {
      type: ADD_TODO,
      payload: {
        id: 0,
        text: 'Hello'
      }
    }
    const after = [{
      id: 0,
      text: 'Hello',
      completed: false
    }]

    expect(todos(before, action)).toEqual(after)
  })

  it('should add a new item', () => {
    const before = [{
      id: 0,
      text: 'Hello',
      completed: false
    }]

    const action = {
      type: ADD_TODO,
      payload: {
        id: 1,
        text: 'Ho'
      }
    }

    const after = [
      {
        id: 0,
        text: 'Hello',
        completed: false,
      },
      {
        id: 1,
        text: 'Ho',
        completed: false
      }
    ]

    expect(todos(before, action)).toEqual(after)
  })
  
  it('should toggle first todo', () => {
    const before = [
      {
        id: 0, text: 'hey', completed: false
      },
      {
        id: 1,
        text: 'Ho',
        completed: false
      }
    ]
    
    const action = {
      type: TOGGLE_TODO,
      payload: {
        id: 0
      }
    }

    const after = [
      {
        id: 0, 
        text: 'hey', 
        completed: true
      },
      {
        id: 1,
        text: 'Ho',
        completed: false
      }
    ]

    expect(todos(before, action)).toEqual(after)
  })

  it('should toggle second todo', () => {
    const before = [
      {
        id: 0, 
        text: 'hey', 
        completed: false
      },
      {
        id: 1,
        text: 'Ho',
        completed: false
      }
    ]
    
    const action = {
      type: TOGGLE_TODO,
      payload: {
        id: 1
      }
    }

    const after = [
      {
        id: 0, 
        text: 'hey', 
        completed: false
      },
      {
        id: 1,
        text: 'Ho',
        completed: true
      }
    ]

    expect(todos(before, action)).toEqual(after)
  })

  it('should return last state when action is unknown', () => {
    const before = [
      {
        id: 0, 
        text: 'hey', 
        completed: false
      },
      {
        id: 1,
        text: 'Ho',
        completed: false
      }
    ]
    
    const action = {
      type: 'FOO',
    }

    const after = [
      {
        id: 0, 
        text: 'hey', 
        completed: false
      },
      {
        id: 1,
        text: 'Ho',
        completed: false
      }
    ]

    expect(todos(before, action)).toEqual(after)
  })