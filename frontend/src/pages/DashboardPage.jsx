import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const DashboardPage = () => {
                             const [userCount, setUserCount] = useState(0);
                             const [emailCount, setEmailCount] = useState(0);
                             const [loading, setLoading] = useState(true);
                             const [error, setError] = useState(null);
                             const [activePillar, setActivePillar] = useState(null);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const response = await axios.get('http://localhost:4040/api/admin/counts');
        setUserCount(response.data.userCount);
        setEmailCount(response.data.emailCount);
      } catch (error) {
        console.error('Error fetching counts:', error);
        setError('Error fetching data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCounts();
  }, []);

  const pillarValues = { Sunday: [10, 20, 30, 40, 50, 60, 70,40, 20, 30, 40],
                         Monday: [65, 35, 25, 45, 55, 65, 75,30, 60, 90, 40],
                         Tuesday: [20, 30, 40, 50, 60, 70, 80,10, 20, 30, 40],
                         Wednesday: [25, 35, 45, 55, 65, 75, 85,50, 10, 90, 40],
                         Thursday: [30, 40, 50, 60, 70, 80, 90,10, 20, 30, 40],
                         Friday: [35, 45, 55, 65, 75, 85, 95,60, 30, 100, 40],
                         Saturday: [10, 5, 19, 70, 40, 90, 100,10, 70, 20, 40]
  };

  const colors = { Sunday: '#FF6384', Monday: '#36A2EB', Tuesday: '#FFCE56', Wednesday: '#4BC0C0', Thursday: '#FF9F40', Friday: '#9966FF', Saturday: '#FF8C00'};

  const handleButtonClick = (day) => {
    setActivePillar(day);
  };

  const chartData = {
    labels: ['1 Hour', '2 Hour', '3 Hour3', '4 Hour', '5 Hour', '6 Hour', '7 Hour', '8 Hour', '9 Hour','10 Hour','11 Hour'],
    datasets: [
      { label: `user Data for ${activePillar}`, data: activePillar ? pillarValues[activePillar] : [], backgroundColor: activePillar ? colors[activePillar] : '',},],
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <header className='adminheader'>
        <h3 className='adminh3des'>Admin Dashboard</h3>
      </header>
    <div className="dashboard-container">
      <div className="dashboard-grid">
        <div className="dashboard-item">
          <h4><FaUser/> All Active Users</h4>
          <h3>{userCount}</h3>
        </div>
        <div className="dashboard-item">
          <h4><MdEmail/> All User Emails</h4>
          <h3>{emailCount}</h3>
        </div>
      </div>
      <div className="workdays-grid">
        {Object.keys(pillarValues).map(day => (
          <button key={day} className={`workday-item ${activePillar === day ? 'active' : ''}`} onClick={() => handleButtonClick(day)}> {day} </button>
        ))}
      </div>
      <div className="pillar-display">
        {activePillar && (
          <>
            <h3>User Data for {activePillar}</h3>
            <div className="bar-chart-container">
              <Bar data={chartData} />
            </div>
          </>
        )}
      </div>
    </div>
    </div>
  );
};
export default DashboardPage;