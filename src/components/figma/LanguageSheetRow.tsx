import React from 'react';
import { Check } from './Icons.tsx';

interface LanguageSheetRowProps {
  language: string;
  code: string;
  flag: string;
  isActive: boolean;
  onSelect: () => void;
}

export function LanguageSheetRow({ language, code, flag, isActive, onSelect }: LanguageSheetRowProps) {
  return (
    <button
      onClick={onSelect}
      className={`
        w-full flex items-center justify-between px-4 py-4
        hover:bg-gray-50 transition-colors duration-200
        border-b border-gray-100 last:border-b-0
        ${isActive ? 'bg-[#005FAC]/5' : ''}
      `}
    >
      <div className="flex items-center gap-3">
        <span className="text-xl">{flag}</span>
        <div className="text-left">
          <p className={`font-medium ${isActive ? 'text-[#005FAC]' : 'text-gray-900'}`}>
            {language}
          </p>
          <p className="text-sm text-gray-500">
            {code}
          </p>
        </div>
      </div>
      
      {isActive && (
        <Check className="w-5 h-5 text-[#005FAC]" />
      )}
    </button>
  );
}