import * as constants from './HomeConstant'

export function setLoading(bool){
    return{
        type:constants.HOME_LOADING,
        bool
    }
}

export const getHome = async dispatch => {

   dispatch(setLoading(true))

   //some function
   
}

export const postHome = async dispatch => {

   dispatch(setLoading(true))

   //some function
   
}