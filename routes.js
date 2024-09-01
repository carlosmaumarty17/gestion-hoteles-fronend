import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import AdminHotelsPage from './pages/AdminHotelsPage';
import ReservaPage from './pages/ReservaPage';

const RoutesConfig = () => (
  <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/dashboard" element={<DashboardPage />} />
    <Route path="/admin-hotels" element={<AdminHotelsPage />} />
    <Route path="/reserva" element={<ReservaPage />} />
    <Route path="/" element={<DashboardPage />} />
  </Routes>
);

export default RoutesConfig;



