import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const userId = useSelector((state) => state.userId);

  if (!userId) {
    return <Navigate to="/login" />;
  }
  else{
  return <Outlet/>;
}
};

export default PrivateRoute;
