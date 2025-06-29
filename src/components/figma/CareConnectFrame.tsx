import React, { useState } from 'react';
import { ChatHeader } from './ChatHeader.tsx';
import { UserText } from './UserText.tsx';
import { BotText } from './BotText.tsx';
import { ChatInput } from './ChatInput.tsx';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  showBookingOption?: boolean;
}

interface CareConnectFrameProps {
  initialMessages?: Message[];
  onSendMessage?: (message: string) => void;
  onBookAppointment?: () => void;
  className?: string;
}

export function CareConnectFrame({ 
  initialMessages,
  onSendMessage,
  onBookAppointment,
  className = ""
}: CareConnectFrameProps) {
  const defaultMessages: Message[] = [
    {
      id: '1',
      content: 'صداع مستمر منذ يومين',
      sender: 'user',
      timestamp: new Date(Date.now() - 300000)
    },
    {
      id: '2',
      content: 'أفهم أنك تعاني من صداع مستمر منذ يومين. هذا قد يكون مؤشرًا على عدة أسباب مثل التوتر، قلة النوم، أو الجفاف. أنصحك بشرب الكثير من الماء، الحصول على قسط كافٍ من الراحة، وتجنب الضوء الساطع. إذا استمر الصداع أو ازداد سوءًا، يُرجى استشارة طبيب مختص.',
      sender: 'bot',
      timestamp: new Date(Date.now() - 240000),
      showBookingOption: true
    }
  ];

  const [messages, setMessages] = useState<Message[]>(initialMessages || defaultMessages);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = (content: string) => {
    if (content.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        content: content.trim(),
        sender: 'user',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, newMessage]);
      setInputValue('');
      
      // Call external handler if provided
      onSendMessage?.(content.trim());
      
      // Simulate bot response
      setTimeout(() => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          content: 'شكرًا لك على رسالتك. سأقوم بمراجعة استفسارك والرد عليك قريبًا. هل تحتاج إلى حجز موعد مع طبيب مختص؟',
          sender: 'bot',
          timestamp: new Date(),
          showBookingOption: Math.random() > 0.5
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1500);
    }
  };

  const handleBookAppointment = () => {
    const bookingMessage: Message = {
      id: Date.now().toString(),
      content: 'تم إرسال طلب حجز الموعد. سيتم التواصل معك قريبًا لتأكيد الموعد.',
      sender: 'bot',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, bookingMessage]);
    
    // Call external handler if provided
    onBookAppointment?.();
  };

  return (
    <div className={`flex flex-col h-screen bg-white max-w-md mx-auto border-x border-gray-200 ${className}`}>
      {/* Header */}
      <ChatHeader />
      
      {/* Chat Messages */}
      <div className="chat-messages">
        <div className="flex flex-col gap-4 min-h-full">
          {messages.map((message) => (
            <div key={message.id} className="w-full">
              {message.sender === 'user' ? (
                <UserText
                  content={message.content}
                  timestamp={message.timestamp}
                />
              ) : (
                <BotText
                  content={message.content}
                  timestamp={message.timestamp}
                  showBookingOption={message.showBookingOption}
                  onBookAppointment={handleBookAppointment}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Input Bar */}
      <ChatInput
        value={inputValue}
        onChange={setInputValue}
        onSend={handleSendMessage}
      />
    </div>
  );
}