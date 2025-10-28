import React from "react";

interface PrimaryButtonProps {
  className?: string;
  children: React.ReactNode;
}

const PrimaryButton = ({ children, className }: PrimaryButtonProps) => {
  return (
    <button
      className={`hover:bg-white  hover:border-transparent border-2 rounded-lg border-white text-white cursor-pointer hover:text-black py-2 px-4 ease-in-out duration-150 ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
