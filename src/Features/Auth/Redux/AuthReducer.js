import * as constants from './AuthConstant'

const initialState = {
  Auth: [],
  isLoading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.AUTH_GET:
      return { 
        ...state, 
        Auth: action.payload.Auth 
      }
    case constants.AUTH_SET:
      return { 
        ...state, 
        Auth: action.payload.Auth 
      }
    case constants.AUTH_LOADING:
      return { 
        ...state, 
        isLoading: action.bool 
      }
    default:
      return state
  }
}
