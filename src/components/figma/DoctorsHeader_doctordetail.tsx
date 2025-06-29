import { Heart, ArrowLeft } from 'lucide-react';

export function DoctorsHeader() {
  return (
    <div className="bg-[#005FAC] text-white px-4 py-4 flex items-center gap-3 shadow-sm">
      {/* Back Button */}
      <button className="flex items-center justify-center w-8 h-8 hover:bg-white/10 rounded-full transition-colors">
        <ArrowLeft className="w-5 h-5 text-white" />
      </button>
      
      {/* Logo */}
      <div className="flex items-center justify-center w-10 h-10 bg-white/20 rounded-full">
        <Heart className="w-6 h-6 text-white" fill="currentColor" />
      </div>
      
      {/* Title */}
      <div className="flex-1">
        <h1 className="text-white">الأطباء</h1>
        <p className="text-white/80 text-sm">اختر طبيبك المناسب</p>
      </div>
      
      {/* Search/Menu Icons could go here */}
    </div>
  );
}