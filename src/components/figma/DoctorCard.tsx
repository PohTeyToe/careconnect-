import React from 'react';
import { MapPin, MessageCircle } from './Icons.tsx';
import { DoctorAvatar } from './DoctorAvatar.tsx';
import { DoctorName } from './DoctorName.tsx';
import { SpecialtyTag } from './SpecialtyTag.tsx';
import { LocationChip } from './LocationChip.tsx';

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  city: string;
  languages: string[];
  avatar?: string;
}

interface DoctorCardProps {
  doctor: Doctor;
  onBook: () => void;
  onClick?: () => void;
  bookLabel: string;
}

export function DoctorCard({ doctor, onBook, onClick, bookLabel }: DoctorCardProps) {
  return (
    <div
      className="w-full bg-white rounded-2xl p-4 shadow-md border border-gray-200 mb-2 cursor-pointer hover:shadow-lg transition-all"
      dir="rtl"
      onClick={onClick}
    >
      <div className="flex items-start justify-between gap-4">
        {/* Book button (right for RTL) */}
        <div className="ml-4 flex-shrink-0 flex flex-col items-center justify-center">
          <button
            onClick={e => { e.stopPropagation(); onBook(); }}
            className="bg-primary text-white px-8 py-2 rounded-xl font-medium text-sm transition-all hover:bg-[#004a8c] active:scale-95 shadow-md"
            data-testid="BookButton"
          >
            {bookLabel}
          </button>
        </div>
        {/* Doctor info (left for RTL) */}
        <div className="flex-1">
          {/* Doctor Avatar and Name */}
          <div className="flex items-start gap-3 mb-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-medium text-lg">
              {doctor.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
            </div>
            <div className="flex-1">
              {/* Doctor Name */}
              <h3 className="font-medium text-gray-900 mb-1 text-right">
                {doctor.name}
              </h3>
              {/* Specialty Tag */}
              <div className="inline-block bg-gray-100 text-primary px-3 py-1 rounded-full text-sm mb-2">
                {doctor.specialty}
              </div>
            </div>
          </div>
          {/* Location and Language Chips */}
          <div className="flex items-center gap-2 text-sm text-gray-600 justify-end">
            <div className="flex items-center gap-1">
              {/* Show all languages as pills */}
              {doctor.languages.map((lang, idx) => (
                <span key={lang} className="bg-gray-100 text-primary rounded-full px-2 py-0.5 text-xs ml-1">
                  {lang}
                </span>
              ))}
              <MessageCircle className="w-4 h-4 text-primary" />
            </div>
            <span className="text-gray-400">•</span>
            <div className="flex items-center gap-1">
              <span>{doctor.city}</span>
              <MapPin className="w-4 h-4 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}