import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import AdminHotelsPage from './pages/AdminHotelsPage';
import ReservaPage from './pages/ReservaPage';
import Header from './components/Shared/Header';
import Footer from './components/Shared/Footer';
import Sidebar from './components/Shared/Sidebar';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Sidebar />
        <main>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/admin-hotels" element={<AdminHotelsPage />} />
            <Route path="/reserva" element={<ReservaPage />} />
            <Route path="/" element={<DashboardPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


