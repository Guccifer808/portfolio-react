import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className='grid-container'>
      <h1 className='not-found-heading'>404 | Not Found</h1>
      <div className='button-container'>
        <button onClick={() => navigate('/')} className='go-back-button'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='arrow-icon'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1.5'
              d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
            />
          </svg>
          <span>Go back</span>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
