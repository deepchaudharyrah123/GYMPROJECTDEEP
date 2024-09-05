import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') { 
      navigate('/admin'); 
    } else {
      alert('Invalid Data'); 
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="textbox">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
          </div>
          <div className="textbox">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
