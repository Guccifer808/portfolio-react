import React, { useState } from 'react';
import i18next from 'i18next';

function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    i18next.changeLanguage(event.target.value);
  };

  return (
    <select value={selectedLanguage} onChange={handleLanguageChange}>
      <option value='en'>EN</option>
      <option value='ua'>UA</option>
    </select>
  );
}

export default LanguageSelector;
