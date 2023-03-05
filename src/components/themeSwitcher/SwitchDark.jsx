import React, { useState } from 'react';
import lightImage from '../../assets/img/sun.png';

const SwitchDark = () => {
  const [isDark, setIsDark] = useState(false);

  const handleThemeSwitch = () => {
    setIsDark(!isDark);
    document.querySelector('body').classList.toggle('dark', isDark);
    document.querySelector('body').classList.toggle('light', !isDark);
    localStorage.setItem('theme-color', isDark ? 'light' : 'dark');
  };
  return (
    <label className={`theme-switcher-label d-flex  ${isDark ? 'active' : ''}`}>
      <input
        type='checkbox'
        onClick={handleThemeSwitch}
        className='theme-switcher'
      />
      <div className='switch-handle'>
        <span className='light-text'>
          <img src={lightImage} alt='swicher' className='filter_1' />
        </span>
        <span className='dark-text'>
          <i className='fa fa-moon-o' aria-hidden='true'></i>
        </span>
      </div>
    </label>
  );
};

export default SwitchDark;
