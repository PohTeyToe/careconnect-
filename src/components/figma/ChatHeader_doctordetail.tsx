import { Heart } from 'lucide-react';

export function ChatHeader() {
  return (
    <div className="bg-[#005FAC] text-white px-4 py-4 flex items-center gap-3 shadow-sm">
      {/* Logo */}
      <div className="flex items-center justify-center w-10 h-10 bg-white/20 rounded-full">
        <Heart className="w-6 h-6 text-white" fill="currentColor" />
      </div>
      
      {/* Title */}
      <div className="flex-1">
        <h1 className="text-white font-medium">CareConnect</h1>
        <p className="text-white/80 text-sm">مساعدك الصحي الذكي</p>
      </div>
      
      {/* Status indicator */}
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
        <span className="text-white/80 text-sm">متصل</span>
      </div>
    </div>
  );
}