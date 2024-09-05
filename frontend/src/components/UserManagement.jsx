import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaDatabase } from "react-icons/fa6";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [editingUser, setEditingUser] = useState(null);
  const [userForm, setUserForm] = useState({ name: '', email: '', password: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:4040/api/admin/users');
        setUsers(response.data.users);
      } catch (error) {
        setError('Error fetching users. Please try again.');
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:4040/api/users/users/${userId}`);
      const response = await axios.get('http://localhost:4040/api/admin/users');
      setUsers(response.data.users);
      setSuccess('User deleted successfully.');
      setError('');
    } catch (error) {
      setError('Error deleting user. Please try again.');
      console.error('Error deleting user:', error);
    }
  };

  const handleEditUser = async () => {
    try {
      await axios.put(`http://localhost:4040/api/users/users/${editingUser._id}`, userForm);
      const response = await axios.get('http://localhost:4040/api/admin/users');
      setUsers(response.data.users);
      setSuccess('User updated successfully.');
      setEditingUser(null);
      setUserForm({ name: '', email: '', password: '' });
      setError('');
    } catch (error) {
      setError('Error updating user. Please try again.');
      console.error('Error updating user:', error);
    }
  };

  const startEdit = (user) => {
    setEditingUser(user);
    setUserForm({ name: user.name, email: user.email, password: '' });
  };

  const handleChange = (e) => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <header className='adminheader'>
        <h3 className='adminh3des'>User Data</h3>
      </header>
      <div className="user-management">
        <h2>User Management</h2>
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}
        <div className="search-bar">
          <input type="text" placeholder="Search by name" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
        </div>
        <div className="items-per-page">
          <label htmlFor="items-per-page"><FaDatabase/></label>
          <select id="items-per-page" value={itemsPerPage} onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1); 
            }}> 
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
        </div>
        <div className="user-table">
          <div className="user-table-header">
            <div className="user-header-item">Name</div>
            <div className="user-header-item">Email</div>
            <div className="user-header-item">Password</div>
            <div className="user-header-item">Actions</div>
          </div>
          {currentUsers.length === 0 && <p className="no-users">No users found</p>}
          {currentUsers.map(user => (
            <div key={user._id} className="user-table-row">
              <div className="user-table-cell">{user.name}</div>
              <div className="user-table-cell">{user.email}</div>
              <div className="user-table-cell">{user.password}</div>
              <div className="user-table-cell">
                <button onClick={() => startEdit(user)} className='btn btn-warning'>Edit</button>
                <button onClick={() => handleDeleteUser(user._id)} className='btn btn-danger'>Delete</button>
              </div>
            </div>
          ))}
        </div>

        {editingUser && (
          <div className="edit-user-form">
            <h3>Edit User</h3>
            <input type="text" name="name" value={userForm.name} onChange={handleChange} placeholder="Name"/>
            <input type="email" name="email" value={userForm.email} onChange={handleChange} placeholder="Email"/>
            <input type="password" name="password" value={userForm.password} onChange={handleChange} placeholder="Password (leave blank to keep current)"/>
            <button onClick={handleEditUser}>Save Changes</button>
            <button onClick={() => setEditingUser(null)}>Cancel</button>
          </div>
        )}

        <div className="pagination-controls">
          <button onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))} disabled={currentPage === 1}>Previous</button>
          <span>Page {currentPage} of {totalPages}</span>
          <button onClick={() => setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages))} disabled={currentPage === totalPages}>Next</button>
        </div>
      </div>
    </div>
  );
};
export default UserManagement;
