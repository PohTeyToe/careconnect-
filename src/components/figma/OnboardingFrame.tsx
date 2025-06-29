import React, { useState } from 'react';
import { LanguageSelection } from './LanguageSelection.tsx';

interface Language {
  code: string;
  name: string;
  flag: string;
  locale: string;
}

interface OnboardingFrameProps {
  onLanguageSelected?: (language: Language) => void;
  className?: string;
}

export function OnboardingFrame({ onLanguageSelected, className = "" }: OnboardingFrameProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);

  const handleLanguageSelected = (language: Language) => {
    setSelectedLanguage(language);
    onLanguageSelected?.(language);
  };

  return (
    <div className={`h-screen bg-white max-w-md mx-auto ${className}`}>
      <LanguageSelection onLanguageSelected={handleLanguageSelected} />
    </div>
  );
}