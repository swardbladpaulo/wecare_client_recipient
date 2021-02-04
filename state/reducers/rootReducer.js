const rootReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_FOODBAG_INDEX':
      return {
        ...state,
        foodbags: action.payload,
      }
    case 'SET_CURRENT_USER':
      return {
        ...state,
        credentials: true,
        currentUser: action.payload,
      }
    case 'REGISTER_ERROR_MESSAGE':
      return {
        ...state,
        registerErrorMessage: action.payload,
      }
    case 'UPDATE_FOODBAG_INDEX':
      return {
        ...state,
        foodbags: action.payload,
      }
    default:
      return state
  }
}
export default rootReducer
