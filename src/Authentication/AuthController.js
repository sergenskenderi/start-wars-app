import React from 'react';
import { useAuth } from './AuthContext';
import Login from './Login';

const AuthController = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      {isAuthenticated ? (
        <p>Welcome! Your authenticated content here.</p>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default AuthController;
