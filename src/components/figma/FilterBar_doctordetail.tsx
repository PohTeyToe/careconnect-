import React from 'react';
import { ChevronDown } from 'lucide-react';

interface FilterBarProps {
  selectedLanguage: string;
  selectedSpecialty: string;
  onLanguageChange: (language: string) => void;
  onSpecialtyChange: (specialty: string) => void;
  doctors: Array<{ language: string; specialty: string }>;
}

export function FilterBar({
  selectedLanguage,
  selectedSpecialty,
  onLanguageChange,
  onSpecialtyChange,
  doctors
}: FilterBarProps) {
  // Get unique languages and specialties from doctors data
  const languages = Array.from(new Set(doctors.map(doctor => doctor.language)));
  const specialties = Array.from(new Set(doctors.map(doctor => doctor.specialty)));

  return (
    <div className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex gap-3">
        {/* Language Filter */}
        <div className="flex-1">
          <div className="relative">
            <select
              value={selectedLanguage}
              onChange={(e) => onLanguageChange(e.target.value)}
              className="
                w-full appearance-none bg-white border border-gray-300 rounded-[16px] 
                px-4 py-2.5 pr-10 text-sm arabic-text
                focus:outline-none focus:ring-2 focus:ring-[#005FAC] focus:border-transparent
              "
              dir="rtl"
            >
              <option value="">جميع اللغات</option>
              {languages.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Specialty Filter */}
        <div className="flex-1">
          <div className="relative">
            <select
              value={selectedSpecialty}
              onChange={(e) => onSpecialtyChange(e.target.value)}
              className="
                w-full appearance-none bg-white border border-gray-300 rounded-[16px] 
                px-4 py-2.5 pr-10 text-sm arabic-text
                focus:outline-none focus:ring-2 focus:ring-[#005FAC] focus:border-transparent
              "
              dir="rtl"
            >
              <option value="">جميع التخصصات</option>
              {specialties.map((specialty) => (
                <option key={specialty} value={specialty}>
                  {specialty}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}