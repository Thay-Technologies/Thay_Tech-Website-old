import React from 'react';
import Navbar from './components/navbar/Navbar';
import HomePage from './components/home/HomePage';
import Footer from './components/footer/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  );
};

export default App;
