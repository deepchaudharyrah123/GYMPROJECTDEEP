import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return alert('Passwords do not match');
    }
    try {
      await axios.post('http://localhost:4040/api/users/signup', { name, email, password });
      alert('Signup successful');
      window.location.href = '/login';
    } catch (error) {
      alert(error.response?.data?.message || 'Error signing up');
    }
  };
  return (
    <div className="signup-container">
      <div className="container">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-md-8 col-lg-6 col-xl-4">
            <div className="card shadow-lg">
              <div className="card-body p-5">
                <h2 className="card-title text-center mb-4">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-3">
                    <label htmlFor="name">Name</label>
                    <input  type="text"  className="form-control"  id="name"  placeholder="Enter your name"  value={name}  onChange={(e) => setName(e.target.value)}  required />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="email">Email address</label>
                    <input  type="email"  className="form-control"  id="email"  placeholder="Enter your email"  value={email}  onChange={(e) => setEmail(e.target.value)}  required />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="password">Password</label>
                    <input  type="password"  className="form-control"  id="password"  placeholder="Enter your password"  value={password}  onChange={(e) => setPassword(e.target.value)}  required />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input  type="password"  className="form-control"  id="confirm-password"  placeholder="Confirm your password"  value={confirmPassword}  onChange={(e) => setConfirmPassword(e.target.value)}  required />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                </form>
                <div className="text-center mt-3">
                  <small>Already have an account? <a href="/login">Login here</a></small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
