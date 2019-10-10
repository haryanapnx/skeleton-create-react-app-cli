import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

const AuthContainer = () => {
   const dispatch = useDispatch()

   useEffect(() => {
    //some function get from API
    //ex dispatch(getAuth())
  }, [])

   return (
      <div>
         
      </div>
   );
}

export default AuthContainer;