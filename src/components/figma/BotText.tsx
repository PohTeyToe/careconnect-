import React from 'react';
import { BookButton } from './BookButton.tsx';

interface BotTextProps {
  content: string;
  timestamp: Date;
  showBookingOption?: boolean;
  onBookAppointment?: () => void;
}

export function BotText({ content, timestamp, showBookingOption = false, onBookAppointment }: BotTextProps) {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('ar-SA', { 
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