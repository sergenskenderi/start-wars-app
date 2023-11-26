import React, { useState } from 'react';
import { generateToken } from '../helper';
import users from '../dummyUserData';
import { useAuth } from './AuthContext';
import "./login.css";

const Login = () => {
  const { setIsAuthenticated } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const user = users.find((user) => user.username === username && user.password === password);

    if (user) {
      generateToken(username);
      setIsAuthenticated(true);
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className='login-form-container'>
      <img src="https://c4.wallpaperflare.com/wallpaper/1005/778/557/star-wars-darth-vader-emperor-palpatine-stormtrooper-wallpaper-preview.jpg" alt="Star Wars" />
      <label className="login-form-label" htmlFor="username">Username:</label>
      <input className="login-form-input" type="text" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <label className="login-form-label" htmlFor="password">Password:</label>
      <input className="login-form-input" type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button  className="login-form-button" onClick={handleLogin}>Login</button>
  </div>
  
  );
};

export default Login;
