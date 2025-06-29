import React from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from './LanguageContext.tsx';
import { doctorData } from './Doctors.tsx';
import { DoctorProfile } from './DoctorProfile.tsx';

export default function DoctorDetail() {
  const { id } = useParams();
  const { activeLanguage, translations } = useLanguage();
  const t = translations[activeLanguage];

  // Get doctor translation
  if (!id) return <div>{t.doctors} - {t.chooseDoctor}</div>;
  
  const doctorTranslations = doctorData[id as keyof typeof doctorData];
  const doctor = doctorTranslations ? {
    id,
    name: doctorTranslations[activeLanguage].name,
    specialty: doctorTranslations[activeLanguage].specialty,
    city: doctorTranslations[activeLanguage].city,
    language: activeLanguage,
    languages: ['العربية', 'English'], // Default languages, could be made dynamic
    phone: '+1 (416) 555-0123', // Mock data
    address: '123 Main St, Toronto, ON', // Mock data
    hours: 'الاثنين - الجمعة: 9:00 ص - 5:00 م' // Mock data
  } : null;

  if (!doctor) return <div>{t.doctors} - {t.chooseDoctor}</div>;

  return (
    <DoctorProfile
      doctor={doctor}
      onBack={() => window.history.back()}
      onBookAppointment={() => {}}
    />
  );
}