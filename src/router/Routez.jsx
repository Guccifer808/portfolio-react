import React from 'react';
import HomeLight from '../views/all-home-version/HomeLight';
import HomeDark from '../views/all-home-version/HomeDark';
import NotFound from '../views/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollTopBehaviour from '../components/ScrollTopBehaviour';

const Routez = () => {
  return (
    <>
      <Router>
        <ScrollTopBehaviour />
        <Routes>
          <Route path='/home-light' element={<HomeLight />} />
          <Route path='/' element={<HomeDark />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default Routez;
