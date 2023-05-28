import { useState } from 'react';
import { Radio, RadioChangeEvent } from 'antd';
import { useTranslation } from 'react-i18next';

const TranslationButtons = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(localStorage.getItem('i18nextLng'));

  const changeLang = (e: RadioChangeEvent) => {
    i18n.changeLanguage(e.target.value);
    setLanguage(e.target.value);
  };

  return (
    <Radio.Group size={'small'} value={language} onChange={(e) => changeLang(e)}>
      <Radio.Button value="en">ENG</Radio.Button>
      <Radio.Button value="ru">РУС</Radio.Button>
    </Radio.Group>
  );
};

export default TranslationButtons;
