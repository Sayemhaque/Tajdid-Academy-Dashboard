import { ButtonProps } from "../../Model/types";

const Button = ({ styles, content, handleClick, type }: ButtonProps) => {
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
