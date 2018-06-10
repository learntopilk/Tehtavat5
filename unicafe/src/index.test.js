import deepFreeze from 'deep-freeze'
import feedbackReducer from './feedbackReducer'

describe('unicafe reducer', () => {
  const initialState = {
    pos: 0,
    neutr: 0,
    neg: 0,
    total: 0
  }

  it('should return a proper initial state when called with undefined state', () => {
    const state = {}
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = feedbackReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  it('good is incremented', () => {
    const action = {
      type: 'POSITIVE'
    }
    const state = initialState

    deepFreeze(state)
    const newState = feedbackReducer(state, action)
    expect(newState).toEqual({
      pos: 1,
      neutr: 0,
      neg: 0,
      total: 1
    })
  })
})