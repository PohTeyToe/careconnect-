import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './components/figma/LanguageContext.tsx';
import LanguageSelect from './components/figma/LanguageSelect.tsx';
import Chat           from './components/figma/Chat.tsx';
import Doctors        from './components/figma/Doctors.tsx';
import DoctorDetail   from './components/figma/DoctorDetail.tsx';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/"            element={<LanguageSelect />} />
          <Route path="/chat"        element={<Chat />} />
          <Route path="/doctors"     element={<Doctors />} />
          <Route path="/doctor/:id"  element={<DoctorDetail />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
} 