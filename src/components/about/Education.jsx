const educationContent = [
  {
    year: '2015',
    degree: 'ENGINEERING DEGREE',
    institute: 'OXFORD UNIVERSITY',
    details: `  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
        adipisicing elit`,
  },
  {
    year: '2012',
    degree: 'MASTER DEGREE',
    institute: 'KYIV UNIVERSITY',
    details: `Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol
        elit, tempor incididunt`,
  },
  {
    year: '2009',
    degree: 'BACHELOR DEGREE ',
    institute: 'KYIV UNIVERSITY',
    details: `Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur
        elit, sed do eiusmod tempor duntt`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((value, i) => (
        <li key={i}>
          <div className='icon'>
            <i className='fa fa-briefcase'></i>
          </div>
          <span className='time open-sans-font text-uppercase'>
            {value.year}
          </span>
          <h5 className='poppins-font text-uppercase'>
            {value.degree}
            <span className='place open-sans-font'>{value.institute}</span>
          </h5>
          <p className='open-sans-font'>{value.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
