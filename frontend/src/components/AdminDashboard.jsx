import React, { useState } from 'react';
import { useNavigate, Link, Outlet } from 'react-router-dom';
import '/src/admin.css';
import { IoIosSettings } from "react-icons/io";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { FaSearchLocation } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/admin-login');
  };
  return (
    <div className="admin-dashboard">
      <header className="header">
        <div className="header__welcome">
        <RiAdminLine/><span>Welcome Admin</span>
        </div>
        <div className="header__search-bar">
          <input type="text"  className="header__search-input" placeholder="Search"/>
        </div>
      </header>
      <div className={`main-container `}>
        <div className={`sidebar`}>
          <nav className="sidebar__nav">
            <img src='/logo3.avif' alt="logo" className="sidebar__logo" />
            <div className="sidebar__nav-options">
              <Link to="dashboard" className="sidebar__nav-option">
              <MdDashboard className='IoIosSettings'/><span className="sidebar__nav-text">Dashboard</span>
              </Link>
              <Link to="users" className="sidebar__nav-option">
              <FaUserCircle className='IoIosSettings'/> <span className="sidebar__nav-text">Users Data</span>
              </Link>
              <Link to="add" className="sidebar__nav-option">
              <AiOutlineUserAdd className='IoIosSettings'/><span className="sidebar__nav-text">Add User</span>
              </Link>
              <Link to="email" className="sidebar__nav-option">
                <MdEmail className='IoIosSettings'/> <span className="sidebar__nav-text">User Emails</span>
              </Link>
              <button className="sidebar__nav-option button--logout" onClick={handleLogout}>
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png" className="sidebar__nav-icon" alt="logout"/>
                <span className="sidebar__nav-text">Logout</span>
              </button>
            </div>
          </nav>
        </div>
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
