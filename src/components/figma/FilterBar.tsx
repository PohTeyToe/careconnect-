import React, { useState, useRef, useEffect } from 'react';

interface FilterBarProps {
  selectedLanguage: string;
  selectedSpecialty: string;
  onLanguageChange: (lang: string) => void;
  onSpecialtyChange: (spec: string) => void;
  doctors: any[];
  allLanguagesLabel: string;
  allSpecialtiesLabel: string;
}

function PillDropdown({ options, selected, onSelect, label }: { options: string[]; selected: string; onSelect: (val: string) => void; label: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        className="px-6 py-2 rounded-full border border-primary bg-white text-primary font-medium shadow-sm flex items-center gap-2 min-w-[120px] justify-center hover:bg-primary/10 transition-all"
        onClick={() => setOpen((o) => !o)}
        type="button"
      >
        {selected || label}
        <span className="ml-2">▼</span>
      </button>
      {open && (
        <div className="absolute z-10 mt-2 w-full bg-white rounded-xl shadow-lg py-2 text-right">
          {options.map((option) => (
            <button
              key={option}
              className={`block w-full px-4 py-2 text-sm text-primary hover:bg-primary/10 text-right ${selected === option ? 'font-bold bg-primary/5' : ''}`}
              onClick={() => {
                onSelect(option === label ? '' : option);
                setOpen(false);
              }}
              type="button"
            >
              {option}
            </button>
          ))}
        </div>
      )}
      </div>
  );
}

export function FilterBar({ selectedLanguage, selectedSpecialty, onLanguageChange, onSpecialtyChange, doctors, allLanguagesLabel, allSpecialtiesLabel }: FilterBarProps) {
  // Get all unique languages from all doctors
  const allLanguages = doctors.flatMap(d => d.languages || []);
  const uniqueLanguages = [allLanguagesLabel, ...Array.from(new Set(allLanguages))];
  
  const specialties = [allSpecialtiesLabel, ...Array.from(new Set(doctors.map(d => d.specialty)))];

  return (
    <div className="flex gap-4 justify-between px-4 py-4 bg-transparent">
      <PillDropdown
        options={uniqueLanguages}
        selected={selectedLanguage || allLanguagesLabel}
        onSelect={onLanguageChange}
        label={allLanguagesLabel}
      />
      <PillDropdown
        options={specialties}
        selected={selectedSpecialty || allSpecialtiesLabel}
        onSelect={onSpecialtyChange}
        label={allSpecialtiesLabel}
      />
    </div>
  );
}