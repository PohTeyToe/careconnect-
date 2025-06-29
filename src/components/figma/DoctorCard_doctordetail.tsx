import React from 'react';
import { DoctorAvatar } from './DoctorAvatar.tsx';
import { DoctorName } from './DoctorName.tsx';
import { SpecialtyTag } from './SpecialtyTag.tsx';
import { LocationChip } from './LocationChip.tsx';
import { BookButton } from './BookButton.tsx';

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  city: string;
  language: string;
  avatar?: string;
}

interface DoctorCardProps {
  doctor: Doctor;
  onBook: () => void;
}

export function DoctorCard({ doctor, onBook }: DoctorCardProps) {
  return (
    <div className="w-full bg-white rounded-[16px] p-4 shadow-sm border border-gray-100 flex flex-col gap-3">
      {/* Doctor Info Section */}
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3 flex-1">
          <DoctorAvatar name={doctor.name} size="medium" />
          
          <div className="flex flex-col gap-2 flex-1">
            <DoctorName name={doctor.name} size="medium" />
            <SpecialtyTag specialty={doctor.specialty} size="small" />
          </div>
        </div>
        
        {/* Book Button */}
        <div className="ml-4">
          <BookButton onClick={onBook} />
        </div>
      </div>
      
      {/* Location Info */}
      <LocationChip city={doctor.city} language={doctor.language} />
    </div>
  );
}