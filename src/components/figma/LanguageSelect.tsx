import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageSelection } from './LanguageSelection.tsx';
import { useLanguage } from './LanguageContext.tsx';

interface Language {
  code: string;
  name: string;
  flag: string;
  locale: string;
}

export default function LanguageSelect() {
  const { setActiveLanguage } = useLanguage();
  const navigate = useNavigate();

  const handleLanguageSelected = (language: Language) => {
    setActiveLanguage(language.code);
    navigate('/chat');
  };

  return (
    <div className="min-h-screen bg-white">
      <LanguageSelection onLanguageSelected={handleLanguageSelected} />
    </div>
  );
}