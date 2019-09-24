import * as constants from './HomeConstant'

const initialState = {
  Home: [],
  isLoading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.HOME_GET:
      return { 
        ...state, 
        Home: action.payload.Home 
      }
    case constants.HOME_SET:
      return { 
        ...state, 
        Home: action.payload.Home 
      }
    case constants.HOME_LOADING:
      return { 
        ...state, 
        isLoading: action.bool 
      }
    default:
      return state
  }
}
