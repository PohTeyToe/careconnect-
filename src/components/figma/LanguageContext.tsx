import React, { createContext, useContext, useState } from 'react';

const translations = {
  AR: {
    doctors: "الأطباء",
    chooseDoctor: "اختر طبيبك المناسب",
    allLanguages: "جميع اللغات",
    allSpecialties: "جميع التخصصات",
    book: "احجز",
    contactInfo: "معلومات التواصل",
    phone: "الهاتف",
    address: "عنوان العيادة",
    hours: "ساعات العمل"
  },
  EN: {
    doctors: "Doctors",
    chooseDoctor: "Choose your doctor",
    allLanguages: "All languages",
    allSpecialties: "All specialties",
    book: "Book",
    contactInfo: "Contact Information",
    phone: "Phone",
    address: "Clinic Address",
    hours: "Opening Hours"
  },
  ES: {
    doctors: "Doctores",
    chooseDoctor: "Elige tu médico",
    allLanguages: "Todos los idiomas",
    allSpecialties: "Todas las especialidades",
    book: "Reservar",
    contactInfo: "Información de contacto",
    phone: "Teléfono",
    address: "Dirección de la clínica",
    hours: "Horario de apertura"
  },
  ZH: {
    doctors: "医生",
    chooseDoctor: "选择您的医生",
    allLanguages: "所有语言",
    allSpecialties: "所有专科",
    book: "预约",
    contactInfo: "联系信息",
    phone: "电话",
    address: "诊所地址",
    hours: "营业时间"
  }
};

const LanguageContext = createContext({
  activeLanguage: 'AR',
  setActiveLanguage: (lang: string) => {},
  translations
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeLanguage, setActiveLanguage] = useState('AR');
  return (
    <LanguageContext.Provider value={{ activeLanguage, setActiveLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);  