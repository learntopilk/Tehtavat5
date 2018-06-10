const feedbackReducer = (state = { pos: 0, neutr: 0, neg: 0, total: 0 }, action) => {
    let pos = state.pos
    let neutr = state.neutr
    let neg = state.neg
    let total = state.total + 1
  
    switch (action.type) {
      case 'POSITIVE':
        pos = pos + 1
        return ({ pos, neutr, neg, total })
      case 'NEUTRAL':
        neutr = neutr + 1
        return ({ pos, neutr, neg, total })
      case 'NEGATIVE':
        neg = neg + 1
        return ({ pos, neutr, neg, total })
      case 'RESET':
        return { pos: 0, neutr: 0, neg: 0, total: 0 }
      default:
        return ({ pos, neutr, neg, total: total - 1 })

    }
  }

  export default feedbackReducer