import React from 'react';
import Productlist from '../components/Productlist';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <>
      <h1 className="text-center">MY SHOE</h1>
      <Slider />
      <Productlist />
    </>
  );
};

export default Home;
