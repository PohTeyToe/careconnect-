import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock } from './Icons.tsx';

interface BookButtonProps {
  onClick?: () => void;
  navigateToDoctors?: boolean;
  label: string;
}

export function BookButton({ onClick, navigateToDoctors = false, label }: BookButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (navigateToDoctors) {
      navigate('/doctors');
    } else {
      onClick?.();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="
        flex items-center justify-center gap-3 
        w-full px-4 py-3 
        bg-white border-2 border-primary 
        text-primary rounded-xl
        hover:bg-primary hover:text-white
        transition-all duration-200
        shadow-sm hover:shadow-md
        group
      "
    >
      <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
      <span className="font-medium">
        {label}
      </span>
      <Clock className="w-4 h-4 opacity-70" />
    </button>
  );
}