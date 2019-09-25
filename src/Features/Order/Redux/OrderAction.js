import * as constants from './OrderConstant'

export function setLoading(bool){
    return{
        type:constants.ORDER_LOADING,
        bool
    }
}

export const getOrder = async dispatch => {

   dispatch(setLoading(true))

   //some function
   
}

export const postOrder = async dispatch => {

   dispatch(setLoading(true))

   //some function
   
}