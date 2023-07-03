const experienceContent = [
  {
    year: '2019 - Present',
    position: 'Front End Developer & Founder',
    compnayName: 'Digital Agency - Private Entrepreneur',
    details: `Developed websites, landing pages, e-commerce projects, and SPA for the US market.
Maintenance, implementation of new features, speed optimization.`,
  },
  {
    year: '2018 - 2019',
    position: 'Front End Developer',
    compnayName: 'ItsPrints.com - Startup',
    details: `Developed a full-stack website for the project based on WordPress CMS.
Maintenance and implementation of new features`,
  },
  {
    year: '2017 - 2018',
    position: 'Technical Support',
    compnayName: 'Aurora Technologies',
    details: `Worked cross-functionally with other departments to
    identify and resolve customer-facing issues. Offered feedback on web product operation to help
    develop modifications and reduce user problems`,
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
