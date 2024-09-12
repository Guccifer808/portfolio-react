const Address = () => {
  const addressLink =
    'https://www.google.com/maps/place/Kyiv,+02000/data=!4m2!3m1!1s0x40d4cf4ee15a4505:0x764931d2170146fe?sa=X&ved=2ahUKEwjk8O3wnKH7AhWQ6CoKHdSTDLgQ8gF6BAgTEAE';
  const emailLink = 'mailto:contact@guccifer.site';
  // const phoneNumber = '+380734777877';
  const telegram = 'Guccifer808';

  const ContactItem = ({ iconClass, title, children }) => (
    <p className='custom-span-contact position-relative'>
      <i className={`fa ${iconClass} position-absolute`}></i>
      <span className='d-block'>{title}</span>
      {children}
    </p>
  );

  return (
    <div className='open-sans-font'>
      <ContactItem iconClass='fa-map' title='Address'>
        <a href={addressLink} target='_blank' rel='noreferrer'>
          Kyiv City, Ukraine
        </a>
      </ContactItem>
      <ContactItem iconClass='fa-envelope-open' title='Mail me'>
        <a href={emailLink}>contact@guccifer.site</a>
      </ContactItem>
      {/* <ContactItem iconClass='fa-phone-square' title='Call me'>
        <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
      </ContactItem> */}
      <ContactItem iconClass='fa-telegram' title='Message me'>
        <a
          href={`https://telegram.me/${telegram}`}
          target='_blank'
          rel='noreferrer'
        >
          @{telegram}
        </a>
      </ContactItem>
    </div>
  );
};

export default Address;
