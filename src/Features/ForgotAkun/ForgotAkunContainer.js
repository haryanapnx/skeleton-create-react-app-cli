import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

const ForgotAkunContainer = () => {
   const dispatch = useDispatch()

   useEffect(() => {
    //some function get from API
    //ex dispatch(getForgotAkun())
  }, [])

   return (
      <div>
         
      </div>
   );
}

export default ForgotAkunContainer;