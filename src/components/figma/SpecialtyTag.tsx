import React from 'react';

interface SpecialtyTagProps {
  specialty: string;
  size?: 'small' | 'medium';
}

export function SpecialtyTag({ specialty, size = 'medium' }: SpecialtyTagProps) {
  const sizeClasses = {
    small: 'px-2 py-1 text-xs',
    medium: 'px-3 py-1 text-sm'
  };

  return (
    <div className={`inline-block bg-blue-50 text-[#005FAC] rounded-full arabic-text ${sizeClasses[size]}`} dir="rtl">
      {specialty}
    </div>
  );
}