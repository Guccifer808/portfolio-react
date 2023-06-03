const experienceContent = [
  {
    year: '2018 - Present',
    position: 'Front End Developer & Founder',
    compnayName: 'Digital Agency - Private Entrepreneur',
    details: `Developed websites, landing pages, e-commerce
    projects, and SPA`,
  },
  {
    year: '2018 - 2019',
    position: 'Front End Developer & Founder',
    compnayName: 'ItsPrints.com - Startup',
    details: `Developed a business plan and raised initial capital
    from investors to launch the business. Developed a website for the project`,
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
