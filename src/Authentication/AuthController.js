import React from 'react';
import { useAuth } from './AuthContext';
import Login from './Login';
import CharactersController from '../Characters/CharactersController';

const AuthController = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      {isAuthenticated ? (
        <CharactersController />
      ) : (
        <Login />
      )}
    </div>
  );
};

export default AuthController;
