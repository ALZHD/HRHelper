import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function PrivateRoute({ children }) {
  const auth = useSelector((state) => state.user);
  const token = localStorage.getItem('TokenName');
  console.log(token);
  return (
    auth && token ? children : <Navigate to="/auth/signin" />

  );
}

export default PrivateRoute;
