import React from 'react';
import HomeDark from '../views/all-home-version/HomeDark';
import NotFound from '../views/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Routez = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomeDark />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default Routez;
