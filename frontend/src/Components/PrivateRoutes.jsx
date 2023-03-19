import React from 'react'
import {Navigate} from "react-router-dom"

const PrivateRoutes = ({children}) => {
  const auth = true;

  if(!auth){
    return <Navigate to="/login" />
  }
  return children
  
}

export default PrivateRoutes