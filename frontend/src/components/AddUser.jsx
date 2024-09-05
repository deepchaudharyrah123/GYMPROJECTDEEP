import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddUser = ({ onUserAdded }) => {
  const [newUserName, setNewUserName] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserPassword, setNewUserPassword] = useState('');

  const handleAddUser = async () => {
    if (newUserName.trim() === '' || newUserEmail.trim() === '' || newUserPassword.trim() === '') {
      console.error('All fields are required.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:4040/api/users/signup', {
        name: newUserName,
        email: newUserEmail,
        password: newUserPassword
      });
      if (response.data.success) {
        toast.success('User added successfully:', response.data.message);
        setNewUserName('');
        setNewUserEmail('');
        setNewUserPassword('');
        if (onUserAdded) onUserAdded(); 
      } else {
        console.error('Error adding user:', response.data.message);
      }
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };
  return (
    <div>
      <header className='adminheader'>
        <h3 className='adminh3des'>New User Add</h3>
      </header>
    <div className="add-user-container">
      <h2 className="title">Add New User</h2>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input  type="text"  id="name"  placeholder="Name"  value={newUserName}  onChange={(e) => setNewUserName(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input  type="email"  id="email"  placeholder="Email"  value={newUserEmail}  onChange={(e) => setNewUserEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input  type="password"  id="password"  placeholder="Password"  value={newUserPassword}  onChange={(e) => setNewUserPassword(e.target.value)} />
      </div>
      <button className="submit-button" onClick={handleAddUser}>Add User</button>
    </div>
    </div>
  );
};
export default AddUser;
