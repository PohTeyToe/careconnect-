import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DoctorsHeader } from './DoctorsHeader.tsx';
import { FilterBar } from './FilterBar.tsx';
import { DoctorCard } from './DoctorCard.tsx';
import { LanguageBottomSheet } from './LanguageBottomSheet.tsx';
import { LanguageProvider, useLanguage } from './LanguageContext.tsx'; 

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  city: string;
  languages: string[];
  avatar?: string;
}

interface Language {
  code: string;
  name: string;
  flag: string;
}

const availableLanguages: Language[] = [
  { code: 'AR', name: 'Arabic', flag: '🇪🇬' },
  { code: 'ZH', name: 'Mandarin', flag: '🇨🇳' },
  { code: 'ES', name: 'Spanish', flag: '🇪🇸' },
  { code: 'EN', name: 'English', flag: '🇨🇦' }
];

// Multilingual doctor data
export const doctorData = {
  '1': {
    AR: { name: 'د. سميرة حسن', specialty: 'طب الأسرة', city: 'تورونتو' },
    EN: { name: 'Dr. Samira Hassan', specialty: 'Family Medicine', city: 'Toronto' },
    ES: { name: 'Dra. Samira Hassan', specialty: 'Medicina Familiar', city: 'Toronto' },
    ZH: { name: '萨米拉·哈桑医生', specialty: '家庭医学', city: '多伦多' }
  },
  '2': {
    AR: { name: 'د. أحمد الراشد', specialty: 'أمراض القلب', city: 'مونتريال' },
    EN: { name: 'Dr. Ahmed Al-Rashid', specialty: 'Cardiology', city: 'Montreal' },
    ES: { name: 'Dr. Ahmed Al-Rashid', specialty: 'Cardiología', city: 'Montreal' },
    ZH: { name: '艾哈迈德·拉希德医生', specialty: '心脏病学', city: '蒙特利尔' }
  },
  '3': {
    AR: { name: 'د. فاطمة الزهراء', specialty: 'طب الأطفال', city: 'تورونتو' },
    EN: { name: 'Dr. Fatima Al-Zahra', specialty: 'Pediatrics', city: 'Toronto' },
    ES: { name: 'Dra. Fatima Al-Zahra', specialty: 'Pediatría', city: 'Toronto' },
    ZH: { name: '法蒂玛·扎赫拉医生', specialty: '儿科', city: '多伦多' }
  },
  '4': {
    AR: { name: 'د. عمر بن علي', specialty: 'الأمراض الجلدية', city: 'فانكوفر' },
    EN: { name: 'Dr. Omar Ben Ali', specialty: 'Dermatology', city: 'Vancouver' },
    ES: { name: 'Dr. Omar Ben Ali', specialty: 'Dermatología', city: 'Vancouver' },
    ZH: { name: '奥马尔·本·阿里医生', specialty: '皮肤病学', city: '温哥华' }
  },
  '5': {
    AR: { name: 'د. ليلى المنصوري', specialty: 'طب الأسرة', city: 'كالغاري' },
    EN: { name: 'Dr. Layla Al-Mansouri', specialty: 'Family Medicine', city: 'Calgary' },
    ES: { name: 'Dra. Layla Al-Mansouri', specialty: 'Medicina Familiar', city: 'Calgary' },
    ZH: { name: '莱拉·曼苏里医生', specialty: '家庭医学', city: '卡尔加里' }
  },
  '6': {
    AR: { name: 'د. يوسف خليل', specialty: 'العظام', city: 'أوتاوا' },
    EN: { name: 'Dr. Yusuf Khalil', specialty: 'Orthopedics', city: 'Ottawa' },
    ES: { name: 'Dr. Yusuf Khalil', specialty: 'Ortopedia', city: 'Ottawa' },
    ZH: { name: '优素福·哈利勒医生', specialty: '骨科', city: '渥太华' }
  }
};

// Language names in different languages
const languageNames = {
  AR: { 'العربية': 'العربية', 'English': 'الإنجليزية', 'Spanish': 'الإسبانية', 'Mandarin': 'الماندرين', 'French': 'الفرنسية' },
  EN: { 'العربية': 'Arabic', 'English': 'English', 'Spanish': 'Spanish', 'Mandarin': 'Mandarin', 'French': 'French' },
  ES: { 'العربية': 'Árabe', 'English': 'Inglés', 'Spanish': 'Español', 'Mandarin': 'Mandarín', 'French': 'Francés' },
  ZH: { 'العربية': '阿拉伯语', 'English': '英语', 'Spanish': '西班牙语', 'Mandarin': '普通话', 'French': '法语' }
};

const mockDoctors: Doctor[] = [
  {
    id: '1',
    name: 'د. سميرة حسن',
    specialty: 'طب الأسرة',
    city: 'تورونتو',
    languages: ['العربية', 'English']
  },
  {
    id: '2',
    name: 'د. أحمد الراشد',
    specialty: 'أمراض القلب',
    city: 'مونتريال',
    languages: ['العربية', 'French', 'English']
  },
  {
    id: '3',
    name: 'د. فاطمة الزهراء',
    specialty: 'طب الأطفال',
    city: 'تورونتو',
    languages: ['العربية', 'Mandarin']
  },
  {
    id: '4',
    name: 'د. عمر بن علي',
    specialty: 'الأمراض الجلدية',
    city: 'فانكوفر',
    languages: ['العربية', 'Spanish']
  },
  {
    id: '5',
    name: 'د. ليلى المنصوري',
    specialty: 'طب الأسرة',
    city: 'كالغاري',
    languages: ['العربية', 'English', 'Spanish']
  },
  {
    id: '6',
    name: 'د. يوسف خليل',
    specialty: 'العظام',
    city: 'أوتاوا',
    languages: ['العربية', 'English', 'Mandarin']
  }
];

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

export default function AppWrapper() {
  return (
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
}

function App() {
  const navigate = useNavigate();
  const { activeLanguage, setActiveLanguage, translations } = useLanguage();
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('');
  const [isLanguageSheetOpen, setIsLanguageSheetOpen] = useState<boolean>(false);

  // Get translated doctors based on active language
  const getTranslatedDoctors = (): Doctor[] => {
    return mockDoctors.map(doctor => {
      const translations = doctorData[doctor.id as keyof typeof doctorData];
      const translation = translations[activeLanguage as keyof typeof translations] || translations.AR;
      
      return {
        ...doctor,
        name: translation.name,
        specialty: translation.specialty,
        city: translation.city,
        languages: doctor.languages.map(lang => 
          languageNames[activeLanguage as keyof typeof languageNames]?.[lang] || lang
        )
      };
    });
  };

  const doctors = getTranslatedDoctors();

  // Filter doctors based on selected filters
  const filteredDoctors = doctors.filter(doctor => {
    const languageMatch = !selectedLanguage || doctor.languages.includes(selectedLanguage);
    const specialtyMatch = !selectedSpecialty || doctor.specialty === selectedSpecialty;
    return languageMatch && specialtyMatch;
  });

  const handleBookAppointment = (doctorId: string) => {
    console.log('Booking appointment with doctor:', doctorId);
    // Here you would typically navigate to booking flow or show booking modal
  };

  const handleLanguageChange = (languageCode: string) => {
    setActiveLanguage(languageCode);
    setIsLanguageSheetOpen(false);
    // Clear the filter when changing app language
    setSelectedLanguage('');
    console.log('Language changed to:', languageCode);
  };

  const currentLanguage = availableLanguages.find(lang => lang.code === activeLanguage) || availableLanguages[0];

  const t = translations[activeLanguage];

  return (
    <div className="flex flex-col h-screen bg-gray-50 max-w-md mx-auto" dir="rtl">
      {/* Header */}
      <DoctorsHeader 
        currentLanguage={currentLanguage}
        onLanguageButtonClick={() => setIsLanguageSheetOpen(true)}
        title={t.doctors}
        subtitle={t.chooseDoctor}
      />
      
      {/* Filter Bar */}
      <FilterBar
        selectedLanguage={selectedLanguage}
        selectedSpecialty={selectedSpecialty}
        onLanguageChange={setSelectedLanguage}
        onSpecialtyChange={setSelectedSpecialty}
        doctors={doctors}
        allLanguagesLabel={t.allLanguages}
        allSpecialtiesLabel={t.allSpecialties}
      />
      
      {/* Doctors List */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onBook={() => handleBookAppointment(doctor.id)}
              onClick={() => navigate(`/doctor/${doctor.id}`)}
              bookLabel={t.book}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="text-gray-400 mb-2">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-gray-500">{t.doctors} {t.allLanguages}</p>
            <p className="text-gray-400 text-sm">{t.chooseDoctor}</p>
          </div>
        )}
      </div>

      {/* Language Bottom Sheet */}
      <LanguageBottomSheet
        isOpen={isLanguageSheetOpen}
        onClose={() => setIsLanguageSheetOpen(false)}
        languages={availableLanguages}
        activeLanguage={activeLanguage}
        onLanguageSelect={handleLanguageChange}
      />
    </div>
  );
}