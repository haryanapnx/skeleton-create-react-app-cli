import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

const ForgotPasswordContainer = () => {
   const dispatch = useDispatch()

   useEffect(() => {
    //some function get from API
    //ex dispatch(getForgotPassword())
  }, [])

   return (
      <div>
         
      </div>
   );
}

export default ForgotPasswordContainer;