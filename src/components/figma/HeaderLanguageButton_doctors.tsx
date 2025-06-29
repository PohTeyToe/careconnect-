import { Globe } from 'lucide-react';

interface Language {
  code: string;
  name: string;
  flag: string;
}

interface HeaderLanguageButtonProps {
  currentLanguage: Language;
  onClick: () => void;
}

export function HeaderLanguageButton({ currentLanguage, onClick }: HeaderLanguageButtonProps) {
  return (
    <button 
      onClick={onClick}
      className="
        flex items-center gap-2 px-3 py-2 
        bg-white/10 hover:bg-white/20 
        rounded-full transition-colors
      "
      aria-label="Change language"
    >
      <Globe className="w-4 h-4 text-white" />
      <span className="text-white text-sm font-medium">
        {currentLanguage.code}
      </span>
    </button>
  );
}