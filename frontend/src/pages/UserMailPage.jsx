import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaDatabase } from "react-icons/fa6";


const UserMailPage = () => {
  const [emails, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1); 

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:4040/api/email/emails');
        setUsers(response.data.emails);
      } catch (error) {
        setError('Error fetching users. Please try again.');
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:4040/api/email/${userId}`);
      const response = await axios.get('http://localhost:4040/api/email/emails');
      setUsers(response.data.emails);
      setError('');
    } catch (error) {
      setError('Error deleting user. Please try again.');
      console.error('Error deleting user:', error);
    }
  };

  const filteredUsers = emails.filter(user =>
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
        <h2>User Emails Management</h2>
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
            <div className="user-header-item">Message</div>
            <div className="user-header-item">Actions</div>
          </div>
          {currentUsers.length === 0 && <p className="no-users">No users found</p>}
          {currentUsers.map(user => (
            <div key={user._id} className="user-table-row">
              <div className="user-table-cell">{user.name}</div>
              <div className="user-table-cell">{user.email}</div>
              <div className="user-table-cell">{user.message}</div>
              <div className="user-table-cell">
                <button onClick={() => startEdit(user)} className='btn btn-warning'>Edit</button>
                <button onClick={() => handleDeleteUser(user._id)} className='btn btn-danger'>Delete</button>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination-controls">
          <button onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))} disabled={currentPage === 1}> Previous </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button onClick={() => setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages))} disabled={currentPage === totalPages}>Next</button>
        </div>
      </div>
    </div>
  );
};
export default UserMailPage;
