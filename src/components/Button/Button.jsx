// eslint-disable-next-line react/prop-types
const Button = ({ styles, content, onClick, type}) => {
  return (
    <button
      className={`${styles} px-3 py-1 md:px-5 md:py-2 text-sm md:text-md font-medium  rounded-md`}
      type={type}
      onClick={onClick}
    > 
      {content}
    </button>
  );
};

export default Button;
