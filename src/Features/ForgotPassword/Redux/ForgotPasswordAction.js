import * as constants from './ForgotPasswordConstant'

export function setLoading(bool){
    return{
        type:constants.FORGOT_PASSWORD_LOADING,
        bool
    }
}

export const getForgotPassword = async dispatch => {

   dispatch(setLoading(true))

   //some function
   
}

export const postForgotPassword = async dispatch => {

   dispatch(setLoading(true))

   //some function
   
}