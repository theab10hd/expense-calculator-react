import React from "react";

interface PrimaryButtonProps {
  className?: string;
  children: React.ReactNode;
}

const PrimaryButton = ({ children, className }: PrimaryButtonProps) => {
  return (
    <button
      className={`hover:bg-indigo-600  hover:border-transparent border-2 border-indigo-500 text-indigo-500 cursor-pointer hover:text-white py-2 px-4 ease-in-out duration-150 ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
