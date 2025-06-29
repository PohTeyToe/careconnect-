import React, { useState } from 'react';
import { LanguageSelection } from './LanguageSelection.tsx';
import { CareConnectFrame } from './CareConnectFrame.tsx';

interface Language {
  code: string;
  name: string;
  flag: string;
  locale: string;
}

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);
  const [showChat, setShowChat] = useState(false);

  const handleLanguageSelected = (language: Language) => {
    setSelectedLanguage(language);
    // Add a small delay for better UX
    setTimeout(() => {
      setShowChat(true);
    }, 300);
  };

  const handleSendMessage = (message: string) => {
    console.log(`Message sent in ${selectedLanguage?.name}:`, message);
    // Add any custom message handling logic here
  };

  const handleBookAppointment = () => {
    console.log(`Appointment booking requested in ${selectedLanguage?.name}`);
    // Add any custom booking logic here
  };

  // Show onboarding screen if no language selected or chat not shown yet
  if (!selectedLanguage || !showChat) {
    return (
      <div className="min-h-screen bg-gray-50">
        <LanguageSelection onLanguageSelected={handleLanguageSelected} />
      </div>
    );
  }

  // Show chat interface after language selection
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <CareConnectFrame
        onSendMessage={handleSendMessage}
        onBookAppointment={handleBookAppointment}
        className="shadow-xl rounded-lg overflow-hidden"
      />
    </div>
  );
}