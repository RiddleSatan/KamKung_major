import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
  const id = useSelector((state) => state.userId); 
  console.log(id)

  if (!id) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoutes;
