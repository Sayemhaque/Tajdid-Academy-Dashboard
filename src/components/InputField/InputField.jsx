/* eslint-disable react/prop-types */

const InputField = ({ type, placeholder, name, register }) => {
  return (
    <input
      type={type}
      {...register(name, { required: true })}
      className="px-5 py-2 w-[512px] h-[44px] col-span-2 bg-[#FFFFFF] border border-[#D0D5DD] rounded-lg focus:outline-none"
      placeholder={placeholder}
      name={name}
    />
  );
};

export default InputField;
