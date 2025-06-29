import React from 'react';
import { UserText } from './UserText.tsx';
import { BotText } from './BotText.tsx';

interface ChatMessageProps {
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export function ChatMessage({ content, sender, timestamp }: ChatMessageProps) {
  if (sender === 'user') {
    return <UserText timestamp={timestamp}>{content}</UserText>;
  }
  
  return <BotText timestamp={timestamp}>{content}</BotText>;
}