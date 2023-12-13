import React from "react";

interface ButtonProps {
  styles?: string;
  content: string;
  handleClick?: () => void;
  type?: "submit" | "button" | "reset";
}
const Button: React.FC<ButtonProps> = ({
  styles,
  content,
  handleClick,
  type,
}) => {
  return (
    <button
      className={`${styles} px-3 py-1 md:px-5 md:py-2 text-sm md:text-base font-medium  rounded-md`}
      type={type}
      onClick={handleClick}
    >
      {content}
    </button>
  );
};

export default Button;
