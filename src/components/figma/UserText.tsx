import React from 'react';
import { useLanguage } from './LanguageContext.tsx';

interface UserTextProps {
  content: string;
  timestamp: Date;
}

export function UserText({ content, timestamp }: UserTextProps) {
  const { activeLanguage } = useLanguage();

  const formatTime = (date: Date) => {
    const locale = activeLanguage === 'AR' ? 'ar-SA' : activeLanguage;
    return date.toLocaleTimeString(locale, { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  return (
    <div className="flex justify-end w-full">
      <div className="max-w-[85%] flex flex-col gap-1">
        <div
          className="user-message"
          dir="rtl"
        >
          <p className="leading-relaxed">{content}</p>
        </div>
        
        <div className="text-left px-2">
          <span className="text-xs text-gray-500">
            {formatTime(timestamp)}
          </span>
        </div>
      </div>
    </div>
  );
}