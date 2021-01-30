const rootReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_FOODBAG_INDEX':
      return {
        ...state,
        foodbags: action.payload,
      }
    default:
      return state
  }
}
export default rootReducer
