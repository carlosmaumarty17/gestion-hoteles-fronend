import React from 'react';
import Header from '../components/Shared/Header';
import Footer from '../components/Shared/Footer';

const DashboardPage = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Panel de Control</h2>
        <p>Bienvenido a tu panel de control.</p>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;
