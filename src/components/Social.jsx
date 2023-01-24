const SocialShare = [
  {
    iconName: 'fa fa-github',
    link: 'https://github.com/Guccifer808/',
  },
  { iconName: 'fa fa-linkedin', link: 'https://linkedin.com/' },
];

const Social = () => {
  return (
    <ul className='social list-unstyled pt-1 mb-5'>
      {SocialShare.map((value, i) => (
        <li key={i}>
          <a href={value.link} target='_blank' rel='noreferrer'>
            <i className={value.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
