import React from 'react';

interface Language {
  code: string;
  name: string;
  flag: string;
}

interface HeaderLanguageButtonProps {
  currentLanguage: Language;
  onClick: () => void;
}

export function HeaderLanguageButton({ currentLanguage, onClick }: HeaderLanguageButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        flex items-center gap-2 px-3 py-2 
        bg-white hover:bg-primary/10
        rounded-lg transition-all duration-200
        text-primary hover:text-primary
        border border-primary
        font-medium
      "
      aria-label="Select language"
    >
      <span className="text-lg">{currentLanguage.flag}</span>
      <span className="text-sm font-medium">{currentLanguage.code}</span>
    </button>
  );
}