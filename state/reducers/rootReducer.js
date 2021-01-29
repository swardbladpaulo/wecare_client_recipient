const rootReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_FOODBAG_INDEX':
      return {
        ...state,
        foodbag: action.payload,
      }
    /*next case goes here*/
  
    default:
  }
  return state
}
export default rootReducer
