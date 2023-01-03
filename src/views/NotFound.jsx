import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='error_page'>
      <div
        className='hero bg-image'
        style={{
          backgroundImage: `url(${'img/3.jpg'})`,
        }}
      >
        <div className='content'>
          <h1 data-aos='fade-up' data-aos-duration='1200'>
            404!
          </h1>
          <p data-aos='fade-up' data-aos-duration='1200' data-aos-delay='50'>
            Ooops! Page not found
          </p>

          <div
            className='button'
            data-aos='fade-up'
            data-aos-duration='1200'
            data-aos-delay='100'
          >
            <Link to='/'>BACK TO HOME</Link>
          </div>
          {/* End purchase_button */}
        </div>
      </div>
      {/* End .hero */}
    </div>
  );
};

export default NotFound;
