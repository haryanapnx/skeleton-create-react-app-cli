import * as constants from './ForgotPasswordConstant'

const initialState = {
  ForgotPassword: [],
  isLoading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.FORGOT_PASSWORD_GET:
      return { 
        ...state, 
        ForgotPassword: action.payload.ForgotPassword 
      }
    case constants.FORGOT_PASSWORD_SET:
      return { 
        ...state, 
        ForgotPassword: action.payload.ForgotPassword 
      }
    case constants.FORGOT_PASSWORD_LOADING:
      return { 
        ...state, 
        isLoading: action.bool 
      }
    default:
      return state
  }
}
