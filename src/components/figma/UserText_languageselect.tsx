import React from 'react';

interface UserTextProps {
  content: string;
  timestamp: Date;
}

export function UserText({ content, timestamp }: UserTextProps) {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('ar-SA', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  return (
    <div className="flex justify-end w-full">
      <div className="max-w-[85%] flex flex-col gap-1">
        <div
          className="
            px-4 py-3 rounded-[12px] rounded-br-sm
            bg-[#f5f5f5] text-gray-800 arabic-text
            shadow-sm
          "
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