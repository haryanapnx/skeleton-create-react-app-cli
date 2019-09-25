import * as constants from './ForgotAkunConstant'

export function setLoading(bool){
    return{
        type:constants.FORGOT_AKUN_LOADING,
        bool
    }
}

export const getForgotAkun = async dispatch => {

   dispatch(setLoading(true))

   //some function
   
}

export const postForgotAkun = async dispatch => {

   dispatch(setLoading(true))

   //some function
   
}