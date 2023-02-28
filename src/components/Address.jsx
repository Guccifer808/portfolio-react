const Address = () => {
  return (
    <>
      <p className='open-sans-font custom-span-contact position-relative'>
        <i className='fa fa-map position-absolute'></i>
        <span className='d-block'>Address</span>
        <a
          href='https://www.google.com/maps/place/Kyiv,+02000/data=!4m2!3m1!1s0x40d4cf4ee15a4505:0x764931d2170146fe?sa=X&ved=2ahUKEwjk8O3wnKH7AhWQ6CoKHdSTDLgQ8gF6BAgTEAE'
          target='_blank'
          rel='noreferrer'
        >
          Kyiv City, Ukraine
        </a>
      </p>
      {/* End .custom-span-contact */}

      <p className='open-sans-font custom-span-contact position-relative'>
        <i className='fa fa-envelope-open position-absolute'></i>
        <span className='d-block'>mail me</span>{' '}
        <a href='mailto:contact@guccifer.site'>contact@guccifer.site</a>
      </p>
      {/* End .custom-span-contact */}

      <p className='open-sans-font custom-span-contact position-relative'>
        <i className='fa fa-phone-square position-absolute'></i>
        <span className='d-block'>call me</span>{' '}
        <a href='Tel: +380734777877'>+38073 477 78 77</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
