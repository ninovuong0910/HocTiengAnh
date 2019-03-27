export function filterReducer(state = 'show_all', action) {
  if (action.type === 'CHANGE_FILTER_MODE') {
    return action.filterMode;
  }
  return state;
}