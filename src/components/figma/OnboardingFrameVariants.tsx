import React from 'react';
import { OnboardingFrame } from './OnboardingFrame.tsx';

// Default onboarding frame
export function OnboardingFrameDefault() {
  return (
    <OnboardingFrame />
  );
}

// Onboarding frame with custom styling
export function OnboardingFrameStyled() {
  return (
    <OnboardingFrame
      className="shadow-xl rounded-lg overflow-hidden border border-gray-200"
    />
  );
}

// Onboarding frame with callback handling
export function OnboardingFrameWithCallback() {
  const handleLanguageSelection = (language: any) => {
    console.log('Language selected:', language);
    // Add any custom logic here
  };

  return (
    <OnboardingFrame
      onLanguageSelected={handleLanguageSelection}
      className="bg-gradient-to-br from-blue-50 to-white"
    />
  );
}