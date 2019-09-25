import * as constants from './ForgotAkunConstant'

const initialState = {
  ForgotAkun: [],
  isLoading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.FORGOT_AKUN_GET:
      return { 
        ...state, 
        ForgotAkun: action.payload.ForgotAkun 
      }
    case constants.FORGOT_AKUN_SET:
      return { 
        ...state, 
        ForgotAkun: action.payload.ForgotAkun 
      }
    case constants.FORGOT_AKUN_LOADING:
      return { 
        ...state, 
        isLoading: action.bool 
      }
    default:
      return state
  }
}
