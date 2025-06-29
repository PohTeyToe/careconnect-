import React from 'react';

interface DoctorAvatarProps {
  name: string;
  size?: 'small' | 'medium' | 'large';
}

export function DoctorAvatar({ name, size = 'medium' }: DoctorAvatarProps) {
  const sizeClasses = {
    small: 'w-10 h-10 text-sm',
    medium: 'w-12 h-12 text-base',
    large: 'w-24 h-24 text-2xl'
  };

  const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2);

  return (
    <div className={`bg-gradient-to-br from-[#005FAC] to-[#0077CC] rounded-full flex items-center justify-center text-white font-medium ${sizeClasses[size]}`}>
      {initials}
    </div>
  );
}