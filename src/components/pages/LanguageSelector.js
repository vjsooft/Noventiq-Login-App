// LanguageSelector.js
import React, { useEffect } from 'react';
// import Select from 'react-select';
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { t } = useTranslation();

  const languages = [
    { value: 'en', label: 'English' },
    { value: 'hi', label: 'Hindi' },
    { value: 'es', label: 'Spanish' },
    { value: 'fr', label: 'French' },
    // Add more languages here
  ];

  const browserLanguage = navigator.language.split('-')[0]; // Get the language part only (e.g., 'en' from 'en-US')

  useEffect(() => {
    if (languages.some(lang => lang.value === browserLanguage)) {
      i18n.changeLanguage(browserLanguage);
    } else {
      i18n.changeLanguage('en'); // default to English if unsupported
    }
  }, [browserLanguage, languages]);

  const handleChange = (selectedOption) => {
    i18n.changeLanguage(selectedOption.value);
  };

  return (
    <div>
        <select
            onChange={handleChange}
            options={languages}
            defaultValue={languages.find(lang => lang.value === i18n.init.lang)}
            >
            {languages.map((lang) => (
                <option key={lang.value} value={lang.value}>
                {lang.label}
                </option>
            ))}
            </select>
      {/* <select
        options={languages}
        defaultValue={languages.find(lang => lang.value === i18n.language)}
        onChange={handleChange}
      /> */}
      {/* <p>{t('welcome')}</p> */}
    </div>
  );
};

export default LanguageSelector;
