import React from 'react';
import { CareConnectFrame } from './CareConnectFrame.tsx';

export default function App() {
  const handleSendMessage = (message: string) => {
    console.log('Message sent:', message);
    // Add any custom message handling logic here
  };

  const handleBookAppointment = () => {
    console.log('Appointment booking requested');
    // Add any custom booking logic here
  };

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