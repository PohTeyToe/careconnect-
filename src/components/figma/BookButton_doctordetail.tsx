import React from 'react';

interface BookButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export function BookButton({ 
  onClick, 
  children = "احجز موعد", 
  variant = 'primary',
  disabled = false 
}: BookButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        px-6 py-2.5 rounded-[12px] transition-colors font-medium text-sm arabic-text
        ${variant === 'primary' 
          ? 'bg-[#005FAC] text-white hover:bg-[#004a8c] disabled:bg-gray-300' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }
        disabled:cursor-not-allowed
      `}
      dir="rtl"
    >
      {children}
    </button>
  );
}