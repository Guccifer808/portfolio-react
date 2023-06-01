const SocialShare = [
  {
    iconName: 'fa-github',
    link: 'https://github.com/Guccifer808/',
  },
  {
    iconName: 'fa-linkedin',
    link: 'https://www.linkedin.com/in/sergey-daniliuk-9a9818184/',
  },
];

const Social = () => {
  const renderSocialLinks = () => {
    return SocialShare.map((item, index) => {
      const { iconName, link } = item;
      const iconClass = `fa ${iconName}`;
      return (
        <li key={index}>
          <a href={link} target='_blank' rel='noreferrer'>
            <i className={iconClass}></i>
          </a>
        </li>
      );
    });
  };

  return (
    <ul className='social list-unstyled pt-1 mb-5'>{renderSocialLinks()}</ul>
  );
};

export default Social;
