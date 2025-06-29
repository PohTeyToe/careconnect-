import React, { useState, useEffect } from 'react';
import { ChatHeader } from './ChatHeader.tsx';
import { UserText } from './UserText.tsx';
import { BotText } from './BotText.tsx';
import { ChatInput } from './ChatInput.tsx';
import { useLanguage } from './LanguageContext.tsx';

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
  const { activeLanguage, translations } = useLanguage();
  const t = translations[activeLanguage] || translations.AR;

  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Set initial message when component mounts or language changes
    setMessages([
      {
        id: 'init',
        content: t.chooseDoctor, // Use translated "Choose your doctor" as initial bot message
        sender: 'bot',
        timestamp: new Date(),
        showBookingOption: true
      }
    ]);
  }, [t.chooseDoctor]);

  const handleSendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: content.trim(),
      sender: 'user',
      timestamp: new Date()
    };
    
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputValue('');
    setIsLoading(true);

    // --- AI API Call ---
    try {
      const apiKey = process.env.REACT_APP_AI_API_KEY; 
      
      // --- DEBUGGING: Check if the key is loaded ---
      console.log("Using API Key:", apiKey ? "Key Loaded" : "Key NOT Loaded");
      // --- END DEBUGGING ---

      if (!apiKey) {
        throw new Error("API key not found. Please add REACT_APP_AI_API_KEY to your .env.local file.");
      }

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: `You are a helpful healthcare assistant for CareConnect. Your name is Dr. AI. You can provide general health information and help users find doctors. Respond in the user's language: ${activeLanguage}.` },
            ...newMessages.map(msg => ({ 
              role: msg.sender === 'bot' ? 'assistant' : 'user', 
              content: msg.content 
            }))
          ]
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get response from AI.');
      }

      const data = await response.json();
      const aiResponseContent = data.choices[0]?.message?.content?.trim();

      if (aiResponseContent) {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          content: aiResponseContent,
          sender: 'bot',
          timestamp: new Date(),
          showBookingOption: aiResponseContent.toLowerCase().includes("book an appointment")
        };
        setMessages(prev => [...prev, botResponse]);
      }
    } catch (error) {
      console.error("AI API Error:", error);
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "Sorry, I'm having trouble connecting right now. Please try again later.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
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
          {isLoading && (
            <div className="flex justify-start w-full">
              <div className="bot-message opacity-70">
                <p>Dr. AI is typing...</p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Input Bar */}
      <ChatInput
        value={inputValue}
        onChange={setInputValue}
        onSend={handleSendMessage}
        placeholder={t.book}
        disabled={isLoading}
      />
    </div>
  );
}