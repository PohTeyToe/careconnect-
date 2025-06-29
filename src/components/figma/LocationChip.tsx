import React from 'react';
import { MapPin, MessageCircle } from './Icons.tsx';

interface LocationChipProps {
  city: string;
  language: string;
}

export function LocationChip({ city, language }: LocationChipProps) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-600">
      <div className="flex items-center gap-1">
        <MapPin className="w-4 h-4" />
        <span className="arabic-text" dir="rtl">{city}</span>
      </div>
      <span className="text-gray-400">•</span>
      <div className="flex items-center gap-1">
        <MessageCircle className="w-4 h-4" />
        <span className="arabic-text" dir="rtl">{language}</span>
      </div>
    </div>
  );
}