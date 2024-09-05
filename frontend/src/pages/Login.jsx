import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4040/api/users/login', { email: username, password });
      toast.success('Login successful!');
      localStorage.setItem('token', response.data.token);
      login(username); 
      navigate('/'); 
    } catch (error) {
      toast.error(error.response?.data?.message || 'Invalid username or password');
    }
  };
  return (
    <div className='body1'>
      <div className="container">
        <div className="fullcontent">
          <div className="headings">
            <h1 className='slideIn'>LET'S START GYM</h1>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit...</h2>
          </div>
          <div className="formbox">
            <h3>Log In</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input  type="text"  id="username"  name="username"  placeholder='Username'  className="form-control"  value={username}  onChange={(e) => setUsername(e.target.value)}  required />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input  type="password"  id="password"  name="password"  placeholder='Password'  className="form-control"  value={password}  onChange={(e) => setPassword(e.target.value)}  required />
              </div>
              <button type="submit" className="btn btn-danger">Log In</button>
              <button  type="button"  className="btn btn-primary ms-2"  onClick={() => navigate('/signup')}>Signup</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
