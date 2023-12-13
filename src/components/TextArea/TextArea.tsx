import { Register } from "../../Model/types";

const TextArea = ({ register }: Register) => {
  return (
    <textarea
      {...register("description", { required: true })}
      //@ts-ignore
      cols="50"
      //@ts-ignore
      rows="5"
      className="w-[512px] border border-[#D0D5DD] rounded-md focus:outline-none p-2"
      placeholder=" write something about your product.."
    ></textarea>
  );
};

export default TextArea;
