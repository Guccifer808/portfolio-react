const personalInfoContent = [
  { meta: 'first name', metaInfo: 'Sergey' },
  { meta: 'last name', metaInfo: 'Danyliuk' },
  { meta: 'Age', metaInfo: '27' },
  { meta: 'Nationality', metaInfo: 'Ukrainian' },
  // { meta: 'Freelance', metaInfo: 'Available' },
  { meta: 'Address', metaInfo: 'Kyiv' },
  // { meta: 'phone', metaInfo: '+380734777877' },
  // { meta: 'Email', metaInfo: 'contact@guccifer.site' },
  // { meta: 'Telegram', metaInfo: '@Guccifer808' },
  { meta: 'langages', metaInfo: 'English, Ukrainian, Russian' },
];

const PersonalInfo = () => {
  return (
    <ul className='about-list list-unstyled open-sans-font'>
      {personalInfoContent.map((value, i) => (
        <li key={i}>
          <span className='title'>{value.meta}: </span>
          <span className='value d-block d-sm-inline-block d-lg-block d-xl-inline-block'>
            {value.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
