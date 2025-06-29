import React from 'react';
import { ArrowLeft, Heart, Phone, MapPin, Clock, MessageCircle } from './Icons.tsx';
import { DoctorAvatar } from './DoctorAvatar.tsx';
import { DoctorName } from './DoctorName.tsx';
import { SpecialtyTag } from './SpecialtyTag.tsx';
import { BookButton } from './BookButton.tsx';

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  city: string;
  language: string;
  phone?: string;
  address?: string;
  hours?: string;
  languages?: string[];
}

interface DoctorProfileProps {
  doctor: Doctor;
  onBack: () => void;
  onBookAppointment: () => void;
}

export function DoctorProfile({ doctor, onBack, onBookAppointment }: DoctorProfileProps) {
  return (
    <div className="flex flex-col h-screen bg-white max-w-md mx-auto">
      {/* Header with Back Arrow */}
      <div className="bg-primary text-white px-4 py-4 flex items-center gap-3 shadow-md">
        <button 
          onClick={onBack}
          className="flex items-center justify-center w-8 h-8 hover:bg-white/20 rounded-full transition-all"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        
        <div className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-full">
          <Heart className="w-4 h-4 text-white" fill="currentColor" />
        </div>
        
        <div className="flex-1">
          <h1 className="text-white font-medium">الملف الشخصي للطبيب</h1>
          <p className="text-white/80 text-sm">معلومات الطبيب التفصيلية</p>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Doctor Avatar and Basic Info */}
        <div className="px-6 py-8 text-center flex flex-col items-center gap-4">
          {/* Large Avatar Circle */}
          <DoctorAvatar name={doctor.name} size="large" />

          {/* Doctor Name */}
          <DoctorName name={doctor.name} size="large" />

          {/* Specialty */}
          <SpecialtyTag specialty={doctor.specialty} size="medium" />

          {/* City and Languages */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span className="text-gray-600" dir="rtl">{doctor.city}</span>
            </div>
            
            {doctor.languages && (
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <MessageCircle className="w-4 h-4" />
                <span className="text-gray-600" dir="rtl">{doctor.languages.join('، ')}</span>
              </div>
            )}
          </div>

          {/* Book Appointment CTA */}
          <div className="w-full">
            <BookButton onClick={onBookAppointment} />
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="px-6 pb-8">
          <div className="bg-gray-50 rounded-2xl p-6 flex flex-col gap-6">
            <h3 className="text-gray-900 mb-4 font-medium" dir="rtl">معلومات التواصل</h3>
            
            {/* Phone */}
            {doctor.phone && (
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-500 text-sm mb-1" dir="rtl">الهاتف</p>
                  <p className="text-gray-900">{doctor.phone}</p>
                </div>
              </div>
            )}

            {/* Clinic Address */}
            {doctor.address && (
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-500 text-sm mb-1" dir="rtl">عنوان العيادة</p>
                  <p className="text-gray-900 leading-relaxed">{doctor.address}</p>
                </div>
              </div>
            )}

            {/* Opening Hours */}
            {doctor.hours && (
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-500 text-sm mb-1" dir="rtl">ساعات العمل</p>
                  <p className="text-gray-900" dir="rtl">{doctor.hours}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}