import React from 'react';

interface ChatMessageProps {
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export function ChatMessage({ content, sender, timestamp }: ChatMessageProps) {
  const isUser = sender === 'user';
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('ar-SA', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className="max-w-[85%] flex flex-col">
        <div
          className={`
            px-4 py-3 rounded-[12px] arabic-text
            ${isUser 
              ? 'bg-[#f5f5f5] text-gray-800 rounded-br-sm UserText' 
              : 'bg-[#005FAC] text-white rounded-bl-sm BotText'
            }
          `}
          data-testid={isUser ? 'UserText' : 'BotText'}
          dir="rtl"
        >
          <p className="leading-relaxed">{content}</p>
        </div>
        
        <div className={`mt-1 px-2 ${isUser ? 'text-left' : 'text-right'}`}>
          <span className="text-xs text-gray-500">
            {formatTime(timestamp)}
          </span>
        </div>
      </div>
    </div>
  );
}