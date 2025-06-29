import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from './LanguageContext.tsx';
import { doctorData } from './Doctors.tsx';
import { DoctorProfile } from './DoctorProfile.tsx';

export default function DoctorDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { activeLanguage, translations } = useLanguage();
  const t = translations[activeLanguage] || translations.AR;

  if (!id) return <div>Loading...</div>;

  const doctorTranslations = doctorData[id as keyof typeof doctorData];
  
  if (!doctorTranslations) {
    return <div>Doctor not found</div>;
  }

  const doctor = {
    id,
    name: doctorTranslations[activeLanguage as keyof typeof doctorTranslations].name,
    specialty: doctorTranslations[activeLanguage as keyof typeof doctorTranslations].specialty,
    city: doctorTranslations[activeLanguage as keyof typeof doctorTranslations].city,
    language: activeLanguage,
    languages: [], // This should be populated from the base doctor data if needed
    phone: '+1 (416) 555-0123', // Mock data
    address: '123 Main St, Toronto, ON', // Mock data
    hours: 'Monday - Friday: 9 AM - 5 PM' // Mock data
  };

  return (
    <DoctorProfile
      doctor={doctor}
      onBack={() => navigate(-1)}
      onBookAppointment={() => {}}
      t={t}
    />
  );
}