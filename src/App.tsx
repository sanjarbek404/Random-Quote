import React, { useState, useEffect, useCallback } from 'react';
import { QuoteBox } from './components/QuoteBox';
import { QUOTES, COLORS } from './constants';

export default function App() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  // Initialize with random quote and color
  useEffect(() => {
    setQuoteIndex(Math.floor(Math.random() * QUOTES.length));
    setColorIndex(Math.floor(Math.random() * COLORS.length));
  }, []);

  const handleNextQuote = useCallback(() => {
    let nextQuoteIndex;
    do {
      nextQuoteIndex = Math.floor(Math.random() * QUOTES.length);
    } while (nextQuoteIndex === quoteIndex);
    
    let nextColorIndex;
    do {
      nextColorIndex = Math.floor(Math.random() * COLORS.length);
    } while (nextColorIndex === colorIndex);

    setQuoteIndex(nextQuoteIndex);
    setColorIndex(nextColorIndex);
    setCopied(false);
  }, [quoteIndex, colorIndex]);

  const handleCopy = useCallback(() => {
    const quote = QUOTES[quoteIndex];
    navigator.clipboard.writeText(`"${quote.text}" — ${quote.author}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [quoteIndex]);

  const currentColor = COLORS[colorIndex];
  const currentQuote = QUOTES[quoteIndex];

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 transition-colors duration-700 ease-in-out font-sans"
      style={{ backgroundColor: currentColor }}
    >
      <QuoteBox 
        quote={currentQuote} 
        color={currentColor}
        onNext={handleNextQuote}
        onCopy={handleCopy}
        copied={copied}
      />
    </div>
  );
}
