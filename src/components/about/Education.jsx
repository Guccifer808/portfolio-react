const educationContent = [
  {
    year: '2019',
    degree: `MASTER'S DEGREE`,
    institute: 'National Aviation University',
    details: `Cyber Security and Information Protection `,
  },
  {
    year: '2017',
    degree: 'BACHELOR DEGREE',
    institute: 'National Aviation University',
    details: `Information and communications systems security `,
  },
  {
    year: '2013',
    degree: 'high school diploma',
    institute: 'Specialized school of I-III degrees No. 265',
    details: ``,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((value, i) => (
        <li key={i}>
          <div className='icon'>
            <i className='fa fa-graduation-cap'></i>
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
