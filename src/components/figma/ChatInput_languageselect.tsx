import React from 'react';
import { Mic, Send } from 'lucide-react';

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: (message: string) => void;
}

export function ChatInput({ value, onChange, onSend }: ChatInputProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSend(value);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend(value);
    }
  };

  return (
    <div className="border-t border-gray-200 bg-[#f8f9fa] px-4 py-3 shrink-0">
      <form onSubmit={handleSubmit} className="flex items-end gap-3 w-full">
        {/* Microphone Button */}
        <button
          type="button"
          className="
            flex items-center justify-center w-10 h-10 shrink-0
            bg-[#005FAC] text-white rounded-full 
            hover:bg-[#004a8c] active:scale-95
            transition-all duration-150
            shadow-sm hover:shadow-md
          "
          aria-label="تسجيل صوتي"
        >
          <Mic className="w-5 h-5" />
        </button>
        
        {/* Text Input Container */}
        <div className="flex-1 relative min-w-0">
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="اكتب رسالتك هنا..."
            className="
              w-full px-4 py-3 bg-white border border-gray-200 rounded-[12px] 
              resize-none overflow-hidden min-h-[48px] max-h-32
              text-right arabic-text
              focus:outline-none focus:ring-2 focus:ring-[#005FAC] focus:border-transparent
              placeholder:text-gray-400
              transition-all duration-150
            "
            dir="rtl"
            rows={1}
            style={{
              height: 'auto',
              minHeight: '48px'
            }}
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = 'auto';
              target.style.height = Math.min(target.scrollHeight, 128) + 'px';
            }}
          />
        </div>
        
        {/* Send Button */}
        <button
          type="submit"
          disabled={!value.trim()}
          className="
            flex items-center justify-center w-10 h-10 shrink-0
            bg-[#005FAC] text-white rounded-full 
            hover:bg-[#004a8c] active:scale-95
            transition-all duration-150
            disabled:bg-gray-300 disabled:cursor-not-allowed
            disabled:hover:scale-100 disabled:shadow-none
            shadow-sm hover:shadow-md
          "
          aria-label="إرسال الرسالة"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}