import React from 'react';
import { BookButton } from './BookButton.tsx';
import { useLanguage } from './LanguageContext.tsx';

interface BotTextProps {
  content: string;
  timestamp: Date;
  showBookingOption?: boolean;
  onBookAppointment?: () => void;
}

export function BotText({ content, timestamp, showBookingOption = false, onBookAppointment }: BotTextProps) {
  const { translations, activeLanguage } = useLanguage();
  const t = translations[activeLanguage] || translations.AR;

  const formatTime = (date: Date) => {
    const locale = activeLanguage === 'AR' ? 'ar-SA' : activeLanguage;
    return date.toLocaleTimeString(locale, { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  return (
    <div className="flex justify-start w-full">
      <div className="max-w-[85%] flex flex-col gap-3">
        <div
          className="bot-message"
          dir="rtl"
        >
          <p className="leading-relaxed">{content}</p>
        </div>
        
        {showBookingOption && (
          <BookButton 
            onClick={onBookAppointment} 
            navigateToDoctors={true}
            label={t.book}
          />
        )}
        
        <div className="text-right px-2">
          <span className="text-xs text-gray-500">
            {formatTime(timestamp)}
          </span>
        </div>
      </div>
    </div>
  );
}