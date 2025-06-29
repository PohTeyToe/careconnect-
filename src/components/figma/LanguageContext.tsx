import React, { createContext, useContext, useState } from 'react';

const translations = {
  AR: {
    doctors: "الأطباء",
    chooseDoctor: "اختر طبيبك المناسب",
    allLanguages: "جميع اللغات",
    allSpecialties: "جميع التخصصات",
    book: "احجز"
  },
  EN: {
    doctors: "Doctors",
    chooseDoctor: "Choose your doctor",
    allLanguages: "All languages",
    allSpecialties: "All specialties",
    book: "Book"
  },
  ES: {
    doctors: "Doctores",
    chooseDoctor: "Elige tu médico",
    allLanguages: "Todos los idiomas",
    allSpecialties: "Todas las especialidades",
    book: "Reservar"
  },
  ZH: {
    doctors: "医生",
    chooseDoctor: "选择您的医生",
    allLanguages: "所有语言",
    allSpecialties: "所有专科",
    book: "预约"
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