import React from 'react';

interface BotTextProps {
  children: React.ReactNode;
  timestamp?: Date;
}

export function BotText({ children, timestamp }: BotTextProps) {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('ar-SA', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  return (
    <div className="flex justify-start">
      <div className="max-w-[85%] flex flex-col">
        <div className="bg-[#005FAC] text-white px-4 py-3 rounded-[12px] rounded-bl-sm arabic-text" dir="rtl">
          <p className="leading-relaxed">{children}</p>
        </div>
        {timestamp && (
          <div className="mt-1 px-2 text-right">
            <span className="text-xs text-gray-500">
              {formatTime(timestamp)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}