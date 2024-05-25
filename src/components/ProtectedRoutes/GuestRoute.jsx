import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const GuestRoute = () => {
  const userId = useSelector((state) => state.userId);

  if (userId) {
    return <Navigate to="/" />; // or any other route where you want to redirect logged-in users
  }
else{

  return <Outlet/>;
}
};

export default GuestRoute;
