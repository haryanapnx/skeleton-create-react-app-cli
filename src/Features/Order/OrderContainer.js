import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

const OrderContainer = () => {
   const dispatch = useDispatch()

   useEffect(() => {
    //some function get from API
    //ex dispatch(getOrder())
  }, [])

   return (
      <div>
         
      </div>
   );
}

export default OrderContainer;