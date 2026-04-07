import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'icon';
}

export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer";
  
  const variants = {
    primary: "bg-white text-gray-900 hover:bg-gray-100 shadow-sm px-4 py-2",
    secondary: "bg-transparent hover:bg-white/20 text-white px-4 py-2",
    icon: "bg-transparent hover:bg-black/5 text-gray-600 p-2 rounded-full transition-colors"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className || ''}`}
      {...props}
    />
  );
}
