import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Users } from './Icons.tsx';
import { HeaderLanguageButton } from './HeaderLanguageButton.tsx';
import { LanguageSheetRow } from './LanguageSheetRow.tsx';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from './ui/sheet.tsx';

const languages = [
  { language: 'Arabic', code: 'AR', flag: '🇪🇬', name: 'Arabic' },
  { language: 'Mandarin', code: 'ZH', flag: '🇨🇳', name: 'Mandarin' },
  { language: 'Spanish', code: 'ES', flag: '🇪🇸', name: 'Spanish' },
  { language: 'English', code: 'EN', flag: '🇨🇦', name: 'English' }
];

export function ChatHeader() {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState('AR');
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleLanguageSelect = (code: string) => {
    setSelectedLanguage(code);
    setIsSheetOpen(false);
  };

  const handleDoctorsClick = () => {
    navigate('/doctors');
  };

  const currentLanguage = languages.find(lang => lang.code === selectedLanguage) || languages[0];

  return (
    <div className="chat-header">
      {/* Logo Container */}
      <div className="flex items-center justify-center w-10 h-10 bg-white/20 rounded-full">
        <Heart className="w-6 h-6 text-white" fill="currentColor" />
      </div>
      
      {/* Title Container */}
      <div className="flex-1 min-w-0">
        <h1 className="text-white font-medium">CareConnect</h1>
        <p className="text-white/80 text-sm" dir="rtl">مساعدك الصحي الذكي</p>
      </div>
      
      {/* Status Container */}
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
        <span className="text-white/80 text-sm" dir="rtl">متصل</span>
      </div>

      {/* Doctors Button */}
      <button 
        onClick={handleDoctorsClick}
        className="flex items-center justify-center w-8 h-8 hover:bg-white/10 rounded-full transition-colors"
        aria-label="Doctors"
      >
        <Users className="w-5 h-5 text-white" />
      </button>

      {/* Language Selector */}
      <Sheet>
        <SheetTrigger onClick={() => setIsSheetOpen(true)}>
          <span className="flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200 text-white/90 hover:text-white border border-white/20">
            <span className="text-lg">{currentLanguage.flag}</span>
            <span className="text-sm font-medium">{currentLanguage.code}</span>
          </span>
        </SheetTrigger>
        {isSheetOpen && (
          <SheetContent className="bg-gray-50 border-t-0 rounded-t-2xl p-0 max-h-[50vh]">
          <SheetHeader className="px-6 py-4 pb-2">
            <SheetTitle className="text-left text-gray-900">Select Language</SheetTitle>
            <SheetDescription className="text-left text-gray-600">
              Choose your preferred language for the chat interface
            </SheetDescription>
          </SheetHeader>
          <div className="bg-white mx-4 mb-4 rounded-xl overflow-hidden shadow-sm">
            {languages.map((lang) => (
              <LanguageSheetRow
                key={lang.code}
                language={lang.language}
                code={lang.code}
                flag={lang.flag}
                isActive={selectedLanguage === lang.code}
                onSelect={() => handleLanguageSelect(lang.code)}
              />
            ))}
          </div>
        </SheetContent>
        )}
      </Sheet>
    </div>
  );
}