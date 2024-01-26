import Button from "../Button/Button";
import { ModelProps } from "../../Model/types";

const Modal = ({
  open,
  handleOnClose,
  handleDelete,
  isPending,
}: ModelProps) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-[#344054] bg-opacity-40  flex justify-center items-center backdrop-blur-sm z-50">
      <div className="bg-white w-[400px] h-[196px] rounded-md py-8 px-5">
        <div className="flex justify-between">
          <h5 className="text-lg font-semibold">Delete product</h5>
        </div>
        <p className="text-sm text-gray-400 mt-3">
          Are you sure you want to delete this product from your lists?
        </p>
        <div className="flex items-center gap-4 mt-6">
          <Button
            handleClick={handleOnClose}
            styles={"w-1/2 border border-gray-300"}
            content={"Cancel"}
          />
          <Button
            handleClick={handleDelete}
            styles={`${isPending ? "bg-opacity-30 " : ""} 
                        bg-[#E50000] text-white w-1/2`}
            content={isPending ? "Deleting.." : "Delete"}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
