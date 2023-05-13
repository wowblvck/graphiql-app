import { Radio } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const TranslationButtons = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(localStorage.getItem('GraphiQLLang') || 'en');

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const changeLang = (e: string) => {
    changeLanguage(e);
    setLanguage(e);
    localStorage.setItem('GraphiQLLang', language);
  };

  return (
    <Radio.Group value={language} onChange={(e) => changeLang(e.target.value)}>
      <Radio.Button value="en">ENG</Radio.Button>
      <Radio.Button value="ru">РУС</Radio.Button>
    </Radio.Group>
  );
};

export default TranslationButtons;
