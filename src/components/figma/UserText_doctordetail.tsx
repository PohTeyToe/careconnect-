import React from 'react';

interface UserTextProps {
  children: React.ReactNode;
  timestamp?: Date;
}

export function UserText({ children, timestamp }: UserTextProps) {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('ar-SA', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  return (
    <div className="flex justify-end">
      <div className="max-w-[85%] flex flex-col">
        <div className="bg-[#f5f5f5] text-gray-800 px-4 py-3 rounded-[12px] rounded-br-sm arabic-text" dir="rtl">
          <p className="leading-relaxed">{children}</p>
        </div>
        {timestamp && (
          <div className="mt-1 px-2 text-left">
            <span className="text-xs text-gray-500">
              {formatTime(timestamp)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}