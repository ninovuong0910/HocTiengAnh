export function wordReducer(state = [], action) {
  if (action.type === 'GET_WORDS') {
    return action.words;
  }
  if (action.type === 'ADD_WORD') {
    return state.concat(action.word)
  }
  if (action.type === 'REMOVE_WORD') {
    return state.filter(word => word._id !== action._id)
  }
  if (action.type === 'TOGGLE_WORD') {
    return state.map(word => {
      if (word._id === action._id) {
        word.isMemorized = !word.isMemorized
      }
      return word
    })
  }
  return state
}