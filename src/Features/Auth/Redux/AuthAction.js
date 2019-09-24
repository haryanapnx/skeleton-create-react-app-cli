import * as constants from './AuthConstant'

export function setLoading(bool){
    return{
        type:constants.AUTH_LOADING,
        bool
    }
}

export const getAuth = async dispatch => {

   dispatch(setLoading(true))

   //some function
   
}

export const postAuth = async dispatch => {

   dispatch(setLoading(true))

   //some function
   
}