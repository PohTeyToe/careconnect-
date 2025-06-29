import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, ArrowLeft, Globe } from './Icons.tsx';

interface Language {
  code: string;
  name: string;
  flag: string;
}

interface DoctorsHeaderProps {
  currentLanguage: Language;
  onLanguageButtonClick: () => void;
  title: string;
  subtitle: string;
}

export function DoctorsHeader({ currentLanguage, onLanguageButtonClick, title, subtitle }: DoctorsHeaderProps) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="bg-primary text-white px-4 py-4 flex items-center gap-3 shadow-md" dir="rtl">
      {/* Back Arrow (right side for RTL) */}
      <button 
        onClick={handleBackClick}
        className="flex items-center justify-center w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full transition-all"
        aria-label="Back"
      >
        <ArrowLeft className="w-5 h-5 text-white" />
      </button>
      {/* Heart Icon */}
      <div className="flex items-center justify-center w-10 h-10 bg-white/20 rounded-full">
        <Heart className="w-6 h-6 text-white" fill="currentColor" />
      </div>
      {/* Title and Subtitle */}
      <div className="flex-1 min-w-0 text-right">
        <h1 className="text-white font-medium">{title}</h1>
        <p className="text-white/80 text-sm">{subtitle}</p>
      </div>
      {/* Language Selector Pill (left side for RTL) */}
      <button
        onClick={onLanguageButtonClick}
        className="flex items-center gap-2 px-4 py-2 bg-white text-primary rounded-full border border-primary font-medium shadow-sm hover:bg-primary/10 transition-all"
        aria-label="Select language"
      >
        <Globe className="w-5 h-5 text-primary" />
        <span className="text-sm font-bold">{currentLanguage.code}</span>
      </button>
    </div>
  );
}