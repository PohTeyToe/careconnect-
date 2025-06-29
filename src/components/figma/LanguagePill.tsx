import React from 'react';

interface LanguagePillProps {
  flag: string;
  code: string;
  name: string;
  isSelected: boolean;
  onClick: () => void;
}

export function LanguagePill({ flag, code, name, isSelected, onClick }: LanguagePillProps) {
  return (
    <button
      onClick={onClick}
      className={`language-pill ${isSelected ? 'selected' : ''}`}
    >
      <span className="text-2xl">{flag}</span>
      <div className="flex flex-col items-start">
        <span className="font-medium">{code}</span>
        <span className="text-sm opacity-80">{name}</span>
      </div>
    </button>
  );
}