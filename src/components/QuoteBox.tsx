import React from 'react';
import { Quote, Copy, Check, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './Button';

interface QuoteBoxProps {
  quote: { text: string; author: string };
  onNext: () => void;
  onCopy: () => void;
  copied: boolean;
  color: string;
}

export function QuoteBox({ quote, onNext, onCopy, copied, color }: QuoteBoxProps) {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-2xl w-full mx-4 relative overflow-hidden">
      {/* Top color bar */}
      <div 
        className="absolute top-0 left-0 w-full h-2 transition-colors duration-700 ease-in-out" 
        style={{ backgroundColor: color }} 
      />
      
      <div className="relative z-10">
        <Quote 
          className="w-12 h-12 mb-6 opacity-20 transition-colors duration-700 ease-in-out" 
          style={{ color }} 
        />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={quote.text}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="min-h-[140px] flex flex-col justify-center"
          >
            <h2 
              className="text-2xl md:text-3xl font-medium text-gray-800 leading-snug mb-6 transition-colors duration-700 ease-in-out"
              style={{ color }}
            >
              "{quote.text}"
            </h2>
            <p className="text-right text-gray-500 font-medium text-lg">
              — {quote.author}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex items-center justify-between pt-6 border-t border-gray-100">
          <div className="flex gap-2">
            <Button 
              variant="icon" 
              onClick={onCopy} 
              title="Copy to clipboard" 
              aria-label="Copy to clipboard"
            >
              {copied ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <Copy className="w-5 h-5" />
              )}
            </Button>
          </div>
          
          <Button 
            onClick={onNext} 
            className="text-white hover:opacity-90 shadow-md transition-all duration-300 active:scale-95 px-6 py-2.5 rounded-full font-semibold flex items-center gap-2"
            style={{ backgroundColor: color }}
          >
            <span>Next Quote</span>
            <RefreshCw className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
