const experienceContent = [
  {
    year: '   2018 - Present',
    position: ' Web Developer, Marketing Team Manager',
    compnayName: 'Private Entrepreneur',
    details: `  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
        adipisicing elit`,
  },
  {
    year: '2017 - 2018',
    position: ' Tech Support',
    compnayName: 'Aurora Technologies',
    details: `Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol
        elit, tempor incididunt`,
  },
  {
    year: '2015 - 2017',
    position: 'Private Entrepreneur',
    compnayName: 'Private Entrepreneur',
    details: `Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur
        elit, sed do eiusmod tempor duntt`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((value, i) => (
        <li key={i}>
          <div className='icon'>
            <i className='fa fa-briefcase'></i>
          </div>
          <span className='time open-sans-font text-uppercase'>
            {value.year}
          </span>
          <h5 className='poppins-font text-uppercase'>
            {value.position}
            <span className='place open-sans-font'>{value.compnayName}</span>
          </h5>
          <p className='open-sans-font'>{value.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
