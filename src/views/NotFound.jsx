import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='error_page'>
      <div
        className='hero bg-image'
        style={{
          backgroundImage: `url(${'img/404.jpg'})`,
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
        </div>
      </div>
    </div>
  );
};

export default NotFound;
