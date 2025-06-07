import React from 'react';

export const Button = ({ children, className = '', variant = 'solid', ...props }) => {
  const baseStyles = {
    solid: 'bg-blue-600 hover:bg-blue-700 text-white',
    ghost: 'bg-transparent hover:bg-gray-800 text-white',
  };

  return (
    <button
      className={`px-4 py-2 rounded-lg font-medium transition ${baseStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};