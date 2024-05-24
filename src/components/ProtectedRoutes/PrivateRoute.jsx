import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const userId = useSelector((state) => state.userId);

  if (!userId) {
    return <Navigate to="/login" />;
  }
  else{
  return children;}
};

export default PrivateRoute;
