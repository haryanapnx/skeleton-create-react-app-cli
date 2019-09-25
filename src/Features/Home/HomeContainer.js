import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

const HomeContainer = () => {
   const dispatch = useDispatch()

   useEffect(() => {
    //some function get from API
    //ex dispatch(getHome())
  }, [])

   return (
      <div>
         
      </div>
   );
}

export default HomeContainer;