import { Heart } from 'lucide-react';

export function ChatHeader() {
  return (
    <div className="bg-[#005FAC] text-white px-4 py-4 flex items-center gap-3 shadow-sm shrink-0">
      {/* Logo Container */}
      <div className="flex items-center justify-center w-10 h-10 bg-white/20 rounded-full shrink-0">
        <Heart className="w-6 h-6 text-white" fill="currentColor" />
      </div>
      
      {/* Title Container */}
      <div className="flex-1 min-w-0">
        <h1 className="text-white font-medium truncate">CareConnect</h1>
        <p className="text-white/80 text-sm truncate arabic-text" dir="rtl">مساعدك الصحي الذكي</p>
      </div>
      
      {/* Status Container */}
      <div className="flex items-center gap-2 shrink-0">
        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
        <span className="text-white/80 text-sm arabic-text" dir="rtl">متصل</span>
      </div>
    </div>
  );
}