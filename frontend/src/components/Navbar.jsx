import React from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, username, logout } = useAuth();

  const handleLogout = () => {
    logout();
    toast.success('Logout successful!'); 
    navigate('/login'); 
  };

  return (
    <header>
      <p className="logo">FITNESS CLUB</p>
      <p className="welcome">Welcome: {username}</p>
      {isAuthenticated ? (
        <div className="auth-container">
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <b></b>
      )}
    </header>
  );
};

export default Navbar;
