import React, { useContext } from 'react';
import languages from '../../languages';
import { LanguageContext } from '../App';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const selectLanguage = e => {
    const lang = e.target.value;
    setLanguage(lang);
  };
  return (
    <>
      <select
        value={language}
        onChange={selectLanguage}
        style={{ width: '100px', position: 'absolute', top: 70, right: 10 }}
      >
        {languages.list.map(lang => (
          <option value={lang} key={lang}>
            {lang}
          </option>
        ))}
      </select>
    </>
  );
};

export default LanguageSwitcher;
