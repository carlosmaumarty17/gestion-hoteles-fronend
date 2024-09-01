import React from 'react';
import Header from '../components/Shared/Header';
import Footer from '../components/Shared/Footer';
import HotelList from '../components/AdminHotel/HotelList';
import HotelForm from '../components/AdminHotel/HotelForm';
import { Routes, Route } from 'react-router-dom';

const AdminHotelsPage = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <main>
        <Routes>
          <Route path="/" element={<HotelList />} />
          <Route path="/nuevo" element={<HotelForm />} />
          <Route path="/:id" element={<HotelForm />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default AdminHotelsPage;
