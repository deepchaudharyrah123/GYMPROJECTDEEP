import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LoginPage from './pages/Login';
import Signup from './pages/Signup';
import AdminDashboard from './components/AdminDashboard';
import AdminLogin from './pages/AdminLogin';
import UserManagement from './components/UserManagement';
import PrivateRoute from './pages/PrivateRoute';
import AddUser from './components/AddUser';
import DashboardPage from './pages/DashboardPage';
import ImageGallery from './pages/ImageGallery';
import GalleryVideoPage from './pages/GalleryVideoPage'; 
import PlanDetail from './components/PlanDetail';
import './App.css';
import UserMailPage from './pages/UserMailPage';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />}>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="image-gallery" element={<ImageGallery />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="add" element={<AddUser />} />
            <Route path='email' element={<UserMailPage />} />
          </Route>
          <Route path="/gallery" element={<GalleryVideoPage />} /> 
          <Route path="/" element={<PrivateRoute element={<Home />} />} />
          <Route path="/plan-detail/:id" element={<PlanDetail />} />
        </Routes>
        <ToastContainer theme="dark" position="top-center" />
      </Router>
    </AuthProvider>
  );
};

export default App;
