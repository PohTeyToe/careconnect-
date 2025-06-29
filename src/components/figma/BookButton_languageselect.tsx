import React from 'react';
import { Calendar, Clock } from 'lucide-react';

interface BookButtonProps {
  onClick?: () => void;
}

export function BookButton({ onClick }: BookButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        flex items-center justify-center gap-3 
        w-full px-4 py-3 
        bg-white border-2 border-[#005FAC] 
        text-[#005FAC] rounded-[12px]
        hover:bg-[#005FAC] hover:text-white
        transition-all duration-200
        shadow-sm hover:shadow-md
        group
      "
    >
      <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
      <span className="font-medium">احجز موعد مع طبيب</span>
      <Clock className="w-4 h-4 opacity-70" />
    </button>
  );
}