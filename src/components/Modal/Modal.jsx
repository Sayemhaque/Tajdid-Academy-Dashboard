/* eslint-disable react/prop-types */
import { FaTimes } from "react-icons/fa";
import Button from "../Button/Button";


const Modal = ({ visible, handleOnClose }) => {
    if (!visible) return null
    return (
        <div className="fixed inset-0 bg-[#344054] bg-opacity-40  flex justify-center items-center backdrop-blur-sm z-50">
            <div className="bg-white w-[400px] h-[196px] rounded-md py-8 px-5">
                <div className="flex justify-between">
                    <h5 className="text-lg font-semibold">Delete product</h5>
                    <FaTimes className="text-lg cursor-pointer" onClick={handleOnClose} />
                </div>
                <p className="text-sm text-gray-400 mt-5">Are you sure you want to delete “Opna Women's Short Sleeve Moisture” from your lists?</p>
                <div className="flex items-center gap-4 mt-8">
                    <Button
                        onClick={handleOnClose}
                        styles={"text-sm w-1/2 py-2 rounded-md border border-gray-300"}
                        content={"Cancel"}
                    />
                    <Button
                        styles={"bg-[#E50000] w-1/2  text-sm py-2 rounded-md text-white"}
                        content={"Delete"}
                    />
                </div>
            </div>
        </div>
    );
};

export default Modal;