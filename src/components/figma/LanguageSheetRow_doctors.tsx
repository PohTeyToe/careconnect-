import { Check } from 'lucide-react';

interface Language {
  code: string;
  name: string;
  flag: string;
}

interface LanguageSheetRowProps {
  language: Language;
  isActive: boolean;
  onSelect: (code: string) => void;
}

export function LanguageSheetRow({ language, isActive, onSelect }: LanguageSheetRowProps) {
  return (
    <button
      onClick={() => onSelect(language.code)}
      className={`
        w-full flex items-center justify-between px-4 py-4 
        transition-colors border-b border-gray-100 last:border-b-0
        ${isActive 
          ? 'bg-[#005FAC]/5 text-[#005FAC]' 
          : 'bg-white text-[#666] hover:bg-gray-50'
        }
      `}
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl">{language.flag}</span>
        <div className="text-left">
          <div className="font-medium">
            {language.name}
          </div>
          <div className="text-sm opacity-70">
            {language.code}
          </div>
        </div>
      </div>
      
      {isActive && (
        <Check className="w-5 h-5 text-[#005FAC]" />
      )}
    </button>
  );
}