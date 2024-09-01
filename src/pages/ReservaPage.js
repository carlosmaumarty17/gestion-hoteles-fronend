import React from 'react';
import Header from '../components/Shared/Header';
import Footer from '../components/Shared/Footer';
import ReservaList from '../components/Reservas/ReservaList';
import ReservaForm from '../components/Reservas/ReservaForm';
import { Routes, Route } from 'react-router-dom';

const ReservaPage = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <main>
        <Routes>
          <Route path="/" element={<ReservaList />} />
          <Route path="/nueva" element={<ReservaForm />} />
          <Route path="/:id" element={<ReservaForm />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default ReservaPage;
