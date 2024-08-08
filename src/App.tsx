import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/Home/HomePage';
import Footer from './components/Footer/Footer';

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
