import React from 'react';
import { Route, Navigate } from 'react-router-dom';

// Protected Route Component for React Router v6
const ProtectedRoute = ({ element, ...rest }) => {
  const token = localStorage.getItem('token'); // Get the token from localStorage

  return (
    <Route
      {...rest}
      element={token ? element : <Navigate to="/login" />} // Use Navigate for redirection
    />
  );
};

export default ProtectedRoute;
