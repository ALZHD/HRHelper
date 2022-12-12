import React from 'react';
// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function PrivateRoute({ user, children }) {
  // const auth = useSelector((state) => state.user);
  const token = localStorage.getItem('TokenName');
  // console.log('private route', auth);
  if (!user && !token) {
    return (
      <Navigate to="/auth/signin" replace />
    );
  }
  return children;
}

export default PrivateRoute;
