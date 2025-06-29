import React, { useEffect } from 'react';
import { X } from './Icons.tsx';
import { LanguageSheetRow } from './LanguageSheetRow.tsx';

interface Language {
  code: string;
  name: string;
  flag: string;
}

interface LanguageBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  languages: Language[];
  activeLanguage: string;
  onLanguageSelect: (code: string) => void;
}

export function LanguageBottomSheet({ 
  isOpen, 
  onClose, 
  languages, 
  activeLanguage, 
  onLanguageSelect 
}: LanguageBottomSheetProps) {
  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Bottom Sheet */}
      <div className="
        relative w-full max-w-md bg-white rounded-t-[20px] 
        shadow-xl transform transition-transform
        animate-in slide-in-from-bottom duration-300
      ">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
          <h3 className="font-medium text-gray-900">
            Select Language
          </h3>
          <button
            onClick={onClose}
            className="
              flex items-center justify-center w-8 h-8 
              text-gray-400 hover:text-gray-600 
              hover:bg-gray-100 rounded-full transition-colors
            "
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Language Options */}
        <div className="pb-4">
          {languages.map((language) => (
            <LanguageSheetRow
              key={language.code}
              language={language.name}
              code={language.code}
              flag={language.flag}
              isActive={language.code === activeLanguage}
              onSelect={() => onLanguageSelect(language.code)}
            />
          ))}
        </div>
        
        {/* Safe area for mobile devices */}
        <div className="h-4 bg-white" />
      </div>
    </div>
  );
}