import React from 'react';
import Carousel from './Carousel';
import ClientLogos from './ClientLogos'

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <Carousel />
      <ClientLogos />
    </div>
  );
};

export default HomePage;
