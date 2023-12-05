/* eslint-disable react/prop-types */
import { FaTimes } from "react-icons/fa";
import Button from "../Button/Button";


const Modal = ({ visible, handleOnClose, onClick, isPending }) => {
    if (!visible) return null
    return (
        <div className="fixed inset-0 bg-[#344054] bg-opacity-40  flex justify-center items-center backdrop-blur-sm z-50">
            <div className="bg-white w-[400px] h-[196px] rounded-md py-8 px-5">
                <div className="flex justify-between">
                    <h5 className="text-lg font-semibold">Delete product</h5>
                    <FaTimes className="text-lg cursor-pointer" onClick={handleOnClose} />
                </div>
                <p className="text-sm text-gray-400 mt-5">Are you sure you want to delete this product from your lists?</p>
                <div className="flex items-center gap-4 mt-8">
                    <Button
                        onClick={handleOnClose}
                        styles={"w-1/2 border border-gray-300"}
                        content={"Cancel"}
                    />
                    <Button
                        onClick={onClick}
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