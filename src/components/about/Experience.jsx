const experienceContent = [
  {
    year: '2022 - Present',
    position: 'Full-Stack Web Developer',
    compnayName: 'Manhattan Global Partners',
    details: `Orchestrating end-to-end web development, merging front-end and back-end functionality to optimize user experiences and drive business goals.`,
  },
  {
    year: '2019 - Present',
    position: 'Web Developer',
    compnayName: 'ZappQuant Marketing',
    details: `Responsible for Web Development, leading the creation of intuitive user interfaces and engaging experiences to enhance overall product functionality and user satisfaction.`,
  },
  {
    year: '2018 - 2019',
    position: 'Founder',
    compnayName: 'ItsPrints.com - Amazon POD Startup',
    details: `Developed a full-stack website for the project using WordPress CMS.
Maintenance and implementation of new features.`,
  },
  {
    year: '2017 - 2018',
    position: 'Technical Support',
    compnayName: 'Aurora Technologies',
    details: `Worked cross-functionally with other departments to
    identify and resolve customer-facing issues. Offered feedback on web product operation to help
    develop modifications and reduce user problems.`,
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
