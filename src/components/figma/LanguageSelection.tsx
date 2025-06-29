import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, MessageCircle, Users } from './Icons.tsx';
import { LanguagePill } from './LanguagePill.tsx';

interface Language {
  code: string;
  name: string;
  flag: string;
  locale: string;
}

interface LanguageSelectionProps {
  onLanguageSelected: (language: Language) => void;
}

const languages: Language[] = [
  { code: 'AR', name: 'العربية', flag: '🇪🇬', locale: 'ar' },
  { code: 'ZH', name: '中文', flag: '🇨🇳', locale: 'zh' },
  { code: 'ES', name: 'Español', flag: '🇪🇸', locale: 'es' },
  { code: 'EN', name: 'English', flag: '🇨🇦', locale: 'en' }
];

export function LanguageSelection({ onLanguageSelected }: LanguageSelectionProps) {
  const navigate = useNavigate();

  const handleChatClick = () => {
    navigate('/chat');
  };

  const handleDoctorsClick = () => {
    navigate('/doctors');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 max-w-md mx-auto">
      {/* Logo Section */}
      <div className="flex flex-col items-center mb-12">
        <div className="flex items-center justify-center w-20 h-20 bg-primary rounded-3xl mb-6 shadow-lg">
          <Heart className="w-12 h-12 text-white" fill="currentColor" />
        </div>
        <h1 className="text-primary font-medium mb-2">CareConnect</h1>
        <p className="text-gray-600 text-center">Your AI Healthcare Assistant</p>
      </div>

      {/* Language Selection Title */}
      <div className="text-center mb-8">
        <h2 className="text-gray-800 mb-2">Choose your language</h2>
        <p className="text-gray-500">Select your preferred language to continue</p>
      </div>

      {/* Language Grid */}
      <div className="grid grid-cols-2 gap-4 w-full mb-8">
        {languages.map((language) => (
          <LanguagePill
            key={language.code}
            flag={language.flag}
            code={language.code}
            name={language.name}
            isSelected={false}
            onClick={() => onLanguageSelected(language)}
          />
        ))}
      </div>

      {/* Quick Navigation Buttons */}
      <div className="flex gap-4 w-full mt-6">
        <button
          onClick={handleChatClick}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm font-medium">Start Chat</span>
        </button>
        <button
          onClick={handleDoctorsClick}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
        >
          <Users className="w-5 h-5" />
          <span className="text-sm font-medium">Find Doctors</span>
        </button>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center">
        <p className="text-gray-400 text-sm">
          Healthcare guidance powered by AI
        </p>
      </div>
    </div>
  );
}