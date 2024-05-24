import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const GuestRoute = ({ children }) => {
  const userId = useSelector((state) => state.userId);

  if (userId) {
    return <Navigate to="/" />; // or any other route where you want to redirect logged-in users
  }
else{

  return children;
}
};

export default GuestRoute;
