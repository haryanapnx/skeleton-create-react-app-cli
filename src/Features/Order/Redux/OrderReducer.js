import * as constants from './OrderConstant'

const initialState = {
  Order: [],
  isLoading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.ORDER_GET:
      return { 
        ...state, 
        Order: action.payload.Order 
      }
    case constants.ORDER_SET:
      return { 
        ...state, 
        Order: action.payload.Order 
      }
    case constants.ORDER_LOADING:
      return { 
        ...state, 
        isLoading: action.bool 
      }
    default:
      return state
  }
}
