import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import AuthenticatedRoute from './AuthenticatedRoute';
import {authenticatedPaths} from './authenticatedPaths.js'

const AllRoutes = () => {
  return (
    <Routes>
        {
            authenticatedPaths.map(item=><Route path={item.path} element={item.name} />)
        }
       
        {/* <AuthenticatedRoute exact path="/home" component={Home} />
        <AuthenticatedRoute exact path="/orders" component={Orders} />
        <AuthenticatedRoute exact path="/products" component={Products} />
        <AuthenticatedRoute exact path="/support" component={Support} /> */}
    </Routes>
  );
};

export default AllRoutes;
