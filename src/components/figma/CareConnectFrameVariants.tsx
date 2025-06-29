import React from 'react';
import { CareConnectFrame } from './CareConnectFrame.tsx';

// Example of different frame variants for Figma
export function CareConnectFrameDefault() {
  return (
    <CareConnectFrame />
  );
}

export function CareConnectFrameEmpty() {
  return (
    <CareConnectFrame
      initialMessages={[]}
      className="bg-gray-50"
    />
  );
}

export function CareConnectFrameWithCustomMessages() {
  const customMessages = [
    {
      id: '1',
      content: 'مرحبا، أحتاج استشارة طبية',
      sender: 'user' as const,
      timestamp: new Date(Date.now() - 600000)
    },
    {
      id: '2',
      content: 'أهلاً وسهلاً بك في CareConnect. كيف يمكنني مساعدتك اليوم؟',
      sender: 'bot' as const,
      timestamp: new Date(Date.now() - 580000)
    },
    {
      id: '3',
      content: 'لدي ألم في المعدة منذ الأمس',
      sender: 'user' as const,
      timestamp: new Date(Date.now() - 540000)
    },
    {
      id: '4',
      content: 'آسف لسماع ذلك. هل يمكنك وصف نوع الألم وشدته؟ متى يزداد الألم سوءًا؟',
      sender: 'bot' as const,
      timestamp: new Date(Date.now() - 520000),
      showBookingOption: true
    }
  ];

  return (
    <CareConnectFrame
      initialMessages={customMessages}
    />
  );
}

// Frame for showing loading state
export function CareConnectFrameLoading() {
  const loadingMessages = [
    {
      id: '1',
      content: 'هل يمكنك مساعدتي؟',
      sender: 'user' as const,
      timestamp: new Date(Date.now() - 120000)
    },
    {
      id: '2',
      content: 'جاري البحث عن أفضل الحلول لك...',
      sender: 'bot' as const,
      timestamp: new Date(Date.now() - 60000)
    }
  ];

  return (
    <CareConnectFrame
      initialMessages={loadingMessages}
    />
  );
}