import React from 'react';

interface DoctorNameProps {
  name: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export function DoctorName({ name, size = 'medium', className = '' }: DoctorNameProps) {
  const sizeClasses = {
    small: 'text-sm',
    medium: 'text-base font-medium',
    large: 'text-xl font-medium'
  };

  return (
    <h3 className={`text-gray-900 arabic-text ${sizeClasses[size]} ${className}`} dir="rtl">
      {name}
    </h3>
  );
}