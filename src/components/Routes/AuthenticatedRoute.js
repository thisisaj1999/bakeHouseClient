import React from 'react'
import { Route } from 'react-router-dom';

const AuthenticatedRoute = ({ path, component: Component, ...props }) => {
  return (
    <Route path={path} element={<Component {...props} />} />
  )
}

export default AuthenticatedRoute